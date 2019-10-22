import React from 'react';
import { Progress } from 'reactstrap';
import './LoadingComponent.css';
function LoadingComponent(props){

    return (
        <Progress animated color="info" value={100} />
    );
}

export default LoadingComponent;