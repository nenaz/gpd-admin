import io from 'socket.io-client';
import { getCurrentAuthorizationToken } from '@/modules/auth';
import { setUserCoordinatesFromServer, IUserCoordinatesFromServer } from '@/modules/coordinates';
// import { store } from '@/store';
// import { Socket } from 'net';

// export const wsConnect = () => {

interface IWsConnection {
  // socket: any,
  wsConnect: Function,
};

class WsConnection<IWsConnection> {
  socket: any;
  constructor() {
    // this.socket = io('http://localhost:3002');
    // console.log('constructor');
    // this.socket.on('message', (message: any) => {
    //   console.log('message', message);
    // });
    //   this.socket.on('message-coordinates', (message: IUserCoordinatesFromServer) => {
    //     console.log('message', message);
        
    //     // this.wsListenCoordMessage(message);
    //   });
  };

  wsConnect = (userTag: string) => {
    console.log('wsConnect');
    return io('http://localhost:3002');
    // return this.socket.on('connect', (data: any) => {
    //   this.socket.emit('message', userTag, null);
    //   // console.log('data', data);
    // });
  };

  wsOnmessage = (fromUser: string, message: Object) => {
    const webToken = getCurrentAuthorizationToken();
    console.log('wsOnmessage');
    const mes = JSON.stringify({
      ...message, 
      authorization: webToken,
    });
    console.log('mes', mes);
    this.socket.send(fromUser, mes);
  };

  wsListenCoordMessage = (message: any) => {
    // @ts-ignore
    // store.dispatch(setUserCoordinatesFromServer(message));
  }

  wsDisconnect = (socket: any) => {
    return socket.close();
  };
};


export const wsConnection = new WsConnection();