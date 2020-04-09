import { gql } from "apollo-boost";

export const RATES = gql`
  {
    allProducts {
      title
    }
  }
`;
