import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export function useURLService() {
  const [isLoading, setIsLoading] = useState(false);

  const shortenURL = async (url: string) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3901/api/url/create',
        { destinationLink: url },
        {
          headers: { Authorization: token },
        }
      );
      toast.success('URL shortened successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to shorten URL');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    shortenURL,
    isLoading,
  };
} 