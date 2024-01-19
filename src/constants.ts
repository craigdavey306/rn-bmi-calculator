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

export const FOOT_RANGE: MeasurementRange = { maximum: 9, minimum: 0 };
export const INCH_RANGE: MeasurementRange = { maximum: 12, minimum: 0 };
export const WEIGHT_RANGE: MeasurementRange = { maximum: Infinity, minimum: 0 };
