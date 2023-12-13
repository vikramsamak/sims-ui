import { Card, CardBody, Tabs, Tab} from "@nextui-org/react"
import Datatable from "../components/Datatable"
import SavestudentInfo from '../components/SavestudentInfo'
import Editstudeninfo from '../components/Editstudeninfo'
import Removestudentinfo from '../components/Removestudentinfo'
import PropTypes from 'prop-types'


function Home({ setnotification, openModal }) {

  return (
    <section className="flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-4 px-6 w-full">
      <Card className=" w-full lg:w-1/2 sm:w-full md:w-full mb-4">
        <CardBody className="h-[450px] overflow-y-auto">
          <Tabs fullWidth variant="underlined">
            <Tab title="Add Student Info">
              <SavestudentInfo setnotification={setnotification} openModal={openModal} />
            </Tab>
            <Tab title="Edit Student Info">
              <Editstudeninfo setnotification={setnotification} openModal={openModal} />
            </Tab>
          </Tabs>
          <Tabs fullWidth variant="underlined">
            <Tab title="Remove Student Info">
              <Removestudentinfo setnotification={setnotification} openModal={openModal} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      <Datatable setnotification={setnotification} openModal={openModal} />
    </section>
  )
}

Home.propTypes = {
  setnotification: PropTypes.func,
  openModal: PropTypes.func
}

export default Home