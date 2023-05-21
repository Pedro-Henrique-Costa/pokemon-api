import styles from "./index.module.css"
import logo from "../../assets/logo.svg"

const Header = () => {
    return (

        <header className={styles.header}>

            <section className={styles.section}>
                
                <img className={styles.img} src={logo} alt="Logo da serie de jogos e anime Pokemon" />

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