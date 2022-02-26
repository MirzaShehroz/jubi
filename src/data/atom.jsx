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
        // showHProfile: true,
        paddingTop: "0.8%",
        showUserPanel: false,
    }
});

export const sidePanelFunc = atom({
    key: "sidePanelIcon",
    default: {
        showSP: 'none',
    }
})

export const authData = atom({
    key: "authData",
    default: {
        email: 'username',
        token: '',
        UUID: ''
    }
})

export const userPicUpload = atom({
    key: "userPic",
    default: {
        avatar: avatar,
    }
})

export const userIDedit = atom({
    key: "edit ID",
    default: {
        currentPass: true,
        editEmail: false,
        successEmail: false,
    }
})

export const userPassEdit = atom({
    key: "edit Password",
    default: {
        currentPass: true,
        editPass: false,
        successPass: false,
    }
})

export const docSignUpData = atom({
    key: 'signUp data',
    default: {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        cPassword: "",
        hospital: "",
        specialty: "",
        title: "",
        phone_number: ""
    }
})
export const docData = atom({
    key: 'Doc data',
    default: {
        dId: 0,
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        hospital: "",
        specialty: "",
        title: "",
        phone_number: ""
    }
})

export const signUpFormValid = atom({
    key: 'signUp Form',
    default: {
        showVerEmailBtn: true,
        showVerification: false,
        invalidVer: false,
        showPass: false,
    }
})

export const forgetPassDoc = atom({
    key: 'forget Doctor Password',
    default: {
        email: '',
    }
})

export const usersData_ = atom({
    key: 'User Data',
    default: []
})

export const userDataIndividual = atom({
    key: 'User individual Data',
    default: []
})

export const watchList = atom({
    key: 'User watchlist',
    default: []
})

export const medicHistoryList = atom({
    key: 'User medication history logs',
    default: []
})

export const watchListComment = atom({
    key: 'User watchlist comment',
    default: ''
})

export const memoAtom = atom({
    key: 'User memo',
    default: ''
})

export const memoList_ = atom({
    key: 'User memo List',
    default: []
})

export const userChatRooms = atom({
    key: 'User chat rooms',
    default: []
})

export const showMessageNoti = atom({
    key: 'show message notification',
    default: false
})

