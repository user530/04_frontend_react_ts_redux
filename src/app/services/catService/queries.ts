import gql from 'graphql-tag';
export const GET_ALL_CATS = gql`
  query getAllCats {
    getAllCats {
      id
      name
      imgSrc
      age
      color
      favoriteFood
      dailyPrice
      monthlyPrice
    }
  }
`;
