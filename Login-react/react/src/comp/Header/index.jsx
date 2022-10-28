import logo from './logo.png'
import search from './search.png'
import styles from './Header.module.scss';

export default function Header(){
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do c.a" />
      <h1>CENTRO ACADÊMICO DE CIÊNCIA DA COMPUTAÇÂO</h1>
      <div className={styles.header__container}>
        
        <input className={styles.header__input} type="text"
        placeholder="O que você procura?" />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
  )
}