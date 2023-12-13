import { Table, TableBody, TableHeader, TableColumn, TableRow, TableCell, Spinner, Card, CardBody, Input } from "@nextui-org/react";
import PropTypes from "prop-types";
import { StudenInfo } from '../../helpers/crudMethods'
import { queryKey } from '../../constants/constants'
import useSWR from "swr";
import { useState } from "react";
import { getOrdinal } from "../../helpers/helpers";
import { MdSearch } from "react-icons/md";

function Datatable({ setnotification, openModal }) {
  const [filterValue, setFilterValue] = useState("");

  const handleClear = () => {
    setFilterValue("");
  };

  const getFilteredData = (data) => {
    return data.filter((info) =>
      info.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const getallstudentInfo = async () => {
    return await StudenInfo.getAllStudentsInfo();
  };

  const { data, isLoading, isError, error } = useSWR(queryKey, getallstudentInfo);

  if (isError) {
    setnotification(error);
    openModal();
  }

  const filteredData = getFilteredData(data || []);

  return (
    <Card className="w-full lg:w-1/2 sm:w-full md:w-full mb-4">
      <CardBody>
        <Input
        label="Search by name"
          className="mb-4"
          isClearable
          variant="underlined"
          type="text"
          placeholder="Search by name..."
          startContent={<MdSearch />}
          value={filterValue}
          onClear={handleClear}
          onValueChange={setFilterValue}
        />
        {/* <p>Total Students {filteredData.length}</p> */}
        <Table
          aria-label="Student Information"
          isHeaderSticky
          classNames={{
            base: 'h-[400px]',
            tbody: 'overflow-scroll'
          }}
        >
          <TableHeader>
            <TableColumn>Roll No</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Standard</TableColumn>
            <TableColumn>Division</TableColumn>
          </TableHeader>
          <TableBody
            isLoading={isLoading}
            loadingContent={
              <Spinner label="Loading..." color="primary" labelColor="primary" />
            }
          >
            {filteredData.sort((a, b) => a.roll_no - b.roll_no).map((info, index) => (
              <TableRow key={index}>
                <TableCell>{info.roll_no}</TableCell>
                <TableCell>{info.name}</TableCell>
                <TableCell>{getOrdinal(info.standard)}</TableCell>
                <TableCell>{info.division}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}

Datatable.propTypes = {
  setnotification: PropTypes.func,
  openModal: PropTypes.func,
  SearchResult: PropTypes.array,
};

export default Datatable;
