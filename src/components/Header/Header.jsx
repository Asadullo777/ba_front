import React, { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

import styles from "./Header.module.scss"
import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
import Modals from "../Form/Form"

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const showFormHandler = () => {
    setShowModal(true)
    console.log(showModal);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img className={styles["logo"]} src={logo} alt="" />
          </Link>
          <Nav className="me-auto">
            <Link style={{ fontSize: "25px" }} className="nav-link" to="/sport">
              sport
            </Link>
            <Link style={{ fontSize: "25px" }} className="nav-link" to="/tech">
              tech
            </Link>
          </Nav>
          <Nav onClick={showFormHandler}>
            <Nav.Link>
              <svg
                className={styles["icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
              Sign in
            </Nav.Link>
          </Nav>
        </Container>
        {showModal && <Modals setShowModal={setShowModal} />}
      </Navbar>
    </>
  )
}

export default Header
