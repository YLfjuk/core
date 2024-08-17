// biome-ignore lint/complexity/noBannedTypes: <explanation>
export const isDefined = (value: unknown): value is {} => value != null;
