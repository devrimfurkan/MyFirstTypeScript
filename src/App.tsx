import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, Icon, IconRegistry } from '@ui-kitten/components'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const StarIcon = (props: any)=>(
  <Icon {...props} name = 'star' />
);
const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Button accessoryRight={StarIcon}>Click Me!</Button>
  </Layout>
);

export default () => (
  <>
  <IconRegistry icons={EvaIconsPack}/>
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
  </>
);