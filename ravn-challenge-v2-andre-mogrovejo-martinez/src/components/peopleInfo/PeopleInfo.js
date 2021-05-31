import React from 'react';
import { useQuery } from '@apollo/client';
import { PEOPLEINFO } from '../../backend/apolloQuery';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './PeopleInfo.css';

function ToUpperFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const INFO = ({ header, text }) => {
    return (
        <div className="info__content">
            <Row>
                <Col xs={6}>
                    <h2 className="header">{header}</h2>
                </Col>
                <Col xs={6}>
                    <h2 className="text">{ToUpperFirst(text)}</h2>
                </Col>         
            </Row>
            <hr/>
        </div>
    )
}

function PeopleInfo({match:{params:{id}}}) {

    const { data, loading, error } = useQuery(PEOPLEINFO, {variables: { id : id}});
    if (error) return <p></p>;
    if (!error && loading ) return <p></p>;

    const ppl__info = data.person;

    return (
    <>
        <div className="container__detail">
            <div className="title">General Information</div>
                <INFO header={"Eye Color"} text={ppl__info.eyeColor}/>
                <INFO header={"Hair Color"} text={ppl__info.hairColor}/>
                <INFO header={"Skin Color"} text={ppl__info.skinColor}/>
                <INFO header={"Birth Year"} text={ppl__info.birthYear}/>
            <div className="title">Vehicles</div>
            {
                ppl__info.vehicleConnection.vehicles.map((vehicle) => (
                    <INFO key={vehicle.name} header={vehicle.name} text={''}/>
                ))
            }
        </div>
    </>
    )
}

export default withRouter(PeopleInfo);
