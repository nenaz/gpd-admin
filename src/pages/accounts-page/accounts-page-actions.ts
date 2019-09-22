import { getFormValues } from "redux-form";
import { Send } from '@/utils/server-interaction';


// export const saveAccount = (params: Object) => (
//   dispatch: Function,
//   getState: Function,
// ) => {
//   const state = getState();
//   const accounValues = getFormValues('accounts')(state);
//   console.log('accounValues', accounValues);
//   return Send('editAccount')
//     .then((response: any) => {
//       console.log(response);
//       dispatch({
//         type: 'SAVE_ACCOUNT',
//         payload: accounValues,
//       });
//     });
// };
