import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-1">Họ và tên: Đào Phúc Khang</p>
            <p className="mb-1">Mã sinh viên: 22666841</p>
            <p className="mb-1">Lớp: DHKTPM18A</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
