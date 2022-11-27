import styles from "./Home.module.scss";

import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import Map from "../../components/Map";

export default function Home() {
  return (
    <>
    <Header />
    <main>
        <section className={styles.principal}>
          <div>
            <h1>QUEM SOMOS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a
              href="/"
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
