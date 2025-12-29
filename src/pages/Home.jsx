import EmergencyButton from "../components/EmergencyButton";
import VolunteerDashboard from "../components/VolunteerDashboard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import HelplineCard from "../components/HelplineCard";
import Footer from "../components/Footer";




export default function Home() {
  return (
    
    <>
    <section style={{ marginTop: "40px", textAlign: "center" }}>
  <EmergencyButton />
</section>

<hr style={{ margin: "50px 0" }} />

<VolunteerDashboard />


      <Navbar />

      <main style={{ display: "flex", gap: "60px", padding: "50px" }}>
        <Hero />
        <ImageGrid />
      </main>

      <section style={{ padding: "50px" }}>
        <h2>Emergency Helplines</h2>
        <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
          <HelplineCard title="Hospital" number="108" />
          <HelplineCard title="Police" number="100" />
          <HelplineCard title="Fire" number="101" />
          <HelplineCard title="Disaster Relief" number="108" />
        </div>
      </section>

      <Footer />
    </>
  );
}
