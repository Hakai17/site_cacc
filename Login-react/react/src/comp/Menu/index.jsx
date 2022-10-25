import React from 'react'
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <li className={styles.menu__item}>
          <a href="/">Home</a>
         </li>
         <li className={styles.menu__item}>
          <a href="/login">Login</a>
         </li>
         <li className={styles.menu__item}>
          <a href="/register">Cadastre-se</a>
         </li>
      </ul>
    </nav>
  )
}
