/* eslint-disable prefer-const */
import styles from "./index.module.css"

//import Footer from "../Footer";

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
import axios from "axios";

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
        getPokemons();
    }, []);

    async function getPokemons(/*numPokemons: number, inicio: number*/) {

        //URL dos 9 primeiros pokemons
        const endpoints = [];
        for (let i = 1; i <= 9; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => api.get(endpoint))).then((res:any)=> {setPokemons(res)});
        console.log(pokemons)
        // const response = await api.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemons}&offset=${inicio}`)
        // setPokemons(response.data.results);
    }

    // type pokemonProp = {
    //     name?: string,
    //     data?: string[],
    // }

    //FILTRAR POR NOME
    // const pokemonNameFilter = (name: string) => {
    //     const filteredPokemons: SetStateAction<any[] | any> = [];
    //     if(name===""){
    //         getPokemons();
    //     }
        
    //     for (let i in pokemons as pokemonProp){
    //         if(pokemons[i].data.name.includes(name)){
    //             filteredPokemons.push(pokemons[i]);
    //         }
    //     }
    //     console.log(filteredPokemons);
    //     setPokemons(filteredPokemons);
    // }

    //onChange={(e)=> pokemonNameFilter(e.target.value)}

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
                        <input  className={styles.input_decoration} type="text" placeholder="Find your pokemon..." />
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
                        <article className={styles.row} key={key}>
                            <Pokemon name={pokemon.data.name} image={pokemon.data.sprites.front_default}  types={pokemon.data.types}/>
                        </article>
                    ))}

                </section>

            </main>
            {/* <Footer colorBack=" rgb(255, 255, 255)" /> */}
        </>
    )
}

export default PokedexContent;


 // CARD
    // [x] Buscar Nome Pokemon 
    // [x] Buscar Imagem Pokemon
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
    // [x] Fazer filtragem por nomes

    //FINALIZAÇÕES
    //Responsividade na Pokedex
    //Responsividade na 404
    //Página de lendarios + responsividade
    //CONTEXTAPI
    //HOOK PERSONALIZADO