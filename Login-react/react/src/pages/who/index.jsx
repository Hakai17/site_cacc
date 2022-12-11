import styles from "./Who.module.scss";

import Header from "../../components/Header";
import Bottom from "../../components/Bottom";

export default function Who () {
    return(
        <>
        <Header />
        <div className={styles.main}>
            <h1>QUEM SOMOS</h1>
            <h2>Entidade estudantil que representa os discentes do curso Bacharelado em Ciência da Computação do IFCE Campus Maracanaú. Cabe a nós representá-los dentro e fora do instituto, promovendo atividades políticas, culturais, sociais e científicas.</h2>
            <p>Temos a função de realizar:</p>
            <p>debates;</p>
            <p>discussões;</p>
            <p>paletras;</p>
            <p>semanas temáticas;</p>
            <p>recepção de calouros;</p>
            <p>realização de projetos de entensão;</p>
            <p>fazer encaminhamento de reivindicações dos alunos;</p>
            <p>mobilização e ações políticas dos estudantes;</p>
            <p>mediação de negociações e conflitos individuais e coletivos entre estudantes e a Direção ou Coordenação do curso;</p>
            <p>realização de atividades culturais como feiras de livros, festivais diversos, entre outros. </p>
        </div>
        <Bottom />
        </>
    )
}