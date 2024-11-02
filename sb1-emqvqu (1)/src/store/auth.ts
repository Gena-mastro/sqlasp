import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

// Simulación de usuarios
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@nexus.com',
    password: 'admin123',
    name: 'Administrador',
    role: 'admin' as const,
  },
  {
    id: '2',
    email: 'demo@nexus.com',
    password: 'demo123',
    name: 'Usuario Demo',
    role: 'user' as const,
  },
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (credentials) => {
        // Simular delay de red
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const user = MOCK_USERS.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        if (!user) {
          throw new Error('Credenciales inválidas');
        }

        const { password, ...userWithoutPassword } = user;
        set({ user: userWithoutPassword, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);