# react-native-countdown-bar


CountdownBar

## Installation
Run `npm install react-native-countdown-bar --save`

## Props
| Name | Description | Type | Default Value |
| :--- | :----- | :--- | :---: |
| time | Forward Time | object | 10 |
| BgColor | Background color | string | ![#1abc9c](https://placehold.it/15/FAB913/000000?text=+) `'#1abc9c'` |
| BgColorIn | Background color in color | string | ![#fff](https://placehold.it/15/000/000000?text=+) `'#fff'` |
| complete | complete function | func | null |
| height | Height of the bar | string | 40 |

## Preview

![React Native CountdownBar](https://media.giphy.com/media/8UGW2yvW48ns85SmMj/giphy.gif "React Native CountdownBar")

## Code
```javascript
import CountdownBar from "react-native-countdown-bar";

      <CountdownBar 
          time={10}
          BgColor="#1abc9c"
          BgColorIn="#fff"
          complete={()=> console.log("complete")}
        />
```
