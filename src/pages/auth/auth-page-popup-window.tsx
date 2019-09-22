// @flow
import { API_URL } from './auth-page-consts';

let popup: any;
type WindowPopupPropsType = {};

export const windowPopup = () => {
  // const { provider, socket } = props;
  const width = 600, height = 600
  const left = (window.innerWidth / 2) - (width / 2)
  const top = (window.innerHeight / 2) - (height / 2)
  // const clientId = 7022338;
  const clientId = 7064399;
  // const redirectUri = 'https://oauth.vk.com/blank.html';
  const redirectUri = 'https://oauth2-mrnenaz.herokuapp.com/vkontakte/callback';
  // const url = `${API_URL}/${provider}?socketId=${socket.id}`
  // const url = `https://oauth.vk.com/authorize?client_id=7022338&display=popup&redirect_uri=https://oauth2-mrnenaz.herokuapp.com/vkontakte/callback&scope=friends&response_type=code&v=5.101`
  const url = `
    https://oauth.vk.com/authorize?client_id=
    ${clientId}&display=page&redirect_uri=${redirectUri}
    &scope=wall&response_type=token&v=5.101`;
  // https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.101&state=123456

  popup = window.open(url, '',       
    `toolbar=no, location=no, directories=no, status=no, menubar=no, 
    scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
    height=${height}, top=${top}, left=${left}`
  )
};

export const closeWindow = () => {
  popup.close();
}
