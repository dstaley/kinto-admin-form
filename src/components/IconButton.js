import React from "react";

const PlusIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-plus-circle-fill"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
    />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-arrow-up-circle-fill"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-arrow-down-circle-fill"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
    />
  </svg>
);

const XIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-x-circle-fill"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
    />
  </svg>
);

export default function IconButton(props) {
  const { type = "outline-secondary", icon, className, ...otherProps } = props;

  let iconComponent = <svg />;
  switch (icon) {
    case "plus":
      iconComponent = <PlusIcon />;
      break;
    case "arrow-up":
      iconComponent = <ArrowUpIcon />;
      break;
    case "arrow-down":
      iconComponent = <ArrowDownIcon />;
      break;
    case "remove":
      iconComponent = <XIcon />;
      break;
    default:
      break;
  }

  return (
    <button
      type="button"
      className={`btn btn-${type} ${className}`}
      {...otherProps}>
      {iconComponent}
    </button>
  );
}
