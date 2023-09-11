import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const Portfolio: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Choose The Project's</h1>
            <div className={styles.item}>
                <Link href="/portfolio/project1" className={styles.link}>
                    <span className={styles.project_title}>Project1 </span>
                </Link>
                <Link href="/portfolio/project2" className={styles.link}>
                    <span className={styles.project_title}>Project2 </span>
                </Link>
                <Link href="/portfolio/project3" className={styles.link}>
                    <span className={styles.project_title}>Project3 </span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio