import Header from "../components/sections/header";
import AboutUs from "../components/sections/aboutus";
import Vision from "../components/sections/vision";
import { WhyChooseUsSection } from "@/components/sections/why_choose_us";
import { Footer } from "@/components/layout/footer";
import { ReachStrategicSection } from "@/components/sections/reach-strategic";
import { ImpactSection } from "@/components/sections/impact-section";
import { ContactUsSection } from "@/components/sections/contact-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Add Favicon & Title */}
      <head>
        <title>FalconIX | Official Website</title>
        <meta
          name="description"
          content="FalconIX official landing page. Learn more about our vision, impact, and why to choose us."
        />
        <link rel="icon" href="/logo.svg" />
      </head>

      {/* Main Content Container */}
      <div className="w-full">
        <Header />
        <AboutUs />
        <Vision />
        <ImpactSection />
        <ReachStrategicSection />
        <WhyChooseUsSection />
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
}
