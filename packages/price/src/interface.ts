export interface IPrice {
  prefix?: string;
  suffix?: string;
  template?: 'default' | 'signAbove' | 'linear';
  value: string;
}
