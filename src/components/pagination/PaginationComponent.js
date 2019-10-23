import React,{useState,useEffect} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


function PaginationComponent(props){
    const [paginationItemPerPage,setPaginationItemPerPage]= useState(5);
    const [groupOfPaginationItems,setGroupOfPaginationItems] = useState(1);
    let pageNumber=[];

    let currentPageUrl=`/movies/page=${props.currentPage}`;
    for (let i=1;i<=Math.ceil(props.dataLength/props.itemPerPage);i++){
        pageNumber.push(i);
    }  
  
    const [pageNumberStartIndex,setPageNumberStartIndex]= useState((paginationItemPerPage*groupOfPaginationItems)-paginationItemPerPage);
    const [pageNumberEndIndex,setPageNumberEndIndex] = useState(paginationItemPerPage + pageNumberStartIndex);
    const displayedPaginationNums = pageNumber.slice(pageNumberStartIndex,pageNumberEndIndex);



    function changeCurrentDisplayedPageNumber(event){
            if (parseInt(event.target.id)===4 && event.target.innerText!=="13"){
            setPageNumberEndIndex(pageNumberEndIndex+2);
            setPageNumberStartIndex(pageNumberStartIndex+2);

        }
        if (parseInt(event.target.id)===0 && event.target.innerText!=="1"){
            setPageNumberEndIndex(pageNumberEndIndex-2);
            setPageNumberStartIndex(pageNumberStartIndex-2);
        }   
         
    }

    return (
        <div>
                {props.isLoading===false && <div className="pagination-router">
                <Pagination aria-label="Page navigation example">      
                    <PaginationItem>
                        <PaginationLink previous />
                    </PaginationItem>     
                    {displayedPaginationNums.map((item,index)=>(
                        <PaginationLink 
                            id = {index}
                            onClick={(event)=>{props.changeCurrentPage(event);
                                                changeCurrentDisplayedPageNumber(event)}}              
                            key={index} 
                          >
                        {item}
                        </PaginationLink>))}
                    <PaginationItem>
                        <PaginationLink next   />
                    </PaginationItem>
                </Pagination>
            </div>}
        </div>
    );
}
export default PaginationComponent;