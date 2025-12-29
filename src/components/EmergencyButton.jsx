import { useState } from "react";

export default function EmergencyButton() {
  const [status, setStatus] = useState("");

  const requestHelp = () => {
    if (!navigator.geolocation) {
      setStatus("❌ Geolocation not supported");
      return;
    }

    setStatus("📡 Requesting help...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch("/api/emergency", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "ambulance",
              location: `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`,
              description: "User pressed emergency button",
            }),
          });

          const data = await response.json();

          if (response.status === 200) {
            setStatus("🚑 Help request sent! Volunteers notified.");
          } else {
            setStatus(`❌ Backend error: ${data.message}`);
          }
        } catch (error) {
          console.error(error);
          setStatus("❌ Server not reachable");
        }
      },
      () => {
        setStatus("❌ Location permission denied");
      }
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button
        onClick={requestHelp}
        style={{
          padding: "18px 36px",
          background: "#dc2626",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "12px",
          cursor: "pointer",
          border: "none",
          boxShadow: "0 8px 20px rgba(220,38,38,0.4)",
        }}
      >
        🚨 REQUEST HELP
      </button>

      {status && (
        <p
          style={{
            marginTop: "16px",
            fontSize: "16px",
            fontWeight: "500",
            color: status.startsWith("🚑") ? "#22c55e" : "#facc15",
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
}

