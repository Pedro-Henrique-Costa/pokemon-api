import styles from "./index.module.css"
import logo from "../../assets/logo.svg"

const Header = () => {
    return (

        <header className={styles.header}>

            <section>
                
                <img src={logo} alt="Logo da serie de jogos e anime Pokemon" />

                <nav>
                    <button>Home</button>
                    <button>Pokedex</button>
                    <button>Legendaries</button>
                    <button>Documentation</button>
                </nav>

            </section>

        </header>
    )
}

export default Header;