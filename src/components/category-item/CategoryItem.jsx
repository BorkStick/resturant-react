import React from "react";

export default function CategoryItem(props) {
  return (
    <div>
      <a href="#">
        <div class="card">
          <img
            src="https://source.unsplash.com/featured/500x400/?tacos"
            class="card-img-top"
            alt="..."
          />
        </div>
        <button href="/" class="btn btn-lg btn-dark rounded-0 mt-2 w-100">
          {props.category}
        </button>
      </a>
    </div>
  );
}
