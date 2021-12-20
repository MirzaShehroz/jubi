import { atom } from "recoil";

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
    }
});