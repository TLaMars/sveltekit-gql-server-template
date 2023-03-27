import { gql } from "@apollo/client/core";

const helloQuery = gql`
  query hello {
    hello
  }
`;

export default helloQuery;
