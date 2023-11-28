import { Card, CardBody, Tabs, Tab, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import PropTypes from "prop-types";

function Formtabs({ searchStudentByRollNo, searchStudentByName, searchStudentByClass, saveStudentInfo, updateStudentInfo, deleteStudentifo }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [studentData, setstudentData] = useState({
        name: "",
        roll_no: "",
        student_class: ""
    })

    const [error, seterrrorMsg] = useState("")


    const addNewStudent = () => {
        if (studentData.name === "" || studentData.roll_no === "" || studentData.student_class === "") {
            seterrrorMsg("Please enter a valid student info.")
            onOpen()
        }
        saveStudentInfo(studentData.roll_no, studentData.name, studentData.student_class)
        setstudentData({ ...studentData, roll_no: "", name: "", student_class: "" })
    }


    const editStudentInfo = () => {
        if (studentData.name === "" || studentData.roll_no === "" || studentData.student_class === "") {
            seterrrorMsg("Please enter a valid student info.")
            onOpen()
        }
        updateStudentInfo(studentData.roll_no, studentData.name, studentData.student_class)
        setstudentData({ ...studentData, roll_no: "", name: "", student_class: "" })
    }


    const removeStudentInfo = () => {
        if (studentData.roll_no.length === 0 || studentData.roll_no === "") {
            seterrrorMsg("Please enter a valid roll no.")
            onOpen();
        }
        deleteStudentifo(studentData.roll_no)
        setstudentData({ ...studentData, roll_no: "" })
    }

    const searchByRoll_no = () => {
        if (studentData.roll_no.length === 0 || studentData.roll_no === "") {
            seterrrorMsg("Please enter a valid roll no.")
            onOpen();
        }
        searchStudentByRollNo(studentData.roll_no)
        setstudentData({ ...studentData, roll_no: "" })
    }

    const searchByName = () => {
        if (studentData.name.length === 0 || studentData.name === "") {
            seterrrorMsg("Please enter a valid name.")
            onOpen();
        }
        searchStudentByName(studentData.name)
        setstudentData({ ...studentData, name: "" })

    }

    const searchByClass = () => {
        if (studentData.student_class.length === 0 || studentData.student_class === "") {
            seterrrorMsg("Please enter a valid class.")
            onOpen();
        }
        searchStudentByClass(studentData.student_class)
        setstudentData({ ...studentData, student_class: "" })
    }




    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}>
                <ModalContent className="bg-black text-white">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Error ...!</ModalHeader>
                            <ModalBody>
                                <p>
                                    {error}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="faded" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Card className="w-full" fullWidth={true}>
                <CardBody className="py-4">
                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Options" fullWidth={true}>
                            <Tab key="save" title="Add New Student">
                                <Card>
                                    <CardBody>
                                        <div className="flex gap-4 justify-center">
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
                                                value={studentData.roll_no}
                                                min={1}
                                                type="number"
                                                label="Roll No"
                                                variant="underlined"
                                                placeholder="Enter student's roll no"
                                                className="w-1/3"
                                                onChange={(event) => setstudentData({ ...studentData, roll_no: event.target.value })}
                                            />
                                            <Input
                                                isRequired
                                                value={studentData.student_class}
                                                type="text"
                                                label="Class"
                                                variant="underlined"
                                                placeholder="Enter student's class"
                                                className="w-1/3"
                                                onChange={(event) => setstudentData({ ...studentData, student_class: event.target.value })}
                                            />
                                        </div>
                                        <div className="flex gap-8 mt-4">
                                            <Button
                                                color="primary"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={addNewStudent}
                                            >
                                                Submit
                                            </Button>
                                            <Button
                                                color="danger"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={() => { setstudentData({ ...studentData, name: "", roll_no: "", student_class: "" }) }}
                                            >
                                                Clear
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="edit" title="Edit Student Info">
                                <Card>
                                    <CardBody>
                                        <div className="flex gap-4 justify-center">
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
                                                value={studentData.roll_no}
                                                min={1}
                                                type="number"
                                                label="Roll No"
                                                variant="underlined"
                                                placeholder="Enter student's roll no"
                                                className="w-1/3"
                                                onChange={(event) => setstudentData({ ...studentData, roll_no: event.target.value })}

                                            />
                                            <Input
                                                isRequired
                                                value={studentData.student_class}
                                                type="text"
                                                label="Class"
                                                variant="underlined"
                                                placeholder="Enter student's class"
                                                className="w-1/3"
                                                onChange={(event) => setstudentData({ ...studentData, student_class: event.target.value })}
                                            />
                                        </div>
                                        <div className="flex gap-8 mt-4">
                                            <Button
                                                color="primary"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={editStudentInfo}>
                                                Submit
                                            </Button>
                                            <Button
                                                color="danger"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={() => { setstudentData({ ...studentData, name: "", roll_no: "", student_class: "" }) }}
                                            >
                                                Clear
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="delete" title="Remove Student">
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
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={removeStudentInfo}>
                                                Submit
                                            </Button>
                                            <Button
                                                color="danger"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={() => { setstudentData({ ...studentData, roll_no: "" }) }}
                                            >
                                                Clear
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="roll_no" title="Search Student By Roll Number">
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
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={searchByRoll_no}
                                            >
                                                Search
                                            </Button>
                                            <Button
                                                color="danger"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={() => { setstudentData({ ...studentData, roll_no: "" }) }}
                                            >
                                                Clear
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="name" title="Search Student By Name">
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
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={searchByName}
                                            >
                                                Search
                                            </Button>
                                            <Button
                                                color="danger"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={() => { setstudentData({ ...studentData, name: "" }) }}
                                            >
                                                Clear
                                            </Button>
                                        </div> </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="class" title="Search Student By Class">
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
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={searchByClass}
                                            >
                                                Search
                                            </Button>
                                            <Button
                                                color="danger"
                                                variant="faded"
                                                className="w-1/2"
                                                onClick={() => { setstudentData({ ...studentData, student_class: "" }) }}
                                            >
                                                Clear
                                            </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

Formtabs.propTypes = {
    searchStudentByRollNo: PropTypes.func,
    searchStudentByName: PropTypes.func,
    searchStudentByClass: PropTypes.func,
    saveStudentInfo: PropTypes.func,
    updateStudentInfo: PropTypes.func,
    deleteStudentifo: PropTypes.func
}



export default Formtabs;