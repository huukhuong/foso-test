import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { CustomTabBar } from '@/components';
import {
  GanttScreen,
  MoreScreen,
  OrdersScreen,
  OverviewScreen,
  ProductionScreen,
} from '@/screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Production">
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Gantt" component={GanttScreen} />
      <Tab.Screen name="Production" component={ProductionScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
