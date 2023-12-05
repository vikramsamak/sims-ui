import { Card, CardBody, Tabs, Tab } from "@nextui-org/react"
import Datatable from "../components/Datatable"
import SavestudentInfo from '../components/SavestudentInfo'
import Editstudeninfo from '../components/Editstudeninfo'
import Removestudentinfo from '../components/Removestudentinfo'
import Searchbyrollno from '../components/Searchbyrollno'
import Searchbyname from '../components/Searchbyname'
import Searchbystandard from '../components/Searchbystandard'
import Searchbydivision from '../components/Searchbydivision'
import PropTypes from 'prop-types'

function Home({ setError, openModal }) {
  return (
    <section className="flex gap-4 px-6">
      <Card fullWidth>
        <CardBody className="h-[450px] overflow-y-auto">
          <Tabs fullWidth variant="underlined">
            <Tab title="Add Student Info">
              <SavestudentInfo setError={setError} openModal={openModal} />
            </Tab>
            <Tab title="Edit Student Info">
              <Editstudeninfo setError={setError} openModal={openModal} />
            </Tab>
          </Tabs>
          <Tabs fullWidth variant="underlined">
            <Tab title="Search By Roll No">
              <Searchbyrollno setError={setError} openModal={openModal} />
            </Tab>
            <Tab title="Search By Name">
              <Searchbyname setError={setError} openModal={openModal} />
            </Tab>
          </Tabs>
          <Tabs fullWidth variant="underlined">
            <Tab title="Search By Standard">
              <Searchbystandard setError={setError} openModal={openModal} />
            </Tab>
            <Tab title="Search By Division">
              <Searchbydivision setError={setError} openModal={openModal} />
            </Tab>
          </Tabs>
          <Tabs fullWidth variant="underlined">
            <Tab title="Remove Student Info">
              <Removestudentinfo setError={setError} openModal={openModal} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      <Datatable />
    </section>
  )
}

Home.propTypes = {
  setError: PropTypes.func,
  openModal: PropTypes.func
}

export default Home