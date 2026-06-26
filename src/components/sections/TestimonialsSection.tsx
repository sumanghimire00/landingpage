import TestimonialCard from "../ui/TestimonialCard";
import AudioReviewCard from "../ui/AudioCard";


const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Priya S.",
    review: "I was struggling with my career...",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Rahul & Neha",
    review: "Our marriage was on the rocks...",
  },
  
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Vikram M.",
    review: "The financial clarity I received...",
  },
];
const audio = [
  {
    name: "Priya S.",
    duration: "1:14",
    title: "How this consultation helped her in business",
  },
    {
    name: "Priya S.",
    duration: "1:14",
    title: "How this consultation helped her in business",
  },
    {
    name: "Priya S.",
    duration: "1:14",
    title: "How this consultation helped her in business",
  },
  {
    name: "Ujjwal Shrestha",
    duration: "2:15",
    title: "How this consultation helped her in business",
  },
];
export default function TestimonialsSection() {
  return (
    <section className="bg-[#FAF7F2] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
            REAL EXPERIENCES
          </p>

          <h2 className="heading-font mt-3 text-5xl">
            What Client Say
          </h2>

          <p className="mt-4 text-slate-500">
            Genuine words from real people — no filters, no hiding.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
              />
            ))}
          </div>

          <div className="space-y-4">
                {audio.map((review, index) => (
                  <AudioReviewCard
                    key={index}
                    name={review.name}
                    duration={review.duration}
                    title={review.title}
                  />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}