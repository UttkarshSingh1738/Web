import React from "react";
import "./VolunteerCard.css";

interface VolunteerCardProps {
  logo: string;
  org: string;
  role: string;
  date: string;
  details: string[];
}

export default function VolunteerCard({
  logo,
  org,
  role,
  date,
  details,
}: VolunteerCardProps) {
  return (
    <div className="vol-card-container noselect">
      <div className="vol-card-inner">
        {/* FRONT */}
        <div className="vol-card-front">
          <img
            src={`/logos/${logo}.png`}
            alt={`${org} logo`}
            className="vol-logo"
          />
          <h3 className="vol-org">{org}</h3>
          <p className="vol-role">{role}</p>
        </div>

        {/* BACK */}
        <div className="vol-card-back">
          <p className="vol-date">{date}</p>
          <ul className="vol-details">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
