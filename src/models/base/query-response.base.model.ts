export interface QueryResponseBaseModel {
  per_page?: number;
  current_page?: number;
  next_page_url?: string;
  prev_page_url?: string;
  from?: number;
  to?: number;
}
