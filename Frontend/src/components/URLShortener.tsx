import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useURLService } from '../services/useURLService';

const urlSchema = z.object({
  url: z.string().url('Please enter a valid URL'),
});

type URLFormData = z.infer<typeof urlSchema>;

export function URLShortener() {
  const [shortUrl, setShortUrl] = useState<string>('');
  const { shortenURL, isLoading } = useURLService();
  
  const { register, handleSubmit, formState: { errors } } = useForm<URLFormData>({
    resolver: zodResolver(urlSchema),
  });

  const onSubmit = async (data: URLFormData) => {
    try {
      const result = await shortenURL(data.url);
      setShortUrl(result.shortUrl);
    } catch (error) {
      console.error('Failed to shorten URL:', error);
    }
  };

  return (
    <div className="mt-12 max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          {...register('url')}
          placeholder="Enter your long URL"
          error={errors.url?.message}
        />
        <Button type="submit" isLoading={isLoading} className="w-full">
          Shorten URL
        </Button>
      </form>

      {shortUrl && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <p className="text-sm font-medium text-gray-700">Your shortened URL:</p>
          <div className="mt-2 flex items-center space-x-2">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className="flex-1 p-2 bg-gray-50 rounded border"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigator.clipboard.writeText(shortUrl)}
            >
              Copy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 