export type WorkplaceType = 'remote' | 'hybrid' | 'on_site';

export type SeniorityLevel = 'trainee' | 'junior' | 'mid' | 'senior' | 'lead';

export type PortalSource = 'getonbrd' | 'computrabajo' | 'remotive' | 'linkedin' | 'torre' | 'other';

export interface JobSource {
  name: string;
  url: string;
  portal_type: PortalSource;
  external_id?: string;
  published_at?: string;
}

export interface Job {
  id: string;
  title: string;
  company_name: string;
  company_logo?: string | null;
  location: string;
  city?: string | null;
  country?: string | null;
  is_remote: boolean;
  workplace_type: WorkplaceType;
  seniority_level: SeniorityLevel;
  salary_min?: number | null;
  salary_max?: number | null;
  salary_currency?: string | null;
  salary_period?: 'hourly' | 'monthly' | 'yearly' | null;
  technologies: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  status: 'active' | 'closed';
  sources: JobSource[];
  published_at: string;
  created_at: string;
}

export type SortOption = 'recent' | 'salary' | 'relevance';

export interface JobFiltersState {
  query: string;
  location: string;
  workplaceType?: WorkplaceType | 'all';
  seniority?: SeniorityLevel | 'all';
  technology?: string | 'all';
  sortBy: SortOption;
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

