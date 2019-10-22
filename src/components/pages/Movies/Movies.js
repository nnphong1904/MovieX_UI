import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import LoadingComponent from '../../loadingbar/LoadingComponent';
import axios from 'axios';
import './Movies.css';
function Movies(props){
    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
     useEffect(()=>{
        const loadData = async ()=>{
            const result= await axios.get('https://movie-doc.herokuapp.com/api/movies');
            setIsLoading(false);
            setData(result.data);
        }
        loadData();
    },[])

    return (
        <Container className="mt-3">
            <Row>
                {isLoading===true && <LoadingComponent/>}
                {
                    data.map((item,index)=>(<Col key={index} lg="3" md="4" sm="2" >
                        <Card>
                          <CardImg top width="100%" height={225} src={item.poster} alt="Card image cap" />
                          <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <CardSubtitle>{item.author}</CardSubtitle>
                            <CardSubtitle>{item.caster}</CardSubtitle>
                            <CardText>{item.discription}</CardText>
                            <Button>Button</Button>
                          </CardBody>
                        </Card>
                     </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Movies;