import { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react";
import Mainnavbar from "./components/Mainnavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Contactme from "./pages/Contactme"
import { NextUIProvider } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom';

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ErrorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <main className="dark text-foreground bg-background max-h-full min-h-screen min-w-screen max-w-full" onContextMenu={() => { return false }}>
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
                    {ErrorMsg}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="bg-gray-600 text-white"
                    variant="faded"
                    onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Mainnavbar />
        <Routes>
          <Route path="/" element={<Home setError={setErrorMsg} openModal={onOpen} />} />
          <Route path="/contactme" element={<Contactme setError={setErrorMsg} openModal={onOpen} />} />
        </Routes>
      </main >

    </NextUIProvider>
  )
}

export default App;
