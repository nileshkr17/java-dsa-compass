
import type { Database } from "@/integrations/supabase/types";

// Re-export types from Supabase
export type { Database };

// Application-specific types that extend or use the Supabase types
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Badge = Database["public"]["Tables"]["badges"]["Row"];
export type UserBadge = Database["public"]["Tables"]["user_badges"]["Row"];
export type StudySession = Database["public"]["Tables"]["study_sessions"]["Row"];
export type Announcement = Database["public"]["Tables"]["announcements"]["Row"];

// Additional application types
export type AuthUser = {
  id: string;
  email?: string;
};

export type AuthState = {
  user: AuthUser | null;
  profile: Profile | null;
  isLoading: boolean;
};
