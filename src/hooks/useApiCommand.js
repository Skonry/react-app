import { apiUrl, apiHeaders} from '../api';

function useApiQuery(resource, method) {
  const apiOptions = {};
  apiOptions.headers = apiHeaders;
  apiOptions.method = method;

  const callApi = (data) => {
    if (data) {
      apiOptions.body = JSON.stringify(data);
    }

    return fetch(`${apiUrl}/${resource}`, apiOptions)
     .then(response => response.json())
  }

  return {
    callApi
  };
}

export default useApiQuery;