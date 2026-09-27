import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
  isNDA?: boolean;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && props.image && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {props.image ? (
          <img src={props.image} alt={props.alt} />
        ) : (
          <div className="work-nda-placeholder">
            <FaLock className="work-nda-icon" />
            <h4>Confidential Project</h4>
            <p>Protected under Non-Disclosure Agreement (NDA)</p>
            <span className="work-nda-tag">Client Proprietary</span>
          </div>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
