import urls from '../urls'
import { PostLogin, PutData, PostData, DeleteData, GetData, PostRegister } from '../helpers';

export const login = async (body) =>
    PostLogin(urls.urlLogin, body)
        .then(res => res)
        .catch(err => err)
export const signup = async (body) =>
    PostRegister(urls.urlSignup, body)
        .then(res => res)
        .catch(err => err)
export const getInfo = async (body) =>
    GetData(urls.urlgetInfo, body)
        .then(res => res)
        .catch(err => err)