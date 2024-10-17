import axios from "axios";

const apiRequest = async ({
  url,
  method = "GET", 
  payload = null, 
  headers = {}, 
  queryParams = {}, 
  token = null, 
  contentType = "application/json", 
}) => {
  try {
    // Base URL for all API calls
    const baseUrl = 'https://myhealthvault-backend.onrender.com/api';
    
    // Build query string
    const queryString = new URLSearchParams(queryParams).toString();
    
    // Combine base URL with the endpoint URL
    const apiUrl = `${baseUrl}${url}${queryString ? `?${queryString}` : ''}`;

    // Set up headers
    const requestHeaders = {
      "Content-Type": contentType,
      ...headers,
    };

    // If token is available, add it to Authorization header
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`;
    }

    // Create axios configuration
    const axiosConfig = {
      url: apiUrl,  // Full URL with baseUrl and query params
      method,
      headers: requestHeaders,
      data: payload,  // Payload for POST, PUT, etc.
    };

    // Make API call with axios
    const response = await axios(axiosConfig);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors from axios request
    console.error("API Request Error:", error);
    // Pass along any error information
    throw error.response ? error.response.data : new Error("Network error");
  }
};

export default apiRequest;
