import React, { Component } from 'react';

import { Text, View, StyleSheet,LayoutAnimation, TouchableOpacity } from 'react-native';

var CustomLayoutAnimation = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.curveEaseInEaseOut,
  },
};
export default class CountdownBar extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    }
}
geri_say(){
var sayilacak_saniye=1000;
console.log(sayilacak_saniye);
return sayilacak_saniye;
}
onPress(index) {

  // Uncomment to animate the next state change.
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  // Or use a Custom Layout Animation
  // LayoutAnimation.configureNext(CustomLayoutAnimation);

  this.setState({index: index});
}
renderButton(index) {
  return (
    <TouchableOpacity key={'button' + index} style={styles.button} onPress={() => this.onPress(index)}>
      <Text>{index}</Text>
    </TouchableOpacity>
  );
}

renderCircle(key) {
  var size = 50;
  return (
    <View key={key} style={{width: size, height: size, borderRadius: size / 2.0, backgroundColor: 'sandybrown', margin: 20}}/>
  );
}
  render(){ 
    var leftStyle = this.state.index === 0 ? {flex: 1} : {width: 20};
    var circles = [];
    for (var i = 0; i < (5 + this.state.index); i++) {
      circles.push(this.renderCircle(i));
    } 
  return (
    <View style={styles.container}>
        <View style={styles.topButtons}>
          {this.renderButton(2)}
        </View>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', height: 100}}>
            <View style={[leftStyle, {backgroundColor: 'firebrick'}]}/>

          </View>
        </View>
</View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width:'100%'
  },
  topButtons: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'lightblue',
  },
  button: {
    flex: 1,
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
  