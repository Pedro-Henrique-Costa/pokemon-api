import { CircularProgress, CircularProgressLabel, Modal, ModalContent, ModalOverlay, Progress, useDisclosure } from "@chakra-ui/react";
import styles from "./index.module.css"

import pokemon_img from "../../assets/pokemon.svg"

type PokemonProps = {
    name?: string
}

const Pokemon = ({ name }: PokemonProps) => {

    //Modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {/* MODAL */}
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'} >

                <ModalOverlay />

                <ModalContent>

                    <section className={styles.modal_content}>

                        <article className={styles.modal_left}>

                            <img src={pokemon_img} alt="Pokemon Charizard" className={styles.modal_img} />

                            <div className={styles.pokemon_type_modal}>
                                <p className={styles.type_grass}>Grass</p>
                                <p className={styles.type_poison}>Poison</p>
                            </div>

                        </article>

                        <article className={styles.modal_right}>

                            <div className={styles.modal_row_1}>
                                <p className={styles.modal_pokemon_name}>Charizard</p>
                                <p className={styles.modal_pokemon_generation}>Generation 1</p>

                                <div className={styles.modal_pokemon_number}>
                                    <p className={styles.value_pokemon_number}>578</p>
                                </div>
                            </div>

                            <div className={styles.modal_row_2}>
                                <div className={styles.background_abilities}>
                                    <p>Abilities</p>
                                    <p>Overgrow - Chlorophyll</p>
                                </div>
                            </div>

                            <div className={styles.modal_row_3}>

                                <div className={styles.element_row_3a}>
                                    <p className={styles.element_row_p}>Health Points</p>
                                    <p className={styles.element_row_n}>1 000 000</p>

                                    <Progress colorScheme='green' value={100} size='xs' />

                                </div>

                                <div className={styles.element_row_3b}>
                                    <p className={styles.element_row_p}>Experience</p>
                                    <p className={styles.element_row_n}>1 000 000</p>

                                    <Progress colorScheme='yellow' value={100} size='xs' />
                                </div>

                            </div>

                            <div className={styles.modal_row_4}>

                                <div className={styles.background_powers}>

                                    <div className={styles.div_element_row4}>
                                        <CircularProgress value={100} color='black' thickness='8px' size={"40px"}>
                                            <CircularProgressLabel>419</CircularProgressLabel>
                                        </CircularProgress>
                                        <p className={styles.element_row4_p}>Defense</p>
                                    </div>

                                    <div className={styles.div_element_row4}>
                                        <CircularProgress value={100} color='black' thickness='8px' size={"40px"}>
                                            <CircularProgressLabel>419</CircularProgressLabel>
                                        </CircularProgress>
                                        <p className={styles.element_row4_p}>Attack</p>
                                    </div>

                                    <div className={styles.div_element_row4}>
                                        <CircularProgress value={100} color='black' thickness='8px' size={"40px"}>
                                            <CircularProgressLabel>419</CircularProgressLabel>
                                        </CircularProgress>
                                        <p className={styles.element_row4_p}>Sp Attack</p>
                                    </div>

                                    <div className={styles.div_element_row4}>
                                        <CircularProgress value={100} color='black' thickness='8px' size={"40px"}>
                                            <CircularProgressLabel>419</CircularProgressLabel>
                                        </CircularProgress>
                                        <p className={styles.element_row4_p}>Sp Defence</p>
                                    </div>

                                </div>

                            </div>

                        </article>

                    </section>

                </ModalContent>

            </Modal>


            {/* CARD POKEMON */}
            <div className={styles.pokemon} onClick={onOpen}>

                {/* DADOS POKEMON */}
                <article className={styles.atributes_pokemon}>
                    <div className={styles.pokemon_name}>
                        <p>{name}</p>
                    </div>
                    <div className={styles.pokemon_power}>
                        <div>
                            <CircularProgress value={100} color='black' thickness='8px'>
                                <CircularProgressLabel>419</CircularProgressLabel>
                            </CircularProgress>
                            <p className={styles.power_text}>Attack</p>
                        </div>
                        <div>
                            <CircularProgress value={100} color='black' thickness='8px'>
                                <CircularProgressLabel>49</CircularProgressLabel>
                            </CircularProgress>
                            <p className={styles.power_text}>Defense</p>
                        </div>
                    </div>
                    <div className={styles.pokemon_type}>
                        <p className={styles.type_grass}>Grass</p>
                        <p className={styles.type_poison}>Poison</p>
                    </div>
                </article>

                {/* FOTO POKEMON */}
                <article className={styles.background_pokemon}>
                    <img src={pokemon_img} alt="pokemon" />
                </article>

            </div>

        </>
    )
}

export default Pokemon;