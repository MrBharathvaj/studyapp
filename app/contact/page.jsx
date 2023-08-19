import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import photo from "../../public/contact.jpg"
import Button from '@/components/Button/Button'
const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><i>Let's Keep in Touch</i></h1>
            <div className={styles.content}>
                <div className={styles.imgcontainer}>
                    <Image src={photo} fill={true} alt="Image" className={styles.image} />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="Name" className={styles.input} />
                    <br />
                    <input type="text" placeholder="email" className={styles.input} />
                    <br />
                    <textarea className={styles.textarea} placeholder="Enter Message" cols="30" rows="10"></textarea>
                    <br />
                    <Button url="#" text="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact