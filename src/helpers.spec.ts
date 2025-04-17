import { calculatePredictedUsage, validateMeterReadingValue, addLeadingZeros } from './helpers';
import { MeterReading } from "./types";

describe('validateMeterReadingValue', () => {
    it('should return the validated number 1 for input 00001', () => {
        const result = validateMeterReadingValue('00001');
        expect(result).toEqual(1);
    });

    it('should return the validated number 10 for input 00010', () => {
        const result = validateMeterReadingValue('00010', 9);
        expect(result).toEqual(10);
    });

    it('should return the validated number 100 for input 00100', () => {
        const result = validateMeterReadingValue('00100');
        expect(result).toEqual(100);
    });

    it('should return the validated number 1000 for input 01000', () => {
        const result = validateMeterReadingValue('01000', 999);
        expect(result).toEqual(1000);
    });

    it('should return the validated number 10000 for input 10000', () => {
        const result = validateMeterReadingValue('10000');
        expect(result).toEqual(10000);
    });

    it('should return the validated number for input 99998', () => {
        const result = validateMeterReadingValue('99998');
        expect(result).toEqual(99998);
    });

    it('should not return the validated number for input 1', () => {
        const result = validateMeterReadingValue('1');
        expect(result).toEqual(0);
    });

    it('should not return the validated number for input 00000', () => {
        const result = validateMeterReadingValue('00000');
        expect(result).toEqual(0);
    });

    it('should not return the validated number for input -0001', () => {
        const result = validateMeterReadingValue('-0001');
        expect(result).toEqual(0);
    });

    it('should not return the validated number for input abcde', () => {
        const result = validateMeterReadingValue('abcde');
        expect(result).toEqual(0);
    });

    it('should not return the validated number if it is lower than the last reading', () => {
        const result = validateMeterReadingValue('00001', 2);
        expect(result).toEqual(0);
    });
});

describe('calculatePredictedUsage', () => {
    it('should calculate predicted usage', () => {
        const readings = [{ value: 100, source: 'customer' }, {value: 250, source: 'customer' } , {value: 350, source: 'customer' } ,  {value: 400, source: 'customer' }] as MeterReading[]; 
        const result = calculatePredictedUsage(readings);
        expect(result).toEqual(500);
    });

    it('should return null if meter reading array is less than 4', () => {
        const readings = [{ value: 100, source: 'customer' }, {value: 250, source: 'customer' } , {value: 350, source: 'customer' } ] as MeterReading[]; 
        const result = calculatePredictedUsage(readings);
        expect(result).toEqual(null);
    });
});

describe('addLeadingZeros', () => {
    it('should add leading zeros for value 1', () => {
        const result = addLeadingZeros(1);
        expect(result).toEqual('00001');
    });
    it('should add leading zeros for value 10', () => {
        const result = addLeadingZeros(10);
        expect(result).toEqual('00010');
    });

    it('should add leading zeros for value 12', () => {
        const result = addLeadingZeros(12);
        expect(result).toEqual('00012');
    });

    it('should add leading zeros for value 123', () => {
        const result = addLeadingZeros(123);
        expect(result).toEqual('00123');
    });

    it('should add leading zeros for value 1234', () => {
        const result = addLeadingZeros(1234);
        expect(result).toEqual('01234');
    });

    it('should not add leading zeros for value 12345', () => {
        const result = addLeadingZeros(12345);
        expect(result).toEqual('12345');
    });
});