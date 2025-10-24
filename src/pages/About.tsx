import AboutChooseUs from "../components/SectionComponents/About/aboutChooseUs";
import AboutComm from "../components/SectionComponents/About/aboutComm";
import AboutFooter from "../components/SectionComponents/About/aboutFooter";
import AboutHeader from "../components/SectionComponents/About/aboutHeader";
import AboutMission from "../components/SectionComponents/About/aboutMission";
import AboutStory from "../components/SectionComponents/About/aboutStory";
import AboutValues from "../components/SectionComponents/About/aboutValues";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      {/* Hero Section */}
      <AboutHeader />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Our Story */}
        <AboutStory />

        {/* Our Mission */}
        <AboutMission />

        {/* Core Values */}
        <AboutValues />

        {/* Community Involvement */}
        <AboutComm />
        {/* Why Choose Us */}
        <AboutChooseUs />
      </div>

      {/* Footer CTA */}
      <AboutFooter />
    </div>
  );
}
