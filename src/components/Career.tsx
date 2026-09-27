import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>QIS College of Engg.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Ranked in the Top 5% of the college cohort. Built deep foundations in Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and OOP in Java.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Dev</h4>
                <h5>Startup Client (NDA)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Independently designed, built, and deployed a responsive business/marketing website end-to-end with clean UI/UX, cross-browser compatibility, and SEO-conscious markup.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Academic & Group Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and shipped full-stack MERN applications across 3+ projects, architecting RESTful APIs with JWT security, clean service layers, and Agile/Scrum planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
