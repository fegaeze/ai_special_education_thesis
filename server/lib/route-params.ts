/**
 * Express 5 types `req.params` values as `string | string[]`.
 * Use this before Number.parseInt / DB queries expecting a single string.
 */
export function paramToString(
  value: string | string[] | undefined,
): string {
  if (value == null) return "";
  return Array.isArray(value) ? (value[0] ?? "") : value;
}
