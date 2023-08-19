import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>&copy; 2023 Bharathvaj. All rights reserved.</div>
            <div className={styles.social}>
                <Link href="https://github.com/MrBharathvaj">
                    <Image src="/github.png" width={15} height={15} className={styles.icon} alt="github" />
                </Link >
                <Link href="https://twitter.com/BharathvajT?t=M9CnPYlZEdHAU2cLH_-N8A&s=09">
                    <Image src="/fb.webp" width={15} height={15} className={styles.icon} alt="facebook" />
                </Link>
                <Link href="https://www.linkedin.com/in/bharathvaj-t-30614624a">
                    <Image src="/insta.jpeg" width={15} height={15} className={styles.icon} alt="instagram" />
                </Link>
                <Link href="https://www.linkedin.com/in/bharathvaj-t-30614624a">
                    <Image src="/linkedin.png" width={15} height={15} className={styles.icon} alt="linkedin" />
                </Link>
            </div>
        </div>
    )
}

export default Footer