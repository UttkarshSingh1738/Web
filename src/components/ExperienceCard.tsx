import React from "react";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  logo: string;
  company: string;
  role: string;
  location: string;
  date: string;
  summary: string;
  impact: string[];
  tags: string[];
}

export default function ExperienceCard({
  logo,
  company,
  role,
  location,
  date,
  summary,
  impact,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="exp-card-container noselect">
      <div className="exp-card-inner">
        {/* FRONT */}
        <div className="exp-card-front">
          <img
            src={`/logos/${logo}.png`}
            alt={`${company} logo`}
            className="exp-logo"
          />
          <h3 className="exp-company">{company}</h3>
        </div>

        {/* BACK */}
        <div className="exp-card-back">
          <h3 className="exp-role">{role}</h3>
          <p className="exp-date">{date}</p>
          <p className="exp-location">{location}</p>
          <p className="exp-summary">{summary}</p>
          <ul className="exp-impact">
            {impact.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
          <div className="exp-tags">
            {tags.map((t) => (
              <span key={t} className="exp-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
