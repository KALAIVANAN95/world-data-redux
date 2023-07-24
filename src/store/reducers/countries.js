const initialState = {
    countries:[]
}

const countriesReducer = (state=initialState,action)=>{
    switch(action.type){
        case "SET_COUNTRIES":
            return{
                countries:[...action.data]
                // countries:action.data
            }
            default:
                return state;
    }
}

export default countriesReducer;