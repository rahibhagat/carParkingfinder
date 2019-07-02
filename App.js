import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Runinfo from './components/Runinfo';
import Runinfonumeric from './components/Runinfonumeric';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MapView from 'react-native-maps';
import haversine from 'haversine';
import reducer from './reducer';
import {incrementDistance, setSpeed, setBearing} from './action';
import firebase from 'react-native-firebase';
import App1 from './App1';



const styles = StyleSheet.create({
  infoWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1
  },
  map: {
    position:'absolute',
    right:0,
    left:0,
    bottom:0,
    top:0
    
  }
});


let id = 0;
const store = createStore(reducer);
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
 
    let watchID = navigator.geolocation.watchPosition(
      (position) => {

        if(this.state.previousCoordinate) {
          let distance = haversine(this.state.previousCoordinate,
                                         position.coords,{unit: 'mile'});
          store.dispatch(incrementDistance(distance));
        }
        store.dispatch(setSpeed(position.coords.speed));
        store.dispatch(setBearing(position.coords.heading));

        

      this.setState({
        markers:[
        ...this.state.markers,{
        coordinate: position.coords,
        key:id++
       }
      ],
      previousCoordinate: position.coords,
    
    });
  }, 
  (error) => this.setState({ error: error.message }),
  { enableHighAccuracy: true, timeout: 200000, maximumAge: 0, distanceFilter: 5},);

    this.state = { markers: [], watchID };

 
  }



  componentWillUnmount() {
    navigator.geolocation.stopWatch(this.state.watchID);
  }


    addMarker(region) {
      let now = (new Date).getTime();
      if (this.state.ladAddedMarker > now - 5000) {
        return;
      }

      this.setState({
        markers: [
          ...this.state.markers, {
            coordinate: region,
            key: id++
          }
        ],
        ladAddedMarker: now
      });
    }


  render() {
    return (
     <App1/>
    );
  }
}