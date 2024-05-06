export interface ScheduleItem {
  id: string;
  date: string;
  visits: Visit[];
}

export interface Visit {
  id: string;
  order: number;
  operatives: Operative[];
  start_time: string;
  site: {
    client: string;
    address_line_1: string;
    post_code: string;
    city: string;
  };
  estimated_completion_time: string;
  task: string;
}

export interface Operative {
  first_name: string;
  last_name: string;
}

export interface Site {
  client: string;
  address_line_1: string;
  post_code: string;
  city: string;
}
