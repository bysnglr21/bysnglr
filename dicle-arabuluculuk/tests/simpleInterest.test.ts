import { describe, it, expect } from "vitest";
import { calculateSimpleInterest } from "@/lib/calculations/simpleInterest";

describe("calculateSimpleInterest", () => {
  it("computes zero for zero days", () => {
    const { interest, total } = calculateSimpleInterest({ principal: 1000, rateAnnualPercent: 12, days: 0, basis: "actual/365" });
    expect(interest).toBe(0);
    expect(total).toBe(1000);
  });

  it("computes interest with actual/365", () => {
    const { interest } = calculateSimpleInterest({ principal: 10000, rateAnnualPercent: 18, days: 30, basis: "actual/365" });
    expect(interest).toBeCloseTo(147.95, 1);
  });

  it("differs with 30/360 basis", () => {
    const a365 = calculateSimpleInterest({ principal: 10000, rateAnnualPercent: 18, days: 30, basis: "actual/365" }).interest;
    const d360 = calculateSimpleInterest({ principal: 10000, rateAnnualPercent: 18, days: 30, basis: "30/360" }).interest;
    expect(d360).not.toBe(a365);
  });
});