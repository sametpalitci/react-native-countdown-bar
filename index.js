'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet,LayoutAnimation, TouchableOpacity, Alert } from 'react-native';

const DEFAULT_TIME = 10;
const DEFAULT_COLOR = "#12887F";
const DEFAULT_BG_COLOR_IN = '#FFFFFF';

export default class CountdownBar extends React.Component {
  constructor() {
    super();
    this.state = {
      totelSeconds:0,
      index:0,
      width:0
    }
}
static propTypes = {
  time: PropTypes.number,
  BgColor: PropTypes.string,
  BgColorIn: PropTypes.string,
  complete : PropTypes.func,
  height: PropTypes.string
};
  componentDidMount() {
    const {time} = this.props;
    this.timer = setInterval(() => {
      var totelSeconds = this.state.totelSeconds;
        var uff = totelSeconds+1;
        if(uff === time){
          clearInterval(this.timer);
          this.bitti();
         } 
        this.setState({totelSeconds:uff});
      //alert(this.state.totelSeconds);
    }, 1000);
  }
  bitti(){
    if(this.props.complete){
      this.props.complete();
    }
  }
  jewelStyle = function(options) {
    const {time, BgColor} = this.props;
    let widthSec = this.state.totelSeconds * (100/time);
    let importSec = widthSec + "%";
    return {
      display:'flex',
      width:importSec,
      backgroundColor:BgColor,
    }
  }
  render(){ 
   
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <View style={[styles.contentIn, {backgroundColor:this.props.BgColorIn, height: this.props.height}]}>
            <View style={this.jewelStyle()}/>
          </View>
        </View>
    </View>
    )
  }
}
CountdownBar.defaultProps = {
  time: DEFAULT_TIME,
  BgColor: DEFAULT_COLOR,
  BgColorIn:DEFAULT_BG_COLOR_IN
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',

  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
  },
  contentIn:{
    backgroundColor:'#FFFFFF',
    flexDirection: 'row', 
    height: 40
  }
});
  
