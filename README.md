# invalid-type

Inspired by https://github.com/microsoft/TypeScript/issues/28982 and https://github.com/microsoft/TypeScript/issues/23689. Defines an `invalid<ErrorMessage>` type that can be used to indicate that a value is invalid/will never have a value. Sometimes `never` is used for this purpose; see https://github.com/microsoft/TypeScript/issues/28982 for why that's an inadequate solution.
