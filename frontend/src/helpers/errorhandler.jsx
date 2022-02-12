import { Notifications } from "./notifications";

export const errorHandler = (error) => {
    if (error.data.code === 400) {
        Notifications('warning', error.data.message);
    } else if (error.data.code === 401) {
        Notifications('warning', error.data.message);
    } else if (error.data.code === 403) {
        sessionStorage.clear();
        Notifications('warning', 'Please login again');
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