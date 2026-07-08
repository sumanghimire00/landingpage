import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address"),

  consultationDate: z
    .string()
    .min(1, "Please select a consultation date"),

  birthDate: z
    .string()
    .min(1, "Birth date is required"),

  birthTime: z
    .string()
    .min(1, "Birth time is required"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;