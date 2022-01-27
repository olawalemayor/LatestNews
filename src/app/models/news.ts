export interface News {
  title: string;
  link: string;
  keywords: string;
  creator: string | null;
  video_url: string | null;
  description: string;
  content: string | null;
  pubDate: string;
  full_description: string;
  image_url: string | null;
  source_id: string;
}

export interface dataResponse {
  status: string;
  totalResults: number;
  results: News[];
  nextPage: number;
}
