import { API_BASE_URL } from "../constants";


const urls = {
    urlLogin: API_BASE_URL + "/auth/login",
    urlSignup: API_BASE_URL + "/auth/signup",
    urlgetInfo: API_BASE_URL + "/user/me",
}
export default urls;