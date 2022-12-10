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
            <img src={img1} alt="imagem1" />
            <img src={img2} alt="imagem2" />
            <img src={img3} alt="imagem3" />
        </div>
        <nav className={styles.nav}>
            {data.map(news=>(
                <ul key={news.id}>
                  <li>
                    <a href="/news">
                      <p>{news.titulo}</p>
                    </a>
                  </li>
                </ul>
                ))}
        </nav>
        <Bottom />
        </>
    )
}