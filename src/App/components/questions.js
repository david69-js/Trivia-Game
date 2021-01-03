import { Carousel, Container, Card } from 'react-bootstrap';
import React, { Component } from 'react'
import cubo from '../../img/cubo.jpg';

export default class Posts extends Component {

    constructor(props)
    
    { 
      super(props);
      this.state = {
        quests: []
      };

    }
    submitForm (e) {
      e.preventDefault();
      var values = {
        email:[this.refs.email.value], 
        pass:[this.refs.password.value]
      }
      console.log(values)

    }

    async componentDidMount(){
        const res = await fetch("https://opentdb.com/api.php?amount=5")
        const data = await res.json();
        const clean = data.results;
        this.setState({quests: clean})
    }

    render() {
        return <Container>
            
              <Carousel  interval={null}>
                  
                  {
                    this.state.quests.map((quest, i) =>{
                        console.log(quest)
                      return <Carousel.Item >
                              <Card className="margen" >
                                <Card.Img src={cubo} />
                                <Card.Body >
                                <Card.Title>{i+1} of {this.state.quests.length}</Card.Title>
                                  <Card.Title>{quest.category}</Card.Title>
                                  <Card.Text>{quest.question}</Card.Text>
                                  <button className="btn btn-primary" type="submit">True</button>
                                  <button className="btn btn-success" type="">False</button>
                                </Card.Body>
                              </Card>
                      </Carousel.Item>
                    })
                    
                  }
                  
                  <button tabIndex="0" className="btn-danger carousel-control-next"type="button">Next</button>

                  <button tabIndex="0" className="btn-danger carousel-control-prev" type="button">Previous</button>
                  
            </Carousel>
        
    </Container>
            
                
  
        
    }
}


/*
    submitForm (e) {
      e.preventDefault();
      var values = {
        email: this.refs.email.value, 
        pass:this.refs.password.value
      }
      console.log(values)
      
      
}
 render() {
      return (
        <form onSubmit={this.submitForm.bind(this)}>
            <input type="text" ref="email" placeholder="Email" />
            <input type="password" ref="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
  }
*/