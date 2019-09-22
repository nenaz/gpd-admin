import framework7 from 'framework7';
export const createF7Alert = (message: string, title: string) => {
  // @ts-ignore
  const app = new framework7();
  app.dialog.alert(message, title);
};
