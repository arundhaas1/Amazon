export const initialState={
    basket:[],
    user:null
}

export const reducer=(state,action)=>{
    // console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item],
               };

        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex((item)=>item.id===action.id)
                            
            let newBasket=[...state.basket]
 
            if (index>=0) {
                newBasket.splice(index,1)
            } else {
                console.warn("can not be removed from the basket")
            }

            return{
                ...state,
                basket: newBasket
            }

        case  "SET_USER" :
            return({
                ...state,
                user: action.user
            })
            
        default:
            return state;
    }
}

