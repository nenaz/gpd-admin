import * as React from 'react';
import { Accounts } from '@/widgets/accounts';
import { Balance } from '@/widgets/balance';
import { Statement } from '@/widgets/statement';
import { ReceiverPage } from '@/pages/receiver-page';
import { TransmitterPage } from '@/pages/transmitter-page';
import { MapPage } from '@/pages/map-page';

export const HOME_PAGE_WIDGETS_LIST = [
  // { component : <Accounts /> },
  // { component : <Balance /> },
  // { component : <Statement /> },
  // { component: <ReceiverPage /> },
  // { component: <TransmitterPage /> },
  { component: <MapPage /> },
];