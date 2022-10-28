import React from "react"
import styles from "./Link.module.scss"

export default function Link(){
    return(
        <section className={styles.link}>
           <Link to={'/'} className="link">Noticia1</Link>
           <Link to={'/'} className="link">Noticia2</Link> 
           <Link to={'/'} className="link">Noticia3</Link> 
        </section>
    )
}