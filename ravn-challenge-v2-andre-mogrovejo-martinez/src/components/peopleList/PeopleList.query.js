import React from 'react';
import { useQuery } from '@apollo/client';
import PeopleList from './PeopleList';
import './PeopleList.css';
import { SHOWLIST } from '../../backend/apolloQuery';


function QueryList() {

    const { data, error, loading, fetchMore} = useQuery(SHOWLIST);

    if (error) return <h2>Whoops error :c</h2>
    if (!error && loading ) return <h2>Loading...</h2>

    const entries = data.allPeople || [];

    const loadMoreData = () => {
        fetchMore({
            variables: {
                cursor: data.allPeople.pageInfo.endCursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.allPeople.edges;
                const pageInfo = fetchMoreResult.allPeople.pageInfo;
                return newEdges.lenght ? {
                    allPeople: {
                        __typename: previousResult.allPeople.__typename,
                        edges: [...previousResult.allPeople.edges, ...newEdges],
                        pageInfo
                    }
                }
                : previousResult;
            }
        })
    }

    return (
        <PeopleList
            loading = { loading }
            persons = { entries }
            onLoadMore={ loadMoreData }
        />
    );
}

export default QueryList;
