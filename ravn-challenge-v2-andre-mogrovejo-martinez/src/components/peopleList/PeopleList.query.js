import React from 'react';
import { useQuery } from '@apollo/client';
import PeopleList from './PeopleList';
import { SHOWLIST } from '../../backend/apolloQuery';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';


function QueryList() {

    const { data, error, loading, fetchMore} = useQuery(SHOWLIST);

    if (error) return <span className="notification"><p>Failed to Load Data</p></span>
    if (!error && loading ) return <LoadingSpinner/>

    const entries = data.allPeople || [];

    const loadMoreData = () => {
        fetchMore({
            variables: {
                cursor: data.allPeople.pageInfo.endCursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.allPeople.edges;
                const pageInfo = fetchMoreResult.allPeople.pageInfo;
                return newEdges.length
                ? {
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
            loadMoreData ={ loadMoreData }
        />
    );
}

export default QueryList;
