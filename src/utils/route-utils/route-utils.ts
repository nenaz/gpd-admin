import { history } from './history';

export const goToPage = (f7router: any, pageName: string) => {
  // @ts-ignore
  // this.$f7router.navigate({ name: pageName });
  f7router({ name: pageName });
  // history.push(`/${pageName}`);
};
