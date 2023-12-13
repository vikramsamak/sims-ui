import axios from "axios";


class Endpoints {
    constructor(url) {
        this.url = url
    }

    async saveFeedback(feedback) {
        try {
            const res = await axios.post(`${this.url}/savefeedback`, feedback)
            return res.data;
        } catch (error) {
            return error
        }
    }

    async getAllFeedbacks() {
        try {
            const res = await axios.get(`${this.url}/getallfeedbacks`)
            return res.data.data;
        } catch (error) {
            return error;
        }
    }
}


export const apiEndpoints = new Endpoints(import.meta.env.VITE_URL)