import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import PropTypes from 'prop-types'

function Searchbyrollno({ searchStudentByRollNo }) {
    const [studentData, setstudentData] = useState({
        name: "",
        roll_no: "",
        student_class: ""
    })

    const searchByRoll_no = () => {
        if (studentData.roll_no.length === 0 || studentData.roll_no === "") {
            // seterrrorMsg("Please enter a valid roll no.")
            // onOpen();
        }
        searchStudentByRollNo(studentData.roll_no)
        setstudentData({ ...studentData, roll_no: "" })
    }

    return (
        <Card>
            <CardBody>
                <Input
                    isRequired
                    value={studentData.roll_no}
                    min={1}
                    type="number"
                    label="Roll No:"
                    variant="underlined"
                    placeholder="Enter student's Roll No"
                    className="w-full"
                    onChange={(event) => setstudentData({ ...studentData, roll_no: event.target.value })}
                />
                <div className="flex gap-8 mt-4">
                    <Button
                        color="primary"
                        variant="light"
                        className="w-1/2"
                        onClick={searchByRoll_no}
                    >
                        Search
                    </Button>
                    <Button
                        color="danger"
                        variant="light"
                        className="w-1/2"
                        onClick={() => { setstudentData({ ...studentData, roll_no: "" }) }}
                    >
                        Clear
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

Searchbyrollno.propTypes = {
    searchStudentByRollNo: PropTypes.func,
}

export default Searchbyrollno