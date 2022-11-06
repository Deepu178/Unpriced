import axios from 'axios';
import { useCallback, useState } from 'react';
import { TIMEOUT_SEC } from '../utils/config';
import { timeout } from '../utils/helper';

/**
 * useHttp hook handle request management by fetching data and maintaining isLoading and error state
 * @returns {Object} isLoading, error, sendRequest
 */

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Sends get request to the given url and calls callback
   * @param {String} url url of the server
   * @param {Function} callback function that needs to be run when data is fetched
   * @async
   */

  const sendRequest = useCallback(async (url, callback) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await Promise.race([axios.get(url), timeout(TIMEOUT_SEC)]);
      callback(res.data);
    } catch (err) {
      setError({ ...err, message: err.message || 'Something went wrong!' });
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
