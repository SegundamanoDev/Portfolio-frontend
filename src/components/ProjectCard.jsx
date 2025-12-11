import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  const { title, summary, techStack, githubLink, liveLink, image } = project;

  // Function to check if the image URL is valid and not the default placeholder
  const hasValidImage =
    image && image !== "no-photo.jpg" && image.startsWith("http");

  return (
    <div
      className="bg-sapphire-bg p-6 rounded-lg shadow-xl hover:shadow-2xl 
                   transition duration-300 transform hover:-translate-y-1 
                   flex flex-col h-full border border-sapphire-bg hover:border-mint-accent/50"
    >
      {/* --- RE-ADDED: Image Display Section (Conditionally Rendered) --- */}
      {hasValidImage && (
        <a
          href={liveLink || githubLink} // Link the image to the live demo or GitHub
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
          className="block mb-4 rounded-md overflow-hidden aspect-video group"
        >
          <img
            src={image} // Uses the public image URL from MongoDB
            alt={`Screenshot of ${title}`}
            // Styling for smooth hover effect and consistent aspect ratio
            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </a>
      )}
      {/* ------------------------------------------------------------- */}

      {/* --- Card Header: Icons & Title --- */}
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
          {/* Use the new property: liveLink */}
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

      {/* --- Content --- */}
      <h4 className="text-2xl font-bold text-slate-light mb-2 hover:text-mint-accent transition duration-300">
        {title}
      </h4>

      {/* Use the new property: summary (for the short text on the card) */}
      <p className="text-slate-dark text-base mb-4 grow">{summary}</p>

      {/* --- Footer: Technologies --- */}
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
