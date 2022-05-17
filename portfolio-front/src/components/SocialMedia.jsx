import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/cr1337-sudo" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/cristiancuello1/" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
