import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import ImageSearch from './containers/image-search';
import ImageDetail from './containers/image-detail';

const Routes = () => {
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
