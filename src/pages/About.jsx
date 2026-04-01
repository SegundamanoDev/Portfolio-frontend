import React from "react";

const skills = [
  "React.js & Next.js",
  "TypeScript",
  "Node.js & NestJS",
  "Redux Toolkit",
  "MongoDB & MySQL",
  "RESTful APIs",
  "JWT Authentication",
  "RBAC (Access Control)",
  "Socket.io",
  "System Design",
  "CI/CD",
  "Postman",
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* --- Section Title --- */}
        <h3 className="text-3xl font-bold text-slate-light mb-12 flex items-center">
          <span className="text-mint-accent font-mono mr-3">01.</span>
          About Me
          <span className="grow ml-4 border-t border-slate-dark opacity-30"></span>
        </h3>

        {/* --- Content Grid --- */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate-dark text-lg space-y-4">
            <p>
              Hello! I'm Wellington, a{" "}
              <span className="text-mint-accent">Full Stack Developer</span>{" "}
              specializing in the MERN stack with a strong focus on 
              <span className="text-mint-accent"> fintech and SaaS applications</span>.
            </p>

            <p>
              My journey is rooted in intensive 
              <span className="text-mint-accent"> self-directed software engineering study</span>, 
              where I've mastered Computer Science fundamentals and modern web architecture 
              to build production-ready systems.
            </p>

            <p>
              I specialize in delivering secure, scalable projects featuring 
              <span className="text-mint-accent">
                {" "}
                complex authentication, transaction-based workflows, and 
                role-based access control (RBAC)
              </span>. 
              My approach prioritizes clean architecture and optimized database design 
              to ensure high performance and 99.9% uptime.
            </p>

            <p className="pt-4">
              Here are a few technologies I’ve been working with recently:
            </p>

            {/* --- Skills Grid --- */}
            <ul className="grid grid-cols-2 gap-y-2 text-sm font-mono text-slate-dark">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-mint-accent mr-2 text-xl leading-none">
                    ▹
                  </span>{" "}
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* --- Right Column: Photo --- */}
          <div className="md:col-span-1 flex justify-center items-start pt-4">
            <div className="relative w-full max-w-xs transition-all duration-300">
              <div className="w-full pt-[100%] rounded-lg overflow-hidden relative border-2 border-mint-accent/20">
                <img
                  src="/wellington_headshot.jpg"
                  alt="Wellington Oluwasegun Akitikori"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-mint-accent opacity-0 hover:opacity-100 transition duration-500 transform translate-x-3 translate-y-3 z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
