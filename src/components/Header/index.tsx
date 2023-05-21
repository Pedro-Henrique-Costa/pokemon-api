import styles from "./index.module.css"
import logo from "../../assets/logo.svg"
import burguerBtn from "../../assets/BurgenBtn.svg"

const Header = () => {

    const { innerWidth: width } = window;

    return (

        <header className={styles.header}>

            <section className={styles.section}>

                <img className={styles.img} src={logo} alt="Logo da serie de jogos e anime Pokemon" />

                <a className={width <= 768 ? styles.notHidenn : styles.isHidden}>
                    <img src={burguerBtn} alt="Botão para mobile" />
                </a>


                <nav className={styles.nav}>
                    <button className={styles.button}>Home</button>
                    <button className={styles.button}>Pokedex</button>
                    <button className={styles.button}>Legendaries</button>
                    <button className={styles.button}>Documentation</button>
                </nav>

            </section>

        </header>
    )
}

export default Header;