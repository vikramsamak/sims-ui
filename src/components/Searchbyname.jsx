import { useState } from "react"
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import PropTypes from 'prop-types'

function Searchbyname({ searchStudentByName }) {

    const [studentData, setstudentData] = useState({
        name: "",
        roll_no: "",
        student_class: ""
    })

    const searchByName = () => {
        if (studentData.name.length === 0 || studentData.name === "") {
            // seterrrorMsg("Please enter a valid name.")
            // onOpen();
        }
        searchStudentByName(studentData.name)
        setstudentData({ ...studentData, name: "" })
    }

    return (
        <Card>
            <CardBody>
                <Input
                    isRequired
                    value={studentData.name}
                    type="text"
                    label="Name:"
                    variant="underlined"
                    placeholder="Enter student's Name"
                    className="w-full"
                    onChange={(event) => setstudentData({ ...studentData, name: event.target.value })}
                />
                <div className="flex gap-8 mt-4">
                    <Button
                        color="primary"
                        variant="light"
                        className="w-1/2"
                        onClick={searchByName}
                    >
                        Search
                    </Button>
                    <Button
                        color="danger"
                        variant="light"
                        className="w-1/2"
                        onClick={() => { setstudentData({ ...studentData, name: "" }) }}
                    >
                        Clear
                    </Button>
                </div> </CardBody>
        </Card>
    )
}

Searchbyname.propTypes = {
    searchStudentByName: PropTypes.func,
}

export default Searchbyname