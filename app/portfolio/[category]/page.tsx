import React from 'react'
import styles from "./page.module.css"
import photo1 from "../../../public/category2.jpeg"
import Image from 'next/image'
import Button from '../../../components/Button/Button'

interface categoryProps{
    params: {
        category: string;
    }
}

const Category: React.FC<categoryProps> = ({ params }) => {
    console.log(params)
    return (
        <div className={styles.container}>
            <h1 className={styles.cattitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>description</p>
                    <Button url="#" text="See More" />
                </div>
                <div className={styles.imgcontainer}>
                    <Image src={photo1} fill={true} alt="picture" className={styles.img} />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>description</p>
                    <Button url="#" text="See More" />
                </div>
                <div className={styles.imgcontainer}>
                    <Image src={photo1} fill={true} alt="picture" className={styles.img} />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>description</p>
                    <Button url="#" text="See More" />
                </div>
                <div className={styles.imgcontainer}>
                    <Image src={photo1} fill={true} alt="picture" className={styles.img} />
                </div>
            </div>

        </div>
    )
}

export default Category