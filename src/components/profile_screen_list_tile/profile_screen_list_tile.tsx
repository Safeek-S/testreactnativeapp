import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../../styles/styles';
interface ProfileListTileProps {
  tileName: string;
  key:string;
  iconName: string;
}




const ProfileListTile: FC<ProfileListTileProps> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          height: 60,
          paddingHorizontal: 20,
          borderWidth: 1,
          borderColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name={props.iconName} size={15} color={'#6D6D6D'} />
          <Text style={{color: '#000', fontSize: 20, marginLeft: 15}}>
            {props.tileName}
          </Text>
          <Icon
            name="arrow-forward-ios"
            size={20}
            // style={{ position: 'relative' }} // Adjust positioning values
            color={'#000000'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileListTile;
