export const actions = {
    addToChosen({commit}, data){
        commit('addToChosen', data)
    },
    createChosen({commit}, data){
        commit('createChosen', data)
    },
    clearChosen({commit}){
        commit('clearChosen')
    },
    setEntrepreneurStyle({commit}, data){
        commit('setEntrepreneurStyle', data)
    },
}