import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  const { title, summary, techStack, githubLink, liveLink, image } = project;

  const hasValidImage =
    image && image !== "no-photo.jpg" && image.startsWith("http");

  // Determine the primary destination
  const mainLink = liveLink || githubLink;

  // Function to handle clicks on the links/icons to prevent them from
  // triggering the main card's redirect
  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <a
      href={mainLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group" // Group allows us to trigger effects on children
    >
      <div
        className="bg-sapphire-bg p-6 rounded-lg shadow-xl hover:shadow-2xl 
                   transition duration-300 transform hover:-translate-y-2 
                   flex flex-col h-full border border-sapphire-bg hover:border-mint-accent/50"
      >
        {hasValidImage && (
          <div className="block mb-4 rounded-md overflow-hidden aspect-video">
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <header className="mb-4 flex justify-between items-start">
          <TbBulb size={30} className="text-mint-accent mt-1" />
          <div
            className="flex space-x-3 text-slate-dark"
            onClick={handleChildClick}
          >
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="hover:text-mint-accent transition-colors"
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
                className="hover:text-mint-accent transition-colors"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </header>

        {/* Highlighting the title when the whole card is hovered */}
        <h4 className="text-2xl font-bold text-slate-light mb-2 group-hover:text-mint-accent transition duration-300">
          {title}
        </h4>

        <p className="text-slate-dark text-base mb-4 grow">{summary}</p>

        <footer className="mt-auto">
          <ul className="flex flex-wrap text-xs font-mono text-slate-dark">
            {techStack.map((tech, index) => (
              <li key={index} className="mr-4 mb-1 opacity-75" title={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </a>
  );
};

export default ProjectCard;
