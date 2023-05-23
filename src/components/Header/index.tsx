//CSS
import styles from "./index.module.css"

//SVG
import logo from "../../assets/logo.svg"
import burguerBtn from "../../assets/BurgenBtn.svg"

//DEPENDENCIAS
import { useEffect, useRef, useState } from "react";

//COMPONENTES
import MenuMobile from "../MenuMobile";

const Header = () => {

    //VARIAVEL LEITOR DE RESOLUCAO
    const { innerWidth: width } = window;

    //MENU MOBILE
    const [menuMobile, setMenuMobile] = useState(false)
    const showMenuMobile = () => setMenuMobile(!menuMobile)

    const menuRef = useRef<HTMLInputElement | null>(null);

    //FUNCAO PARA FECHAR MENU
    //Fechar quando clicar fora, e quando clicar dentro não
    useEffect(() => {
        const handler = (e: any) => {
            if (!menuRef.current?.contains(e.target)) {
                setMenuMobile(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (

        <header className={styles.header}>

            <section className={styles.section} ref={menuRef}>

                <img className={styles.img} src={logo} alt="Logo da serie de jogos e anime Pokemon" />

                <img
                    onClick={showMenuMobile}
                    className={width <= 768 ? styles.notHidenn : styles.isHidden}
                    src={burguerBtn}
                    alt="Botão para mobile"
                />
                {menuMobile && <MenuMobile />}

                <nav className={styles.nav}>

                    <a href="/">
                        <button className={styles.button}>Home</button>
                    </a>

                    <a href="pokedex">
                        <button className={styles.button}>Pokedex</button>
                    </a>

                    <a href="legendaries">
                        <button className={styles.button}>Legendaries</button>
                    </a>

                    <a href="https://pokeapi.co/docs/v2">
                        <button className={styles.button}>Documentation</button>
                    </a>

                </nav>

            </section>

        </header>
    )
}

export default Header;