import { HomePage } from './pages/home';
import { AuthPage } from './pages/auth';
import { AboutPage } from './pages/about';
import { AccountPage } from './pages/accounts-page';
import { Framework7Params } from 'framework7/components/app/app-class';
import { withAuth } from './modules/auth/with-auth';

export const f7params: Framework7Params = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  // @ts-ignore
  routes: [
    {
      path: '/account',
      component: withAuth(AccountPage),
    },
    {
      name: 'home',
      path: '/home',
      component: withAuth(HomePage),
    },
    {
      path: '/about/',
      component: AboutPage,
    },
    {
      name: 'auth',
      path: '/auth/',
      component: AuthPage,
    },
    {
      path: '/',
      component: AuthPage,
    },
  ],
};
