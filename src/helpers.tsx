import { MeterReading } from "./types";

export function calculatePredictedUsage(readings: MeterReading[]) {
  if (Array.isArray(readings) && readings.length > 3) {
    const newestFourReadings = readings.slice(-4);

    const calc1 = newestFourReadings[3].value - newestFourReadings[2].value;
    const calc2 = newestFourReadings[2].value - newestFourReadings[1].value;
    const calc3 = newestFourReadings[1].value - newestFourReadings[0].value;
    const calc4 = (calc3 + calc2 + calc1) / 3;

    // to sort out decimals
    return Math.ceil(newestFourReadings[3].value + calc4);
  }

  return null;
}

export function validateMeterReadingValue(meterReadingValue: FormDataEntryValue | null, lastMeterReading = 0) {
  if (typeof meterReadingValue !== 'string' || meterReadingValue.length !== 5) {
    return 0;
  }

  const realNumber = Number(meterReadingValue);

  if (typeof realNumber === 'number' 
    && realNumber > 0o0 
    && realNumber < 99999
    && realNumber > lastMeterReading
  ) {
    return realNumber;
  }

  return 0;
}

export function addLeadingZeros(value: number) {
  const leadingZeroLength = 5 - String(value).length;

  return `${'0'.repeat(leadingZeroLength)}${value}` ;
}
