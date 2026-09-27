import "./styles/Work.css";
import WorkImage from "./WorkImage";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "NESTAWAY",
    category: "Property Rental Platform",
    tools: "Node.js, Express.js, MongoDB, JWT/Passport.js, Mapbox, Cloudinary",
    description:
      "Full-stack property marketplace with listing discovery, dynamic pricing/GST, Mapbox location search, reviews, ratings, and Cloudinary media uploads.",
    image: "/images/nestaway.png",
    github: "https://github.com/ShafiSK25/NESTAWAY",
    live: "https://nestaway-siz8.onrender.com/listings",
  },
  {
    title: "Re:Cinema",
    category: "Movie Ticket Booking",
    tools: "Next.js 14, TypeScript, Prisma ORM, PostgreSQL, JWT",
    description:
      "Full-stack cinema booking platform with seat selection, tiered pricing, simulated payments, QR-coded digital tickets, and role-based admin analytics.",
    image: "/images/recinema.png",
    github: "https://github.com/ShafiSK25/Re-Cinema",
    live: "https://re-cinema.onrender.com/",
  },
  {
    title: "Spotify Clone",
    category: "Web Player UI Clone",
    tools: "HTML5, CSS3, Flexbox, JavaScript",
    description:
      "Pixel-accurate, responsive Spotify web player clone using Flexbox and reusable component-based CSS styling.",
    image: "/images/spotify.png",
    github: "https://github.com/ShafiSK25/MernDev/tree/main/Spotifycolne",
    live: "https://replicatespotify.netlify.app/",
  },
  {
    title: "Startup Client",
    category: "Confidential Project (NDA)",
    tools: "React.js, Modern CSS, Responsive Design, SEO",
    description:
      "Independently designed, built, and deployed a responsive business website end-to-end for an early-stage startup client under NDA.",
    image: "",
    github: "https://github.com/ShafiSK25",
    live: "",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-auto-indicator">
            <span className="work-pulse-dot"></span>
            Auto-scrolling • Hover to pause
          </div>
        </div>
      </div>

      <div className="work-marquee-wrapper">
        <Marquee
          pauseOnHover={true}
          speed={45}
          gradient={false}
          autoFill={true}
          className="work-marquee"
        >
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div style={{ marginTop: "12px", display: "flex", gap: "16px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="disable"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "13px",
                        color: "var(--accentColor)",
                      }}
                    >
                      GitHub <MdArrowOutward />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="disable"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "13px",
                        color: "#eae5ec",
                      }}
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.live || project.github}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Work;
