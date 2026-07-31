"use client";

import { ArrowRight, Calendar, Clock, Mail, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookAppointment } from "@/src/lib/actions/Booking";

import Button from "./Button";
import Input from "./Input";

import {
  bookingSchema,
  BookingFormData,
} from "@/src/lib/validation/bookingSchema";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      consultationDate: "",
      birthDate: "",
      birthTime: "",
    },
  });

async function onSubmit(data: BookingFormData) {
  try {
    const result = await bookAppointment(data);

    console.log(result);

    alert("Appointment Booked!");

    reset();
  } catch (error) {
    console.error(error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong."
    );
  }
}

  return (
    <form  id="booking-section"
       onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 scroll-mt-24"
    >
      <h3 className="font-serif text-3xl text-[#5A4C73]">
        Fill in the Details
      </h3>

      <Input
        icon={User}
        label="Full Name"
        placeholder="Enter Full Name"
        error={errors.fullName?.message}
        {...register("fullName")}
      />

      <Input
        icon={Phone}
        label="Contact Number"
        placeholder="Enter Contact Number"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <Input
        icon={Mail}
        label="Email"
        placeholder="Enter Email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        icon={Calendar}
        label="Consultation Date"
        type="date"
        error={errors.consultationDate?.message}
        {...register("consultationDate")}
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          icon={Calendar}
          label="Birth Date"
          type="date"
          error={errors.birthDate?.message}
          {...register("birthDate")}
        />

        <Input
          icon={Clock}
          label="Birth Time"
          type="time"
          error={errors.birthTime?.message}
          {...register("birthTime")}
        />
      </div>

      <div className="flex justify-center pt-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group gap-3"
        >
          {isSubmitting
            ? "Scheduling..."
            : "Schedule Appointment"}

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </form>
  );
}