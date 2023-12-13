import { useState } from "react"
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import PropTypes from 'prop-types'
import { queryKey } from '../../constants/constants'
import { StudenInfo } from '../../helpers/crudMethods'
import { useSWRConfig } from "swr";
function Removestudentinfo({ setnotification, openModal, }) {
    const { mutate } = useSWRConfig()
    const [roll_no, setroll_no] = useState()

    const removeStudentInfo = async () => {
        if (roll_no === "") {
            setnotification("Please enter a valid roll no.")
            openModal();
        }
        else {
            await StudenInfo.deletestudentInfo(roll_no)
            setroll_no("")
            mutate(queryKey)
        }
    }

    return (
        <Card>
            <CardBody>
                <div className="flex justify-center">
                    <Input
                        isRequired
                        value={roll_no}
                        min={1}
                        type="number"
                        label="Roll No"
                        variant="underlined"
                        placeholder="Enter student's roll no"
                        className="w-full"
                        onChange={(event) => setroll_no(event.target.value)}
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
                        onClick={() => { setroll_no("") }}
                    >
                        Clear
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

Removestudentinfo.propTypes = {
    setnotification: PropTypes.func,
    openModal: PropTypes.func,
    deleteStudentifo: PropTypes.func,
}

export default Removestudentinfo