const animeReducer = (state = {anime: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_ANIME':
            console.log(action.type)
            return {
                ...state,
                anime: [...state.anime],
                loading: true
            }
        case 'ADD_ANIME':
            console.log(action.type)
			return {
				...state,
				anime: action.anime,
				loading: false,
			};
        
        default:
            return state
    }
}

export const searchReducer = (state = { query: ""}, action) => {
    switch (action.type) {
        case 'SUBMIT_SEARCH':
            return {
                ...state,
                query: action.payload
            }
        default: return state;
    }
}

export default animeReducer