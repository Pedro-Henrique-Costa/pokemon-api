import styles from "./index.module.css"

import Footer from "../Footer";

import {
    Button,
    CircularProgress,
    CircularProgressLabel,
    Menu, MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Modal,
    ModalContent,
    ModalOverlay,
    Progress,
    useDisclosure
} from "@chakra-ui/react";

import { AiOutlineDown } from "react-icons/ai";
import pokemon_img from "../../assets/pokemon.svg"

const PokedexContent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
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

            <main className={styles.container_pokedex}>

                <section className={styles.container_search}>

                    <article>
                        <p className={styles.title_text_pokedex}> 0 <b>Pokemons</b> for you to choose your favorite</p>
                    </article>

                    <article>
                        <input className={styles.input_decoration} type="text" placeholder="Find your pokemon..." />
                    </article>

                </section>

                <section className={styles.container_filter}>

                    <article className={styles.type_filter}>

                        <div className={styles.type_btn}>
                            <Menu closeOnSelect={false} >

                                <MenuButton as={Button} rightIcon={<AiOutlineDown />} width='135px' height='21px'>
                                    Tipo
                                </MenuButton>

                                <MenuList width='135px' height='21px'>

                                    <MenuOptionGroup type='checkbox'>
                                        <MenuItemOption value='Fire'>Fire</MenuItemOption>
                                        <MenuItemOption value='Normal'>Normal</MenuItemOption>
                                        <MenuItemOption value='Eletric'>Eletric</MenuItemOption>
                                        <MenuItemOption value='Water'>Water</MenuItemOption>
                                    </MenuOptionGroup>

                                </MenuList>

                            </Menu>
                        </div>

                    </article>

                </section>

                <section className={styles.container_pokemons}>

                    <article className={styles.row}>

                        <div className={styles.pokemon} onClick={onOpen}>
                            <article className={styles.atributes_pokemon}>
                                <div className={styles.pokemon_name}>
                                    <p>Charizard</p>
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
                            <article className={styles.background_pokemon}>
                                <img src={pokemon_img} alt="pokemon" />
                            </article>
                        </div>

                        <div className={styles.pokemon}>pokemon 2</div>
                        <div className={styles.pokemon}>pokemon 3</div>
                    </article>

                    <article className={styles.row}>
                        <div className={styles.pokemon}>pokemon 4</div>
                        <div className={styles.pokemon}>pokemon 5</div>
                        <div className={styles.pokemon}>pokemon 6</div>
                    </article>

                    <article className={styles.row}>
                        <div className={styles.pokemon}>pokemon 7</div>
                        <div className={styles.pokemon}>pokemon 8</div>
                        <div className={styles.pokemon}>pokemon 9</div>
                    </article>

                </section>

            </main>

            <Footer colorBack=" rgb(255, 255, 255)" />
        </>
    )
}

export default PokedexContent;