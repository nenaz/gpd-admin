import * as React from 'react';
import { ListInput, List, Icon } from 'framework7-react';
import cn from 'classnames';
import textInput from './text-input.module.scss';

interface ITextInput {
  className?: string,
  placeholder?: string,
};

export class TextInput extends React.PureComponent<ITextInput> {
  render() {
    const { className, placeholder } = this.props;

    return (
      <List
        noHairlinesMd
        className={cn(className, textInput['text-input'])}
      >
        <ListInput
          className={className}
          placeholder={placeholder}
          label={placeholder}
          type="text"
          floatingLabel
          {...this.props}
        ><Icon icon="demo-list-icon" slot="media"/></ListInput>
      </List>
    );
  }
}
