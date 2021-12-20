import { atom } from "recoil";

export const connectUserShow = atom({
    key: "connectUser_atom",
    default: {
        connectMenu: false,
        csMenu: false,
        connectClass: 'c_menu'
    }
});