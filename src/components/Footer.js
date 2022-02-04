import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 absolute">
      <p className="text-white text-center leading-loose w-100 tracking-wider">
        Free Unlimited Insurance For Our Cars
      </p>
      <div className="flex items-center text-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faChevronDown} color="white"/>
      </div>
    </footer>
  );
}
