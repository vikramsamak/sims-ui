import { useState } from "react"
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import PropTypes from 'prop-types'

function Removestudentinfo({ deleteStudentifo }) {

    const [studentData, setstudentData] = useState({
        name: "",
        roll_no: "",
        student_class: ""
    })

    const removeStudentInfo = () => {
        if (studentData.roll_no.length === 0 || studentData.roll_no === "") {
            // seterrrorMsg("Please enter a valid roll no.")
            // onOpen();
        }
        deleteStudentifo(studentData.roll_no)
        setstudentData({ ...studentData, roll_no: "" })
    }

    return (
        <Card>
            <CardBody>
                <div className="flex justify-center">
                    <Input
                        isRequired
                        value={studentData.roll_no}
                        min={1}
                        type="number"
                        label="Roll No"
                        variant="underlined"
                        placeholder="Enter student's roll no"
                        className="w-full"
                        onChange={(event) => setstudentData({ ...studentData, roll_no: event.target.value })}
                    />
                </div>
                <div className="flex gap-8 mt-4">
                    <Button
                        color="primary"
                        variant="light"
                        className="w-1/2"
                        onClick={removeStudentInfo}>
                        Submit
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

Removestudentinfo.propTypes = {
    deleteStudentifo: PropTypes.func,
}

export default Removestudentinfo