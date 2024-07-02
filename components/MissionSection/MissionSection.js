import { useEffect, useRef } from "react";
import styles from "./MissionSection.module.css";

const MissionSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const checkSlide = () => {
      const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
      const containerBottom = image.offsetTop + image.clientHeight;
      const isHalfShown = slideInAt > image.offsetTop;
      const isNotScrolledPast = window.scrollY < containerBottom;

      if (isHalfShown && isNotScrolledPast) {
        image.classList.add(styles.active);
      } else {
        image.classList.remove(styles.active);
      }
    };

    window.addEventListener("scroll", checkSlide);
    return () => {
      window.removeEventListener("scroll", checkSlide);
    };
  }, []);

  return (
    <>
      <div className="mission-section" id="mission-section">
        <div className="mission">
          <div className={`mission-content`}>
            <h3 className={`mission-tag slide-in`}>
              INNOVATIVE SOFTWARE SOLUTIONS
            </h3>
            <h2 className="mission-title start-hidden slide-in-bottom">
              Empowering businesses with cutting-edge technology
            </h2>
            <p
              className="text-2xl slide-in-bottom"
              style={{ marginBottom: "20px" }}
            >
              Buildasoft Ltd, based in Kigali, is dedicated to providing
              innovative software solutions tailored to meet the unique needs of
              businesses.
            </p>
            <a href="#" className="mission-button slide-in-bottom">
              Get in touch
            </a>
          </div>
          <div className="mission-image">
            <img src="/mission_k2.svg" className={styles.slideInBottom} alt="" ref={imageRef} />
          </div>
        </div>
      </div>
      <div id="products-section" style={{ padding: "45px" }}></div>
    </>
  );
};

export default MissionSection;
