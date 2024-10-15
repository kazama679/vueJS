import { getAllPost } from "@/api/postApit"
import { SET_DATA, SET_ERROR, SET_LOADING } from "@/constants/mutationTypes"
import axios from "axios"

const postModule = {
    // đây là nơi khởi tạo các state của post Module
    state:{
        loading: false,
        data:[],
        error: null
    },

    // chứa các hàm đồng bộ để cập nhập lại state
    mutations:{
        [SET_LOADING](state,payLoad){
            // cập nhập lại giá trị cho loading
            state.loading = payLoad
        },
        [SET_DATA](state,payLoad){
            // cập nhập lại giá trị cho data
            state.data = payLoad
        },
        [SET_ERROR](state,payLoad){
            // cập nhập lại giá trị cho error
            state.error= payLoad
        }
    },

    // chứa các hàm bất đồng bộ: gọi API tương tác vs dữ liệu
    actions:{
        async fetchData({commit}){
            commit(SET_LOADING,true)
            try{
                const response = await getAllPost()
                commit(SET_DATA,response.data)
            }catch(error){
                commit(SET_ERROR,error)
            } finally{
                commit(SET_LOADING, false)
            }
        }
    },
    getters:{
        // Lấy ra tổng số bài viết
        countPost:(state)=> state.data.length,
    }
}
export default postModule