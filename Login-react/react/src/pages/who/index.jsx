import styles from "./Who.module.scss";

import Header from "../../components/Header";
import Bottom from "../../components/Bottom";

export default function Who () {
    return(
        <>
        <Header />
        <div className={styles.main}>
            <h1>QUEM SOMOS</h1>
        </div>
        <Bottom />
        </>
    )
}