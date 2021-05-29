import React from 'react';
import './PeopleInfo.css';
import { useQuery } from '@apollo/client';
import { PEOPLEINFO } from '../../backend/apolloQuery';


const GETINFO = ({ header, text }) => {
    return (
        <div className="info__content">
            <h2 className="header__info">{header}</h2>
            <h2 className="text__info">{text}</h2>
            <hr/>
        </div>
    )
}

function PeopleInfo() {
    return (
        <div>
            
        </div>
    )
}

export default PeopleInfo
