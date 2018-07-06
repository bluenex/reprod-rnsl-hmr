import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, ButtonDisable } from './index';
import { View, Text } from 'react-native';

storiesOf('Buttons', module)
  .add('Button', () =>
    (
      <View>
        <Button>
          <Text>Normal Button</Text>
        </Button>
      </View>
    ))
  .add('Disabled Button', () =>
    (
      <View>
        <ButtonDisable>
          <Text>Disabled Button</Text>
        </ButtonDisable>
      </View>
    ))
