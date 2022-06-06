const state = {
    name: '',
    email: '',
    token: ''
};

// 修改变量（state不能直接赋值修改，只能通过mutations）
const mutations = {
    // add: (state) => {
    //     state.num++;
    // },
    // // 参数一：state，参数二：新值
    // addMath: (state, num) => {
    //     state.num += num;
    // },
    // //模拟请求
    // getData(state, data) {
    //     state.data = data;
    // },
    // getData1(state, data) {
    //     state.data1 = data;
    // }
}

const actions = {
    // // 参数一：自带属性，参数二：新值
    // addAsyncMath: ({ commit }, num) => {
    //     setTimeout(() => {
    //        // 修改addMath的值
    //         commit('addMath', num);
    //     }, 1000);
    // },
    // request: ({ commit }) => {
    //     //返回一个promise
    //     return new Promise((resolve, reject) => {
    //         //模拟请求
    //         let httpOption = axios.post;
    //         httpOption("/api/**/****/*****").then(v => {
    //             resolve(data);
    //             //修改getData的值
    //             commit('getData',data);
    //         }).catch(err => reject(err));
    //     })
    // }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
