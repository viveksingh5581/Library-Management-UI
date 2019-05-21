import { loginUrl, baseUrl, bookUrl, videoUrl } from "./apiUrls";

export const loginUrlBuilder = (email, password) => {
  return _buildUrl(
    loginUrl,
    new Map([["$email", email], ["$password", password]])
  );
};

export const searchBookUrl = bookTitle => {
  return _buildUrl(bookUrl, new Map([["$bookTitle", bookTitle]]));
};

export const searchVideoUrl = videoTitle => {
  return _buildUrl(videoUrl, new Map([["$videoTitle", videoTitle]]));
};

const _buildUrl = (path, parameterMap) => {
  parameterMap.forEach(
    (parameterValue, parameterKey) =>
      (path = path.replace(parameterKey, parameterValue))
  );
  return baseUrl + path;
};
