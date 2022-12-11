import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from "../../pages/news1/news1.module.scss";
import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import img4 from "../../assets/img/copa.png";

const News2 = () => {
    const params = useParams();

    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        axios.get("https://localhost:7067/obter-noticia/2")
        .then(res => {
            console.log(res)
            setNoticias(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [params.id])

    return (
        <>
        <Header />
        <div className={styles.noticia}>
            <img src={img4} alt="brasil" />
            {Object.values(noticias).map(noticia=> (
                 <h1>{noticia}</h1>
            ))
            }
        </div>
        <Bottom />
        </>
    );
};

export default News2;