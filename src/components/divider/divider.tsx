


import React , {FC} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



import styles from '../../styles/styles';
interface CustomDividerProps {
    thickness: number;
    colour: string;
}
const CustomDivider  : FC<CustomDividerProps> = (props) => {
  return (
    <View
    style={{
      borderBottomColor: props.colour,
      borderBottomWidth: props.thickness,
    }}
  />
  );
};

export default CustomDivider;