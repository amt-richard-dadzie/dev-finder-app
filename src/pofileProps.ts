export interface ProfileProps {
  login: string;
  name: string;
  avatar_url: string;
  created_at: string;
  bio: string | null;
  public_repos: string;
  followers: string;
  following: string;
  location: string;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
}
