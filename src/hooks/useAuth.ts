import { useMutation, useQuery } from '@tanstack/react-query';
import config from '../config';

interface LoginCredentials {
  username: string;
  password: string;
}

interface AdminUser {
  id: number;
  username: string;
  fullName?: string;
}

interface AuthResponse {
  token: string;
  admin: AdminUser;
}

const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await fetch(`${config.apiBaseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Login failed');
  }

  return response.json();
};

export const useLogin = () => {
  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: login,
    onSuccess: (data) => {
      // Store token in localStorage or cookies
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('adminUser', JSON.stringify(data.admin));
    },
  });
};

export const useAdminUser = () => {
  return useQuery<AdminUser | null>({
    queryKey: ['adminUser'],
    queryFn: async () => {
      const token = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('adminUser');
      
      if (!token || !storedUser) {
        return null;
      }

      try {
        const response = await fetch(`${config.apiBaseUrl}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Session expired');
        }

        return JSON.parse(storedUser);
      } catch (error) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('adminUser');
        return null;
      }
    },
  });
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('adminUser');
  window.location.href = '/admin/login';
};