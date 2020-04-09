import { gql } from "apollo-boost";

export const ALL_PRODUCTS = gql`
  {
    allProduct {
      title
      vendor {
        title
      }
      defaultProductVariant {
        images {
          asset {
            url
          }
        }
      }
    }
  }
`;
