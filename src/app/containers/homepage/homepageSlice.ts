import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from '../../types/reduxSlices/homepage';
import { Cat } from '../../graphql/graphql';
import { RootState } from '../../store';

const initialState: IHomePageState = {
  cats: [],
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<{ cats: Cat[] }>) => {
      const { cats } = action.payload;

      state.cats = cats;
    },
  },
});

export const { setCats } = homePageSlice.actions;

export const catsSelector = (state: RootState) => state.homePage.cats;

export default homePageSlice.reducer;
