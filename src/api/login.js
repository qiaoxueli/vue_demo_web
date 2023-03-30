import request from '../utils/request';


export function login(name,password) {
  return request({
      method:"post",
      url:"/user/login",
      params:{
          name,
          password
      }
  });
}

export function register(age,email) {
  return request({
      method:"post",
      url:"/user/register",
      params:{
          age,
          email
      }
  });
}