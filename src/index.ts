const InvalidTypeSymbol = Symbol(`Invalid type`);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type invalid<ErrorMessage> =
  | ((
      invalidType: typeof InvalidTypeSymbol,
      ..._: typeof InvalidTypeSymbol[]
    ) => typeof InvalidTypeSymbol)
  | null
  | undefined;
