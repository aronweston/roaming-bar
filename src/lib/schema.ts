import { boolean, date, literal, number, object, string, union, z } from "zod";

export type NewsletterSchema = z.input<typeof NewsletterSchema>;
export const NewsletterSchema = object({ firstName: string(), email: string().email() });

const requiredMessage = "But, we really need this!";

//Onboarding
export type CustomerSchema = z.input<typeof CustomerSchema>;
export const CustomerSchema = object({
  fullName: string({ required_error: requiredMessage }).min(2),
  phone: string({ required_error: requiredMessage }).min(2),
  email: string({ required_error: requiredMessage }).email(),
  accepts_marketing: boolean().optional(),
});

export type EventSchema = z.input<typeof EventSchema>;
export const EventSchema = object({
  date: date(),
  time: string().datetime(),
  address: string(),
  event_length: union([literal("<5"), literal("5-7"), literal("7+")]),
  total_guests: number().min(10),
  other_event: string().optional(),
  event_type: union([
    literal("21st"),
    literal("Bucks"),
    literal("Hens"),
    literal("Wedding"),
    literal("Birthday"),
    literal("Corporate"),
    literal("Other"),
  ]),
});

export type BudgetSchema = z.input<typeof BudgetSchema>;
export const BudgetSchema = object({
  budget: union([literal("$"), literal("$$"), literal("$$$")]),
});

export type TabSchema = z.input<typeof TabSchema>;
export const TabSchema = object({
  bar: union([literal("open"), literal("paid"), literal("tab-paid")]),
});
