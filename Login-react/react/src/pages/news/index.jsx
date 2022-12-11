import styles from "./News.module.scss";

import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import img1 from "../../assets/img/image1.png";
import img2 from "../../assets/img/image2.png";
import img3 from "../../assets/img/image4.png";

export default function News () {

    const baseUrl="https://localhost:7067/obter-todas-noticias";

    const [data, setData]=useState([3]);

    const newsGet = async()=>{
        await axios.get(baseUrl)
        .then(response => {
          setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
    }

    useEffect(()=>{
      newsGet();
    })

    return(
        <>
        <Header />
        <div className={styles.main}>
            <h1>NOTÍCIAS</h1>
        </div>
        <div className={styles.images}>
            <img src={img2} alt="comsolid" />
            <img src={img3} alt="copa" />
            <img src={img1} alt="ministerio" />
        </div>
        <nav className={styles.nav}>
            <ul>
              <li>
                <a href="/news1">COMSOLID: SIC 2022 </a>
              </li>
              <li>
                <a href="/news2">COPA DO MUNDO INFLUENCIA R.A</a>
              </li>
              <li>
                <a href='/news3'>BLOQUEIO ORÇAMENTAL</a>
              </li>
            </ul>
        </nav>
        <Bottom />
        </>
    )
}