import React, { createContext, useReducer } from "react";
import TransactionReducer from './cartReducer';

const InitialState = [];
export const CartContext = createContext(InitialState);

export const CartContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer,InitialState)

    function addTransaction(transObj) {
        console.log(transObj);
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transObj.amount,
                // description: transObj.desc,
                id: transObj.id
            }
        })
    }

    function deleteTransaction(transObj) {
        dispatch({
            type: "DELETE TRANSACTION",
            payload: {
                id: transObj.id
            }
        })
    }

    return (
        <CartContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}

        </CartContext.Provider>
    )
}