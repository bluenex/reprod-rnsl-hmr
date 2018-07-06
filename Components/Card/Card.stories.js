import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Card, CardItem, CardHeader } from './index';
import { View, Text } from 'react-native';

storiesOf('Cards', module)
  .add('Card With Items', () =>
    (
      <Card>
        <CardItem>
          <Text>Item1</Text>
        </CardItem>
        <CardItem bgColor='green'>
          <Text>Item2</Text>
        </CardItem>
      </Card>
    ))
  .add('Card With Header', () =>
    (
      <Card>
        <CardItem>
          <Text>This is Header</Text>
        </CardItem>
        <CardItem bgColor='green'>
          <Text>This is item</Text>
        </CardItem>
      </Card>
    ))
