"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { supabase } from "@/lib/supabase/client";
import { apiFetch } from "@/lib/supabase/api";

export interface ProfileDto {
  firstName: string;
  lastName: string;
  username: string;
  bio?: string | null;
  cityId?: string | null;
  profileImageUrl?: string | null;
}

export interface CurrentUserDto {
  id: string;
  email: string;
  role: string;
  isActive: boolean;
  profile?: ProfileDto | null;
}

interface AuthContextType {
  user: CurrentUserDto | null;
  loading: boolean;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAuthenticated: false,
  refreshUser: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CurrentUserDto | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const userData = await apiFetch<CurrentUserDto>("/api/users/me");
        setUser(userData);
      } catch {
        // Fallback: If backend profile isn't fetched yet, build basic user from Supabase session metadata
        const metadata = session.user.user_metadata || {};
        const fullName = (metadata.full_name as string) || "";
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0] || session.user.email?.split("@")[0] || "Kullanıcı";
        const lastName = nameParts.slice(1).join(" ") || "";

        setUser({
          id: session.user.id,
          email: session.user.email || "",
          role: "User",
          isActive: true,
          profile: {
            firstName,
            lastName,
            username: session.user.email?.split("@")[0] || "kullanici",
            bio: null,
            cityId: null,
            profileImageUrl: metadata.avatar_url || null,
          },
        });
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        fetchCurrentUser();
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        refreshUser: fetchCurrentUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
