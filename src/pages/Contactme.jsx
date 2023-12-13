import { Button, Card, CardBody, CardHeader, Divider, Input, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { apiEndpoints } from '../../helpers/apiEndpoints'
import PropTypes from 'prop-types'

function Contactme({ setnotification, openModal }) {

  const [Feedback, setEeedback] = useState({ name: "", email: "", msg: "" })

  const submitHandler = async () => {
    if (Feedback.name === "" || Feedback.email === "" || Feedback.msg === "") {
      setnotification("Please enter a valid input.")
      openModal();
    }
    else {
      const res = await apiEndpoints.saveFeedback(Feedback);
      if (res.data) {
        setnotification(res.data)
        openModal();
      }
      else {
        setnotification('Something went wrong...')
        openModal();
      }
      setEeedback({ ...Feedback, name: "", email: "", msg: "" })
    }
  }

  const clearHandler = () => {
    setEeedback({ ...Feedback, name: "", email: "", msg: "" })
  }



  return (
    <section className="flex px-12 w-full">
      <Card className="w-full">
        <CardHeader className="py-4">
          Contact Me
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex-col gap-4">
            <div className="py-6">
              <Input
                isRequired
                type="text"
                label="Your Name:"
                variant="underlined"
                placeholder="Enter your name..."
                value={Feedback.name}
                onValueChange={(name) => setEeedback({ ...Feedback, name: name })}
              >
              </Input>
            </div>
            <div className="py-6">
              <Input
                isRequired
                type="email"
                label="Your Email:"
                variant="underlined"
                placeholder="Enter your email..."
                value={Feedback.email}
                onValueChange={(email) => setEeedback({ ...Feedback, email: email })}
              >
              </Input>
            </div>
            <div className="py-6">
              <Textarea
                isRequired
                type="text"
                label="Your Message:"
                variant="underlined"
                placeholder="Enter your message..."
                value={Feedback.msg}
                onValueChange={(msg) => setEeedback({ ...Feedback, msg: msg })}
              >
              </Textarea>
            </div>
          </div>
          <div className="d-flex w-full mt-4 gap-8">
            <Button
              color="primary"
              variant="light"
              className="w-1/2"
              onClick={submitHandler}
            >
              Submit
            </Button>
            <Button
              color="danger"
              variant="light"
              className="w-1/2"
              onClick={clearHandler}
            >
              Clear
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  )
}

Contactme.propTypes = {
  setnotification: PropTypes.func,
  openModal: PropTypes.func
}

export default Contactme