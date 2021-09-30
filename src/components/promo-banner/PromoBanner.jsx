import React from "react";
import './PromoBanner.css'

export default function PromoBanner() {
  return (
    <div>
      <div class="col-xxl-8 px-4 py-5 jumbotron">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6"></div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">TACOS TACOS TACOS</h1>
            <p class="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis veniam, reprehenderit iusto repellat qui soluta.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
