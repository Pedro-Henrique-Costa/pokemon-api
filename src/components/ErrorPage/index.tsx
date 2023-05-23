import styles from "./index.module.css"
import teamRocket from "../../assets/Team_Rocket_trio_OS 1.svg"

const ErrorPage = () => {
    return (

        <section className={styles.section_contant_erro}>

            <h1 className={styles.message_error}>404
                <img className={styles.team_rocket_img} src={teamRocket} alt="" />
            </h1>

            <div className={styles.text_btn_container}>
                <p className={styles.rocket_wins}>The rocket team has <b className={styles.bold}> won this time.</b></p>
                <a href="/">
                    <button className={styles.return_btn}>Return</button>
                </a>
            </div>

        </section>
    )
}

export default ErrorPage;