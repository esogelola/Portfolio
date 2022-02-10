export const ProjectItem = ({ title, tags, description, image, status }) => {
  return (
    <li
      className="project-item-container  my-2"
      data-toggle="tooltip"
      title={title}
    >
      <div className="project-item">
        <div className="project-image-container  ">
          <a href="/">
            <img alt="logo" className="img" src={`assets/${image}`} />
          </a>
        </div>
        <div className="project-item-content">
          <div className="project-item-title">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=fr.bdb.app"
            >
              {title}
            </a>
            <div className="project-tech-list">
              {tags &&
                tags.map((tagName) => {
                  return <span className="project-tech-item">{tagName}</span>;
                })}

              {status === 0 && (
                <span class=" project-tech-item  bg-warning text-white">
                  In-progress
                </span>
              )}
              {status === 1 && (
                <span class=" project-tech-item  bg-danger text-white">
                  Scrapped
                </span>
              )}
            </div>
          </div>

          <p className="project-item-description">{description}</p>
        </div>
      </div>
    </li>
  );
};
