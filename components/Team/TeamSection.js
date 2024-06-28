import React from "react";

const TeamSection = () => {
  return (
    <>
      <div className="team-section">
        <div className="team">
          <div className="team-header">
            <h4 className="mission-tag">THE FOUNDER</h4>
            <h1 style={{paddingBottom: "10px"}}>Meet Our Visionary Founder</h1>
            <p>
              Karangwa Hirwa Julien, founder and Chief Technology Officer of
              Buildasoft Ltd, began his tech journey at just 8 years old, driven
              by an insatiable curiosity for computers. Despite early challenges
              and traditional expectations, his passion for technology never
              faltered. Today, Julien is a self-taught software engineer with
              over six years of experience across healthcare, government,
              tourism, and NGOs.
              <br />
              <br />
              Julien's professional background includes senior roles at
              prominent companies like Andela and TrustStamp, where he honed his
              skills in software architecture and full-stack development. At
              Buildasoft Ltd, he leads a team dedicated to creating innovative
              software solutions.
              <br />
              <br />
              With a mission to drive positive change through continuous
              self-improvement and impactful software engineering, Julien
              ensures that Buildasoft Ltd remains at the forefront of delivering
              exceptional web and mobile applications. Join Buildasoft Ltd and
              experience the expertise and vision of a leader committed to
              excellence and innovation in the tech industry. <br />
              <br />
            </p>
          </div>
          <div className="team-group ">
            <div className="team-member">
              <div className="member-photo">
                <img src="/julien-dark.jpeg" alt="" />
              </div>
              <div className="member-details">
                <h3 className="text-2xl">Karangwa Hirwa Julien</h3>
                <span className="title" style={{ fontWeight: "300" }}>
                  Founder, and CTO at Buildasoft Ltd
                </span>
                <p style={{ fontWeight: "400" }}>
                  In every line of code I write, I see a chance to make
                  someone's life a little better. Technology isn't just about
                  solving problems; it's about creating opportunities for
                  connection, growth, and hope.
                </p>
                <div className="social-icon">
                  <span>
                    <a href="https://x.com/hirwajulien" target="_blank">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 1200 1227"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="left-team">
            <img src="Path 344.svg" alt="" />
          </div>
          <div className="right-team">
            <img src="Path 344.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
