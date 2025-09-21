import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Advanced search function
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    // Build query
    let query = username ? `${username}` : "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`, {
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });

    return response.data; // contains { total_count, items }
  } catch (error) {
    console.error("Error fetching advanced user data:", error);
    throw error;
  }
};
