import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.png';
import styles from './Header.module.scss';

export default function Header(){
  return (
    <>
    <header className={styles.header}>
      <a href='/'>
      <img src={logo} alt="Logo do c.a" />
      </a>
      <h1>CENTRO ACADÊMICO DE CIÊNCIA DA COMPUTAÇÃO</h1>
      <div className={styles.header__container}>
        <input className={styles.header__input} type="text"
        placeholder="O que você procura?" />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
         <li className={styles.menu__item}>
          <a href="/data">HORÁRIOS</a>
         </li>
         <li className={styles.menu__item}>
          <a href="/">NOTÍCIAS</a>
          </li>
         <li className={styles.menu__item}>
          <a href='/'>HOME</a>
         </li>
      </ul>
    </nav>
    </>
  )
}