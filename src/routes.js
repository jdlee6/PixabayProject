import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { BackButton, NativeRouter, Route, Link } from "react-router-native";
import ImageSearch from './containers/image-search';
import ImageDetail from './containers/image-detail';


const Routes: () => Node = () => {
  return (
    <NativeRouter>
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Route exact path="/" component={ImageSearch} />
          <Route path="/image/:id" component={ImageDetail} />
        </View>
      </ScrollView>
    </SafeAreaView>
    </NativeRouter>
  );
};

export default Routes;
