import {createStore} from "vuex";
import product from "./modules/product.module";

const store = createStore({
    modules:{
        product,
    }
})

export default store;