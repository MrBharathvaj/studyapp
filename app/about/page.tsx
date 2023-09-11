import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import about from "../../public/about.jpg"
import Button from '../../components/Button/Button'

const About: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <Image src={about} fill={true} alt="BackgroundImage" className={styles.img}
                />
                <div className={styles.text}>
                    <h1 className={styles.title}>I'm a FullStack Developer.</h1>
                    <h4 className={styles.description}>Currently doing my Intern in Analog & Digital Labs pvt ltd.</h4>
                </div>
            </div>
            <div className={styles.textcontainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who am I?</h1>
                    <p className={styles.description}>
                        I'm Bharathvaj from Tiruppur. I Completed one month training on FullStack Web Developement by Global Knowledge Technologies, Bangalore. I have much interest in FullStack Development.
                        <br />
                        <br />
                        I'm a dedicated and an optimistic Person. Now Currently doing my Intern in Analog & Digital Labs pvt ltd.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What I Do?</h1>
                    <p className={styles.description}>
                        As a fresher i bring lot to the table in terms of skills and Knowledge, I contribute my best to the Company's Growth.

                        <br />
                        <br />
                        I'm a dedicated and an optimistic Person. Now Currently doing my Intern in Analog & Digital Labs pvt ltd.
                    </p>
                    <Button url="contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About;