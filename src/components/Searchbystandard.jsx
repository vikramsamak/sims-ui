import { useState } from "react"
import PropTypes from 'prop-types'
import { Card, CardBody, Input, Button } from "@nextui-org/react";
function Searchbystandard({ searchStudentByStandard }) {

    const [studentData, setstudentData] = useState({
        name: "",
        roll_no: "",
        student_class: ""
    })

    const searchByStandard = () => {
        if (studentData.student_class.length === 0 || studentData.student_class === "") {
            // seterrrorMsg("Please enter a valid class.")
            // onOpen();
        }
        searchStudentByStandard(studentData.student_class)
        setstudentData({ ...studentData, student_class: "" })
    }


    return (
        <Card>
            <CardBody>
                <Input
                    isRequired
                    value={studentData.student_class}
                    type="text"
                    label="Class:"
                    variant="underlined"
                    placeholder="Enter student's Class"
                    className="w-full"
                    onChange={(event) => setstudentData({ ...studentData, student_class: event.target.value })}
                />
                <div className="flex gap-8 mt-4">
                    <Button
                        color="primary"
                        variant="light"
                        className="w-1/2"
                        onClick={searchByStandard}
                    >
                        Search
                    </Button>
                    <Button
                        color="danger"
                        variant="light"
                        className="w-1/2"
                        onClick={() => { setstudentData({ ...studentData, student_class: "" }) }}
                    >
                        Clear
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

Searchbystandard.propTypes = {
    searchStudentByStandard: PropTypes.func,
}

export default Searchbystandard