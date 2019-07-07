import * as types from "../constants/Users.constant";
import * as Config from "../../common/Config";

const stateDefault = {
  isLogin: localStorage.getItem(Config.userLogin) ? true : false
};

export const UsersStoreReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case types.SIGN_UP: {
      return { ...state };
    }
    case types.LOGIN: {
      state.isLogin = true;
      return { ...state };
    }
    default:
        break;
  }
  return { ...state };
};
