import { useState } from "react"
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import PropTypes from "prop-types"
import { StudenInfo } from '../../helpers/crudMethods'
import { queryKey } from '../../constants/constants'
import { useSWRConfig } from "swr";
function Editstudeninfo({ setnotification, openModal }) {

    const { mutate } = useSWRConfig()
    const [studentData, setstudentData] = useState({
        roll_no: "",
        new_roll_no: "",
        name: "",
        standard: "",
        division: ""
    })

    const editStudentInfo = async () => {
        if (studentData.name === "" || studentData.roll_no === "" || studentData.new_roll_no === "" || studentData.standard === "") {
            setnotification("Please enter a valid student info.")
            openModal()
        }
        else {
            await StudenInfo.updateStudentInfo(studentData)
            setstudentData({ ...studentData, roll_no: "", new_roll_no: "", name: "", standard: "", division: "" })
            mutate(queryKey)
        }
    }

    return (
        <Card fullWidth>
            <CardBody>
                <div className="flex flex-col gap-4 justify-center">
                    <div className="flex gap-2">
                        <Input
                            isRequired
                            value={studentData.roll_no}
                            min={1}
                            type="number"
                            label="Old Roll No"
                            variant="underlined"
                            placeholder="Enter student's roll no (old)"
                            className="w-1/2"
                            onChange={(event) => setstudentData({ ...studentData, roll_no: event.target.value })}

                        />
                        <Input
                            isRequired
                            value={studentData.new_roll_no}
                            min={1}
                            type="number"
                            label="New Roll No"
                            variant="underlined"
                            placeholder="Enter student's roll no (new)"
                            className="w-1/2"
                            onChange={(event) => setstudentData({ ...studentData, new_roll_no: event.target.value })}

                        />
                    </div>
                    <div className="flex gap-2">
                        <Input
                            isRequired
                            value={studentData.name}
                            type="text"
                            label="Name"
                            variant="underlined"
                            placeholder="Enter student's name"
                            className="w-1/3"
                            onChange={(event) => setstudentData({ ...studentData, name: event.target.value })}
                        />
                        <Input
                            isRequired
                            value={studentData.standard}
                            type="text"
                            label="Standard"
                            variant="underlined"
                            placeholder="Enter student's standard"
                            className="w-1/3"
                            onChange={(event) => setstudentData({ ...studentData, standard: event.target.value })}
                        />
                        <Input
                            isRequired
                            value={studentData.division}
                            type="text"
                            label="Division"
                            variant="underlined"
                            placeholder="Enter student's division"
                            className="w-1/3"
                            onChange={(event) => setstudentData({ ...studentData, division: event.target.value })}
                        />
                    </div>
                </div>
                <div className="flex gap-8 mt-4">
                    <Button
                        color="primary"
                        variant="light"
                        className="w-1/2"
                        onClick={editStudentInfo}>
                        Submit
                    </Button>
                    <Button
                        color="danger"
                        variant="light"
                        className="w-1/2"
                        onClick={() => { setstudentData({ ...studentData, roll_no: "", new_roll_no: "", name: "", standard: "", division: "" }) }}
                    >
                        Clear
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

Editstudeninfo.propTypes = {
    setnotification: PropTypes.func,
    openModal: PropTypes.func,

}

export default Editstudeninfo