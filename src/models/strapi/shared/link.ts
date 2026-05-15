export interface Link {
  id: number;
  href: string;
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'light';
}
