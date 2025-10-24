import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Globe, Cpu, Bot, Shield, Database, LineChart, Building2, MapPin } from "lucide-react";
import TechBubblesBackground from "./components/TechBubblesBackground";
import "./components/VideoCard.css";
import ExperienceCard from "./components/ExperienceCard";
import VolunteerCard from "./components/Volunteercard";

export default function Portfolio() {

  const Avatar = ({
    text,
    src,
    alt,
  }: {
    text?: string;
    src?: string;
    alt?: string;
  }) => {
    if (src) {
      return (
        <div className="flex items-center justify-center h-7 w-7">
          <img src={src} alt={alt || text} className="h-7 object-contain" />
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center h-7 w-7 text-[10px] font-bold">
        {text}
      </div>
    );
  };

  const Section = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <section id={id} className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );

  const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mr-2 mb-2">
      {children}
    </span>
  );

  const Pill = ({ icon: Icon, label }: { icon: any; label: string }) => (
    <div className="flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs">
      <Icon size={14} /> <span>{label}</span>
    </div>
  );

  // Work Experience data
  const experiences = [
    {
      company: "Hexaware Technologies",
      location: "Herndon, Virginia",
      role: "Java Full-Stack Developer",
      date: "May 2025 – August 2025",
      logo: "hexaware",
      summary:
        "Architected an extensible Java code transformation framework driven by JSON-based recipes using JavaParser for AST parsing, type resolution, and semantic refactoring. Positioned as the successor to Hexaware Amaze (flagship code-transformation tool).",
      impact: [
        "Authored reusable recipes for multi-million-line Java upgrades and framework migrations, reducing manual migration effort from weeks to hours and lowering defect rates by 90%.",
        "Integrated the engine into Jenkins CI/CD pipelines with Git hooks and automated JUnit tests, cutting manual review time by 50%.",
        "Prototyped a recipe-recommendation tool using Langchain and RAG, reducing developer onboarding time and enabling ML-assisted modernization.",
      ],
      tags: [
        "Java",
        "JavaParser",
        "AST",
        "Jenkins",
        "LangChain",
        "RAG",
        "Python",
        "Spark",
      ],
    },
    {
      company: "Xceedance",
      location: "New Delhi, India",
      role: "Associate Programmer",
      date: "June 2025 – August 2025",
      logo: "xceedance",
      summary:
        "Configured and customized Duck Creek Claims v11 to align with BHSI (Berkshire Hathaway Specialty Insurance) requirements, tailoring workflows and data models for automated FNOL intake and claims adjudication.",
      impact: [
        "Developed automation scripts for Duck Creek v12 API calls, streamlining Claims Studio configuration and reducing setup time.",
        "Collaborated with business and QA teams to convert requirements into Duck Creek configurations, cutting configuration errors and delivery time.",
        "Delivered client-facing presentations, achieving an 80% score in technical and domain evaluations while progressing toward Configurator Certification.",
      ],
      tags: ["Duck Creek", "Insurance", "APIs", "Claims Studio", "Automation"],
    },
    {
      company: "SmartCoin Financials (Olyv)",
      location: "Bengaluru, India",
      role: "Software Development Engineer",
      date: "June 2024 – August 2024",
      logo: "olyv",
      summary:
        "Developed and deployed Java microservices with Play Framework to fix CSRF filter errors, improving reliability and testability across environments.",
      impact: [
        "Implemented React Server Components with Node.js and Express to improve SEO and halve initial page load time.",
        "Built Codemods for automating SSR migrations and established CI/CD pipelines on GCP with Docker and Bitbucket integration.",
        "Tested React 19 (RC) across the full stack to ensure compatibility before the production rollout.",
      ],
      tags: [
        "Java",
        "Play",
        "React",
        "Node.js",
        "Docker",
        "CI/CD",
        "Bitbucket",
        "GCP",
      ],
    },
    {
      company: "Uber",
      location: "Champaign, Illinois",
      role: "UI/UX Designer / Full-Stack Developer",
      date: "November 2022 – February 2023",
      logo: "uber",
      summary:
        "Designed and built a Next.js prototype for Uber Teen with user flows focused on youth safety and convenience.",
      impact: [
        "Integrated Yahoo Finance API with Django and SQLite to replicate design flows from Figma with full backend parity.",
        "Maintained a CI/CD pipeline with Git and Jenkins for continuous testing and accelerated deployment by 30%.",
      ],
      tags: ["Next.js", "Django", "SQLite", "Jenkins", "UI/UX"],
    },
    {
      company: "Resolute AI",
      location: "Dubai, UAE",
      role: "Machine Learning Engineer",
      date: "April 2021 – July 2021",
      logo: "resolute",
      summary:
        "Developed ML-powered towel-counting automation using OpenCV and custom Python scripts for edge deployment.",
      impact: [
        "Automated image preprocessing and reduced workstation load via server-side execution.",
        "Annotated 3,000+ images in Labelbox to improve model performance and reusability.",
        "Evaluated ML models through k-fold validation and compiled performance reports to guide iterative improvements.",
      ],
      tags: ["Python", "OpenCV", "Labelbox", "Machine Learning"],
    },
  ];

  const highlights = [
    { label: "Experience", value: "India • UAE • USA" },
    { label: "Focus", value: "AI, Risk Systems, and Data Infra" },
    {
      label: "Certifications",
      value: "AWS AI, Salesforce Agentforce",
    },
    { label: "Approach", value: "Impact-driven, production-focused" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <TechBubblesBackground />
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
            <div>
              <div className="flex items-center gap-4">
                <div className="w-64 h-64 rounded-full overflow-hidden border ">
                  <img
                    src={`${(import.meta as any).env.BASE_URL}avatar.jpg`}
                    alt="Uttkarsh Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                    Uttkarsh Singh
                  </h1>
                  <div className="text-sm text-slate-300">
                    Software engineer • AI & systems
                  </div>
                </div>
              </div>
              <p className="mt-3 max-w-2xl text-base sm:text-lg text-slate-300">
                Software engineer who ships real systems. I work on AI, risk
                aware automation, and data heavy backends. I like hard problems
                that end up in production and help real users.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill icon={MapPin} label="Champaign, IL" />
                <Pill icon={Bot} label="AI and systems" />
                <Pill icon={Database} label="Data pipelines" />
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="mailto:uttkarsh.singh2004@gmail.com"
                  className="inline-flex items-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90"
                >
                  <Mail className="w-4 h-4 mr-2" /> Email
                </a>
                <a
                  href="https://github.com/UttkarshSingh1738"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/karsh-singh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact
                </a>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 sm:text-center">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-2xl border p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500">
                    {h.label}
                  </div>
                  <div className="text-sm font-semibold mt-1">{h.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Experience */}        
      <section
        id="experience"
        className="max-w-6xl mx-auto px-10 sm:px-8 py-12"
      >
        <div className="-mx-5 sm:-mx-8 lg:-mx-24 xl:-mx-80 px-5 sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
          >
            Professional Experience
          </motion.h2>
        </div>

        <div className="-mx-5 sm:-mx-8 lg:-mx-24 xl:-mx-80 px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-6 w-full">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Selected projects">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-5 bg-slate-800">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Chatroom</h3>
            </div>
            <p className="text-sm mt-2">
              Multi user chat application with Play Framework backend, React
              front end, MySQL persistence, JWT session handling, and SSR via
              Hono for low TTFB. Added custom navigation with jQuery listeners
              to preserve state across CSR and SSR boundaries.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Play", "React", "MySQL", "JWT", "Hono"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border p-5 bg-slate-800">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Text Mining and IR</h3>
            </div>
            <p className="text-sm mt-2">
              Discovered hidden data citations in scientific writing using
              multilingual BERT NER. Complemented with TF IDF features, random
              forest classification, and Word2Vec analysis to surface
              relationships and improve label quality.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["BERT", "scikit learn", "TF IDF", "Word2Vec"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border p-5 bg-slate-800">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Everything.AI</h3>
            </div>
            <p className="text-sm mt-2">
              YOLOv4 detection with DeepSORT multi object tracking across
              cameras. A FastAPI microservice enriches detections with context
              from a retrieval layer. Deployed in Docker with CUDA acceleration
              for real time inference.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["YOLO", "DeepSORT", "FastAPI", "CUDA", "Docker"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Videos */}
      <Section id="videos" title="Projects in action">
        <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://youtu.be/fTSMbk9R4XI"
              target="_blank"
              rel="noreferrer"
              className="video-card rounded-2xl border overflow-hidden"
            >
              <div className="first-content">
                <img
                  src="https://img.youtube.com/vi/fTSMbk9R4XI/hqdefault.jpg"
                  alt="Project video 1"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold">Box detection, tracking and counting with YOLOv4</h3>
                </div>
              </div>
              <div className="second-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="yt-logo" />
              </div>
            </a>

            <a
              href="https://youtu.be/xpj3xTfFrpE"
              target="_blank"
              rel="noreferrer"
              className="video-card rounded-2xl border overflow-hidden"
            >
              <div className="first-content">
                <img
                  src="https://img.youtube.com/vi/xpj3xTfFrpE/hqdefault.jpg"
                  alt="Project video 2"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold">Traffic Management and Density Control using YOLOv4 and Deepsort</h3>
                </div>
              </div>
              <div className="second-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="yt-logo" />
              </div>
            </a>

            <a
              href="https://youtu.be/s3qkk-qW3xY"
              target="_blank"
              rel="noreferrer"
              className="video-card rounded-2xl border overflow-hidden"
            >
              <div className="first-content">
                <img
                  src="https://img.youtube.com/vi/s3qkk-qW3xY/hqdefault.jpg"
                  alt="Project video 3"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold">Traffic Management and Density Control using YOLOv4 and Deepsort - 2</h3>
                </div>
              </div>
              <div className="second-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="yt-logo" />
              </div>
            </a>
        </div>
      </Section>

      {/* Leadership */}
      <Section id="leadership" title="Leadership">
        <div className="rounded-2xl border p-6 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar src={`${(import.meta as any).env.BASE_URL}logos/thetachi.png`} alt="Theta Chi logo" />
              <h3 className="text-lg font-semibold">Theta Chi Fraternity</h3>
            </div>
            <span className="text-xs text-slate-500">
              Champaign, IL • Sep 2022 to Present
            </span>
          </div>
          <div className="mt-2 text-sm">
            Vice President of Health and Security • Service Chair • Social Chair
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-slate-100" />{" "}
              Coordinated seminars on alcohol awareness, mental health, and life
              safety with invited speakers.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-slate-100" />{" "}
              Served as primary point of contact during chapter incidents and
              supported crisis response.
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-slate-100" />{" "}
              Led service and philanthropy events that raised more than 3,000
              dollars annually for Red Cross and USO.
            </li>
          </ul>
        </div>
      </Section>

      {/* Volunteering */}
      <Section id="volunteering" title="Volunteering">
        <div className="flex flex-wrap justify-center gap-6">
          <VolunteerCard
            logo="tycia"
            org="TYCIA Foundation"
            role="Education Volunteer"
            date="Mar 2021 – Jun 2021"
            details={[
              "Led education initiatives for the Korku Tribe in Maharashtra, impacting 100+ students.",
              "Trained and mentored new volunteers to create and deliver educational materials across regions.",
            ]}
          />
          <VolunteerCard
            logo="instilt"
            org="Instilt Educate"
            role="Teaching Assistant"
            date="Dec 2021 – Mar 2022"
            details={[
              "Taught Math and English remotely to 500+ children across two villages.",
              "Managed online classrooms, resolved conflicts, and presented progress reports.",
            ]}
          />
          <VolunteerCard
            logo="emirates"
            org="Emirates Environmental Group"
            role="Community Volunteer"
            date="Dec 2023 – Jan 2024"
            details={[
              "Participated in desert cleanups preserving the UAE’s ecological balance.",
              "Collaborated with diverse volunteer teams to ensure safety and organization during drives.",
            ]}
          />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-gradient-to-b from-slate-800/60 to-slate-900/30">
          <div>
            <div className="text-2xl font-semibold">
              Let’s build something useful
            </div>
            <p className="text-sm text-slate-300 max-w-xl mt-2">
              I’m looking for teams that value clear impact and fast learning.
              If the work touches AI, risk, or data at scale, I’ll likely be a
              great fit :) let’s have a quick chat.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <a
                href="mailto:uttkarsh.singh2004@gmail.com"
                className="inline-flex items-center rounded-lg bg-emerald-500 text-white px-4 py-2 text-sm hover:brightness-95"
              >
                <Mail className="w-4 h-4 mr-2" /> Email me
              </a>

              <button
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(
                      "uttkarsh.singh2004@gmail.com"
                    );
                  } catch (e) {
                    /* ignore */
                  }
                }}
                className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-white/5"
                title="Copy email"
              >
                <Globe className="w-4 h-4 mr-2" /> Copy email
              </button>

              <a
                href="https://github.com/UttkarshSingh1738"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-white/5"
              >
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/karsh-singh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-white/5"
              >
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name")?.toString() || "";
                const message = data.get("message")?.toString() || "";
                const subject = `Portfolio contact from ${name || "website"}`;
                const body = encodeURIComponent(message + "\n\n" + `— ${name}`);
                window.location.href = `mailto:uttkarsh.singh2004@gmail.com?subject=${encodeURIComponent(
                  subject
                )}&body=${body}`;
              }}
              className="flex flex-col gap-3"
            >
              <label className="text-xs text-slate-400">Name</label>
              <input
                name="name"
                className="rounded-md border bg-slate-800 px-3 py-2 text-sm"
                placeholder="Your name"
              />
              <label className="text-xs text-slate-400 mt-1">Message</label>
              <textarea
                name="message"
                className="rounded-md border bg-slate-800 px-3 py-2 text-sm h-28"
                placeholder="Short message or project brief"
              />
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm text-white hover:brightness-95"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <footer className="max-w-6xl mx-auto px-5 sm:px-8 pb-12 text-xs text-slate-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Uttkarsh Singh — Built with React,
            Tailwind & Framer Motion. No Em Dashes used ; )
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/UttkarshSingh1738"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karsh-singh"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:uttkarsh.singh2004@gmail.com"
              className="text-slate-400 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}