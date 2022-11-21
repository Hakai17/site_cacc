import React from "react";
import Header from "../../comp/Header";
import Bottom from "../../comp/Bottom";

import './style.css'

export default function(){

  return(
    <>
    <Header
    
    />
    <div className="img_comsolid">
          <img src="/comsolid.jpg" alt="Imagem comsolid" width="100%" height="10%"/>
    </div>

    <h1 className="inscricao">Abertas as inscrições para o COMSOLID <p class="data">publicado em 06/11/2022</p></h1>

    <div class="nome1">
        <h2>
            <p>A COMSOLiD (Comunidade Maracanauense de Software Livre e Inclusão Digital) 
                é formada por alunos e ex-alunos do IFCE Campus Maracanaú, Ceará, BR. Cujo Tema da Comsolid 2022 é "A evolução dos jogos eletrônicos".
            </p>
            <p>
                No evento serão realizadas diversas atividades como entrevistas, 
                oficinas e mini cursos. Além disso, ocorrerão palestras sobre diversos temas do viés da tecnologia, 
                todas com direito à certificado de participação. O evento ocorrera entre os dias 8 NOV. 8:00 e 10 NOV. 17:00 na  Av. Parque Central, 1315 - Distrito Industrial I, Maracanaú - CE, 61939-140, Brasil. Para mais informações clique em   <a href="https://lets.4.events/comsolid-C3401E49"> inscrições comsolid</a>.
            </p>
            </h2>
    </div>
    </>
  )
}