import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router';
import { LINKS_PER_PAGE } from '../constants';
import Link from './Link';





export const FEED_QUERY = gql`
  {
  links{
    id
    url
    description
    postedBy{
      id
      email
      username
    }
    votes{
      edges{
        node{
          id
          link{
            id
            url
            description
          }
        }
      }
    }
  }
}
`;
/*
const NEW_LINKS_SUBSCRIPTION = gql`
query{
  relayLinks{
    edges{
      node{
        id
        url
        description
         postedBy {
        id
        username
      }
        votes {
          edges{
            node{
              id
              user{
                id
              }
            }
          }
        }
      }
    }
  }
}
`;

const NEW_VOTES_SUBSCRIPTION = gql`
  subscription {
    newVote {
      id
      link {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

*/
/*
const getQueryVariables = (isNewPage, page) => {
  const skip = isNewPage ? (page - 1) * LINKS_PER_PAGE : 0;
  const take = isNewPage ? LINKS_PER_PAGE : 100;
  const orderBy = { createdAt: 'desc' };
  return { take, skip, orderBy };
};
*/



const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);

    return (
    <div>
    {data && (
      <>
        {data.links.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
      </>
    )}
  </div>
    );
  };

export default LinkList;


/*
const LinkList = () => {
  const history = useHistory();
  const isNewPage = history.location.pathname.includes(
    'new'
  );
  const pageIndexParams = history.location.pathname.split(
    '/'
  );
  const page = parseInt(
    pageIndexParams[pageIndexParams.length - 1]
  );

  const pageIndex = page ? (page - 1) * LINKS_PER_PAGE : 0;

  const {
    data,
    loading,
    error,
    subscribeToMore
  } = useQuery(FEED_QUERY, {
    variables: getQueryVariables(isNewPage, page)
  });
subscribeToMore({
  document: NEW_LINKS_SUBSCRIPTION,
  updateQuery: (prev, { subscriptionData


}) => {
    if (!subscriptionData.data) return prev;
    const newLink = subscriptionData.data.newLink;
    const exists = prev.links.find(
      ({ id }) => id === newLink.id
    );
    if (exists) return prev;

    return Object.assign({}, prev, {
      feed: {
        links: [newLink, ...prev.links],
        count: prev.links.length + 1,
        __typename: prev.__typename
      }
    });
  }
});

    subscribeToMore({
    document: NEW_VOTES_SUBSCRIPTION
  });


return (
    <div>
    {data && (
      <>
        {data.links.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
      </>
    )}
  </div>
    );
  };

export default LinkList;
*/
