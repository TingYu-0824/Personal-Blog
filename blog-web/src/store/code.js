import { reqCodeCard } from '@/api'
const state = {
    codeCard: [],
};
const mutations = {
    GETCODECARD(state, codeCard) {
        // console.log('GETCODECARD');
        state.codeCard = codeCard;
    },
};
const actions = {
    async getCodeCard({ commit }) {
        let result = await reqCodeCard();
        if (result.code == 200) {
            commit("GETCODECARD", result.data);
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