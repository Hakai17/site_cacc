import styles from "./Home.module.scss";
import axios from "axios";
import { useState } from 'react';
import { useEffect } from "react";
import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import Map from "../../components/Map";
import home from "../../assets/img/home.png";
import img1 from "../../assets/img/image1.png";
import img2 from "../../assets/img/image2.png";
import img4 from "../../assets/img/image4.png";


export default function Home() {

  const baseUrl="https://localhost:7067/obter-todas-noticias";

  const [data, setData]=useState([]);

  const newsGet = async(titulo)=>{
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

  return (
    <>
    <Header />
    <main>
      <section className={styles.image}>
          <div>
            <img src={home} alt="home" />
          </div>
        </section>
        <section className={styles.news}>
          <div>
            <h1>ÚLTIMAS NOTÍCIAS</h1>
            <div>
              <img src={img2} alt="comsolid" />
              <img src={img4} alt="brasil" />
              <img src={img1} alt="ministerio" />
            </div>
            <nav>
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
          </div>
        </section>
        <section className={styles.principal}>
          <div>
            <h1>QUEM SOMOS</h1>
            <p>Entidade estudantil que representa os discentes do curso Bacharelado em Ciência da Computação do IFCE Campus Maracanaú. Cabe a nós representá-los dentro e fora do instituto, promovendo atividades políticas, culturais, sociais e científicas.</p>
            <a href="/who">
              <h2>Leia mais</h2>
            </a>
          </div>
        </section>
     </main>
     <Map />
     <Bottom />
    </>
  );
}
