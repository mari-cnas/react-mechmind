import Maintext from  '../../Maintext';
import cost from '../../../assets/costbg.png';
import logo from '../../../assets/logopng.png';
import { Col, Row } from 'react-bootstrap';

const WhoWeAre = () => (
    <div className="container mb-5" id="who-we-are">
        <Maintext
            title="Sobre nós"
            align="center"        
        />
        <Row className="align-items-center about-bg">
            <Col className="col-3 d-flex ">
            <img src={logo} alt="card1" className="my-2" />          
            </Col>
            <Col className="col-6">
                <p className="fw-bold text-center">
                A MechMind é uma empresa especializada em engenharia mecânica que oferece soluções através de laudos, avaliações e perícias. Com uma equipe altamente capacitada, a empresa é capaz de oferecer aos seus clientes soluções personalizadas que atendem às suas necessidades específicas com o melhor custo-benefício do mercado.
                </p>
            </Col>
            <Col className="col-3">
                <img src={cost} alt="card1" className="my-2 " />
            </Col>
        </Row>
    </div>  
);

export default WhoWeAre;