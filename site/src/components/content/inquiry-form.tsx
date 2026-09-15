"use client";
import { useEffect, useRef, useState } from "react";
import { hasSensitiveDetails } from "@/lib/booking/state";
const empty = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};
export function InquiryForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [complete, setComplete] = useState(false);
  const summary = useRef<HTMLDivElement>(null);
  const result = useRef<HTMLHeadingElement>(null);
  const introduction = useRef<HTMLParagraphElement>(null);
  const previouslyComplete = useRef(false);
  useEffect(() => {
    if (Object.keys(errors).length) summary.current?.focus();
  }, [errors]);
  useEffect(() => {
    if (complete) result.current?.focus();
    else if (previouslyComplete.current) introduction.current?.focus();
    previouslyComplete.current = complete;
  }, [complete]);
  function finish() {
    const e: Record<string, string> = {};
    if (!values.firstName.trim())
      e["inquiry-firstName"] = "Enter a first name.";
    if (!values.lastName.trim()) e["inquiry-lastName"] = "Enter a last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e["inquiry-email"] = "Enter an email in the format name@example.com.";
    if (!values.topic) e["inquiry-topic"] = "Choose a topic.";
    if (!values.message.trim())
      e["inquiry-message"] = "Enter a general demonstration message.";
    else if (hasSensitiveDetails(values.message))
      e["inquiry-message"] =
        "Keep medical details out of this demo. Remove health information before continuing.";
    setErrors(e);
    if (!Object.keys(e).length) {
      setValues({ ...empty });
      setComplete(true);
    }
  }
  if (complete)
    return (
      <div className="booking-panel">
        <h3 ref={result} tabIndex={-1}>
          Demonstration complete
        </h3>
        <p className="my-6" role="status">
          Your message was not sent or stored. This screen shows how a real
          clinic could confirm a general inquiry.
        </p>
        <button
          className="button"
          type="button"
          onClick={() => {
            setComplete(false);
          }}
        >
          Return to Visit
        </button>
      </div>
    );
  return (
    <div>
      <p className="mb-6" ref={introduction} tabIndex={-1}>
        Use this demonstration form for non-medical questions about the concept
        experience. Use test information only. Do not include diagnoses,
        medication, photographs, or other sensitive health information. No
        message will be sent or stored.
      </p>
      {Object.keys(errors).length > 0 && (
        <div className="error-summary" ref={summary} tabIndex={-1} role="alert">
          <p className="font-semibold">Review the highlighted fields</p>
          <ul>
            {Object.entries(errors).map(([id, text]) => (
              <li key={id}>
                <a href={`#${id}`}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="form-grid">
        {(
          [
            ["firstName", "First name", "text"],
            ["lastName", "Last name", "text"],
            ["email", "Email", "email"],
            ["phone", "Phone — optional", "tel"],
          ] as const
        ).map(([key, label, type]) => (
          <div key={key}>
            <label className="field" htmlFor={`inquiry-${key}`}>
              {label}
              <input
                id={`inquiry-${key}`}
                autoComplete="off"
                type={type}
                maxLength={150}
                value={values[key]}
                onChange={(e) =>
                  setValues({ ...values, [key]: e.target.value })
                }
                aria-required={key !== "phone"}
                aria-invalid={!!errors[`inquiry-${key}`]}
                aria-describedby={
                  errors[`inquiry-${key}`] ? `inquiry-${key}-error` : undefined
                }
              />
            </label>
            {errors[`inquiry-${key}`] && (
              <p className="field-error" id={`inquiry-${key}-error`}>
                {errors[`inquiry-${key}`]}
              </p>
            )}
          </div>
        ))}
      </div>
      <label className="field mt-6" htmlFor="inquiry-topic">
        Topic
        <select
          id="inquiry-topic"
          value={values.topic}
          aria-required="true"
          aria-invalid={!!errors["inquiry-topic"]}
          aria-describedby={
            errors["inquiry-topic"] ? "inquiry-topic-error" : undefined
          }
          onChange={(e) => setValues({ ...values, topic: e.target.value })}
        >
          <option value="">Choose a topic</option>
          {[
            "Consultation logistics",
            "Accessibility or communication",
            "General pricing",
            "Portfolio project",
          ].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      {errors["inquiry-topic"] && (
        <p className="field-error" id="inquiry-topic-error">
          {errors["inquiry-topic"]}
        </p>
      )}
      <label className="field mt-6" htmlFor="inquiry-message">
        Message
        <textarea
          id="inquiry-message"
          rows={4}
          autoComplete="off"
          maxLength={500}
          value={values.message}
          aria-required="true"
          aria-invalid={!!errors["inquiry-message"]}
          aria-describedby={`inquiry-help${errors["inquiry-message"] ? " inquiry-message-error" : ""}`}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
      </label>
      <p id="inquiry-help" className="text-sm mt-2">
        Keep this general. Do not include medical or sensitive personal
        information. Maximum 500 characters.
      </p>
      {errors["inquiry-message"] && (
        <p className="field-error" id="inquiry-message-error">
          {errors["inquiry-message"]}
        </p>
      )}
      <p className="text-sm my-6">
        This is a portfolio demonstration. Completing the form will not contact
        a clinic. Entries clear when the demonstration completes, or when you
        leave or refresh.
      </p>
      <button className="button" type="button" onClick={finish}>
        Send simulated message
      </button>
      <noscript>
        <p>This demonstration requires JavaScript; no message can be sent.</p>
      </noscript>
    </div>
  );
}
