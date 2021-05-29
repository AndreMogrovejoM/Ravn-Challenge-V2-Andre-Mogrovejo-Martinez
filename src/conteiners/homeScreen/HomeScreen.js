import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PeopleInfo from '../../components/peopleInfo/PeopleInfo';
import PeopleList from '../../components/peopleList/PeopleList';

function HomeScreen() {
    return (
        <div className="conteiner__homescreen">
        <Row>
            <Col xs={4}>
                <PeopleList/>
            </Col>
            <Col xs={8}>
                <PeopleInfo/>
            </Col>

        </Row>            
        </div>
    )
}

export default HomeScreen
