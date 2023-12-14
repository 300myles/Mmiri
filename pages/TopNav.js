import React from "react";
import { Link } from "react-router-dom";

export default function TopNav () {
  return (
    <div className="topnave">
    
      <div>
      <Link className="active" to="index.html">
        My Movies
      </Link>
      </div>
    
      <div className="search-container">
        <form role="search" id="form">
          <input type="search" id="query" name="s" placeholder="Search Movies..." />
        </form>
      </div>
      
    </div>
    
  );
}