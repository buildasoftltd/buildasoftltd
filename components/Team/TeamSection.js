import React from "react";

const TeamSection = () => {
  return (
    <>
      <div className="team-section" id="team-section">
        <div className="team">
          <div className="team-header">
            <h1>Meet The Founder</h1>
            <p>
              Karangwa Hirwa Julien was 8 years old when he saw first a
              computer. He became fascinated with the computer, wanting to know
              everything and more about the strange machine he's father owned.
              He spent many of his time exploring the desktop and would often be
              late for school or forget he had homework. Such was the thirst for
              knowledge he had. <br />
              <br />
              Things didn't go well for Julien as his parents wanted him to
              focus on other career path such as becoming a doctor or an
              accountant but Julien never gave up on his passion. Whenever he
              got a free time he would explore the web, memorize software
              applications or edit pictures. Eventually at the age of 17 His
              aunt bought him his first 32GB Lenovo laptop and he never looked
              back. <br />
              <br />
              Fast forward to the present day and Karangwa Hirwa Julien is now a
              self-taught software engineer with more than five years
              experience. He has put his skills in many different industry, such
              as in health, government institutions, Tourism, travel systems,
              NGOs etc. To improve the working environment. <br />
              <br />
              Julien stared his own software engineering company with one goal
              in mind. "Change things for the better with all the skills you
              got, as well as improve yourself for the better so that those
              around you can be blessed."
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
                  Being a friend of orphans has made me be one of them in one
                  way or another. I think having no one around does not mean you
                  can not be with someone, and that is why I am always ready to
                  change what's coming my way if it needs a change of course.
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
