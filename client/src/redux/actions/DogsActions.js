export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const TEMPERAMENT_DOG = "TEMPERAMENT_DOG";
export const CREATE_DOG = "CREATE_DOG";
export const SELECTOR_DOG = "SELECTOR_DOG";
export const VACIAR_SELECTS = 'VACIAR_SELECTS'

export const ORDER_Z_A = 'ORDER_Z_A'

const axios = require('axios')




export const getAllDogs = () => {
    console.log('se ejecuto');
    return async function (dispatch) {
        return  fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json())
        .then(data => dispatch({ type: GET_ALL_DOGS, payload: data }));
    };

};

export const crearBreed = (dog) => {
    axios.post('http://localhost:3001/dogs',dog)
}
export const temperamentDog = (dog) => ({
    type: TEMPERAMENT_DOG,
    payload:dog,
})

export const SelectProducts = (dog) => ({
    type:SELECTOR_DOG,
    payload:dog
})

export const VaciarSelects = () => ({
    type:VACIAR_SELECTS,
})

export const ordenarZA = (value) => {
    return {
    type:ORDER_Z_A,
    }
}

