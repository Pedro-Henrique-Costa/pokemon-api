//CSS
import styles from "./index.module.css"

//SVG
import logo from "../../assets/logo.svg"
import burguerBtn from "../../assets/BurgenBtn.svg"

//DEPENDENCIAS
import { useEffect, useRef, useState } from "react";

//COMPONENTES
import MenuMobile from "../MenuMobile";
import { Link } from "react-router-dom";

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

                    <button className={styles.button}>
                        <Link className={styles.text_a} to={`/`}>
                            Home
                        </Link>
                    </button>

                    <button className={styles.button}>
                        <Link className={styles.text_a} to={`pokedex`}>
                            Pokedex
                        </Link>
                    </button>

                    <button className={styles.button}>
                        <Link className={styles.text_a} to={`legendaries`}>
                            Legendaries
                        </Link>
                    </button>

                    <button className={styles.button}>
                        <a className={styles.text_a} href="https://pokeapi.co/docs/v2">
                            Documentation
                        </a>
                    </button>

                </nav>

            </section>

        </header>
    )
}

export default Header;