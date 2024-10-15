const countModule = {
    state:{
        count:0,
    },
    mutations: {
        increment(state){
            return state.count++
        }
    }
}

export default countModule