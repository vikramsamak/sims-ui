import axios from "axios";

class crudMethods {

    constructor(url) {
        this.URL = url;
    }

    async getAllStudentsInfo() {
        try {
            const res = await axios.get(`${this.URL}/getallstudentsinfo`)
            return res.data.data;
        }
        catch (error) {
            return error;
        }
    }

    async getStudentInfoByRollNo(roll_no) {
        try {
            const res = await axios.get(`${this.URL}/getstudentinfobyrollno?roll_no=` + roll_no)
            return res.data.data;
        } catch (error) {
            return error;
        }
    }

    async getStudentInfoByName(name) {
        try {
            const res = await axios.get(`${this.URL}/getstudentinfobyname?name=` + name)
            return res.data.data;
        } catch (error) {
            return error;
        }
    }

    async getStudentInfoByClass(student_class) {
        try {
            const res = await axios.get(`${this.URL}/getstudentinfobyclass?class=` + student_class)
            return res.data.data;
        } catch (error) {
            return error;
        }
    }

    async addStudentInfo(newStudentData) {
        try {
            const res = await axios.post(`${this.URL}/savestudentinfo`, newStudentData)
            return res.data;
        }
        catch (error) {
            return error
        }
    }


    async updateStudentInfo(updatedStudentData) {
        var data = {
            name: updatedStudentData.name,
            student_class: updatedStudentData.student_class
        }
        try {
            const res = await axios.patch(`${this.URL}/updatestudentinfo?roll_no=` + updatedStudentData.roll_no, data)
            return res.data
        }
        catch (error) {
            return error
        }
    }

    async deletestudentInfo(roll_no) {
        try {
            const res = await axios.delete(`${this.URL}/deletestudentinfo?roll_no=` + roll_no)
            return res.data;
        } catch (error) {
            return error
        }
    }



}

export const StudenInfo = new crudMethods(import.meta.env.VITE_URL)