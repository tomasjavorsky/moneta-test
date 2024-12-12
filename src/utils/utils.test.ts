import { describe, it } from "vitest";
import { separateThousands } from "./numberFormatting";

describe.concurrent("utils", () => {
  it.concurrent(
    "separateThousands - adds correct number of spaces",
    async ({ expect }) => {
      expect(separateThousands(100).length).toBe(3);
      expect(separateThousands(1000).length).toBe(5);
      expect(separateThousands(1000000).length).toBe(9);
    }
  );
});
