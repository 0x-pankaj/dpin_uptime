"use client";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BACKEND_URL } from "@/config";

interface Website {
  id: string;
  url: string;
  ticks: {
    id: string;
    createdAt: string;
    status: string;
    latency: number;
  }[];
}

export function useWebsites() {
  const { getToken } = useAuth();
  const [websites, setWebsites] = useState<Website | null>(null);

  const refreshWebsites = async () => {
    const token = await getToken();
    const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setWebsites(response.data.website);
  };

  useEffect(() => {
    refreshWebsites();
    const interval = setInterval(refreshWebsites, 1000 * 60 * 5);

    return () => clearInterval(interval);
  }, []);

  return websites;
}
