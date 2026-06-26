import BookingCard from "../ui/BookingCTACard";

export default function BookingSessionSection() {
  return (
    <section className="bg-[#FAF7F2] py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2B1645]">
          Take the first step towards{" "}
          <span className="text-[#E4A003]">clarity</span>
        </h2>

        <p className="mt-3 text-gray-500">
          Life has patterns. Understanding them can change your direction.
          Your session is waiting.
        </p>

        <div className="mt-8 flex justify-center">
          <BookingCard />
        </div>
      </div>
    </section>
  );
}