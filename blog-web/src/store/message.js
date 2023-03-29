import { reqMessage } from '@/api'
const state = {
    messageList: [],
};
const mutations = {
    GETMESSAGE(state, messageList) {
        // console.log('GETCODECARD');
        state.messageList = messageList;
    },
};
const actions = {
    async getMessage({ commit }) {
        let result = await reqMessage();
        if (result.code == 200) {
            commit("GETMESSAGE", result.data);
        }
        console.log(result)
    },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}