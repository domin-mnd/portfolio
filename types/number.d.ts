/** A type for enumerating an integer */
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/** A type for finding a range of integers */
type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>, // A range starting point
  Enumerate<F> // A range ending point, excluding the starting point
>;

/** A safe type for a hex color */
type HEX = `#${string}`;
