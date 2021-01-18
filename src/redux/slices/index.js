import { userActions, userReducer } from './user';

export const actions = {
  ...userActions,
};

export const reducers = {
  user: userReducer,
};
