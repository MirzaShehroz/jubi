import { Notifications } from "./notifications";

export const errorHandler = (error) => {
    if (error.data.code === 400) {
        Notifications('warning', error.data.message);
    } else if (error.data.code === 401) {
        Notifications('warning', error.data.message);
    } else if (error.data.code === 403) {
        sessionStorage.clear();
        if (error.data.message.includes('Username')) {
            Notifications('error', error.data.message);
        } else {
            Notifications('warning', 'Please login again');
        }
    } else if (error.data.code === 404) {
        Notifications('error', error.data.message);
    } else if (error.data.code === 406) {
        Notifications('error', error.data.message);
    } else if (error.data.code === 409) {
        Notifications('warning', error.data.message);
    } else if (error.data.code === 500) {
        Notifications('error', error.data.message);
    } else {
        Notifications('error', error.data.message);
    }
}