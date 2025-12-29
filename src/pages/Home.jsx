import EmergencyButton from "../components/EmergencyButton";
import VolunteerDashboard from "../components/VolunteerDashboard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import HelplineCard from "../components/HelplineCard";
import Footer from "../components/Footer";
import "../styles/home.css";




export default function Home() {
  return (
    
    <>
    

<hr style={{ margin: "50px 0" }} />



      
    <div className="home-wrapper">
      <div className="home-bg" />

      <div className="home-content">
        <Navbar />

        {/* HERO + IMAGES ROW */}
        <section className="hero-row">
  {/* LEFT SIDE */}
  <div className="hero-left">
    <Hero />

    <div className="hero-button">
      <EmergencyButton />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="hero-right">
    <ImageGrid />
  </div>
</section>

        {/* HELPLINES — unchanged */}
        <section className="helpline-section">
          <h2>Emergency Helplines</h2>
          <div className="helpline-grid">
            <HelplineCard title="Hospital" number="108" />
            <HelplineCard title="Police" number="100" />
            <HelplineCard title="Fire" number="101" />
            <HelplineCard title="Disaster Relief" number="108" />
          </div>
        </section>

        <Footer />
      </div>
    </div>
    </>
  );
}
