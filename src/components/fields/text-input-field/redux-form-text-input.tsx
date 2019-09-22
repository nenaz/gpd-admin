import * as React from 'react';
import { Field } from 'redux-form';
import { TextInputField } from './text-input-field';
import { TextInput } from '@/components/inputs/text-input';

export const ReduxFormTextInput = (props: any) => {
  console.log();
  return (
    <Field
      name={props.name}
      // component={TextInput}
      component={TextInputField}
      {...props}
    />
  );
};