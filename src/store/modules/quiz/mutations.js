export const mutations = {
    addToChosen(state, data){
        // if(!state.chosen[data.quiz]) state.chosen[data.quiz] = {}
        state.chosen[data.quiz][data.letter] = data.value
    },
    createChosen(state, data){
        state.chosen = data
        console.log('created')
        // if(Object.keys(state.chosen).length === 0) state.chosen = data
        // console.log(stat)
    },
    clearChosen(state){
        state.chosen = {}
    },
    setEntrepreneurStyle(state, data){
        state.entrepreneurStyle = data
    }
}