import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import firebase from 'react-native-firebase'


class componentName extends Component {
    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyC6KI8hNczBN5gICI4QCr-zTig6F4cJETs",
            authDomain: "locator-ff749.firebaseapp.com",
            databaseURL: "https://locator-ff749.firebaseio.com",
            projectId: "locator-ff749",
            storageBucket: "locator-ff749.appspot.com",
            messagingSenderId: "749029202725",
            appId: "1:749029202725:web:2c8476ccb25d2a50"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          console.log(firebase);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>componentName123</Text>
            </View>
        );
    }
}
export default componentName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});