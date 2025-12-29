import { useEffect, useState } from "react";

export default function VolunteerDashboard() {
  const [emergencies, setEmergencies] = useState([]);

  const fetchEmergencies = async () => {
    try {
      const res = await fetch("/api/emergencies");
      const data = await res.json();
      setEmergencies(data.data || []);
    } catch (error) {
      console.error("Failed to fetch emergencies", error);
    }
  };

 const updateStatus = async (id, newStatus) => {
  try {
    const res = await fetch(`/api/emergency/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    const data = await res.json();
    console.log("Status updated:", data);

    // Update UI immediately
    setEmergencies(prev =>
      prev.map(e =>
        e.id === id ? { ...e, status: newStatus } : e
      )
    );
  } catch (err) {
    console.error("Update failed", err);
  }
};


  useEffect(() => {
    fetchEmergencies();
    const interval = setInterval(fetchEmergencies, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        marginTop: "60px",
        padding: "30px",
        background: "#0f172a",
        borderRadius: "16px",
        color: "white",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        🚨 Volunteer Alerts
      </h2>

      {emergencies.length === 0 && (
        <p style={{ textAlign: "center", color: "#cbd5f5" }}>
          No emergencies yet
        </p>
      )}

      {emergencies.map((e) => (
        <div
          key={e.id}
          style={{
            background: "#020617",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
            borderLeft: "5px solid #ef4444",
          }}
        >
          <h3 style={{ color: "#f87171" }}>
            🚑 {e.type.toUpperCase()}
          </h3>

          <p>
            <strong>📍 Location:</strong> {e.location}
          </p>

          <p>
            <strong>⏱ Status:</strong>{" "}
            <span
              style={{
                color:
                  e.status === "pending"
                    ? "#facc15"
                    : e.status === "accepted"
                    ? "#22c55e"
                    : "#60a5fa",
              }}
            >
              {e.status}
            </span>
          </p>

          {/* ACCEPT BUTTON */}
          {e.status === "pending" && (
            <button
              onClick={() => updateStatus(e.id, "accepted")}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                background: "#22c55e",
                color: "black",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✅ Accept
            </button>
          )}

          {/* RESOLVE BUTTON */}
          {e.status === "accepted" && (
            <button
              onClick={() => updateStatus(e.id, "resolved")}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                background: "#60a5fa",
                color: "black",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ✔ Resolve
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
