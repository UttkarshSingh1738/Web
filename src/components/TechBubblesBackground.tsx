import React, { useEffect, useState } from "react";
import "./TechBubbles.css";

const techLogos = [
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/pytorch-colored.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kubernetes-colored.svg",
  "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
];

export default function TechBubblesBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  // Track mouse for slight parallax
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Evenly distribute logos vertically, concentrated to the sides
  useEffect(() => {
    const computePositions = () => {
      const w = 1800;
      const h = 1000;

      const marginX = w * 0.1;
      const leftBandX = marginX; // left cluster
      const rightBandX = w - marginX; // right cluster
      const spacingY = h / (techLogos.length / 2); // even vertical spacing

      const pos: { top: number; left: number }[] = [];
      techLogos.forEach((_, i) => {
        const column = i % 2 === 0 ? "left" : "right";
        const left =
          column === "left"
            ? leftBandX - Math.random() * 100 // slight randomness within band
            : rightBandX + Math.random() * 60;
        const top = (i * spacingY) % h;
        pos.push({ top, left });
      });

      setPositions(pos);
    };
    computePositions();
    window.addEventListener("resize", computePositions);
    return () => window.removeEventListener("resize", computePositions);
  }, []);

  return (
    <div className="tech-bubbles-container" aria-hidden="true">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="tech-bubble"
          style={{
            top: `${pos.top}px`,
            left: `${pos.left}px`,
            transform: `translate(${mouse.x}px, ${mouse.y}px)`,
            animationDelay: `${i * -2}s`,
            animationDuration: `${10 + (i % 4) * 3}s`,
          }}
        >
          <img src={techLogos[i]} alt="tech" draggable="false" />
        </div>
      ))}
    </div>
  );
}
