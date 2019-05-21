import { url } from "./siteConf";
export const baseUrl = url;

export const loginUrl = "/users/permission?email=$email&password=$password";
export const createUser = baseUrl + "/user/createUser";

export const bookUrl = "/books/$bookTitle";
export const videoUrl = "/videos/$videoTitle";
