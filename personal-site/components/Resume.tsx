"use client";

import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        <div>
          <h3 className="text-2xl">My Professional Resume</h3>
          <p className="mb-6">
            View my full resume to know more about my skills, education, and professional experience.
          </p>
          <a
            href="https://drive.google.com/file/d/1bxV7UFtzVVbr8L06-8OoqtkfRMh5r3ga/view?usp=sharing"
            target="_blank"
            className="text-blue-500"
          >
            View Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
