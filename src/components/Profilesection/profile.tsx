import React, { useEffect } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData, getRepoData } from "../../actions";
import { Dispatch } from "redux";
import { GoPeople } from "react-icons/go";
import { CgOrganisation } from "react-icons/cg";

import { GoLocation } from "react-icons/go";

export const ProfileSection = () => {
  const dispatch = useDispatch();
  const { profileData } = useSelector((state: any) => state.profileReducer);
  useEffect(() => {
    fetchRepoData(dispatch);
  }, []);

  const fetchRepoData = (dispatch: Dispatch<any>) => {
    dispatch(getProfileData());
  };
  return (
    <div className="profileSection root">
      <div className="profileSection makeCenter">
        <div>
          <img
            className="profileSection profilePicture"
            src={profileData?.avatar_url}
            alt="profile"
          ></img>
          <div className="profileSection name">{profileData?.name}</div>
          <div className="profileSection login">{profileData?.login}</div>
        </div>
      </div>
      <button className="profileSection follow">{"Follow"}</button>
      <div className="profileSection bio">{profileData?.bio}</div>
      <div className="profileSection flex">
        <GoPeople />
        <div>
          {`${profileData?.followers}`}{" "}
          <span className="profileSection followers">followers</span>
        </div>
        <div className="profileSection divide">.</div>
        <div>
          {`${profileData?.following} `}
          <span className="profileSection following">following</span>
        </div>
      </div>
      <span className="profileSection org">
        <CgOrganisation size={20} className="profileSection gray" />{" "}
        <span>{profileData?.company}</span>
      </span>
      <span className="profileSection location">
        <GoLocation size={18} className="profileSection gray" />{" "}
        <span>{profileData?.location}</span>
      </span>
      <div className="profileSection saperate"></div>
    </div>
  );
};
export default ProfileSection;
