export type MeterReadingSource = "estimated" | "customer";

export interface MeterReading {
  value: number;
  source: MeterReadingSource;
}

export interface InitialState {
  error: boolean;
  readings: MeterReading[];
}
