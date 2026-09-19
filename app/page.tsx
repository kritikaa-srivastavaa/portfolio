import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Database,
  Radio,
  Layers3,
  Check,
  Github,
  Linkedin,
  ShieldCheck,
  Sparkles,
  Command,
  CornerDownRight,
  Mail,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { HeroEntrance, Terminal } from "@/components/interactive";
import {
  profile,
  projects,
  skills,
  additionalProjects,
  experienceThemes,
} from "@/lib/content";
function External({
  href,
  children,
  className = "text-link",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
function SectionTitle({
  number,
  label,
  title,
  text,
}: {
  number: string;
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}
function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function SystemVisual() {
  return (
    <div
      className="system-visual"
      role="img"
      aria-label="A conceptual system connecting backend, Android, distributed systems and AI-enabled products"
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="system-axis horizontal" />
      <div className="system-axis vertical" />
      <div className="system-core">
        <Layers3 size={34} strokeWidth={1} />
        <span>built to connect</span>
      </div>
      <div className="system-node node-top">
        <Radio size={16} />
        <span>Backend</span>
        <i />
      </div>
      <div className="system-node node-right">
        <Sparkles size={16} />
        <span>AI products</span>
        <i />
      </div>
      <div className="system-node node-bottom">
        <Database size={16} />
        <span>Distributed systems</span>
        <i />
      </div>
      <div className="system-node node-left">
        <Command size={16} />
        <span>Android</span>
        <i />
      </div>
      <span className="visual-coordinate">SYSTEMS / PRODUCTS / PEOPLE</span>
    </div>
  );
}
function SignalDiagram() {
  return (
    <div className="signal-diagram">
      <div className="visual-toolbar">
        <span>
          <Activity size={14} /> SIGNALFORGE
        </span>
        <span className="diagram-badge">EVENT PIPELINE</span>
      </div>
      <div className="pipeline">
        <div className="pipeline-node">
          <Radio />
          <strong>Ingest</strong>
          <span>REST API</span>
        </div>
        <div className="pipeline-connector">
          <i />
          <ArrowRight size={16} />
        </div>
        <div className="pipeline-node kafka">
          <Layers3 />
          <strong>Process</strong>
          <span>Kafka</span>
        </div>
        <div className="pipeline-connector">
          <i />
          <ArrowRight size={16} />
        </div>
        <div className="pipeline-node">
          <Database />
          <strong>Persist</strong>
          <span>PostgreSQL</span>
        </div>
      </div>
      <div className="pipeline-branch">
        <CornerDownRight size={18} />
        <span>Retry / dead-letter topic</span>
        <span className="branch-line" />
        <ShieldCheck size={16} />
        <span>Idempotency</span>
      </div>
      <div className="diagram-bottom">
        <div>
          <span className="tiny-label">DETECT & OBSERVE</span>
          <p>From events to actionable signals.</p>
        </div>
        <svg viewBox="0 0 180 50" aria-hidden="true">
          <path
            d="M0 38 L18 38 L26 29 L34 38 L52 38 L62 25 L70 37 L87 37 L100 7 L111 38 L129 38 L137 29 L146 37 L180 37"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </div>
    </div>
  );
}
function ReentryVisual() {
  return (
    <div
      className="reentry-visual"
      aria-label="Illustrative ReEntry work-context interface"
    >
      <div className="reentry-window">
        <div className="visual-toolbar">
          <span>
            <CornerDownRight size={15} /> reentry
          </span>
          <span className="mock-label">CONCEPT PREVIEW</span>
        </div>
        <div className="reentry-content">
          <span className="tiny-label">YOUR CONTEXT, WAITING FOR YOU</span>
          <h4>Back in the flow.</h4>
          <div className="context-card">
            <div className="context-title">
              <span className="context-dot" /> Event pipeline review{" "}
              <span className="context-pill">In progress</span>
            </div>
            <p className="tiny-label">WHERE I LEFT OFF</p>
            <p>Reviewing retry behavior in the event consumer.</p>
            <div className="context-next">
              <CornerDownRight size={15} />
              <span>Next: check the dead-letter handling</span>
            </div>
            <div className="context-resource">
              <span>
                <Check size={12} /> Context captured
              </span>
              <span>2 resources</span>
            </div>
          </div>
          <div className="reentry-foot">
            <span>Less remembering. More building.</span>
            <span className="keyboard">↵</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-main">
            <HeroEntrance>
              <div className="availability">
                <span /> Available for software engineering opportunities
              </div>
              <p className="hero-identity">
                KRITIKA SRIVASTAVA <span>Software Engineer · Ex-Microsoft</span>
              </p>
              <h1>
                Reliable systems.
                <br />
                Thoughtful <span>software.</span>
              </h1>
              <p className="hero-description">
                Product engineering, backed by reliable systems.
                <br className="desktop-break" /> From production Android
                experiences at Microsoft to event-driven backend systems.
              </p>
              <div className="hero-ctas">
                <a className="button primary" href="#work">
                  View work <ArrowDown size={16} />
                </a>
                <Link
                  className="button secondary"
                  href="/resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume <ArrowUpRight size={16} />
                </Link>
                <External href={profile.github} className="hero-github">
                  <Github size={18} aria-hidden="true" />
                  <span className="hero-github-label">GitHub</span>
                </External>
              </div>
            </HeroEntrance>
            <SystemVisual />
          </div>
          <div className="hero-bottom">
            <span className="tiny-label">ENGINEERING ACROSS THE STACK</span>
            <div>
              <span>Backend systems</span>
              <i />
              <span>Distributed systems</span>
              <i />
              <span>Android</span>
              <i />
              <span>AI-enabled products</span>
            </div>
            <a href="#work" aria-label="Scroll to selected work">
              <ArrowDown size={18} />
            </a>
          </div>
        </section>
        <section id="work" className="section container">
          <SectionTitle
            number="01"
            label="SELECTED WORK"
            title="Built with intent."
            text="Systems that hold up. Products that make things a little easier."
          />
          <article className="project flagship">
            <div className="project-copy">
              <p className="project-kicker">
                <span>01</span> {projects[0].category}
              </p>
              <h3>
                SignalForge<span className="project-dot">.</span>
              </h3>
              <p className="project-positioning">{projects[0].description}</p>
              <p className="muted">
                An event-driven system that turns incoming events into
                meaningful signals, with reliability built into the processing
                path.
              </p>
              <ul className="feature-list">
                <li>
                  <Check /> Asynchronous ingestion, persistence and spike
                  detection
                </li>
                <li>
                  <Check /> Idempotent processing with retry and DLT patterns
                </li>
                <li>
                  <Check /> Metrics, dashboards and a containerized local
                  environment
                </li>
              </ul>
              <Tags items={projects[0].tech} />
              <External href={projects[0].github}>
                GitHub <ArrowUpRight size={16} />
              </External>
            </div>
            <div className="project-display">
              <SignalDiagram />
              <div
                className="test-stats"
                aria-label="Verified automated test suite"
              >
                <div>
                  <strong>199</strong>
                  <span>Backend tests</span>
                </div>
                <div>
                  <strong>96</strong>
                  <span>Frontend tests</span>
                </div>
                <div>
                  <strong>10</strong>
                  <span>Validation tests</span>
                </div>
              </div>
              <p className="display-caption">
                <span /> Reliability, backed by automated tests.
              </p>
            </div>
          </article>
          <article className="project reentry">
            <div className="project-copy">
              <p className="project-kicker">
                <span>02</span> {projects[1].category}
              </p>
              <h3>
                ReEntry<span className="project-dot">.</span>
              </h3>
              <p className="project-positioning">{projects[1].description}</p>
              <p className="muted">
                A Chrome extension that makes resuming interrupted work
                effortless. Save the context, the next action and the resources.
                Come back ready.
              </p>
              <ul className="feature-list">
                <li>
                  <Check /> Work-context capture with a popup and dashboard
                </li>
                <li>
                  <Check /> Search, filters, checklists and resource management
                </li>
                <li>
                  <Check /> Context-menu integration and keyboard navigation
                </li>
              </ul>
              <Tags items={projects[1].tech} />
              <External href={projects[1].github}>
                GitHub <ArrowUpRight size={16} />
              </External>
            </div>
            <ReentryVisual />
          </article>
          <div className="additional-work">
            <div className="additional-heading">
              <h3>More explorations</h3>
              <span className="tiny-label">A FEW OTHER THINGS I’VE BUILT</span>
            </div>
            {additionalProjects.map((project, i) => (
              <article
                className={`small-project${project.name === "VCCINet" ? " research-project" : ""}`}
                key={project.name}
              >
                <span className="project-index">0{i + 3}</span>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <span className="small-tech">{project.tech}</span>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="experience-section">
          <div className="container section">
            <SectionTitle
              number="02"
              label="PROFESSIONAL EXPERIENCE"
              title="Engineering at production scale."
            />
            <div className="company-heading">
              <div className="company-identity">
                <span className="microsoft-mark" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <div>
                  <h3>Microsoft</h3>
                  <p>
                    Software Engineer <span>·</span> Microsoft 365 / Copilot
                    Android
                  </p>
                </div>
              </div>
              <span className="date-label">2024 — 2026</span>
            </div>
            <div className="experience-themes">
              {experienceThemes.map((theme, i) => (
                <article key={theme.name}>
                  {i === 0 ? (
                    <Sparkles />
                  ) : i === 1 ? (
                    <ShieldCheck />
                  ) : (
                    <Activity />
                  )}
                  <h4>{theme.name}</h4>
                  <p>{theme.description}</p>
                </article>
              ))}
            </div>
            <div className="internship">
              <div>
                <span className="tiny-label">MICROSOFT · 2023</span>
                <h4>Software Engineering Intern</h4>
              </div>
              <p>
                Integrated Android StrictMode, investigated disk and network
                violations, moved blocking work off the main thread, and built
                tooling to parse StrictMode logs.
              </p>
            </div>
          </div>
        </section>
        <section id="engineering" className="section container">
          <SectionTitle
            number="03"
            label="ENGINEERING TOOLKIT"
            title="The tools behind the work."
            text="A practical stack for building, shipping and understanding software."
          />
          <div className="skills-list">
            {skills.map((group, i) => (
              <div className="skill-row" key={group.name}>
                <span className="skill-index">0{i + 1}</span>
                <h3>{group.name}</h3>
                <p>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="about-section section container">
          <div>
            <p className="eyebrow">
              <span>04</span> / A LITTLE CONTEXT
            </p>
            <h2>
              Care for the system.
              <br />
              Care for the details.
            </h2>
            <p className="about-copy">
              I’m Kritika, a software engineer who enjoys the space between a
              reliable system and a well-made product.
            </p>
            <p className="muted">
              At Microsoft, I worked on production Android experiences for
              Microsoft 365 and Copilot. Today, I’m focused on backend and
              distributed systems, and on useful products enabled by AI. I like
              understanding how things work — and making them work better.
            </p>
          </div>
          <Terminal />
        </section>
        <section
          className="education container"
          aria-labelledby="education-title"
        >
          <div>
            <span className="tiny-label" id="education-title">
              EDUCATION
            </span>
            <h3>Indira Gandhi Delhi Technical University for Women</h3>
            <p>B.Tech · Electronics and Communication Engineering</p>
          </div>
          <div className="education-meta">
            <span>2020 — 2024</span>
            <span>
              CGPA <strong>8.93</strong>
            </span>
          </div>
        </section>
        <section id="contact" className="contact-section container">
          <p className="eyebrow">
            <span>05</span> / WHAT’S NEXT
          </p>
          <div className="contact-heading">
            <h2>
              Let’s build
              <br />
              something <span>useful.</span>
            </h2>
            <a
              className="contact-arrow"
              href={`mailto:${profile.email}`}
              aria-label="Email Kritika"
            >
              <ArrowUpRight size={40} strokeWidth={1.25} />
            </a>
          </div>
          <div className="contact-details">
            <p>
              <span className="status-dot" /> Available for software engineering
              opportunities.
            </p>
            <a href={`mailto:${profile.email}`}>
              {profile.email} <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="brand" href="#home" aria-label="Back to top">
          ks<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Kritika Srivastava</p>
        <div>
          <External href={profile.github}>
            <Github size={15} /> GitHub
          </External>
          <External href={profile.linkedin}>
            <Linkedin size={15} /> LinkedIn
          </External>
          <a href={`mailto:${profile.email}`} className="text-link">
            <Mail size={15} /> Email
          </a>
        </div>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
