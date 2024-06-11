import React, {FC} from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



import styles from '../../styles/styles';
interface MyHeaderProps {
    title: string;
}
const MyHeader : FC<MyHeaderProps> = (props) => {
  return (
    <View style={styles.headerContainer}>
        <Icon name ="arrow-back"
        size={30}
        // style={{ position: 'relative' }} // Adjust positioning values
        color={'#000000'}
         />
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default MyHeader;