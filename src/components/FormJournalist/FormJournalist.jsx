import styles from "./FormJournalist.module.scss";
import { Form, Button } from "react-bootstrap"

const FormJournalist = () => {
    return (
        <div className={styles.formJournalist}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Subtitle</Form.Label>
                    <Form.Control type="password" placeholder="Subtitle" />
                </Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select className={styles.selectJournalist}>
                    <option>Sport</option>
                    <option>Tech</option>
                </Form.Select>
                <Button className={styles.buttonSendPost} variant="danger" type="submit">
                    Отправить
                </Button>
            </Form>
        </div>
    )
}

export default FormJournalist