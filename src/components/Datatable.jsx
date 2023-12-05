import { Table, TableBody, TableHeader, TableColumn, TableRow, TableCell, Spinner, } from "@nextui-org/react";
import PropTypes from "prop-types";

function Datatable({ data }) {
  return (
    <Table
      aria-label="Student Information"
      isHeaderSticky
      classNames={{
        base: '',
        tbody: 'h-[450px] overflow-scroll'
      }}>
      <TableHeader>
        <TableColumn>Roll No</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Standard</TableColumn>
        <TableColumn>Division</TableColumn>
      </TableHeader>
      <TableBody isLoading={!data ? true : false} loadingContent={<Spinner label="Loading..." color="primary" labelColor="primary" />}>
        {
          data && (
            data.sort((a, b) => a.roll_no - b.roll_no).map((info, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{info.roll_no}</TableCell>
                  <TableCell>{info.name}</TableCell>
                  <TableCell>{info.standard}</TableCell>
                  <TableCell>{info.division}</TableCell>
                </TableRow>
              )
            }))
        }
      </TableBody>
    </Table>
  )
}

Datatable.propTypes = {
  data: PropTypes.array,
}

export default Datatable;