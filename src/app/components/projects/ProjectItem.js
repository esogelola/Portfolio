import { Link } from "react-router-dom";

export const ProjectItem = ({
  title,
  tags,
  description,
  image,
  status,
  winner,
  slug,
}) => {
  return (
    <li
      className="project-item-container  my-2"
      data-toggle="tooltip"
      title={title}
    >
      <div className="project-item">
        <div className="project-image-container  ">
          <Link to={`/${slug}`}>
            <img alt="logo" className="img" src={`assets/${slug}/${image}`} />
          </Link>
        </div>
        <div className="project-item-content">
          <div className="project-item-title">
            <Link to={`/${slug}`}>{title}</Link>
            <div className="project-tech-list">
              {tags &&
                tags.map((tagName, index) => {
                  return (
                    <span className="project-tech-item" key={index}>
                      {tagName}
                    </span>
                  );
                })}

              {status === 0 && (
                <span className=" project-tech-item  bg-warning text-white">
                  In-progress
                </span>
              )}
              {status === 1 && (
                <span className=" project-tech-item  bg-danger text-white">
                  Scrapped
                </span>
              )}
              {winner && (
                <span className=" project-tech-item  winner-pill">winner</span>
              )}
            </div>
          </div>

          <p className="project-item-description">{description}</p>
        </div>
      </div>
    </li>
  );
};
