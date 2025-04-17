import { useActionState } from "react";
import { addLeadingZeros, calculatePredictedUsage, validateMeterReadingValue } from "./helpers";
import { InitialState, MeterReading } from "./types";

import "./styles.css";

export default function App() {
  const initialState: InitialState = {
    error: false,
    readings: [],
  };

  const [state, submitAction] = useActionState<InitialState, FormData>(
    (previousState: InitialState, formData: FormData) => {
      const meterInputValueString = formData.get('meter-input');

      const validatedNumber = validateMeterReadingValue(
        meterInputValueString,
        previousState.readings[previousState.readings.length - 1]?.value
      );
      if (validatedNumber === 0) {
        return {
          ...previousState,
          error: true,
        };
      }

      return {
        error: false,
        readings: [
          ...previousState.readings,
          {
            value: validatedNumber,
            source: 'customer',
          },
        ],
      };
    },
    initialState,
  );

  const { readings, error } = state;

  const readingListItems = readings
    .map((reading: MeterReading) => (
      <li data-testid={`list-${reading.value}`} key={reading.value}>
        {addLeadingZeros(reading.value)} - {reading.source}
      </li>
    ))
    .reverse();

  const customersPredictedUsage = calculatePredictedUsage(readings);

  return (
    <div className="App">
      <h1>Meter Readings</h1>
      <p>Enter a new meter reading:</p>
      <form action={submitAction}>
        <input
          data-testid="meter-input"
          name="meter-input"
          className={`input${error ? ' error' : ''}`}
        />
        <button data-testid="submit-button" type="submit">Submit</button>
      </form>
      {error && (
        <p data-testid="error-message" className="error">
          This is an invalid meter reading.
        </p>
      )}
      <h2>Predicted usage next month</h2>
      {customersPredictedUsage ? (
        <p data-testid="predicted-usage">{addLeadingZeros(customersPredictedUsage)}</p>
      ) : (
        <p data-testid="predicted-soon">Coming soon</p>
      )}
      <h2>Previous meter readings</h2>
      <ul data-testid="listing">{readingListItems}</ul>
    </div>
  );
}
