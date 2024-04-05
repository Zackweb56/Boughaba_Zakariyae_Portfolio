import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "./MoveToNextPage.css";

export default function MoveToNextPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMoveClick = () => {
    localStorage.setItem("activeLink", props.move_link);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="move_to_next_page">
      <div className="container d-flex justify-content-around align-items-center">
        <h1 className="move_heading">{props.move_title}</h1>
        <Link
          to={props.move_link}
          onClick={() => handleMoveClick()}
        >
          <div className="arrow_icon">
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
    </div>
  );
}
