import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineRight } from 'react-icons/ai';
import './PeopleList.css';

class PeopleList extends Component {

render() {
    const people = this.props.persons.edges || [];
    return (
    <>
    {
        people.map(({node}, id) => {
            return (
            <Link className="person__reference" key={id} to={`/${node.id}`}>
                <div className="Person" >
                <Row>
                    <Col xs={10} >
                        <h2>{node.name}</h2>
                        <p>
                            {node.species === null ? "Human" : node.species.name } from {node.homeworld.name}
                        </p>
                    </Col>
                    <Col xs={2}>
                        <div className="Icon">
                            <AiOutlineRight />
                        </div>
                    </Col>                
                </Row>
                </div>
                <hr/>
            </Link>
            )}, this.props.loadMoreData())
    }  
    </>
    )
}}

export default PeopleList;
