const initialState = [];

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'users/usersAdded': {
            return [...state, ...action.payload];
        }
        default:
            return state;
    }
}

export async function fetchUsers(dispatch, getState) {
    fetch('https://realtimecrudapp.herokuapp.com/user')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'users/usersAdded',
                payload: data
            })
        })
}