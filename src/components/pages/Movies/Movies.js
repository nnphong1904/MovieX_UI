import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PaginationComponent from '../../pagination/PaginationComponent';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import calculateSize from 'calculate-size';
import LoadingComponent from '../../loadingbar/LoadingComponent';
import axios from 'axios';
import './Movies.css';
function Movies(props){
   
    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemPerPage,setItemPerPage] = useState(8);
    const [currentPage,setCurrentPage] = useState(1);
  
        const startIndex= (currentPage*itemPerPage)-itemPerPage;
        const endIndex = itemPerPage+ startIndex;
        const displayedData = data.slice(startIndex,endIndex);
        

    function increaseCurrentPage(event){
        if (currentPage<13) {setCurrentPage(currentPage+1);}
    }

    function decreaseCurrentPage(event){
        if (currentPage>1) {setCurrentPage(currentPage-1);}
    }
       
     useEffect(()=>{
        const loadData = async ()=>{
            const result= await axios.get('https://movie-doc.herokuapp.com/api/movies');
            setIsLoading(false);
            setData(result.data);
        }
        loadData();
    },[])

   

    function changeCurrentPage(event){
               setCurrentPage(parseInt(event.target.innerText));
        }
    
    return (
        <div>
        <Container className="mt-3">
            <Row>
                {isLoading===true && <LoadingComponent/>}
                {
                    displayedData.map((item,index)=>(<Col className="mb-2 d-flex align-items-stretch" key={index} lg="3" md="4" sm="6" >
                        <Card>
                          <CardImg top width="100%" height={225} src={item.poster} alt="Card image cap" />
                          <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <CardSubtitle>{item.author}</CardSubtitle>
                            <CardSubtitle>{item.caster}</CardSubtitle>
                            <CardText  className="mt-1">
                                {item.discription}
                            </CardText>
                            <Button>Button</Button>
                          </CardBody>
                        </Card>
                     </Col>
                    ))
                }
            </Row>
        </Container>
        <PaginationComponent currentPage={currentPage} 
                             dataLength={data.length} 
                             itemPerPage={itemPerPage}
                             isLoading={isLoading}
                             changeCurrentPage={changeCurrentPage}
                             increaseCurrentPage={increaseCurrentPage}
                             decreaseCurrentPage={decreaseCurrentPage}/>
     </div>      

    );
}

export default Movies;