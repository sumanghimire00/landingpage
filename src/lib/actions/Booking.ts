"use server";

import { bookingSchema } from "@/src/lib/validation/bookingSchema";

export async function bookAppointment(data: unknown) {
  const validated = bookingSchema.parse(data);

  console.log("✅ Server Action received:", validated);

  const response = await fetch(`${process.env.API_URL}/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validated),
    cache: "no-store",
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    throw new Error("Failed to book appointment");
  }

  return response.json();
}