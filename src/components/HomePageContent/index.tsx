import styles from "./index.module.css"

//Img imports
import design_background from "../../assets/Component 3.svg"

const HomePageContent = () => {
    return (

        <section className={styles.section_container}>

            <main className={styles.container}>

                <article className={styles.text_content}>

                    <h1> <b>Find</b> all your favorite <b>Pokemon</b></h1>
                    <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>

                    <button className={styles.button}>See Pokemons</button>

                </article>

                <article>

                    <img className={styles.img} src={design_background} alt="" />
                    
                </article>

            </main>

        </section>
    )
}

export default HomePageContent;