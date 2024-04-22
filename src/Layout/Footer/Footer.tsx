import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      {/* Footer content */}
      <span className="footer githubCopyRightFooter">
        {" "}
        <span>
          <FaGithub size={44} />
        </span>{" "}
        &copy; 2024 GitHub (sanskar1900)
      </span>
    </footer>
  );
};

export default Footer;
