export interface goInterface extends Document {
  name: string;
  stations: {}[];
  users: {}[];
}
export interface userInterface extends Document {
  username: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
  name: string;
  email: string;
  requests: number;
  history: {}[];
  station: {};
}
export interface stationInterface extends Document {
  stationName: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
  email: string;
  users: {}[];
  requests: {}[];
  notifications: {}[];
  feedbacks: {}[];
}

export interface requestInterface extends Document {
  requestMessage: string;
  status: string;
}
