import apolloClient from '../../graphql';
import { Cat } from '../../graphql/graphql';
import { GET_ALL_CATS } from './queries';

class CatService {
  public async getCats(): Promise<Cat[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_CATS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data) return response.data as Cat[];
    else return [];
  }
}

export default new CatService();
