import {userState} from '@/store/user';
import { api } from '@/plugins/api';


export default function (context) {
    const userStore = userState();
    userStore.initializationStore();
    
    if(userStore.isAuthenticated){
        if(userStore.userToken){
            api.defaults.headers.common['x-token'] = userStore.userToken
        }else{
            api.defaults.headers.common['x-token'] = ''
        }

        if(context.route.path == '/'){
            return context.redirect('/home')
        }
    }else{
        if(context.route.path != '/'){
            return context.redirect('/')
        }
    }
}