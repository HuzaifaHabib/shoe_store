
const TransactionReducer = ((state, action)=>{
    switch(action.type) {
        case "ADD TRANSACTION" :{
            return [action.payload, ...state]
        }
        case "DELETE TRANSACTION" : {
            console.log(action.payload)
            let newState = [...state]
            newState.splice(action.payload.id,1)
            return newState;

        }
        default :
            return state;

    }
})

export default TransactionReducer;