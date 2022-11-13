import styles from "./Home.module.scss";

import Header from "../../comp/Header";
import Bottom from "../../comp/Bottom";

export default function Home() {
  return (
    <>
    <Header />
    <main>
        <section className={styles.principal}>
          <div className={styles.principal__imagem}>
          </div>
        </section>
     </main>
     <Bottom />
    </>
  );
}
