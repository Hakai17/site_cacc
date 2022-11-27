import styles from './Data.module.scss'

import Header from '../../components/Header'
import Bottom from '../../components/Bottom'
import Aula from './aula.png'
import Jardineira from './jardineira.png'
import Xerox from './xerox.png'
import jardineira from './jardineirahorario.pdf'
import aula from './aula.pdf'
//import xerox from './xerox.pdf'

export default function Data() {
    return(
        <>
        <Header />
        <div className={styles.main}>
            <h1>HORÁRIOS</h1>
            <ul>
               <li>
                <a href={aula} download={aula}>
                    <img src={Aula} alt='logo1' />
                    <h2>AULAS</h2>
                </a>
               </li>
               <li>
                <a href={jardineira} download={jardineira}>
                    <img src={Jardineira} alt='logo2' />
                    <h2>JARDINEIRA</h2>
                </a>
               </li>
               <li>
                <a href='/' alt=''>
                    <img src={Xerox} alt='logo3' />
                    <h2>XEROX</h2>
                </a>
               </li>
            </ul>
        </div>
        <Bottom />
        </>
    )
}