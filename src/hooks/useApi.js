import { useEffect, useState } from 'react';

const organizationId = 219;
const apiUrl = `https://newdemostock.gopos.pl/ajax/${organizationId}`;

function useApi(resource, method, data) {
  const [apiResponse, setApiResponse] = useState(null);

  const apiOptions = {
    headers: {
      'Authorization': 'fd9ba9e1-0788-4e8f-ac46-a43df43e205e'
    }
  };

  if (method) {
    apiOptions.method = method;
  }

  if (data) {
    apiOptions.body = JSON.stringify(data);
  }

  useEffect(() => {
    fetch(`${apiUrl}/${resource}`, apiOptions)
     .then(response => response.json())
     .then(data => setApiResponse(data));
  });

  return {
    data: apiResponse?.data,
    errors: apiResponse?.errors
  };
}

export default useApi;