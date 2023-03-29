import { reqTimeline } from '@/api'
const state = {
    timelineCard: [],
};
const mutations = {
    GETTIMELINE(state, timelineCard) {
        // console.log('GETCODECARD');
        state.timelineCard = timelineCard;
    },
};
const actions = {
    async getTimeline({ commit }) {
        let result = await reqTimeline();
        if (result.code == 200) {
            commit("GETTIMELINE", result.data);
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