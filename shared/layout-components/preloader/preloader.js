import React from 'react';
import styles from '../../../public/assets/css/preloader.module.css';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
        <div className={styles.loader}>
            <div className={styles.loaderinner}></div>
        </div>
        </div>
    );
};

export default Preloader;
