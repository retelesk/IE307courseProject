import axios from 'axios';

const API_URL = 'https://budget.retelesk.synology.me/api/v1'; // Thay bằng URL thực tế

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, credentials);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Đăng nhập thất bại');
        } else if (error.request) {
            throw new Error('Không thể kết nối đến server');
        } else {
            throw new Error('Có lỗi xảy ra');
        }
    }
};