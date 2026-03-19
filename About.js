import React from 'react';

function TeamMember({ name, role, img }) {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={img} alt={name} style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p className="w3-opacity">{role}</p>
      <p>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
        pellentesque elementum.
      </p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div>
      {/* Section About */}
      <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Section Team - Sử dụng component TeamMember đã tạo */}
      <div className="w3-row-padding w3-grayscale">
        <TeamMember 
          name="John Doe" 
          role="CEO & Founder" 
          img="https://www.w3schools.com/w3images/team2.jpg" 
        />
        <TeamMember 
          name="Jane Doe" 
          role="Architect" 
          img="https://www.w3schools.com/w3images/team1.jpg" 
        />
        <TeamMember 
          name="Mike Ross" 
          role="Architect" 
          img="https://www.w3schools.com/w3images/team3.jpg" 
        />
        <TeamMember 
          name="Dan Star" 
          role="Architect" 
          img="https://www.w3schools.com/w3images/team4.jpg" 
        />
      </div>
    </div>
  );
}