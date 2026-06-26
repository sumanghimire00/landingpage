import Footer from "../components/layout/Footer";
import AstroHero from "../components/sections/AstroHero";
import AstrologersSection from "../components/sections/AstrologersSection";
import BookingSection from "../components/sections/BookingSection";
import BookingSessionSection from "../components/sections/BookingSessionSection";
import DiscoverySection from "../components/sections/DiscoveryCardSection";
import FAQSection from "../components/sections/FAQSection";
import GuidanceSection from "../components/sections/GuidanceSection";
import QuestionsSection from "../components/sections/QuestionSection";
import TransformationStorySection from "../components/sections/StorySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyUsSection from "../components/sections/WhyUsSection";

export default function Home() {
  return (
    <main>
      <AstroHero />
      <AstrologersSection/>
      <TestimonialsSection/>
      <GuidanceSection/>
      <QuestionsSection/>
      <TransformationStorySection/>
      <WhyUsSection/>
      <DiscoverySection/>
      <BookingSection/>
      <FAQSection/>
      <BookingSessionSection/>
      <Footer/>
    </main>
  );
}