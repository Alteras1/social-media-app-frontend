export const SET_USER = "SET_USER";

export const setLoginState = (loginData: any) => ({
  type: SET_USER,
  payload: loginData,
});
