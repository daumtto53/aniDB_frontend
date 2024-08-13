import React from "react";

import styles from "./Profile.module.css";

function ProfileInfo() {
  return (
    <>
      <div className={styles.profileHeader}>
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className={styles.profileImage}
        />
        <button className={styles.cameraButton}>
          <i className="fa fa-camera"></i>
        </button>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <p className={styles.text}>Jane Walters</p>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nickname</label>
          <p className={styles.text}>j.walters@domain.com</p>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Birthday</label>
          <p className={styles.text}>*********</p>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Gender</label>
          <p className={styles.text}>Dubai, UAE</p>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Description</label>
          <p className={styles.text}>+1 012 345 678</p>
        </div>
        <div className={styles['button-container']}>
            <button className={styles.modifyButton}>Modify</button>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
