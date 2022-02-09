import store from '../store/index';

const clientGuard = (to, from, next) => {

    const user = store.getters['user/getUser'];
    if (!user){
        next('/');
    }else{
        next();
    }
}

export default clientGuard;