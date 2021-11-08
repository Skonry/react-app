import { useEffect, useState } from 'react';

import { apiUrl, apiHeaders} from '../api';

function useApiQuery(resource) {
  const [apiResponse, setApiResponse] = useState(null);

  const apiOptions = {};
  apiOptions.headers = apiHeaders;
  
  useEffect(() => {
    fetch(`${apiUrl}/${resource}`, apiOptions)
     .then(response => response.json())
     .then(data => setApiResponse(data));
  }, []);

  return {
    data: apiResponse?.data,
    errors: apiResponse?.errors
  };
}

export default useApiQuery;