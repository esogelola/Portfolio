import React from "react";

export default function Skill({
  index,
  delay = 0,
  title = "",
  description = "",
}) {
  const icons = ["📚", "🧩", "🧰"];

  return (
    <>
      <span className="">{icons[index]}</span>

      <h5 className="mb-0">{title}</h5>
      <p className="mb-0">{description}</p>
    </>
  );
}
