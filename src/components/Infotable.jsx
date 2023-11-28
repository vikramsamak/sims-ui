import { Card, CardBody, Table, TableBody, TableHeader, TableColumn, TableRow, TableCell, Spinner, } from "@nextui-org/react";
import PropTypes from "prop-types";

function Infotable({ data }) {

  return (
    <Card>
      <CardBody className="py-4">
        <Table
          aria-label="Student Information"
          classNames={{
            base: "overflow-scroll",
          }}>
          <TableHeader>
            <TableColumn>Roll No</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Class</TableColumn>
          </TableHeader>
          <TableBody isLoading={!data ? true : false} loadingContent={<Spinner label="Loading..." color="primary" labelColor="primary" />}>
            {
              data.sort((a, b) => a.roll_no - b.roll_no).map((info, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{info.roll_no}</TableCell>
                    <TableCell>{info.name}</TableCell>
                    <TableCell>{info.student_class}</TableCell>
                  </TableRow>
                )
              })
            }

          </TableBody>
        </Table>
      </CardBody>
    </Card>
  )
}

Infotable.propTypes = {
  data: PropTypes.array,
}

export default Infotable;