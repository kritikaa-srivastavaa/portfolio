export const profile = {
  name: "Kritika Srivastava",
  email: "kritikaa.srivastavaa@gmail.com",
  github: "https://github.com/kritikaa-srivastavaa",
  linkedin: "https://linkedin.com/in/kritikaa-srivastavaa",
};
export const projects = [
  {
    name: "SignalForge",
    category: "Distributed systems / Observability",
    description:
      "Distributed event processing and incident detection platform.",
    github: `${profile.github}/SignalForge`,
    tech: [
      "Java 21",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Prometheus",
      "Grafana",
      "React",
    ],
  },
  {
    name: "ReEntry",
    category: "Developer productivity / Chrome extension",
    description: "Pick up exactly where you left off.",
    github: `${profile.github}/ReEntry`,
    tech: ["TypeScript", "React", "Chrome Extension APIs", "PostgreSQL"],
  },
];
export const additionalProjects = [
  {
    name: "VCCINet",
    description: "Published technical research.",
    tech: "Research / Publication",
  },
  {
    name: "Chatty",
    description:
      "Real-time conversations with Socket.io and JWT authentication.",
    tech: "MongoDB / Express / React / Node.js",
  },
  {
    name: "Face Recognition Attendance",
    description:
      "Face-recognition attendance system built for the Microsoft Engage Mentorship Program.",
    tech: "Python / OpenCV / Tkinter / MySQL",
  },
];
export const skills = [
  {
    name: "Languages",
    items: [
      "Java",
      "Kotlin",
      "C++",
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
  },
  {
    name: "Backend & systems",
    items: [
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Kafka",
      "Distributed Systems",
      "Event-Driven Architecture",
    ],
  },
  {
    name: "Mobile & frontend",
    items: ["Android", "Android SDK", "Jetpack Compose", "React", "Next.js"],
  },
  {
    name: "Infrastructure & engineering",
    items: [
      "Docker",
      "Git",
      "CI/CD",
      "Flyway",
      "Prometheus",
      "Grafana",
      "Production Debugging",
    ],
  },
  {
    name: "Data & observability",
    items: ["KQL", "Azure Data Explorer", "Power BI"],
  },
  {
    name: "AI & machine learning",
    items: ["scikit-learn", "OpenCV", "NLP", "Transformers", "Hugging Face"],
  },
];
export const experienceThemes = [
  {
    name: "Product & Copilot",
    description:
      "AI search, image sharing and multi-image uploads. Conversation history, asynchronous task tracking, and smoother onboarding and conversation experiences.",
  },
  {
    name: "Reliability",
    description:
      "Production crash and regression investigation. Root-cause analysis across startup, authentication and navigation, with a focus on release readiness.",
  },
  {
    name: "Observability",
    description:
      "Adoption and performance telemetry using Kusto/KQL, Azure Data Explorer and Power BI. Release-health monitoring across approximately 500K telemetry events per month.",
  },
];
