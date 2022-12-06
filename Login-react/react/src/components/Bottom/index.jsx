import React from "react";
import youtube from "./youtube.svg";
import instagram from "./instagram.svg";
import styles from "./Bottom.module.scss";

export default function Bottom() {
  return (
    <footer className={styles.Bottom}>
      <div className={styles.Bottom__icon}>
        <a
          href="https://youtube.com/c/IFCEcampusdeMaracana%C3%BA"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="ícone do twitter" />
        </a>
        <a
          href="https://instagram.com/cacc.ifce?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <div>
        <a
          href="mailto:cacc@maracanau.ifce.edu.br"
          target="_blank"
          rel="noreferrer"
        >
          <p>cacc@maracanau.ifce.edu.br</p>
        </a>
      </div>
      <p>VOID</p>
    </footer>
  );
}
