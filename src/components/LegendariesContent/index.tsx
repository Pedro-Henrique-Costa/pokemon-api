import styles from "./index.module.css"
import mewtwo from "../../assets/pngwing 6.svg"
import Footer from "../Footer"

const LegendariesContent = () => {
    return (

        <>
        
        <section className={styles.background_legendaries}>

            <main className={styles.size_main}>
                <article>
                    <p className={styles.title_legend}>Legendaries</p>

                </article>

                <article className={styles.row}>

                    <div>
                        <img src={mewtwo} alt="mwe" />
                    </div>

                    <div>
                        <div className={styles.container_text}>
                            <h2 className={styles.text_legendh2}>Mew Two</h2>
                            <p className={styles.text_legendp}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br />
                                natoque penatibus et magnis dis parturient montes, nascetur <br />
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque  <br />
                                eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </p>
                        </div>
                    </div>

                </article>
            </main>


        </section>
            <Footer color="#ffffff" colorBack={"rgb(33, 33, 33)"}/>
        </>
    )
}

export default LegendariesContent;