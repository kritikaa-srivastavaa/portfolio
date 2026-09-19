import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects, skills, experienceThemes } from "@/lib/content";
export const metadata: Metadata = {
  title: "Resume — Kritika Srivastava",
  alternates: {
    canonical: "https://kritikaa-srivastavaa.github.io/portfolio/resume/",
  },
};
export default function Resume() {
  return (
    <main className="resume-page">
      <Link href="/" className="text-link resume-back">
        ← Portfolio
      </Link>
      <header>
        <p className="eyebrow">SOFTWARE ENGINEER · EX-MICROSOFT</p>
        <h1>Kritika Srivastava</h1>
        <p>Backend & distributed systems · Android · AI-enabled products</p>
        <div className="resume-contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <p className="print-hint">
          Use your browser’s Print command to save this résumé as a PDF.
        </p>
      </header>
      <section>
        <h2>Experience</h2>
        <h3>
          Microsoft · Software Engineer <span>2024–2026</span>
        </h3>
        <p>Microsoft 365 / Copilot Android experiences.</p>
        <ul>
          {experienceThemes.map((t) => (
            <li key={t.name}>
              <strong>{t.name}:</strong> {t.description}
            </li>
          ))}
        </ul>
        <h3>
          Microsoft · Software Engineering Intern <span>2023</span>
        </h3>
        <p>
          Integrated Android StrictMode, investigated disk/network violations,
          moved blocking work off the main thread and built tooling to parse
          StrictMode logs.
        </p>
      </section>
      <section>
        <h2>Selected projects</h2>
        {projects.map((p) => (
          <div key={p.name}>
            <h3>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                {p.name} ↗
              </a>
            </h3>
            <p>{p.description}</p>
            <p>{p.tech.join(" · ")}</p>
          </div>
        ))}
        <p>
          SignalForge: 199 backend tests · 96 frontend tests · 10 validation
          tests.
        </p>
      </section>
      <section>
        <h2>Technical skills</h2>
        {skills.map((s) => (
          <p key={s.name}>
            <strong>{s.name}:</strong> {s.items.join(", ")}
          </p>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        <h3>Indira Gandhi Delhi Technical University for Women</h3>
        <p>
          B.Tech — Electronics and Communication Engineering · 2020–2024 · CGPA
          8.93
        </p>
      </section>
    </main>
  );
}
