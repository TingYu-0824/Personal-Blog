import { reqHomeCard } from '@/api'
const state = {
    homeCard: [],
};
const mutations = {
    GETHOMECARD(state, homeCard) {
        // console.log('GETCODECARD');
        state.homeCard = homeCard;
    },
};
const actions = {
    async getHomeCard({ commit }) {
        let result = await reqHomeCard();
        if (result.code == 200) {
            commit("GETHOMECARD", result.data);
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