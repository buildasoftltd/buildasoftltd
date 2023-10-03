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
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 6.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L11.414 12l2.293 2.293a1 1 0 11-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 12 6.293 9.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
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
