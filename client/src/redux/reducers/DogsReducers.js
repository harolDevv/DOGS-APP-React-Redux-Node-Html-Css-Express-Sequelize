const initialState = {
    data: [],
    selectDog: [],
    temperamentDog : [],
}

export default  (state = initialState,action) => {
    switch (action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                data: action.payload.filter(e=> e.temperament),
            }
        case 'SELECTOR_DOG' :
            return {
                ...state,
                selectDog: [state.data.find(item => item.name === action.payload)]
            };
        case 'VACIAR_SELECTS' :
            return {
                ...state,
                selectDog: [],
                temperamentDog: []
            }
        case 'TEMPERAMENT_DOG' :
            return {
                ...state,
                selectDog: [] ,
                temperamentDog: state.data.filter((item) =>   item.temperament.includes(action.payload) )
            }
        default:
            return state;
    }
}