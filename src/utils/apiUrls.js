import { url } from "./siteConf";
export const baseUrl = url;

export const loginUrl = "/users/permission?email=$email&password=$password";
export const createUser = baseUrl + "/users/createUser";

export const bookUrl = "/books/$bookTitle";
export const createBook = baseUrl + "/books/createBook";

export const videoUrl = "/videos/$videoTitle";
export const createVideo = baseUrl + "/videos/createVideo";
