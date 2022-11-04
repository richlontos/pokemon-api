import React, {useState} from 'react'
import axios from 'axios'

const Pokemon = () => {

    // STATE
    const [pokeList, setPokeList] = useState([])
    const [errResponse, setErrResponse] = useState("")

    // useEffect
    // useEffect(() => {
    //     makeAPICall()
    // }, [])

    // API CALL FUNCTION
    // const makeAPICall = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(response => response.json())
    //         .then(data => {
    //             const {count, next, previous, results} = data
    //             console.log(count)
    //             console.log(next)
    //             console.log(previous)
    //             console.log(results)
    //         })
    // }

    const makeAPICall = () => {
            axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                const {results} = res.data
                setPokeList(results);
            })//succesful response
            .catch(error => setErrResponse("Ooops something went wrong"))//unsuccessful response
                
        }
    
    


    return (
        <fieldset>
            <legend>Pokemon.jsx</legend>
            <button onClick={makeAPICall}>get info</button>
            {errResponse ? <p>{errResponse}</p> : null}
            {
                pokeList.map((poke) => <p>{poke.name}</p>)
            }
        </fieldset>
        
    )
}

export default Pokemon