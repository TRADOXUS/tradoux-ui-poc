export interface Capsule {
  id: number;
  title: string;
  completed: boolean;
  content?: string;
  examples?: string[];
  exercises?: {
    question: string;
    options?: string[];
    answer?: string;
  }[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: string;
  capsules: Capsule[];
} 