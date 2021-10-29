
import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';



axios.defaults.timeout = 10000;

export async function GetData(url, data) {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let myRequest = {
    method: 'get',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    
    params: {
      ...data,
    },
    timeout: 30 * 1000,
    // withCredentials: true,
  };
  
  return await axios(myRequest)
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: 'error',
        status: error.request.status,
      };
      return err;
    });
}

export async function PostLogin(url, json) {
  let myRequest = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  console.log('post data', myRequest);
  return await axios(myRequest)
    .then((response) => {
      return response;
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      const err = {
        message: 'error',
        status: error.request.status,
      };
      return err;
    });
}

export async function PostData(url, json, isAuth = true) {
  const token= localStorage.getItem(ACCESS_TOKEN);
  let myRequest = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  console.log('post data mobile', myRequest);
  return await axios(myRequest)
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: 'error',
        status: error.request.status,
      };
      return err;
    });
}


export async function PostFormData(url, data) {
  const token= localStorage.getItem(ACCESS_TOKEN);

  const source = axios.CancelToken.source();
  const timeout = setTimeout(() => {
    source.cancel();
    // Timeout Logic
  }, 60000);
  console.log(token);
  let myRequest = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token,
    },
    timeout: 60000,
    data: data,
    cancelToken: source.token,
  };
  console.log('post data mobile', myRequest.data);
  return await axios(myRequest)
    .then((response) => {
      clearTimeout(timeout);
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .then((response) => {
      clearTimeout(timeout);
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .catch((error) => {
      clearTimeout(timeout);
      console.log('errorTimeout', error);
      const err = {
        message: 'error',
        status: error.request.status,
      };
      return err;
    });
}

export async function PostRegister(url, json) {
  let myRequest = {
    method: 'post',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 30 * 1000,
    data: JSON.stringify(json),
  };
  console.log('post data mobile', myRequest);
  return await axios(myRequest)
    .then((response) => {
      return response;
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      const err = {
        message: 'error',
        status: error.request.status,
      };
      return err;
    });
}

/**
 *
 * @param {*} url is link api
 * @param {*} json is input format json to request server
 * @param {*} isAuth is state auth
 */
export async function PutData(url, json, isAuth = true) {
  const token= localStorage.getItem(ACCESS_TOKEN);
  let myRequest = {
    method: 'put',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: JSON.stringify(json),
  };
  console.log('PutData', myRequest);
  return await axios(myRequest)
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: 'error',
        status: error.request.status,
      };
      return err;
    });
}

const logout=()=>{
  console.log("Hello")
}

export async function DeleteData(url, data) {
  const token = localStorage.getItem(ACCESS_TOKEN);

  let myRequest = {
    method: 'delete',
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    params: {
      ...data,
    },
    timeout: 30 * 1000,
    // withCredentials: true,
  };
  console.log('My request', myRequest);
  return await axios(myRequest)
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .then((response) => {
      if (response.data?.code === 401) {
        logout();
        return;
      } else {
        return response;
      }
    })
    .catch((error) => {
      console.log(error.request);
      const err = {
        message: 'error',
        status: error.request.status,
      };
      return err;
    });
}