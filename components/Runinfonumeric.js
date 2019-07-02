import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {Runinfo} from './Runinfo';
import {connect} from 'react-redux';

 export class Runinfonumeric extends Runinfo {
    
            formatValue(){
                return [this.props.value.toFixed(2), this.props.unit].join(' ');
            }
        
}
export default connect((state,own)=>{
    return {value: state[own.type] };
})(Runinfonumeric);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});