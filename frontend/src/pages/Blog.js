import React from "react";
import BreadCrum from "../components/BreadCrum";
import Card from "../components/Card";
import image from "../assets/contact7.jpg";

const Blog = () => {
  return (
    <div className="pb-5 mb-5">
      <BreadCrum
        title="Bloge page !"
        desc="There we can promote your buseniss like below !"
        src={image}
      />
      <Card />
    </div>
  );
};

export default Blog;
