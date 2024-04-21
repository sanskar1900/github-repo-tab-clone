import React from "react";
import "./content.css";
import ProfileSection from "../Profilesection/profile";
import RepoSection from "../Reposection/repo";
const Content = () => {
  return (
    <div className="content">
      <ProfileSection />
      <RepoSection />
    </div>
  );
};
export default Content;
