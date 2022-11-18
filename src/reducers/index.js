import { ADD_ITEM, DELETE_ITEM } from '../constants';
const initialState = { items: [] };

export default function rootReducer(state=initialState, action) {
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            items: state.items.concat(action.payload)
        });       
    } else if (action.type === DELETE_ITEM) {
        return Object.assign({}, state, {
            items: state.items.filter((item)=>item.id!==action.payload)
        });       
    }
    return state;
}