import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PeopleInfo from '../../components/peopleInfo/PeopleInfo';
import PeopleListQuery from '../../components/peopleList/PeopleList.query';

function HomeScreen() {
    return (
        <div className="conteiner__homescreen">
        <Row>
            <Col xs={4}>
            <div className="Left"> 
                <PeopleListQuery/>
            </div>
                
            </Col>
            <Col xs={8}>
            <div className="Right"> 
                <PeopleInfo/>
            </div>
            </Col>

        </Row>            
        </div>
    )
}

export default HomeScreen
