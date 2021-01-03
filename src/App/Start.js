import cubo from '../img/cubo.jpg';
import Question from './components/questions';
import './Start.css';
import {  Card, Button, Container, Row } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 


function Start() {
  return (
    <div className="Start">
    <Router>
      <Route exact path='/'>
      
      <Container>
        <Row >
          <Card className="margen" >
            <Card.Img src={cubo} />
            <Card.Body>
              <Card.Title>Quiz game</Card.Title>
              <Card.Text>Do you want game this game?</Card.Text>
              <a href="/slide"><Button variant="light">Start the game</Button></a>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      </Route>
    </Router>

      <Router>
        <Route path="/slide" component={Question}></Route>
      </Router>
     
    </div>
  );
}

export default Start;
/*
 */