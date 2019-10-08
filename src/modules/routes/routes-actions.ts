
export const routeToPage = (pageName: string) => (dispatch: Function, getState: Function) => {
  console.log('pageName', pageName);
  // @ts-ignore
  this.$f7.views.main.router.navigate(`/${pageName}`);
};
