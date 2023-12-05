const InvalidTypeSymbol = Symbol(`Invalid type`);
export type invalid<ErrorMessage> =
  | ((
      // ErrorMessage doesn't need to be used here, except that using it allows
      // TypeScript to print the passed message instead of just "ErrorMessage"
      // in certain cases.
      invalidType: ErrorMessage & typeof InvalidTypeSymbol,
      ..._: typeof InvalidTypeSymbol[]
    ) => typeof InvalidTypeSymbol)
  | null
  | undefined;
