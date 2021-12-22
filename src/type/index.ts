export interface RequestType {
  id: number;
  title: string;
  client: string;
  due: string;
  count?: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export interface SelectOptionType {
  id: string;
  labal: string;
}
