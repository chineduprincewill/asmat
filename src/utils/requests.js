import axios from "axios";
const API_BASE = import.meta.env.VITE_BASE_URL || "https://api.example.com";

export const fetchIncomingRequests = async (token, setRequests, setError, setLoading) => {
    setLoading(true);
    try {
        if (!token || typeof token !== "string") {
            throw new Error("missing_token");
        }
        const response = await axios.get(`${API_BASE}/incoming-requests`, {
            headers: {
                Accept: "application/json",
                // Remove Content-Type for GET — may trigger preflight unnecessarily
                Authorization: `Bearer ${token.trim()}`,
            },
            // withCredentials: true, // uncomment if the backend expects cookies
        });
        //console.log(response.data);
        setRequests(response.data);
    } catch (err) {
        if (err.message === "missing_token") {
            setError("Authorization token not provided");
        } else if (!err?.response) {
            setError("No response from server");
        } else {
            // Prefer server message, normalize to string
            const msg =
            err.response.data?.message ||
            err.response.data?.error ||
            JSON.stringify(err.response.data) ||
            `Request failed (${err.response.status})`;
            console.log("Server response:", err.response);
            setError(msg);
        }
    } finally {
        setLoading(false);
    }
};

export const apinIncomingRequests = async (token, setRequests, setError, setLoading) => {
    setLoading(true);
    try {
        if (!token || typeof token !== "string") {
            throw new Error("missing_token");
        }
        const response = await axios.get(`${API_BASE}/apin-incoming-requests`, {
            headers: {
                Accept: "application/json",
                // Remove Content-Type for GET — may trigger preflight unnecessarily
                Authorization: `Bearer ${token.trim()}`,
            },
            // withCredentials: true, // uncomment if the backend expects cookies
        });
        //console.log(response.data);
        setRequests(response.data);
    } catch (err) {
        if (err.message === "missing_token") {
            setError("Authorization token not provided");
        } else if (!err?.response) {
            setError("No response from server");
        } else {
            // Prefer server message, normalize to string
            const msg =
            err.response.data?.message ||
            err.response.data?.error ||
            JSON.stringify(err.response.data) ||
            `Request failed (${err.response.status})`;
            console.log("Server response:", err.response);
            setError(msg);
        }
    } finally {
        setLoading(false);
    }
};

export const fetchOutgoingRequests = async (token, setRequests, setError, setLoading) => {
    setLoading(true);
    try {
        if (!token || typeof token !== "string") {
            throw new Error("missing_token");
        }
        const response = await axios.get(`${API_BASE}/outgoing-requests`, {
            headers: {
                Accept: "application/json",
                // Remove Content-Type for GET — may trigger preflight unnecessarily
                Authorization: `Bearer ${token.trim()}`,
            },
            // withCredentials: true, // uncomment if the backend expects cookies
        });
        //console.log(response.data);
        setRequests(response.data);
    } catch (err) {
        if (err.message === "missing_token") {
            setError("Authorization token not provided");
        } else if (!err?.response) {
            setError("No response from server");
        } else {
            // Prefer server message, normalize to string
            const msg =
            err.response.data?.message ||
            err.response.data?.error ||
            JSON.stringify(err.response.data) ||
            `Request failed (${err.response.status})`;
            console.log("Server response:", err.response);
            setError(msg);
        }
    } finally {
        setLoading(false);
    }
};

export const newRequest = async (token, data, setSuccess, setError, setSaving) => {
    setSaving(true);
    try {
        if (!token || typeof token !== "string") {
            throw new Error("missing_token");
        }
        const response = await axios.post(`${API_BASE}/create-request`, data, {
            headers: {
                Accept: "application/json",
                // Remove Content-Type for GET — may trigger preflight unnecessarily
                Authorization: `Bearer ${token.trim()}`,
            },
            // withCredentials: true, // uncomment if the backend expects cookies
        });
        console.log(response.data);
        setSuccess(response.data);
    } catch (err) {
        if (err.message === "missing_token") {
            setError("Authorization token not provided");
        } else if (!err?.response) {
            setError("No response from server");
        } else {
            // Prefer server message, normalize to string
            const msg =
            err.response.data?.message ||
            err.response.data?.error ||
            JSON.stringify(err.response.data) ||
            `Request failed (${err.response.status})`;
            console.log("Server response:", err.response);
            setError(msg);
        }
    } finally {
        setSaving(false);
    }
};


export const updateRequest = async (token, data, setSuccess, setError, setSaving) => {
    setSaving(true);
    try {
        if (!token || typeof token !== "string") {
            throw new Error("missing_token");
        }
        const response = await axios.post(`${API_BASE}/update-request`, data, {
            headers: {
                Accept: "application/json",
                // Remove Content-Type for GET — may trigger preflight unnecessarily
                Authorization: `Bearer ${token.trim()}`,
            },
            // withCredentials: true, // uncomment if the backend expects cookies
        });
        console.log(response.data);
        setSuccess(response.data);
    } catch (err) {
        if (err.message === "missing_token") {
            setError("Authorization token not provided");
        } else if (!err?.response) {
            setError("No response from server");
        } else {
            // Prefer server message, normalize to string
            const msg =
            err.response.data?.message ||
            err.response.data?.error ||
            JSON.stringify(err.response.data) ||
            `Request failed (${err.response.status})`;
            console.log("Server response:", err.response);
            setError(msg);
        }
    } finally {
        setSaving(false);
    }
};