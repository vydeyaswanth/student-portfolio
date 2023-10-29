import styles from './styles.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const Footer=()=>{
    return <div className={styles.container}>
        <div className={styles.main}>
           <div className={styles.ourText}>Our Newsletter</div>
            <div className={styles.topContainer}>
                <div>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</div>
                <div className={styles.inputBox}>
                <InputGroup className="mb-3">
                        <Form.Control
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="info" id="button-addon2">
                        Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
            </div>
           <div className={styles.footer}>
            <div className={styles.main}>
            <div className={styles.footerBox}>
                <div className={styles.head}>
                     Useful Links
                </div >
                <div className={styles.head}>Our Services</div>
                <div className={styles.head}>Contact Us</div>
                <div className={styles.head}>About Moderna
              </div>
            </div>
            </div>
        </div>
    </div>
};
export default Footer;