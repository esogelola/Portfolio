export const ExperienceItem = ({
  icon,
  linkTitle,
  link,
  content,
  first = false,
}) => {
  return (
    <li className="experience-item-container">
      <div className="experience-item">
        <div className="experience-item-icon-container">
          <div className="experience-item-icon"></div>
          {icon}
          {!first && <div className="experience-item-line"></div>}
        </div>
        <div className="experience-item-content">
          {content}{" "}
          {link && (
            <a target="_blank" rel="noreferrer" href={link}>
              {linkTitle}{" "}
              <svg viewBox="0 0 24 24" focusable="false" class=" icon">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </g>
              </svg>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};
