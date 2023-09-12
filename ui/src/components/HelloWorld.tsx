import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const HELLO_QUERY = gql`
  query hello($name:String) {
    hello(name:$name)
  }
`;

const HelloWorld = () => {
  const { loading, error, data } = useQuery(HELLO_QUERY, { variables: { name: "World!" } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data?.hello}</h1>
    </div>
  );
};

export default HelloWorld;
