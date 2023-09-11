import Image from 'next/image'
import home from "../public/home.jpg"
import styles from "./page.module.css"
import About from './about/page'
import React from 'react'
import Button from '../components/Button/Button'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Welcome to Next.js Portfolio.</h1>
        <p className={styles.description}>Turning your Idea into Reality, Created by Bharathvaj.</p>
        <Button url="/portfolio" text="View Projects" />
        {/* <button className={styles.button}>View projects</button> */}
      </div>
      <div className={styles.item}>
        <Image src={home} alt="Backgound_Image" className={styles.img} />
      </div>
    </div>
  )
}
