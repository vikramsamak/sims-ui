import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import PropTypes from "prop-types";

function SavestudentInfo({ setError, openModal }) {
    const [studentData, setstudentData] = useState({
        name: "",
        roll_no: "",
        standard: "",
        division: ""
    })

    const addNewStudent = () => {
        if (studentData.name === "" || studentData.roll_no === "" || studentData.student_class === "") {
            setError("Please enter a valid student info.")
            openModal()
        }

        setstudentData({ ...studentData, roll_no: "", name: "", student_class: "" })
    }

    return (
        <Card>
            <CardBody>
                <div className="flex flex-col gap-4 justify-center">
                    <div className="flex gap-2">
                        <Input
                            isRequired
                            value={studentData.name}
                            type="text"
                            label="Name"
                            variant="underlined"
                            placeholder="Enter student's name"
                            className="w-1/2"
                            onChange={(event) => setstudentData({ ...studentData, name: event.target.value })}
                        />
                        <Input
                            isRequired
                            value={studentData.roll_no}
                            min={1}
                            type="number"
                            label="Roll No"
                            variant="underlined"
                            placeholder="Enter student's roll no"
                            className="w-1/2"
                            onChange={(event) => setstudentData({ ...studentData, roll_no: event.target.value })}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            isRequired
                            value={studentData.standard}
                            type="number"
                            label="Standard"
                            min={1}
                            max={12}
                            variant="underlined"
                            placeholder="Enter student's standard"
                            className="w-1/2"
                            onChange={(event) => setstudentData({ ...studentData, standard: event.target.value })}
                        />
                        <Input
                            isRequired
                            value={studentData.division}
                            type="text"
                            label="Division"
                            variant="underlined"
                            placeholder="Enter student's division"
                            className="w-1/2"
                            onChange={(event) => setstudentData({ ...studentData, division: event.target.value })}
                        />
                    </div>


                </div>
                <div className="flex gap-8 mt-4">
                    <Button
                        color="primary"
                        variant="light"
                        className="w-1/2"
                        onClick={addNewStudent}
                    >
                        Submit
                    </Button>
                    <Button
                        color="danger"
                        variant="light"
                        className="w-1/2"
                        onClick={() => { setstudentData({ ...studentData, name: "", roll_no: "", student_class: "" }) }}
                    >
                        Clear
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

SavestudentInfo.propTypes = {
    setError: PropTypes.func,
    openModal: PropTypes.func,
}

export default SavestudentInfo