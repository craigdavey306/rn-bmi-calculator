/**
 * Converts a string into a slug.
 *  Example: "once upon a time" becomes "once-upon-a-time"
 * @param originalString String that will be transformed into a slug
 * @param replaceValue Value to be replaced
 * @param delimiter Value to use when as the slug delimiter. Default vaule is '-'.
 * @returns Returns a string representing a slug
 */
export function slugifyString(
  originalString: string,
  replaceValue: string,
  delimiter: string = '-',
): string {
  return originalString.toLowerCase().replaceAll(replaceValue, delimiter);
}
