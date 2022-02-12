import axios from "axios";
import { errorHandler } from "../helpers/errorhandler";
import { successHandler } from "../helpers/successhandler";
export default class ApiServices {
    static setPreflight = async () => await axios.options(`/preflight`)
    static postOTP = async (email) => {
        try {
            const res = await axios.post(`/affiliate/v1/otp?email=${email}`);
            successHandler(res);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    static postVerifyOTP = async (data) => {
        try {
            const res = await axios.post(`/affiliate/v1/verify`, data);
            successHandler(res);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    static postForgetPassword = async (data) => {
        try {
            const res = await axios.post(`/affiliate/v1/doctor/password/forget`, data);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    static postUserMessages = async (data) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.post(`/affiliate/v1/chat/room/message`, data, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    static postConnectUser = async (id) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.post(`/affiliate/v1/chat/room?uid=${id}`, {}, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    static postWatchlistUser = async (data) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.post(`affiliate/v1/doctor/watchlist`, data, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    static updateDoctorProfile = async (data) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.patch(`/affiliate/v1/doctor/profile`, data, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    static getUsersList = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`affiliate/v1/users`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    static getWatchList = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`/affiliate/v1/doctor/watchlist`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    static getDoctorChatRooms = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`/affiliate/v1/chat/doctor`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    static getSingleUserChat = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        const rid = parseInt(sessionStorage.getItem('%83r%5i$#d%'))
        try {
            const res = await axios.get(`/affiliate/v1/chat/room/message?rid=${rid}`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    static getDocProfile = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`/affiliate/v1/doctor/profile`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    static removeWatchlistUser = async (id) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.delete(`affiliate/v1/doctor/watchlist?uid=${id}`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
}