import { Outlet } from "react-router"
import styles from './styles.module.css';

const Layout = (props) => {

    return (
        <div className={styles.background}>
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;