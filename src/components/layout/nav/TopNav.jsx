import React from "react";
import "./TopNav.css";

export default function TopNav() {
  return (
    <div className="pb-5">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-flex">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            BorkBurger
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/menu">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/store-locator">
                  Locations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/store-locator">
                  Offers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            <button class="btn btn-success me-auto" type="submit">
              Start Order
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
