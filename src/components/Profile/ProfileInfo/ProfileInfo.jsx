import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <React.Fragment>
      <div><img src='https://www.tokkoro.com/picsup/5708431-national-park-wallpapers.jpg'></img></div>
      <div className={c.descriptionBlock}>
      ava + desc
    </div>
    </React.Fragment>
    )
}

export default ProfileInfo;