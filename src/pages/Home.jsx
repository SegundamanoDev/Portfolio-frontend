import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    // --- Full-Height Hero Section ---
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 sm:pb-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-left">
          {/* --- Small Intro Line --- */}
          <p className="text-mint-accent font-mono text-lg mb-4 sm:mb-6">
            Hi, my name is
          </p>

          {/* --- Main Name/Headline (Large and Impactful) --- */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-light mb-4">
            Wellington.
          </h1>

          {/* --- Secondary Role Headline (Expanded Focus) --- */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-8 leading-tight">
            I build full-stack web solutions with{" "}
            <span className="text-mint-accent">MERN and Laravel.</span>
          </h2>

          {/* --- Short Value Proposition (Updated) --- */}
          <p className="text-slate-dark max-w-xl mb-12 text-lg">
            I am a versatile Full Stack Developer specializing in creating
            robust, scalable applications using{" "}
            <span className="text-mint-accent">
              React, Node.js, and PHP Laravel
            </span>
            . I build everything from secure REST APIs to high-performance
            e-commerce platforms.
          </p>

          {/* --- Call to Action (CTA) Button --- */}
          <Link
            to="/projects"
            className="inline-block px-8 py-4 border-2 
                                   border-mint-accent text-mint-accent 
                                   font-semibold rounded-md text-lg font-mono 
                                   transition duration-300 shadow-xl 
                                   hover:bg-mint-accent hover:text-navy-bg"
          >
            View My Dual-Stack Projects
          </Link>

          {/* --- New: Social Proof Links --- */}
          <div className="mt-8">
            <SocialLinks direction="horizontal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
