import { useEffect, useState } from "react"
import Formtabs from "./components/Formtabs"
import Infotable from "./components/Infotable"
import { StudenInfo } from "../helpers/crudMethods";
import useSWR, { useSWRConfig } from "swr";

function App() {
  const { mutate } = useSWRConfig()
  const [studentInfo, setStudentInfo] = useState([]);

  const getAllstudentInfo = async () => {
    const res = await StudenInfo.getAllStudentsInfo();
    return res;
  }

  const queryKey = 'STUDENTS';

  const { data, error, isLoading } = useSWR(queryKey, getAllstudentInfo)


  useEffect(() => {
    if (data) {
      setStudentInfo(data);
    }
  }, [data]);

  if (isLoading) {
    console.log('Loading...')

  }

  if (error) {
    console.log(error)
  }

  const saveStudentInfo = async (roll_no, name, student_class) => {
    try {
      var newStudent = {
        roll_no: roll_no,
        name: name,
        student_class: student_class
      }
      await StudenInfo.addStudentInfo(newStudent)
      mutate(queryKey)
    } catch (error) {
      console.log(error)
    }
  }


  const updateStudentInfo = async (roll_no, name, student_class) => {
    try {
      var updateData = {
        roll_no: roll_no,
        name: name,
        student_class: student_class
      }
      await StudenInfo.updateStudentInfo(updateData)
      mutate(queryKey)
    } catch (error) {
      console.log(error)
    }

  }

  const deleteStudentifo = async (roll_no) => {
    try {
      await StudenInfo.deletestudentInfo(roll_no)
      mutate(queryKey)
    }
    catch (error) {
      console.log(error)
    }
  }

  const searchStudentByRollNo = async (roll_no) => {
    try {
      const studentData = await StudenInfo.getStudentInfoByRollNo(roll_no)
      setStudentInfo(studentData)
    } catch (error) {
      console.log(error)
    }
  }

  const searchStudentByName = async (name) => {
    try {
      const studentData = await StudenInfo.getStudentInfoByName(name)
      setStudentInfo(studentData)
    } catch (error) {
      console.log(error)
    }
  }

  const searchStudentByClass = async (student_class) => {
    try {
      const studentData = await StudenInfo.getStudentInfoByClass(student_class)
      setStudentInfo(studentData)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <main className="container mx-auto min-h-screen max-h-full">
      <div className="flex items-center justify-center w-full h-20">
        <p className="text-4xl text-center">Student&apos;s Information Management System</p>
      </div>
      <div className="py-4">
        <div className="mb-6">
          <Formtabs
            searchStudentByRollNo={searchStudentByRollNo}
            searchStudentByName={searchStudentByName}
            searchStudentByClass={searchStudentByClass}
            saveStudentInfo={saveStudentInfo}
            updateStudentInfo={updateStudentInfo}
            deleteStudentifo={deleteStudentifo}
          >
          </Formtabs>
        </div>
        <div className="mt-6 mb-6">
          <Infotable data={studentInfo}></Infotable>
        </div>
      </div>
    </main>
  )
}

export default App
