import React,{useState,useEffect} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './PaginationComponent.css';
function PaginationComponent(props){
    console.log('pagination re-rendering...');
    const [paginationItemPerPage,setPaginationItemPerPage]= useState(5);
    const [groupOfPaginationItems,setGroupOfPaginationItems] = useState(1);

    let pageNumber=[];

    
    for (let i=1;i<=Math.ceil(props.dataLength/props.itemPerPage);i++){
        pageNumber.push(i);
    }  
    const [pageNumberStartIndex,setPageNumberStartIndex]= useState((paginationItemPerPage*groupOfPaginationItems)-paginationItemPerPage);
    const [pageNumberEndIndex,setPageNumberEndIndex] = useState(paginationItemPerPage + pageNumberStartIndex);
    const displayedPaginationNums = pageNumber.slice(pageNumberStartIndex,pageNumberEndIndex);



    function changeCurrentDisplayedPageNumber(event){
        console.log(displayedPaginationNums[pageNumberEndIndex-1]);
      if (event.target.innerText!=='>>' && event.target.innerText!=='<<'){  
            if (parseInt(event.target.id)===4 && event.target.innerText!=="13"){
                setPageNumberEndIndex(pageNumberEndIndex+2);
                setPageNumberStartIndex(pageNumberStartIndex+2);
                }
            if (parseInt(event.target.id)===0 && event.target.innerText!=="1"){
                setPageNumberEndIndex(pageNumberEndIndex-2);
                setPageNumberStartIndex(pageNumberStartIndex-2);
                }   
        }
      else {
          if (props.currentPage===displayedPaginationNums[displayedPaginationNums.length-1] && props.currentPage!==13){
            setPageNumberEndIndex(pageNumberEndIndex+2);
            setPageNumberStartIndex(pageNumberStartIndex+2);
        }
      }
    }

    return (
      <Router>
                <div>
                {props.isLoading===false && <div className="pagination-router">
                <Pagination aria-label="Page navigation example">      
                    <PaginationItem>
                        <PaginationLink previous />
                    </PaginationItem>     
                         {displayedPaginationNums.map((item,index)=>(
                            <Link className="page-link" to={`/movies?page=${item}`} 
                                    id = {index}
                                    onClick={(event)=>{props.changeCurrentPage(event);
                                                        changeCurrentDisplayedPageNumber(event);}}              
                                    key={index}>
                                {item}
                            </Link>))}
                        <PaginationItem>
                            <Link to={`/movies?page=${props.currentPage+1}`} 
                                  onClick={(event)=>{props.increaseCurrentPage(event);
                                                     changeCurrentDisplayedPageNumber(event);}} 
                                  className="page-link">>></Link>
                        </PaginationItem>
                </Pagination>
            </div>}
            </div>
          </Router>
    );
}
export default PaginationComponent;