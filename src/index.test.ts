// eslint-disable-next-line @typescript-eslint/no-shadow
import { assertType, describe, test } from "vitest";
import type { invalid } from ".";

const invalidValue = undefined as invalid<"Invalid type">;

describe(`unassignable to`, () => {
  describe(`primitives`, () => {
    test(`string`, () => {
      // @ts-expect-error
      assertType<string>(invalidValue);
    });

    test(`number`, () => {
      // @ts-expect-error
      assertType<number>(invalidValue);
    });

    test(`boolean`, () => {
      // @ts-expect-error
      assertType<boolean>(invalidValue);
    });

    test(`undefined`, () => {
      // @ts-expect-error
      assertType<undefined>(invalidValue);
    });

    test(`null`, () => {
      // @ts-expect-error
      assertType<null>(invalidValue);
    });

    test(`void`, () => {
      // @ts-expect-error
      assertType<void>(invalidValue);
    });

    test(`symbol`, () => {
      // @ts-expect-error
      assertType<symbol>(invalidValue);
    });
  });

  describe(`object types`, () => {
    test(`object`, () => {
      // @ts-expect-error
      assertType<object>(invalidValue);
    });

    test(`{}`, () => {
      // @ts-expect-error
      assertType<{}>(invalidValue);
    });

    test(`any[]`, () => {
      // @ts-expect-error
      assertType<any[]>(invalidValue);
    });

    test(`Record<any, any>`, () => {
      // @ts-expect-error
      assertType<Record<any, any>>(invalidValue);
    });

    test(`{} | undefined`, () => {
      // @ts-expect-error
      assertType<{} | undefined>(invalidValue);
    });

    test(`{} | null`, () => {
      // @ts-expect-error
      assertType<{} | null>(invalidValue);
    });

    test(`{blah?:string} | undefined | null`, () => {
      // @ts-expect-error
      assertType<{ blah?: string } | null | undefined>(invalidValue);
    });

    test(`Record<string, string> | undefined | null`, () => {
      // @ts-expect-error
      assertType<Record<string, string> | null | undefined>(invalidValue);
    });
  });

  describe(`function types`, () => {
    test(`() => void`, () => {
      // @ts-expect-error
      assertType<() => void>(invalidValue);
    });

    test(`(() => void) | null | undefined`, () => {
      // @ts-expect-error
      assertType<(() => void) | null | undefined>(invalidValue);
    });

    test(`((x: any) => never) | null | undefined`, () => {
      // @ts-expect-error
      assertType<((x: any) => never) | null | undefined>(invalidValue);
    });

    test(`((...x: any[]) => never) | null | undefined`, () => {
      // @ts-expect-error
      assertType<((...x: any[]) => never) | null | undefined>(invalidValue);
    });

    test(`((x: string) => never) | null | undefined`, () => {
      // @ts-expect-error
      assertType<((x: string) => never) | null | undefined>(invalidValue);
    });

    test(`((...x: string[]) => never) | null | undefined`, () => {
      // @ts-expect-error
      assertType<((...x: string[]) => never) | null | undefined>(invalidValue);
    });

    test(`((x: unknown) => never) | null | undefined`, () => {
      // @ts-expect-error
      assertType<((x: unknown) => never) | null | undefined>(invalidValue);
    });

    test(`((...x: unknown[]) => never) | null | undefined`, () => {
      // @ts-expect-error
      assertType<((...x: unknown[]) => never) | null | undefined>(invalidValue);
    });
  });
});
