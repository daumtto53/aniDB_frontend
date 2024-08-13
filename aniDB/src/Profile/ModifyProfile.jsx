import React, { useState } from 'react';
import styles from './ModifyProfile.module.css';

const ModifyProfile = () => {
    const [formData, setFormData] = useState({
        name: 'Jane Walters',
        nickname: '',
        birthday: '',
        gender: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.profileHeader}>
                <img src="https://via.placeholder.com/150" alt="Profile" className={styles.profileImage} />
                <button className={styles.cameraButton} type="button">
                    <i className="fa fa-camera"></i>
                </button>
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        className={styles.input}
                        disabled
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Nickname</label>
                    <input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Gender</label>
                    <div className={styles.radioGroup}>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </div>
        </form>
    );
};

export default ModifyProfile;