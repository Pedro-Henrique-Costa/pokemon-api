import styles from './index.module.css';
import logo from "../../assets/logo.svg"

const MenuMobile = () => {

  return (

    <div className={styles.drop_down}>

      <article className={styles.container}>

        <img className={styles.logo} src={logo} alt="" />
        <a className={styles.itens} href="pokedex">Pokedex</a>
        <a className={styles.itens} href="legendaries">Legendaries</a>
        <a className={styles.itens} href="https://pokeapi.co/docs/v2">Documentation</a>

      </article>

    </div>

  );

};

export default MenuMobile;