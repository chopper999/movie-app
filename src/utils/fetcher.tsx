export const baseUrlImage = "https://image.tmdb.org/t/p/w500";
const baseUrl = "https://api.themoviedb.org/3";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2U3N2ZjODdkNThkOGM2YjM1ZWMwZmYwZDEyOWM4MyIsInN1YiI6IjY1ZWJlN2U0Mjg3MjNjMDE4NzNlZjJmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gTyeIVAihDVjmV29g2GFN8VYjlKoqlvDAuAeKEw9nYc";
const searchUrl =
  "https://api.themoviedb.org/3/search/movie?query=avengers&language=en-US&page=1&include_adult=false&region=US";
const fetcher = () => {
  const _fetch = (
    method: string,
    endpoint: string,
    body: object | string | undefined,
    successCallback: (data: Array<Object> | Object) => void,
    errorCallback: (error?: string) => void
  ) => {
    let response;

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const url = baseUrl + endpoint;

    body = JSON.stringify(body);

    if (body === undefined) {
      response = fetch(url, { method, headers });
    } else {
      response = fetch(url, { method, headers, body });
    }

    handleResponse(response, successCallback, errorCallback);
  };

  const handleResponse = (
    response: Promise<any>,
    successCallback: (data: Array<Object> | Object) => void,
    errorCallback: (error?: string) => void
  ) => {
    response.then((res) => {
      if (res.status === 200) {
        res.json().then((result: any) => {
          if (result) {
            if (successCallback) {
              successCallback(result);
            }
          }
        });
      } else if (res.status === 400) {
        res.json().then((result: any) => {
          if (errorCallback) errorCallback(result.status_message);
        });
      } else if (res.status === 403) {
        if (errorCallback) errorCallback("No permission - 403");
      } else if (res.status === 401) {
        if (errorCallback) errorCallback("Unauthorized - 401");
      } else if (res.status === 500) {
        if (errorCallback) errorCallback("Internal Server Error - 500");
      } else if (errorCallback) errorCallback("Unknown Error");
    });
  };

  return {
    get: (
      endpoint: string,
      successCallback: (data: Array<Object> | Object) => void,
      errorCallback: (error?: string) => void
    ) => _fetch("GET", endpoint, undefined, successCallback, errorCallback),
    post: (
      endpoint: string,
      body: object | string | undefined,
      successCallback: (data: Array<Object> | Object) => void,
      errorCallback: (error?: string) => void
    ) => _fetch("POST", endpoint, body, successCallback, errorCallback),
  };
};

export default fetcher;
