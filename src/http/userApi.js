import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (formData) => {
    try {
        const { data } = await $host.post('api/user/registration', formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Указываем, что передаем FormData
            }
        });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}


export const login = async (name, password) => {
    try {
        const { data } = await $host.post('api/user/login', { name, password });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const check = async () => {
    try {
        const { data } = await $authHost.get('api/user/auth');
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}
