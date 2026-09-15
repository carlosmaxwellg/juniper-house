import test from "node:test";
import assert from "node:assert/strict";
import {
  bookingReducer as reduce,
  initialState,
  emptyDetails,
  validateDetails,
  timesFor,
  type BookingState,
} from "../src/lib/booking/state.ts";
const details = {
  ...emptyDetails,
  firstName: "Taylor",
  lastName: "Morgan",
  email: "taylor@example.com",
  mobile: "(512) 555-0123",
  demoAcknowledged: true,
};
function ready(): BookingState {
  return {
    step: "confirm",
    provider: "first-available",
    date: "2026-10-06",
    time: "09:00",
    details: { ...details },
  };
}
test("invalid input cannot advance or complete", () => {
  const state = { ...initialState, step: "details" as const };
  assert.deepEqual(reduce(state, { type: "next" }), state);
  assert.equal(
    reduce({ ...ready(), details: emptyDetails }, { type: "complete" }).step,
    "confirm",
  );
  assert.equal(
    reduce({ ...ready(), time: "03:00" }, { type: "complete" }).step,
    "confirm",
  );
});
test("completion retains only the mock selection and clears all entered details", () => {
  const result = reduce(ready(), { type: "complete" });
  assert.equal(result.step, "complete");
  assert.deepEqual(result.details, emptyDetails);
  assert.equal(result.time, "09:00");
  assert.deepEqual(reduce(result, { type: "back" }), result);
});
test("changing provider or date invalidates a previously selected time", () => {
  const state = ready();
  const changed = reduce(state, { type: "provider", value: "rowan-ellis" });
  assert.equal(changed.time, "");
  assert.equal(changed.date, "");
  assert.equal(reduce(state, { type: "date", value: "2026-10-09" }).time, "");
  assert.ok(!timesFor("2026-10-06", "rowan-ellis").includes("09:00"));
  assert.equal(timesFor("2026-10-08", "first-available").length, 0);
});
test("validation preserves valid entries and identifies exact errors", () => {
  assert.deepEqual(validateDetails(details), {});
  assert.ok(
    validateDetails({ ...details, email: "bad@", mobile: "123" }).email,
  );
  assert.ok(
    validateDetails({ ...details, email: "bad@", mobile: "123" }).mobile,
  );
  assert.ok(
    validateDetails({ ...details, demoAcknowledged: false }).demoAcknowledged,
  );
  assert.ok(
    validateDetails({ ...details, accessRequest: "a".repeat(301) })
      .accessRequest,
  );
  assert.ok(
    validateDetails({ ...details, accessRequest: "My medication is 10 mg" })
      .accessRequest,
  );
  assert.deepEqual(
    validateDetails({
      ...details,
      accessRequest: "Please provide written instructions.",
    }),
    {},
  );
});
test("back preserves valid details, skips forward are rejected, reset clears everything", () => {
  const state = ready();
  assert.deepEqual(reduce(state, { type: "back" }).details, details);
  assert.equal(
    reduce(initialState, { type: "edit", step: "confirm" }).step,
    "appointment",
  );
  assert.deepEqual(reduce(state, { type: "reset" }), initialState);
});
