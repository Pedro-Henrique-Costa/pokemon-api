import styles from "./index.module.css"

type FooterProps = {

    colorBack?: string
}

const Footer = ({colorBack}: FooterProps) => {
    return (
        <section
        style={
            {background : colorBack}
        }
         className={styles.container_section}>
            <p>Make with ❤️ for the PokéSpartans team Platzi Master</p>
            <p className={styles.p_2}>Ours Team</p>
        </section>
    )
}

export default Footer;