// src/hooks/use-strapi.ts
'use client';

import { useEffect, useState } from 'react';

type UseStrapiOptions = {
  enabled?: boolean;
};

interface UseStrapiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useStrapi<T>(endpoint: string, options?: UseStrapiOptions): UseStrapiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const enabled = options?.enabled ?? true;

  useEffect(() => {
    if (!enabled) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
        const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

        if (!baseUrl) {
          throw new Error('NEXT_PUBLIC_STRAPI_URL no está definida');
        }

        const res = await fetch(`${baseUrl}${endpoint}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const json: T = await res.json();

        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, enabled]);

  return {
    data,
    loading,
    error,
  };
}
