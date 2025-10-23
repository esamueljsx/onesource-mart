import AboutChooseUs from "../SectionComponents/About/aboutChooseUs";
import AboutComm from "../SectionComponents/About/aboutComm";
import AboutFooter from "../SectionComponents/About/aboutFooter";
import AboutHeader from "../SectionComponents/About/aboutHeader";
import AboutMission from "../SectionComponents/About/aboutMission";
import AboutStory from "../SectionComponents/About/aboutStory";
import AboutValues from "../SectionComponents/About/aboutValues";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
<AboutHeader />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Our Story */}
<AboutStory/>

        {/* Our Mission */}
<AboutMission/>

        {/* Core Values */}
     <AboutValues/>

        {/* Community Involvement */}
   <AboutComm/>
        {/* Why Choose Us */}
<AboutChooseUs/>
      </div>

      {/* Footer CTA */}
<AboutFooter/>
    </div>
  );
}
