import React from "react"
import { Button, Modal } from "react-bootstrap"
import styles from "./Form.module.scss"
import Form from "react-bootstrap/Form"

const Modals = ({ setShowModal }) => {
  const x = () => {
    setShowModal(false)
  }
  return (
    <>
      <div onClick={x} className={styles["bg"]}></div>
      <div
        className="modal show"
        style={{
          display: "block",
          position: "absolute",
          overflow: "visible",
          top: "100px",
        }}
      >
        <Modal.Dialog>
          <Form className={styles["form"]}>
            <Button
              onClick={x}
              style={{ position: "relative", left: "400px" }}
              variant="danger"
            >
              X
            </Button>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Dialog>
      </div>
    </>
  )
}

export default Modals
