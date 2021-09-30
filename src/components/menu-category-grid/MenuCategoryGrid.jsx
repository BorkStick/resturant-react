import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./MenuCategoryGrid.css";

export default function MenuCategoryGrid(props) {
  return (
    <div class="container-fluid pt-5">
      <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-3 ">
        <div class="col pb-2">
          <CategoryItem category="Taco"/>
        </div>
        <div class="col pb-2">
        <CategoryItem category="Chicken"/>
        </div>
        <div class="col pb-2">
        <CategoryItem category="Beef"/>
        </div>
        <div class="col pb-2">
        <CategoryItem category="Test"/>
        </div>
      </div>
    </div>
  );
}
