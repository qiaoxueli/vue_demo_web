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

export function register(dto) {
  return request({
      method:"post",
      url:"/user/register",
      data:dto
  });
}

export function getUser() {
  return request({
      method:"post",
      url:"/user/list",
  });
}