import { ReactNode } from 'react';

export type Todo = {
  id: string;
  text: string;
};

export type Props = {
  children?: ReactNode;
  items?: Todo[];
};
