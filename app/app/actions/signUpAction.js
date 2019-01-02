import * as ActionTypes from '@constants/actionTypes';
import Urls from "@constants/urls"
import CallAPI from "@lib/api"

export function signUp (email, password) {
  return (dispatch) => {
    url = Urls.signUp;
      method = Urls.method.post;
      data = {
        "email": email,
        "password": password
      };
      CallAPI(url, data, method, '', '')
      .then((res) => {
        if (res.status == 200) {
          console.warn(res.data);
        } else {

        }
        dispatch({
          type: ActionTypes.SIGN_UP
        });
      })
      .catch((e) => {
        console.warn('error', e);
      }); 
  }
}
