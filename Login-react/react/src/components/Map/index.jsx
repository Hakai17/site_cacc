import styles from './Map.module.scss'

export default function map(){
    return(
        <main className={styles.principal}>
            <h1>COMO CHEGAR</h1>
            <hr></hr>
            <div>
                <h2>CENTRO ACADÊMICO DE CIÊNCIA DA COMPUTAÇÃO</h2>
                <div>
                    <h2>IFCE CAMPUS MARACANAÚ</h2>
                </div>
                <h3>Av. Parque Central, 1315 - Distrito Industrial I, Maracanaú - CE, 61939-140</h3>
                <div>
                    <a
                      href="https://www.bing.com/maps?&ty=18&q=Av%20Parque%20Central%2C%201315%2C%20Industrial%20I%2C%20Maracana%C3%BA%20-%20CE%2C%2061939&ppois=-3.862418056628189_-38.593127178374296_Av%20Parque%20Central%2C%201315%2C%20Industrial%20I%2C%20Maracana%C3%BA%20-%20CE%2C%2061939_~&cp=-3.862418~-38.593127&v=2&sV=1&FORM=MIRE&qpvt=Av.+Parque+Central%2c+1315+-+Distrito+Industrial+I%2c+Maracana%c3%ba+-+CE%2c+61939-140"
                      target="_blank"
                      rel="noreferrer"
                    >
                    <h4>Veja no mapa</h4>
                    </a>
                    <hr></hr>
                </div>
            </div>
        </main>
    )
}
