import React from "react";
import Layouta from "../componentsa/Layouta";

function Homea() {
  return (
    <Layouta>
      <div style={{ fontFamily: "Inter" }}>
        <div style={{ padding: "1rem" }}>
          <div style={{ padding: "1rem" }}>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#0e3c87",
                }}
              >
                Welcome to the SIM
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "auto",
                marginBottom: "1rem",
                backgroundColor: "#f7fafc",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  color: "#1a202c",
                  fontWeight: "normal",
                }}
              >
                Hello there! Welcome to our Smart Inventory Management system,
                where you can easily manage your inventory, employees, inwards,
                outwards, returns, and view reports. We are serving clients with
                our tech since past 5 years. Our goal is to help you streamline
                your inventory management process and save you time and money!
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f7fafc",
                  padding: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  30+
                </p>
                <p style={{ color: "#1a202c", fontWeight: "normal" }}>
                  Clients Served
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f7fafc",
                  padding: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  500%
                </p>
                <p style={{ color: "#1a202c", fontWeight: "normal" }}>
                  Increase in Godowns
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  backgroundColor: "#f7fafc",
                  padding: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  300%
                </p>
                <p style={{ color: "#1a202c", fontWeight: "normal" }}>
                  Profit increase in Deliveries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouta>
  );
}

export default Homea;
