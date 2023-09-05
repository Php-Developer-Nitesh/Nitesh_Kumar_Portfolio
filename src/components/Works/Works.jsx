import React from "react";
import "./Works.css";
import Portfolio1_1 from "../../assets/portfolio-1_1.jpg";
import Portfolio2_2 from "../../assets/portfolio-2_2.jpg";
import Portfolio3_3 from "../../assets/portfolio-3_3.jpg";
import Portfolio4_4 from "../../assets/portfolio-4_4.jpg";
import Portfolio5_5 from "../../assets/portfolio-5_5.jpg";
import Portfolio6_6 from "../../assets/portfolio-6_6.jpg";
const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="WorksDesc">
        As a full-stack developer, I architect and develop end-to-end web
        solutions. I create captivating user interfaces, implement robust
        server-side logic, manage databases, and ensure seamless functionality.
        My role blends creative design with technical precision, transforming
        concepts into fully functional, user-friendly web applications,
        delivering exceptional digital experiences.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1_1} alt="Portfolio_img" className="worksImg" />
        <img src={Portfolio2_2} alt="Portfolio_img" className="worksImg" />
        <img src={Portfolio3_3} alt="Portfolio_img" className="worksImg" />
        <img src={Portfolio4_4} alt="Portfolio_img" className="worksImg" />
        <img src={Portfolio5_5} alt="Portfolio_img" className="worksImg" />
        <img src={Portfolio6_6} alt="Portfolio_img" className="worksImg" />
      </div>
      <button className="worksbtn">See More</button>
    </section>
  );
};
export default Works;
