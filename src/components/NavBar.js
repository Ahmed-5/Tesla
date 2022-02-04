import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NavBar() {
  const toggleNavbar = () => {
    document.getElementById("collapse").classList.toggle("hidden");
    document.getElementById("collapse").classList.toggle("block");
  };

  return (
    <nav className="flex justify-between items-center text-white px-5 py-3 text-sm absolute top-0 left-0 right-0">
      <div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTMiPjxwYXRoIGQ9Ik0wIDBjLjMgMS4xIDEuMyAyLjMgMi42IDIuNmg0LjFsLjIuMVYxM2gyLjVWMi43bC4yLS4xaDQuMWMxLjQtLjQgMi4zLTEuNSAyLjYtMi42SDB6bTc3LjggMTNjMS4zLS41IDItMS41IDIuMi0yLjZINjguN1YtLjFoLTIuNXYxM2gxMS42ek00Ny4zIDIuNmg5YzEuMy0uNCAyLjUtMS40IDIuNy0yLjZINDQuOHY3LjdoMTEuNnYyLjdoLTkuMWMtMS40LjQtMi42IDEuNC0zLjIgMi42SDU5VjUuMkg0Ny4zVjIuNnptMzguMSAyLjZWMTNIODhWNy44aDkuMVYxM2gyLjZWNS4yTTI1LjIgMi42aDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjIgMS40IDIuMyAyLjcgMi42bTAgNS4yaDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjEgMS40IDIuMyAyLjcgMi42bTAgNS4yaDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42aC0xNWMuNCAxLjIgMS40IDIuNCAyLjcgMi42TTg3LjcgMi42aDkuN2MxLjMtLjMgMi40LTEuNSAyLjYtMi42SDg1Yy4zIDEuMiAxLjMgMi40IDIuNyAyLjYiIGZpbGw9IiNGRkYiLz48L3N2Zz4="
          alt="logo"
          className="h-4"
        />
      </div>
      <div className="text-base hidden md:block">
        <a href="/" className="mx-2 text-white hover:text-gray-200">
          Model S
        </a>
        <a href="/" className="mx-2 text-white hover:text-gray-200">
          Model 3
        </a>
        <a href="/" className="mx-2 text-white hover:text-gray-200">
          Model X
        </a>
        <a href="/" className="mx-2 text-white hover:text-gray-200">
          Model Y
        </a>
        <a href="/" className="mx-2 text-white hover:text-gray-200">
          Roadster
        </a>
      </div>
      <div className="text-base flex items-center mx-2 text-white hover:text-gray-200">
        <a href="/" className="mx-2 text-white hover:text-gray-200">
          Shop
        </a>
        <a href="/" className="mx-2 text-white hover:text-gray-200">
          Sign In
        </a>
        <i className="text-white mx-2">
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            className="hover:text-gray-200 cursor-pointer"
          />
        </i>
      </div>
    </nav>
  );
}
