import { defineStore } from 'pinia'


export const userState = defineStore({
    id: 'userState',
    state: () => ({
        userToken: null,
        isAuthenticated: false
    }),
    actions:{
        initializationStore(){
            if(localStorage.getItem('token')){
                this.userToken = localStorage.getItem('token')
                this.isAuthenticated = true
            }else{
                this.userToken = ''
                this.isAuthenticated = false
            }
        },
        setToken(token){
            this.userToken = token
            this.isAuthenticated = true
        },
        removeToken(){
            this.userToken = ''
            this.isAuthenticated = false
        },
    }
})