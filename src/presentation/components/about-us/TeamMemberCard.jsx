"use client";
import { Github, Linkedin } from "lucide-react";

export default function TeamMemberCard({ name, linkedin, github }) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card">
      <h3 className="text-xl font-semibold text-foreground mb-3">{name}</h3>
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 border border-border bg-card px-2 py-1 rounded-md cursor-pointer transform hover:scale-105 transition-all duration-200"
          onClick={() => window.open(linkedin, "_blank")}
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </button>
        <button
          className="flex items-center gap-2 border border-border bg-card px-2 py-1 rounded-md cursor-pointer transform hover:scale-105 transition-all duration-200"
          onClick={() => window.open(github, "_blank")}
        >
          <Github className="w-4 h-4" />
          GitHub
        </button>
      </div>
    </div>
  );
}