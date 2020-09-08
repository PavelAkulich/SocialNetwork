import React from "react";
import c from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <div>
        <img src="https://www.tokkoro.com/picsup/5708431-national-park-wallpapers.jpg"></img>
      </div>
      <div className={c.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        ava + desc
      </div>
    </React.Fragment>
  );
};

export default ProfileInfo;