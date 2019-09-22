
export interface IUser {
  _id: string,
  login: string,
  coordinates: {
    lat: number,
    lon: number,
  },
  status: string,
};
