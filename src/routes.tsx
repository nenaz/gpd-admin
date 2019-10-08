import { HomePage } from './pages/home';
import { AuthPage } from './pages/auth';
import { AboutPage } from './pages/about';
import { AccountPage } from './pages/accounts-page';
import { Framework7Params } from 'framework7/components/app/app-class';
import { withAuth } from './modules/auth/with-auth';
import { ReceiverPage } from './pages/receiver-page';
import { MapPage } from './pages/map-page';

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
      options: {
        reloadAll: true,
      },
      // component: withAuth(ReceiverPage),
    },
    {
      path: '/about/',
      component: AboutPage,
    },
    {
      name: 'auth',
      path: '/auth/',
      options: {
        reloadAll: true,
      },
      component: AuthPage,
    },
    {
      path: '/',
      component: AuthPage,
      options: {
        reloadAll: true,
      },
    },
    {
      name: 'mapPage',
      path: '/mapPage/',
      component: MapPage,
      options: {
        reloadAll: true,
      },
    },
  ],
};
