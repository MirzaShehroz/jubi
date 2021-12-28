import { atom } from "recoil";
import avatar from '../assets/img/signup_avatar.png';

export const connectUserShow = atom({
    key: "connect_atom",
    default: {
        connectMenu: false,
        csMenu: false,
        connectClass: 'c_menu'
    }
});

export const showHeaderProfile = atom({
    key: "showHeaderIcon",
    default: {
        showHProfile: true,
        paddingTop: "0.8%",
        showUserPanel: false,
        iconRotate: false,
    }
});

export const sidePanelFunc = atom({
    key: "sidePanelIcon",
    default: {
        showSP: 'none',
    }
})

export const authData= atom({
    key: "authData",
    default: {
        email:'email',
        token:'token'
    }
})

export const userPicUpload= atom({
    key: "userPic",
    default: {
        avatar:avatar,
    }
})