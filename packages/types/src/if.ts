/**
 * Wraps a conditional type.
 *
 * @since 0.0.14
 */
export type If<Condition extends boolean, Then, Else = never> = Condition extends true
	? Then
	: Else;
