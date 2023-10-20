import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import CardProduct from "../CardProduct/CardProduct";


function Cards({productsList}) {
    let cardsList = productsList.map((productItem) =>
        <Card product = {productItem} />
        );

  return (
    <Container>
      <Row>
        {cardsList}
      </Row>
    </Container>
  );
}

export default Cards;