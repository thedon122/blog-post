<<<<<<< HEAD
export default (state = [], action) => {
    switch (action.type) {
    case 'FETCH_POSTS':
        return action.payload;
    default:
        return state;
    }
=======
export default () => {
    return 123;
>>>>>>> 1e1fa0757ef3eae147274f872c1bf7c0e542bc7c
};