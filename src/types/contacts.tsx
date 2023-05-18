export interface IContact {
  id: string;
  name: string;
  number: number;
  avatar: string;
  favorite: boolean;
}

export interface IAddFormValues {
  name: string;
  number: string;
}
