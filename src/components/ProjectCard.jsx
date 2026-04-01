import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  const { title, summary, techStack, githubLink, liveLink, image } = project;

  const hasValidImage =
    image && image !== "no-photo.jpg" && image.startsWith("http");

  return (
    <div
      className="bg-sapphire-bg p-6 rounded-lg shadow-xl hover:shadow-2xl 
                   transition duration-300 transform hover:-translate-y-1 
                   flex flex-col h-full border border-sapphire-bg hover:border-mint-accent/50"
    >
      {hasValidImage && (
        <a
          href={liveLink || githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
          className="block mb-4 rounded-md overflow-hidden aspect-video group"
        >
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            // Styling for smooth hover effect and consistent aspect ratio
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </a>
      )}

      <header className="mb-4 flex justify-between items-start">
        <TbBulb size={30} className="text-mint-accent mt-1" />
        <div className="flex space-x-3 text-slate-dark">
          {/* Use the new property: githubLink */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="hover:text-mint-accent"
            >
              <FiGithub size={20} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo Link"
              className="hover:text-mint-accent"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </header>

      <h4 className="text-2xl font-bold text-slate-light mb-2 hover:text-mint-accent transition duration-300">
        {title}
      </h4>

      <p className="text-slate-dark text-base mb-4 grow">{summary}</p>

      <footer className="mt-auto">
        {/* Use the new property: techStack */}
        <ul className="flex flex-wrap text-xs font-mono text-slate-dark space-x-4">
          {techStack.map((tech, index) => (
            <li key={index} className="opacity-75" title={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default ProjectCard;
