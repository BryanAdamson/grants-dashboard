import {ApolloClient, createHttpLink, gql, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
    cache: new InMemoryCache(),
});

export const getGrants = async () => {
    const { data } = await client.query({
        query: gql`
      query GetGrants {
        getGrants {
          id
          foundationName
          grantName
          averageAmount
          location
          matchDate
          deadline
          status
        }
      }
    `,
    });
    return data.getGrants;
};

export const submitFeedback = async (id: string, feedback: string, isPositive: boolean) => {
    const status = isPositive ? "Accepted" : "Rejected"
    const mutation = gql`
          mutation submitFeedback($id: ID!, $feedback: String!, $status: String!) {
            submitFeedback(id: $id, feedback: $feedback, status: $status) {
              id
              status
              feedback
            }
          }
        `;

    const {data} = await client.mutate({
        mutation,
        variables: { id, feedback, status },
    });

    if (!isPositive) {
        let mutation = gql`
          mutation deleteGrant($id: ID!) {
            deleteGrant(id: $id) {
              id foundationName grantName
            }
          }
        `;

        await client.mutate({
            mutation,
            variables: {id, feedback},
        });
    }

    return data.submitFeedback;
};