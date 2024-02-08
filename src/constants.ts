/**
 * This would never be stored this way for a real application. Using constants here for
 * this test application.
 */

export const EMAIL = 'test@email.com';
export const PASSWORD = 'secret1234';

// Values below are for determining valid ranges for height and weight.

type MeasurementRange = {
  maximum: number;
  minimum: number;
};

const MAX_FEET = 9;
const MAX_INCHES = 12;

export const FOOT_RANGE: MeasurementRange = { maximum: MAX_FEET, minimum: 0 };
export const INCH_RANGE: MeasurementRange = { maximum: MAX_INCHES, minimum: 0 };
export const WEIGHT_RANGE: MeasurementRange = { maximum: Infinity, minimum: 0 };
export const ENGLISH_BMI_MULTIPLIER = 703;
export const METRIC_BMI_MULTIPLIER = 10_000;
