import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoadingComponent from '../../loadingbar/LoadingComponent';
import axios from 'axios';
import './Movies.css';
function Movies(props){
    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [itemPerPage,setItemPerPage] = useState(8);
    const [currentPage,setCurrentPage] = useState(1);
    const [paginationItemPerPage,setPaginationItemPerPage]= useState(3);
    const [groupOfPaginationItems,setGroupOfPaginationItems] = useState(1);
        const startIndex= (currentPage*itemPerPage)-itemPerPage;
        const endIndex = itemPerPage+ startIndex;
        const displayedData = data.slice(startIndex,endIndex);
        let pageNumber=[];
        const currentPageUrl=`/movies/page=${currentPage}`;
        for (let i=1;i<=Math.ceil(data.length/itemPerPage);i++){
            pageNumber.push(i);
        }   
        const pageNumberStartIndex= (paginationItemPerPage*groupOfPaginationItems)-paginationItemPerPage;
        const pageNumberEndIndex = paginationItemPerPage + pageNumberStartIndex;
        const displayedPaginationNums = pageNumber.slice(pageNumberStartIndex,pageNumberEndIndex);
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
                    displayedData.map((item,index)=>(<Col key={index} lg="3" md="4" sm="2" >
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
        
            {isLoading===false && <div className="pagination-router">
                <Pagination aria-label="Page navigation example">      
                     <PaginationItem>
                        <PaginationLink previous href="#" />
                     </PaginationItem>     

                    {displayedPaginationNums.map((item,index)=>(
                        <PaginationLink 
                            onClick={changeCurrentPage} 
                            key={index} 
                            href={currentPageUrl}>
                         {item}
                        </PaginationLink>))}

                     <PaginationItem>
                        <PaginationLink next href="#" />
                     </PaginationItem>
                </Pagination>
            </div>}
     </div>   
          

    );
}

export default Movies;