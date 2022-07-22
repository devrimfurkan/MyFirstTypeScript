
import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Button, Divider, Icon, IconRegistry, List, ListItem, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props:any) => (
  <Icon {...props} name='arrow-back'/>
);

const SettingsIcon = (props:any) => (
  <Icon {...props} name='settings'/>
);

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

 const App=()=> {

  const renderSettingsAction = () => (
    <TopNavigationAction icon={SettingsIcon}/>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon}/>
  );

  const renderItemAccessory = (props:any) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  const renderItemIcon = (props:any) => (
    <Icon {...props} name='person'/>
  );

  const renderItem = ({ item, index }:any) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <IconRegistry icons={EvaIconsPack}/>
    <React.Fragment>
      <TopNavigation
        title='Eva Application'
        accessoryLeft={renderBackAction}
        accessoryRight={renderSettingsAction}
        />
      <Divider/>
      <List
        style={styles.container}
        data={data}
        renderItem={renderItem}
        />
    </React.Fragment>
        </ApplicationProvider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    maxHeight: 320,
  },
});