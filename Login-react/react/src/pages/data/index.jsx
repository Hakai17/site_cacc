import styles from './Data.module.scss'

import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import Aula from '../../assets/img/aula.png';
import Jardineira from '../../assets/img/jardineira.png';
import Xerox from '../../assets/img/xerox.png';
import jardineira from '../../assets/pdf/jardineirahorario.pdf';
import aula from '../../assets/pdf/aula.pdf';
import xerox from '../../assets/pdf/xerox.pdf';

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
                <a href={xerox} download={xerox}>
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