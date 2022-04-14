import {domain, API_KEY} from '../../constants';
export const fetchData = async (url, params) => {
  const url_base = `${domain}${url}`;
  try {
    const response = await fetch(url_base, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        mode: 'cors',
      },
    });
    const {status, sources} = response;
    if (status === 'ok') {
      return sources;
    }
    throw new Error(`HTTP error! Status: ${status}`);
  } catch (error) {
    throw new Error(error);
  }
};
