import React from 'react'

const MissionSection = () => {
  return (
    <>
      <div className="mission-section" id="mission-section">
          <di className="mission">
            <div className="mission-content">
              <h3 className='mission-tag'>INNOVATIVE SOFTWARE SOLUTIONS</h3>
              <h2 className='mission-title'>Empowering businesses with cutting-edge technology</h2>
              <p className='text-2xl' style={{ marginBottom: "20px" }}>
                Buildasoft Ltd, based in Kigali, is dedicated to providing innovative software solutions tailored to meet the unique needs of businesses.
              </p>
              <a href="#" className='mission-button'>Get in touch</a>
            </div>
            <div className="mission-image">
              <img src="/mission_k2.svg" alt=""/>
            </div>
          </di>
      </div>
    </>
  )
}

export default MissionSection
