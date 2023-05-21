import styles from "./index.module.css"

//Img imports
import design_background from "../../assets/Component 3.svg"
import pikachu_completo from "../../assets/BannerComplete.svg"

const HomePageContent = () => {

    const { innerWidth: width } = window;

    return (

        <section className={styles.section_container}>

            <main className={styles.container}>

                <article className={styles.text_content}>

                    <h1 className={styles.text_content_h1}> <b>Find</b> all your favorite <b>Pokemon</b></h1>
                    <h2 className={styles.text_content_h2}>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>

                    <button className={styles.button}>See Pokemons</button>

                </article>

                <article>

                    <img className={styles.img} src={width <= 1080? pikachu_completo : design_background} alt=""/>

                </article>

            </main>

        </section>
    )
}

export default HomePageContent;