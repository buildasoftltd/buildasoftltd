import React from "react";

const TeamSection = () => {
  return (
    <>
      <div className="team-section" id="team-section">
        <div className="team">
          <div className="team-header">
            <h1>Meet The Founder</h1>
            <p>
              Karangwa Hirwa Julien's journey into the world of computers
              commenced at the tender age of 8, a moment that ignited an
              insatiable curiosity within him. Intrigued by his father's
              computer, he embarked on a quest to unravel the mysteries of this
              captivating machine. In his pursuit of knowledge, Julien often
              found himself engrossed in exploring the desktop, occasionally
              forgetting about school assignments. His thirst for knowledge was
              relentless.
              <br />
              <br />
              Julien faced opposition from his parents, who aspired for him to
              follow a more conventional career path, such as becoming a doctor
              or an accountant. However, his unwavering passion for computers
              prevailed. He dedicated every free moment to delving into the vast
              expanse of the internet, mastering various software applications,
              and refining his skills in image editing. At the age of 17, his
              aunt gifted him a 32GB Lenovo laptop, a pivotal moment that
              propelled him further into the world of technology.
              <br />
              <br />
              Today, Karangwa Hirwa Julien stands as a self-taught software
              engineer with over six years of experience. He has leveraged his
              expertise across diverse industries, including healthcare,
              government institutions, tourism, travel systems, and
              non-governmental organizations, all with the aim of enhancing
              operational efficiency. <br />
              <br />
              Julien has established his own software engineering company with a
              singular mission: "Drive positive change through your skills and
              continuous self-improvement, ensuring that those around you are
              blessed by your endeavors."
            </p>
          </div>
          <div className="team-group">
            <div className="team-member">
              <div className="member-photo">
                <img src="/julien-dark.jpeg" alt="" />
              </div>
              <div className="member-details">
                <h3>Karangwa Hirwa Julien</h3>
                <span className="title" style={{ fontWeight: "300" }}>
                  Founder, and CTO at Buildasoft Ltd
                </span>
                <p style={{ fontWeight: "400" }}>
                  My commitment to being a friend to orphans has, in a profound
                  sense, made me feel akin to them. I firmly believe that
                  solitude should never equate to loneliness, and as such, I
                  remain open to reshaping my path whenever circumstances call
                  for it.
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
