import axios from "axios";
import { Notifications } from '../helpers/notifications';
import { errorHandler } from "../helpers/errorhandler";
export default class ApiServices {
    // Preflight API
    static setPreflight = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`,
                "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
                // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            }
        }
        await axios.options(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/preflight`, config)
    }
    // Login Doctor API
    static postLogin = async (data) => {
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/login`, data);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Send OTP API
    static postOTP = async (email) => {
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/otp?email=${email}`);
            Notifications('success', res.data.data.message);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Verify OTP API
    static postVerifyOTP = async (data) => {
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/verify`, data);
            Notifications('success', res.data.data.message);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Signup doctor API
    static postSignUp = async (data) => {
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/signup`, data);
            Notifications('success', res.data.data.message);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Forget Password API
    static postForgetPassword = async (data) => {
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/password/forget`, data);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Send Message API
    static postUserMessages = async (data) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/chat/room/message`, data, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    // Connect User API
    static postConnectUser = async (id) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/chat/room?uid=${id}`, {}, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    // Add to Watchlist API
    static postWatchlistUser = async (data) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/watchlist`, data, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    // Upload File API
    static postFile = async (data) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/s3/upload`, data, config);
            Notifications('success', 'File uploaded successfully');
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    // Update Doctor Profile API
    static updateDoctorProfile = async (data) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.patch(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/profile`, data, config);
            Notifications('success', res.data.message);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Get Userlist API
    static getUsersList = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/users`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Get WatchList API
    static getWatchList = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/watchlist`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Get Doctor Chat Rooms API
    static getDoctorChatRooms = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/chat/doctor`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data);
            return error.response.data;
        }
    }
    // Get Chat Room Messages API
    static getSingleUserChat = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        const rid = parseInt(sessionStorage.getItem('%83r%5i$#d%'))
        try {
            const res = await axios.get(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/chat/doctor/room/message?rid=${rid}`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    // Get Doctor Profile API
    static getDocProfile = async () => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/profile`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
    // Get Medication List API
    static getMedicList = async (uid) => {
        const config = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem('authData')}` } }
        try {
            const res = await axios.get(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/medicine/list?group_by=active&uid=${uid}`, config);
            return res;
        } catch (error) {
            if (error.response.data.data.code !== 404) {
                errorHandler(error.response.data)
            }
            return error.response.data;
        }
    }
    // Remove from watchlist API
    static removeWatchlistUser = async (id) => {
        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`,
                "Access-Control-Allow-Origin": "*"
            }
        }
        try {
            const res = await axios.delete(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/watchlist?uid=${id}`, config);
            return res;
        } catch (error) {
            errorHandler(error.response.data)
            return error.response.data;
        }
    }
}