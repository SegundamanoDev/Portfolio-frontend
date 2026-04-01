import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 sm:pb-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-left">
          <p className="text-mint-accent font-mono text-lg mb-4 sm:mb-6">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-light mb-4">
            Wellington Oluwasegun Akitikori.
          </h1>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-8 leading-tight">
            I build production-ready{" "}
            <span className="text-mint-accent">MERN Stack applications.</span>
          </h2>
          
          <p className="text-slate-dark max-w-2xl mb-12 text-lg leading-relaxed">
            I am a <span className="text-slate-light font-semibold">Full Stack Developer</span> specializing in 
            the MERN stack with a focus on <span className="text-mint-accent">Fintech and SaaS.</span>  
            I engineer secure, scalable systems featuring complex 
            <span className="text-mint-accent"> authentication, RBAC, and transaction-based workflows.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/projects"
              className="inline-block px-8 py-4 border-2 
                         border-mint-accent text-mint-accent 
                         font-semibold rounded-md text-lg font-mono 
                         transition duration-300 shadow-xl 
                         hover:bg-mint-accent hover:text-navy-bg"
            >
              View My Projects
            </Link>
            
            <a 
              href="/Wellington_Akitikori_Resume.pdf" 
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 text-slate-light 
                         font-semibold text-lg font-mono underline 
                         decoration-mint-accent underline-offset-8 
                         hover:text-mint-accent transition duration-300"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-12">
            <SocialLinks direction="horizontal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
