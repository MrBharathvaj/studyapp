import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
import photo1 from "../../../public/category1.jpg"
import Image from 'next/image'


const Category = ({ params }) => {
    console.log(params)
    return (
        <div className={styles.container}>
            <h1 className={styles.cattitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desciption}>description</p>
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