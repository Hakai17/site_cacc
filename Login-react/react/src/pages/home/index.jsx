import styles from "./Home.module.scss";
import axios from "axios";
import { useState } from 'react';
import { useParams } from 'react';
import { useEffect } from "react";
import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import Map from "../../components/Map";
import home from "../../assets/img/home.png";
import img1 from "../../assets/img/image1.png";
import img2 from "../../assets/img/image2.png";
import img3 from "../../assets/img/image4.png";


export default function Home() {

  const baseUrl="https://localhost:7067/obter-todas-noticias";

  const [data, setData]=useState([]);

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

  return (
    <>
    <Header />
    <main>
      <section className={styles.image}>
          <div>
            <h1>BEM VINDOS!</h1>
            <img src={home} alt="home" />
            <a href="/">
            <button type="button">CONHEÇA O CAMPUS</button>
            </a>
          </div>
        </section>
        <section className={styles.news}>
          <div>
            <h1>ÚLTIMAS NOTÍCIAS</h1>
            <div>
              <img src={img2} alt="imagem2" />
              <img src={img3} alt="imagem3" />
              <img src={img1} alt="imagem1" />
            </div>
            <nav>
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
          </div>
        </section>
        <section className={styles.principal}>
          <div>
            <h1>QUEM SOMOS</h1>
            <p>Entidade estudantil que representa os discentes do curso Bacharelado em Ciência da Computação do IFCE Campus Maracanaú. Cabe a nós representá-los dentro e fora do instituto, promovendo atividades políticas, culturais, sociais e científicas.</p>
            <a
              href="/who"
              target="_blank"
              rel="noreferrer"
            >
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
