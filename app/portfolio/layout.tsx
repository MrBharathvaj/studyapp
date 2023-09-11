import React, {ReactNode} from 'react'
import styles from "./page.module.css"

interface LayoutProps{
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <h1 className={styles.maintitle}>My Projects</h1>
            {children}
        </div>
    )
}

export default Layout