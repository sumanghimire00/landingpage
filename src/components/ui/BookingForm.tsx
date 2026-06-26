import Input from "./Input";
import Button from "./Button";
import { ArrowRight, User, Phone, Calendar, Mail, Clock } from "lucide-react";

export default function BookingForm() {
  return (
    <div>
      <h3 className="font-serif  text-3xl text-[#5A4C73]">
        Fill in the Details
      </h3>

      <div className="mt-6 space-y-4">
        <Input icon={User} label="Full Name" placeholder="Enter Full Name " />

        <Input icon={Phone}  label="Contact Number" placeholder="Enter Contact Number" />

        <Input icon={Mail}  label="Email" placeholder="Enter Email" />

        <Input icon={Calendar}  label="Consultation Date" type="date" />

        <div className="grid grid-cols-2 gap-3">
          <Input icon={Calendar}  label="Birth Date" type="date" />

          <Input icon={Clock}  label="Birth Time" type="time" />
        </div>


          <div className="mt-8 flex justify-center">
          <Button className=" gap-3 group  ">
            Schedule Appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
           
      </div>
    </div>
  );
}
