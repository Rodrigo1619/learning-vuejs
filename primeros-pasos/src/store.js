import { createStore } from 'vuex';

export default createStore({
    state: {
        message: 'Hello Vuex!'
    },
    mutations: {
        setMessage(state, newMessage) {
            state.message = newMessage;
        }
    }
});