import React from "react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className="card errors border-danger">
      <div className="alert-danger card-header">Errors</div>
      <ul className="list-group list-group-flush">
        {errors.map((error, i) => {
          return (
            <li key={i} className="list-group-item text-danger">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
