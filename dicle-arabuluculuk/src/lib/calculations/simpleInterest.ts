import { z } from "zod";

export const simpleInterestInputSchema = z.object({
  principal: z.number().min(0),
  rateAnnualPercent: z.number().min(0),
  days: z.number().int().min(0),
  basis: z.enum(["actual/365", "actual/360", "30/360"]).default("actual/365"),
});

export type SimpleInterestInput = z.infer<typeof simpleInterestInputSchema>;

export type SimpleInterestResult = {
  interest: number;
  total: number;
  dailyRate: number; // decimal per day
};

export function calculateSimpleInterest(input: SimpleInterestInput): SimpleInterestResult {
  const { principal, rateAnnualPercent, days, basis } = simpleInterestInputSchema.parse(input);
  const annualRate = rateAnnualPercent / 100;
  const denominator = basis === "30/360" ? 360 : basis === "actual/360" ? 360 : 365;
  const dailyRate = annualRate / denominator;
  const interest = +(principal * dailyRate * days).toFixed(2);
  const total = +(principal + interest).toFixed(2);
  return { interest, total, dailyRate };
}