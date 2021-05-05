import { Badge } from './badge';

export interface Challenger {
    id: string;
    name?: string;
    badges?: string[];
    queueOpen?: string[];
  }