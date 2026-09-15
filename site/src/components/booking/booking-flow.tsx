"use client";
import Link from "next/link";
import { useEffect, useReducer, useRef, useState } from "react";
import {
  availability,
  bookingReducer,
  dateLabel,
  formatTime,
  initialState,
  providerNames,
  steps,
  timesFor,
  validateStep,
  type Details,
  type Errors,
  type Step,
} from "@/lib/booking/state";

const headings: Record<Step, string> = {
  appointment: "Confirm your appointment type",
  provider: "Choose a provider preference",
  time: "Choose a demonstration time",
  details: "Add demonstration details",
  confirm: "Review your simulated booking",
  complete: "Your mock appointment is confirmed—on this screen only.",
};
const progress = ["Appointment", "Provider", "Time", "Details", "Confirm"];
const nextLabels = [
  "Continue to provider",
  "Continue to time",
  "Continue to details",
  "Review booking",
];

export function BookingFlow() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [leaving, setLeaving] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const errorSummary = useRef<HTMLDivElement>(null);
  const exitHeading = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);
  const previouslyLeaving = useRef(false);
  useEffect(() => {
    if (started.current) heading.current?.focus();
    started.current = true;
  }, [state.step]);
  useEffect(() => {
    if (Object.keys(errors).length) errorSummary.current?.focus();
  }, [errors]);
  useEffect(() => {
    if (leaving) exitHeading.current?.focus();
    else if (previouslyLeaving.current) heading.current?.focus();
    previouslyLeaving.current = leaving;
  }, [leaving]);
  const current = steps.indexOf(state.step as (typeof steps)[number]);
  function next() {
    const nextErrors = validateStep(state);
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length)
      dispatch({ type: state.step === "confirm" ? "complete" : "next" });
  }
  function back() {
    setErrors({});
    dispatch({ type: "back" });
  }
  function update(value: Partial<Details>) {
    dispatch({ type: "details", value });
  }
  function fieldError(id: string) {
    return errors[id] ? (
      <p className="field-error" id={`${id}-error`}>
        {errors[id]}
      </p>
    ) : null;
  }
  const selectedTimes = timesFor(state.date, state.provider);
  return (
    <div className="booking-layout">
      <div className="booking-main">
        {state.step !== "complete" && (
          <ol className="booking-progress" aria-label="Booking progress">
            {steps.map((step, i) => (
              <li
                key={step}
                aria-current={state.step === step ? "step" : undefined}
              >
                <span>{i + 1}</span>
                {progress[i]}
                {i < current && <span className="sr-only"> completed</span>}
              </li>
            ))}
          </ol>
        )}
        <p className="sr-only" role="status" aria-live="polite">
          {state.step === "complete"
            ? "Demonstration complete"
            : `Step ${current + 1} of 5: ${progress[current]}`}
        </p>
        {leaving ? (
          <section className="boundary">
            <h2 tabIndex={-1} ref={exitHeading}>
              Leave the booking demonstration?
            </h2>
            <p className="my-6">
              Your selections will be cleared when you leave this session.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="button"
                onClick={() => {
                  setLeaving(false);
                  heading.current?.focus();
                }}
              >
                Stay in booking
              </button>
              <Link
                className="button button-secondary"
                href="/consultation"
                onClick={() => dispatch({ type: "reset" })}
              >
                Leave and clear selections
              </Link>
            </div>
          </section>
        ) : (
          <>
            <h2 tabIndex={-1} ref={heading} className="booking-step-heading">
              {headings[state.step]}
            </h2>
            {!!Object.keys(errors).length && (
              <div
                className="error-summary"
                tabIndex={-1}
                ref={errorSummary}
                role="alert"
              >
                <p className="font-semibold">
                  Review these details to continue
                </p>
                <ul>
                  {Object.entries(errors).map(([id, text]) => (
                    <li key={id}>
                      <a href={`#${id}`}>{text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {state.step === "appointment" && (
              <div className="booking-panel">
                <p className="eyebrow">Selected</p>
                <h3>Skin &amp; Aesthetic Planning Consultation</h3>
                <p className="font-semibold my-5">45 minutes · $150</p>
                <p>
                  Review your goals, relevant history, skincare, timing, and
                  budget with the lead aesthetic provider. Receive a digital Now
                  / Next / Later plan with priorities, likely cost, recovery,
                  and rationale.
                </p>
                <p className="mt-5">
                  $100 may be applied to a first treatment of $350+ booked
                  within 60 days. Treatment is not required and is not performed
                  during the consultation.
                </p>
              </div>
            )}
            {state.step === "provider" && (
              <>
                <p className="mb-6">
                  You will receive the same Planning Consultation structure with
                  either option.
                </p>
                <fieldset
                  id="provider"
                  tabIndex={-1}
                  aria-describedby={
                    errors.provider ? "provider-error" : undefined
                  }
                >
                  <legend className="sr-only">Provider preference</legend>
                  {(["first-available", "rowan-ellis"] as const).map(
                    (provider) => (
                      <label className="choice" key={provider}>
                        <input
                          type="radio"
                          checked={state.provider === provider}
                          onChange={() =>
                            dispatch({ type: "provider", value: provider })
                          }
                          name="provider-choice"
                          value={provider}
                        />
                        <span>
                          <strong>{providerNames[provider]}</strong>
                          <span className="block text-sm mt-2">
                            {provider === "first-available"
                              ? "Recommended · See the widest selection of demonstration times with an appropriately qualified planning provider."
                              : "Lead aesthetic provider · Fictional profile. Planning consultations and selected medical-aesthetic services."}
                          </span>
                        </span>
                      </label>
                    ),
                  )}
                </fieldset>
                {fieldError("provider")}
              </>
            )}
            {state.step === "time" && (
              <>
                <p className="mb-6">
                  Austin time · Central Time
                  <br />
                  <span className="text-sm">
                    October 2026 · Fixed sample schedule, not live availability.
                  </span>
                </p>
                <label className="field" htmlFor="date">
                  Select a date
                  <select
                    id="date"
                    value={state.date}
                    onChange={(e) =>
                      dispatch({ type: "date", value: e.target.value })
                    }
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? "date-error" : undefined}
                  >
                    <option value="">Choose a date</option>
                    {availability.map((day) => (
                      <option key={day.date} value={day.date}>
                        {day.label}, 2026
                      </option>
                    ))}
                  </select>
                </label>
                {fieldError("date")}
                {state.date && (
                  <fieldset
                    id="time"
                    tabIndex={-1}
                    className="mt-8"
                    aria-describedby={errors.time ? "time-error" : undefined}
                  >
                    <legend className="font-semibold mb-4">
                      Available demonstration times for {dateLabel(state.date)}
                    </legend>
                    {selectedTimes.length ? (
                      <div className="time-grid">
                        {selectedTimes.map((time) => (
                          <label className="choice" key={time}>
                            <input
                              type="radio"
                              name="sample-time"
                              checked={state.time === time}
                              onChange={() =>
                                dispatch({ type: "time", value: time })
                              }
                            />
                            <span>{formatTime(time)}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div role="status" className="booking-panel">
                        <h3>No times on this date</h3>
                        <p className="mt-3">
                          Choose another date to see demonstration availability.
                        </p>
                      </div>
                    )}
                  </fieldset>
                )}
                {fieldError("time")}
              </>
            )}
            {state.step === "details" && (
              <>
                <p className="boundary mb-6">
                  Use test information only. Do not enter medical details,
                  diagnoses, medication, photographs, or other sensitive
                  information.
                </p>
                <button
                  type="button"
                  className="text-link mb-5"
                  onClick={() =>
                    update({
                      firstName: "Taylor",
                      lastName: "Morgan",
                      email: "taylor@example.com",
                      mobile: "(512) 555-0123",
                    })
                  }
                >
                  Use sample details
                </button>
                <div className="form-grid">
                  {(
                    [
                      ["firstName", "First name", "Taylor", "text"],
                      ["lastName", "Last name", "Morgan", "text"],
                      ["email", "Email", "taylor@example.com", "email"],
                      ["mobile", "Mobile number", "(512) 555-0123", "tel"],
                    ] as const
                  ).map(([id, label, placeholder, type]) => (
                    <div key={id}>
                      <label className="field" htmlFor={id}>
                        {label}
                        <input
                          id={id}
                          type={type}
                          autoComplete="off"
                          maxLength={id === "email" ? 150 : 80}
                          placeholder={placeholder}
                          value={state.details[id]}
                          onChange={(e) => update({ [id]: e.target.value })}
                          aria-required="true"
                          aria-invalid={!!errors[id]}
                          aria-describedby={
                            errors[id] ? `${id}-error` : undefined
                          }
                        />
                      </label>
                      {fieldError(id)}
                    </div>
                  ))}
                </div>
                <label className="field mt-6" htmlFor="concern">
                  Broad concern — optional
                  <select
                    id="concern"
                    value={state.details.concern}
                    onChange={(e) => update({ concern: e.target.value })}
                  >
                    <option value="">Choose a broad concern</option>
                    {[
                      "Uneven tone or sun damage",
                      "Redness or visible vessels",
                      "Texture or acne marks",
                      "Fine lines or facial balance",
                      "General skin planning",
                      "Prefer not to say",
                    ].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="field mt-6" htmlFor="accessRequest">
                  Accessibility or communication request — optional
                  <textarea
                    id="accessRequest"
                    autoComplete="off"
                    value={state.details.accessRequest}
                    onChange={(e) => update({ accessRequest: e.target.value })}
                    rows={3}
                    aria-invalid={!!errors.accessRequest}
                    aria-describedby={`access-help${errors.accessRequest ? " accessRequest-error" : ""}`}
                  />
                </label>
                <p className="text-sm mt-2" id="access-help">
                  Share only what would help with access or communication. Do
                  not include medical history. Maximum 300 characters.
                </p>
                {fieldError("accessRequest")}
                <label className="choice mt-6">
                  <input
                    type="checkbox"
                    checked={state.details.smsDemoOptIn}
                    onChange={(e) => update({ smsDemoOptIn: e.target.checked })}
                  />
                  <span>
                    Send demonstration SMS reminders.
                    <span className="block text-sm mt-2">
                      No text will be sent. This control demonstrates explicit
                      opt-in.
                    </span>
                  </span>
                </label>
                <label className="choice">
                  <input
                    id="demoAcknowledged"
                    type="checkbox"
                    checked={state.details.demoAcknowledged}
                    onChange={(e) =>
                      update({ demoAcknowledged: e.target.checked })
                    }
                    aria-required="true"
                    aria-invalid={!!errors.demoAcknowledged}
                    aria-describedby={
                      errors.demoAcknowledged
                        ? "demoAcknowledged-error"
                        : undefined
                    }
                  />
                  <span>
                    I understand this is a fictional portfolio demonstration. No
                    appointment will be created, no payment will be taken, and I
                    will use test information only.
                  </span>
                </label>
                {fieldError("demoAcknowledged")}
              </>
            )}
            {state.step === "confirm" && (
              <>
                <dl className="review-details">
                  {Object.entries({
                    Appointment: "Skin & Aesthetic Planning Consultation",
                    "Provider preference": providerNames[state.provider!],
                    "Date and time": `${dateLabel(state.date)}, 2026 · ${formatTime(state.time)}`,
                    Timezone: "Austin · Central Time",
                    Duration: "45 minutes",
                    "Consultation fee": "$150 · No payment in this demo",
                    "Treatment credit":
                      "$100 toward a first treatment of $350+ booked within 60 days",
                    Name: `${state.details.firstName} ${state.details.lastName}`,
                    Email: state.details.email,
                    Mobile: state.details.mobile,
                    "Broad concern": state.details.concern || "Not specified",
                    "Accessibility request":
                      state.details.accessRequest || "Not specified",
                    "SMS reminder preference": state.details.smsDemoOptIn
                      ? "Opted in · No text will be sent"
                      : "Not opted in",
                  }).map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-x-6 my-6">
                  {(
                    ["appointment", "provider", "time", "details"] as const
                  ).map((step) => (
                    <button
                      className="text-link"
                      type="button"
                      key={step}
                      onClick={() => {
                        setErrors({});
                        dispatch({ type: "edit", step });
                      }}
                    >
                      Change {step}
                    </button>
                  ))}
                </div>
                <h3 className="mb-3">Cancellation-policy demonstration</h3>
                <p>
                  A real clinic would require at least 24 hours’ notice to
                  reschedule or cancel without forfeiting the consultation fee.
                  Complete terms would appear before payment. No fee applies to
                  this demonstration.
                </p>
                <p className="boundary mt-6">
                  Selecting the button below completes only the interface
                  demonstration. It will not reserve a time, charge $150, send a
                  confirmation, or contact a clinic.
                </p>
              </>
            )}
            {state.step === "complete" && (
              <>
                <p className="eyebrow">Demonstration complete</p>
                <p>
                  You have completed the Juniper House booking experience. No
                  appointment was created, no payment was taken, and no clinic
                  will contact you.
                </p>
                <div className="booking-panel my-6">
                  <p>
                    {dateLabel(state.date)}, 2026 · {formatTime(state.time)}
                  </p>
                  <p>
                    45-minute Planning Consultation ·{" "}
                    {providerNames[state.provider!]}
                  </p>
                  <p className="text-sm mt-4">
                    Your entered details have been cleared.
                  </p>
                </div>
                <h3 className="mb-4">What a real confirmation would include</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {[
                    "Appointment and location details",
                    "Secure intake instructions",
                    "Preparation guidance",
                    "Receipt and cancellation terms",
                    "Rescheduling contact",
                    "Calendar link",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-5 mt-8">
                  <Link className="button" href="/">
                    Return to Juniper House
                  </Link>
                  <Link className="text-link" href="/portfolio-concept">
                    Read the portfolio concept disclosure
                  </Link>
                </div>
              </>
            )}
            {state.step !== "complete" && (
              <div className="booking-controls">
                {current > 0 && (
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={back}
                  >
                    Back
                  </button>
                )}
                <button className="button" type="button" onClick={next}>
                  {state.step === "confirm"
                    ? "Complete simulated booking"
                    : nextLabels[current]}
                </button>
              </div>
            )}
          </>
        )}
        {state.step !== "complete" && !leaving && (
          <button
            type="button"
            className="text-link mt-6"
            onClick={() => setLeaving(true)}
          >
            Exit booking
          </button>
        )}
      </div>
      <aside className="booking-summary">
        <p className="eyebrow">Your appointment</p>
        <h3>Planning Consultation</h3>
        <p className="my-4">
          45 minutes · $150
          <br />
          West Austin concept location
        </p>
        <p>
          $100 treatment credit toward a first treatment of $350+ booked within
          60 days.
        </p>
        {state.provider && (
          <p className="mt-5">{providerNames[state.provider]}</p>
        )}
        {state.date && (
          <p className="mt-3">
            {dateLabel(state.date)}, 2026
            {state.time && ` · ${formatTime(state.time)}`}
          </p>
        )}
        <p className="text-sm mt-6">
          Your progress stays in memory and clears when you refresh or leave.
          Personally entered details clear when the demonstration completes.
        </p>
        <Link className="text-link mt-3" href="/privacy">
          Privacy in this demo
        </Link>
      </aside>
    </div>
  );
}
