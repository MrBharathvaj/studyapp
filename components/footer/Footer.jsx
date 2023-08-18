import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>&copy; 2023 Bharathvaj. All rights reserved.</div>
            <div className={styles.social}>
                <Image src="/github.png" width={15} height={15} className={styles.icon} alt="github" />
                <Image src="/fb.webp" width={15} height={15} className={styles.icon} alt="facebook" />
                <Image src="/insta.jpeg" width={15} height={15} className={styles.icon} alt="instagram" />
                <Image src="/linkedin.png" width={15} height={15} className={styles.icon} alt="linkedin" />
            </div>
        </div>
    )
}

export default Footer