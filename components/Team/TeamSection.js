import React from 'react'

const TeamSection = () => {
  return (
    <>
       <div className="team-section" id="team-section">
        <div className="team">
          <div className="team-header">
            <h1>Meet The Founder</h1>
            <p>
              Karangwa Hirwa Julien was 8 years old when he saw first a computer. He became fascinated with the computer, wanting to know everything and more about the strange machine he's father owned. He spent many of his time exploring the desktop and would often be late for school or forget he had homework. Such was the thirst for knowledge he had. <br /><br />
              Things didn't go well for Julien as his parents wanted him to focus on other career path such as becoming a doctor or an accountant but Julien never gave up on his passion. Whenever he got a free time he would explore the web, memorize software applications or edit pictures. Eventually at the age of 17 His aunt bought him his first 32GB Lenovo laptop and he never looked back. <br /><br />
              Fast forward to the present day and Karangwa Hirwa Julien is now a self-taught software engineer with more than five years experience. He has put his skills in many different industry, such as in health, government institutions, Tourism, travel systems, NGOs etc. To improve the working environment. <br /><br />
              Julien stared his own software engineering company with one goal in mind. "Change things for the better with all the skills you got, as well as improve yourself for the better so that those around you can be blessed."
            </p>
          </div>
          <div className="team-group">
            <div className="team-member">
              <div className="member-photo"><img src="/julien-dark.jpeg" alt=""/></div>
              <div className="member-details">
                <h3>Karangwa Hirwa Julien</h3>
                <span className="title" style={{fontWeight: '300'}}>Founder, and CEO at Buildasoft ltd</span>
                <p style={{fontWeight: '400'}}>
                  Being a friend of orphans has made me be one of them in one way or another. I think having no one around does not mean you can not be with someone, and that is why I am always ready to change what's coming my way if it needs a change of course.
                </p>
                <div className="social-icon">
                  <span>
                    <a href="https://twitter.com/hirwajulien" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="27.214" height="27.214" viewBox="0 0 27.214 27.214"><path d="M13.607,0A13.607,13.607,0,1,0,27.214,13.607,13.607,13.607,0,0,0,13.607,0ZM19.82,10.609q.009.2.009.4A8.826,8.826,0,0,1,10.942,19.9h0a8.84,8.84,0,0,1-4.787-1.4,6.352,6.352,0,0,0,.745.043A6.267,6.267,0,0,0,10.779,17.2a3.127,3.127,0,0,1-2.918-2.169,3.113,3.113,0,0,0,1.411-.054,3.124,3.124,0,0,1-2.506-3.061c0-.014,0-.027,0-.04a3.1,3.1,0,0,0,1.415.391A3.126,3.126,0,0,1,7.215,8.1a8.867,8.867,0,0,0,6.438,3.263,3.125,3.125,0,0,1,5.322-2.848,6.264,6.264,0,0,0,1.983-.758,3.135,3.135,0,0,1-1.373,1.727,6.229,6.229,0,0,0,1.793-.492A6.347,6.347,0,0,1,19.82,10.609Zm0,0" fill="#1DA1F2"/></svg></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="left-team">
            <img src="Path 344.svg" alt=""/>
          </div>
          <div className="right-team">
            <img src="Path 344.svg" alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamSection
