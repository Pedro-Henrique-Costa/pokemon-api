import styles from "./index.module.css"

import Footer from "../Footer";

import {
    Button,
    Menu, MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
} from "@chakra-ui/react";

import { AiOutlineDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api } from "../../configs/api";
import Pokemon from "../Pokemon";

const PokedexContent = () => {

    //Numeros de Pokemons
    const [numeroPokemons, setNumerosPokemons] = useState<number>(0);

    //Pokemos
    const [pokemons, setPokemons] = useState([]);

    //Buscar Números de Pokemons
    useEffect(() => {
        async function findNumberPokemons() {
            const response = await api.get('https://pokeapi.co/api/v2/pokemon')
            setNumerosPokemons(response.data.count);
        }
        findNumberPokemons()
    }, [])

    //Buscar os 9 primeiros Pokemos
    useEffect(() => {
        async function getPokemons(numPokemons: number, inicio: number) {
            const response = await api.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemons}&offset=${inicio}`)
            setPokemons(response.data.results);
        }
        getPokemons(9, 0)
    });

    return (
        <>
            {/* PAGINA POKEDEX */}
            <main className={styles.container_pokedex}>


                {/* INPUT SEARCH */}
                <section className={styles.container_search}>

                    <article>
                        <p className={styles.title_text_pokedex}> {numeroPokemons} <b>Pokemons</b> for you to choose your favorite</p>
                    </article>

                    <article>
                        <input className={styles.input_decoration} type="text" placeholder="Find your pokemon..." />
                    </article>

                </section>

                {/* FILTER BUTTON */}
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

                {/* CONTAINER POKEMONS */}
                <section className={styles.container_pokemons}>

                    {/* LINHA 1 */}

                    {pokemons.map((pokemon: any, key) => (
                        <article className={styles.row}>
                            <Pokemon key={key} name={pokemon.name} />
                        </article>
                    ))}

                </section>

            </main>
            <Footer colorBack=" rgb(255, 255, 255)" />
        </>
    )
}

export default PokedexContent;


 // CARD
    //Buscar Nome Pokemon
    //Buscar Imagem Pokemon
    //Buscar Attack Pokemon (numero)
    //Buscar Defense Pokemon (numero)
    //Buscar o Tipo do Pokemon

    //MODAL
    //Buscar Geração
    //Buscar Numero do Pokemon
    //Buscar Habilidades
    //Buscar Health Points
    //Buscar Experience Points
    //Buscar SP Attack
    //Buscar SP Defense

    //RESTANTE
    //Fazer reload ao scrollar para baixo
    //Fazer filtragem por tipos
    //Fazer filtragem por nomes

    //FINALIZAÇÕES
    //Responsividade na Pokedex
    //Responsividade na 404
    //Página de lendarios + responsividade
    //CONTEXTAPI
    //HOOK PERSONALIZADO