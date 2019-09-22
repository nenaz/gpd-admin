import io from 'socket.io-client';
// import { Socket } from 'net';

// export const wsConnect = () => {
const socket = io('http://localhost:3000');
// };

export const wsConnect = () => {
  socket.on('connect', (data: any) => {
    socket.emit('my other event', { my: 'data' });
    console.log('data', data);
  });
}

export const wsSend = () => {
  socket.emit('message', {
    test: 'text',
  });
};
