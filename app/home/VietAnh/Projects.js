import React from "react";

export default function Projects() {
  return (
    <div className="mx-auto max-w-[1564px] px-4 py-8">
      <div className="py-8" id="projects">
        <h3 className="border-b border-gray-200 pb-4 text-2xl font-semibold">
          Projects
        </h3>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-1/2 gap-4">
          <ProjectItem
            title="Summer House"
            img="https://www.w3schools.com/w3images/house5.jpg"
          />
        </div>
        <div className="w-1/2 gap-4" >
          <ProjectItem
            title="Brick House"
            img="https://www.w3schools.com/w3images/house2.jpg"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-1/2 gap-4">
          <ProjectItem
            title="Summer House"
            img="https://www.w3schools.com/w3images/house2.jpg"
          />
        </div>
        <div className="w-1/2 gap-4">
          <ProjectItem
            title="Brick House"
            img="https://www.w3schools.com/w3images/house5.jpg"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-1/2 gap-4">
          <ProjectItem
            title="Renovated"
            img="https://www.w3schools.com/w3images/house3.jpg"
          />
        </div>
        <div className="w-1/2 gap-4">
          <ProjectItem
            title="Barn House"
            img="https://www.w3schools.com/w3images/house4.jpg"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-1/2 gap-4">
          <ProjectItem
            title="Renovated"
            img="https://www.w3schools.com/w3images/house4.jpg"
          />
        </div>
        <div className="w-1/2 gap-4">
          <ProjectItem
            title="Barn House"
            img="https://www.w3schools.com/w3images/house3.jpg"
          />
        </div>
      </div>
    </div>
  );
}
function ProjectItem({ title, img }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 z-10 bg-black px-3 py-2 text-sm font-medium text-white">
        {title}
      </div>
      <img
        src={img}
        alt={title}
        className="h-64 w-full object-cover"
      />
    </div>
  );
}