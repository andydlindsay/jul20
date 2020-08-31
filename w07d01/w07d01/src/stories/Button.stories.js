import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button Component', module)
  .add('with label as register', () => (
    <Button
      clickHandler={action('register button clicked')}
      label="register"
    >
    </Button>
  ))
  .add('with some emoji', () => (
    <Button 
      clickHandler={action('clicked')}
      label="😀 😎 👍 💯"
    >
    </Button>
  ));
