import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: 'token $ {import.meta.env.VITE_APP_GITHUB_API_KEY}',
    },
});

export const fetchUserData = async (username) => {
    try {
    const response = await axios.get('${BASE_URL}/users/${username}',{headers,});
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};
 