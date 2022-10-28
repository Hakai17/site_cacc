import banner from "./banner.png";
import styles from "./Home.module.scss";

import Header from "../../comp/Header";
import Bottom from "../../comp/Bottom";
import Menu from "../../comp/Menu";

export default function Home() {
  return (
    <>
    <Header />
    <main>  
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>     
            <img src={banner} alt="Centro academico" />
          </div>
        </section>     
     </main>
     <Bottom />
    </>
  );
}
