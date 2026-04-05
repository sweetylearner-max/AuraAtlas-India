export type Mood = "Happy" | "Calm" | "Neutral" | "Stressed" | "Sad" | "Overwhelmed";

export interface CheckIn {
  id: string;
  mood: Mood;
  message: string;
  timestamp: number;
  lat: number;
  lng: number;
  city: string;
  hugs?: number;
  campus_name?: string;
  user_id?: string | null;
  college_id?: string | null;
}

export interface College {
  id: string;
  name: string;
  city: string;
  latitude: number;
  longitude: number;
  campus_radius: number;
}

export interface CampusEmotionDistributionItem {
  emotion: Mood;
  count: number;
  share: number;
}

export interface CampusTrendPoint {
  date: string;
  average_score: number;
  checkin_count: number;
}

export interface CampusWindowTrend {
  average_score: number;
  checkin_count: number;
}

export interface CampusEmotionResponse {
  college_id: string;
  college_name: string;
  city: string;
  participant_count: number;
  min_participants_required: number;
  redacted: boolean;
  emotion_distribution: CampusEmotionDistributionItem[];
  checkin_count: number;
  trend_data: CampusTrendPoint[];
  top_reported_emotions: CampusEmotionDistributionItem[];
  top_emotions?: { emotion: string; percentage: number }[];
  overall_vibe?: string;
  recent_checkins?: number;
  total_checkins?: number;
  checkins_count?: number;
  students_on_platform?: number;
  student_count?: number;
  recent_mood_trends: {
    today: CampusWindowTrend;
    week: CampusWindowTrend;
    month: CampusWindowTrend;
  } | null;
  heatmap_points: Array<{
    lat: number;
    lng: number;
    mood: Mood;
    weight: number;
    intensity: number;
  }>;
}

export interface Resource {
  name: string;
  address1: string;
  lat: number;
  lng: number;
  phone?: string;
}

export interface CityConfig {
  name: string;
  state: string;
  lat: number;
  lng: number;
  radius: number; // km — approximate urban area radius for mask
}

export const MOODS: { label: Mood; color: string; icon: string; weight: number }[] = [
  { label: "Calm", color: "#60a5fa", icon: "😌", weight: 0.1 },
  { label: "Happy", color: "#34d399", icon: "😊", weight: 0.25 },
  { label: "Neutral", color: "#a78bfa", icon: "😐", weight: 0.4 },
  { label: "Sad", color: "#fbbf24", icon: "😢", weight: 0.55 },
  { label: "Overwhelmed", color: "#fb923c", icon: "😵", weight: 0.7 },
  { label: "Stressed", color: "#ef4444", icon: "😰", weight: 0.85 },
];

export const CITIES: CityConfig[] = [
  // ── India ──────────────────────────────────────────────────────
  { name: "Mumbai", state: "MH", lat: 19.076, lng: 72.8777, radius: 28 },
  { name: "Delhi", state: "DL", lat: 28.6139, lng: 77.209, radius: 25 },
  { name: "Bangalore", state: "KA", lat: 12.9716, lng: 77.5946, radius: 22 },
  { name: "Hyderabad", state: "TS", lat: 17.385, lng: 78.4867, radius: 20 },
  { name: "Chennai", state: "TN", lat: 13.0827, lng: 80.2707, radius: 18 },
  { name: "Kolkata", state: "WB", lat: 22.5726, lng: 88.3639, radius: 18 },
  { name: "Pune", state: "MH", lat: 18.5204, lng: 73.8567, radius: 16 },
  { name: "Ahmedabad", state: "GJ", lat: 23.0225, lng: 72.5714, radius: 16 },
  { name: "Jaipur", state: "RJ", lat: 26.9124, lng: 75.7873, radius: 16 },
  { name: "Lucknow", state: "UP", lat: 26.8467, lng: 80.9462, radius: 15 },
  { name: "Chandigarh", state: "PB", lat: 30.7333, lng: 76.7794, radius: 12 },
  { name: "Bhopal", state: "MP", lat: 23.2599, lng: 77.4126, radius: 14 },
  { name: "Kochi", state: "KL", lat: 9.9312, lng: 76.2673, radius: 13 },
  { name: "Visakhapatnam", state: "AP", lat: 17.6868, lng: 83.2185, radius: 15 },

  // ── Nearby Countries ───────────────────────────────────────────
  { name: "Karachi", state: "PK", lat: 24.8607, lng: 67.0011, radius: 22 },
  { name: "Lahore", state: "PK", lat: 31.5497, lng: 74.3436, radius: 18 },
  { name: "Dhaka", state: "BD", lat: 23.8103, lng: 90.4125, radius: 20 },
  { name: "Colombo", state: "LK", lat: 6.9271, lng: 79.8612, radius: 14 },
  { name: "Kathmandu", state: "NP", lat: 27.7172, lng: 85.3240, radius: 12 },
  { name: "Kabul", state: "AF", lat: 34.5553, lng: 69.2075, radius: 14 },
  { name: "Yangon", state: "MM", lat: 16.8661, lng: 96.1951, radius: 16 },
];

export const MOOD_WEIGHT: Record<string, number> = {
  Happy: 0.1,
  Calm: 0.2,
  Neutral: 0.4,
  Stressed: 0.7,
  Sad: 0.85,
  Overwhelmed: 1.0,
};

export const MOOD_INTENSITY: Record<string, number> = {
  Happy: 0.1,
  Calm: 0.2,
  Neutral: 0.4,
  Stressed: 0.7,
  Sad: 0.8,
  Overwhelmed: 1.0,
};

export interface Friend {
  id: string;
  friend_id: string;
  profile?: any;
  display_name?: string;
  avatar_url?: string;
  unique_code?: string;
  college_id?: string;
  college_name?: string;
  entry_count: number;
}
