export interface News {
  title: string;
  link: string;
  keywords: string[];
  creator: string | null;
  video_url: string | null;
  description: string;
  content: string | null;
  pubDate: string;
  full_description: string;
  image_url: string | null;
  source_id: string;
}

export interface ArchiveNews {
  title: string;
  link: string;
  keywords: string[];
  creator: string;
  video_url: string;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
}

export interface dataResponse {
  status: string;
  totalResults: number;
  results: any[];
  nextPage: number;
}
