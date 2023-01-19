import { createSlice } from '@reduxjs/toolkit';

export const turnsSlice = createSlice({
    name: 'turns',
    initialState: {
        isSaving: false,
        registeredTurns: [],
    },
    reducers: {
        setTurns: ( state, { payload } ) => {
            state.registeredTurns = payload;
        },
        onAddNewTurn: ( state, { payload } ) => {
            state.registeredTurns.push( payload );
        },
        onUpdateTurn: ( state, { payload } ) => {
            state.registeredTurns = state.registeredTurns.map( turn => {
                if( turn.id === payload.id ){
                    return payload;
                }
                return turn;
            })
        },
        onDeleteTurn: ( state, { payload } ) => {
            state.registeredTurns = state.registeredTurns.filter( turn => turn.id !== payload.id );
        }
    },
});


export const { onAddNewTurn, onUpdateTurn, onDeleteTurn, setTurns } = turnsSlice.actions;