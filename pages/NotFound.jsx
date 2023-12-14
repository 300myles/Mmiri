import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-404">
      <h1 className="page-404-message">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/" className="page-404-return">
        Return to Home
      </Link>
    </div>
  );
}