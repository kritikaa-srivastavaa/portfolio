"use client";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
const responses = {
  whoami:
    "Kritika Srivastava. Software engineer. Ex-Microsoft. I build reliable systems and thoughtful software products.",
  projects:
    "01 SignalForge → distributed event processing\n02 ReEntry → a better way to resume work",
  stack:
    "Java · Kotlin · TypeScript\nSpring Boot · Kafka · PostgreSQL · Android · React",
  help: "Try whoami, projects or stack. Type clear to reset.",
};
export function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState(responses.whoami);
  const [last, setLast] = useState("whoami");
  function run(value: string) {
    const key = value.trim().toLowerCase();
    if (!key) return;
    setLast(key);
    setOutput(
      key === "clear"
        ? ""
        : Object.hasOwn(responses, key)
          ? responses[key as keyof typeof responses]
          : `Command not found: ${key}. Try help.`,
    );
    setCommand("");
  }
  return (
    <div className="terminal">
      <div className="terminal-top">
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>a little more about me</span>
        <span>~/kritika</span>
      </div>
      <div className="terminal-body">
        <p>
          <span className="mint">❯</span> {last}
        </p>
        <p className="terminal-output" aria-live="polite">
          {output}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            run(command);
          }}
        >
          <label htmlFor="command" className="mint">
            ❯<span className="sr-only">Terminal command</span>
          </label>
          <input
            id="command"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            placeholder="Type a command…"
            maxLength={120}
          />
          <button type="submit" aria-label="Run command">
            ↵
          </button>
        </form>
        <div className="terminal-commands">
          {["whoami", "projects", "stack"].map((c) => (
            <button key={c} onClick={() => run(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export function HeroEntrance({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={reduced ? {} : { y: [12, 0] }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
