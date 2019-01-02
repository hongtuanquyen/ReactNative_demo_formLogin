import * as ActionTypes from '@constants/actionTypes';
import Urls from "@constants/urls"
import CallAPI from "@lib/api"


export function addItem(animalName) {
  return (dispatch) => {
    url = Urls.insertDB;
    method = Urls.method.post;
    data = {
      "animalName" : animalName
    };
    CallAPI(url, data, method, '', '')
    .then((res) => {
      if (res.status == 200) {
        listItem = res.data;
      } else {

      }
      dispatch({
        type: ActionTypes.UPDATE_LIST,
        listItem
      });
    })
    .catch((e) => {
      console.warn('error', e);
    }); 
  }
}

export function modifyItem(key, animalName) {
  return (dispatch) => {
    url = Urls.modifyDB;
    method = Urls.method.post;
    data = {
      "key" : key,
      "animalName" : animalName
    };
    CallAPI(url, data, method, '', '')
    .then((res) => {
      if (res.status == 200) {
        listItem = res.data;
      } else {

      }
      dispatch({
        type: ActionTypes.UPDATE_LIST,
        listItem
      });
    })
    .catch((e) => {
      console.warn('error', e);
    }); 
  }
}

export function removeItem(key) {
  return (dispatch) => {
    url = Urls.deleteDB;
    method = Urls.method.post;
    data = {
      "key" : key
    };
    CallAPI(url, data, method, '', '')
    .then((res) => {
      if (res.status == 200) {
        listItem = res.data;
      } else {

      }
      dispatch({
        type: ActionTypes.UPDATE_LIST,
        listItem
      });
    })
    .catch((e) => {
      console.warn('error', e);
    }); 
  }
}

export function getList() {
  return (dispatch) => {
    url = Urls.getDB;
    method = Urls.method.post;
    CallAPI(url, '', method, '', '')
    .then((res) => {
      if (res.status == 200) {
        listItem = res.data;
      } else {

      }
      dispatch({
        type: ActionTypes.UPDATE_LIST,
        listItem
      });
    })
    .catch((e) => {
      console.warn('error', e);
    }); 
  }
}