import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the three digits this repo was provisioned with", () => {
    expect(api.course.code).toMatch(/258$/);
  });

  it("runs across twelve dated teaching weeks", () => {
    const weeks = byType("sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => Number(a) - Number(b));
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("has assessment weights that add up to 100%", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("links at least one lecture to a deck that actually exists", () => {
    const withSlides = byType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length).toBeGreaterThan(0);
    for (const node of withSlides) {
      const deckName = String(node.meta?.slides).replace(/^\/decks\//, "").replace(/\/$/, "");
      expect(existsSync(resolve(`src/decks/${deckName}.deck.mdx`)), node.id).toBe(true);
    }
  });
});
