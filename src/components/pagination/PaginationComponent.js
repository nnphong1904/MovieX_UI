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
        console.log('executing...');
          if (props.currentPage===displayedPaginationNums[displayedPaginationNums.length-1] && props.currentPage!==13){
            setPageNumberEndIndex(pageNumberEndIndex+2);
            setPageNumberStartIndex(pageNumberStartIndex+2);}
          if (props.currentPage===displayedPaginationNums[0] && props.currentPage!==1){
            setPageNumberEndIndex(pageNumberEndIndex-2);
            setPageNumberStartIndex(pageNumberStartIndex-2);
          }
      }
    }

    return (
      <Router>
                <div>
                {props.isLoading===false && <div className="pagination-router">
                <Pagination aria-label="Page navigation example">      
                    <PaginationItem>
                        <Link className="page-link" 
                              to={`/movies?page=${props.currentPage===1 ? props.currentPage : props.currentPage-1}`}
                              onClick={(event)=>{props.decreaseCurrentPage(event);
                                                changeCurrentDisplayedPageNumber(event);}}>{'<<'}</Link>
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