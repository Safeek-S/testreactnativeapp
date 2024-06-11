import {View, Text, FlatList} from 'react-native';
import MyHeader from '../../components/app_bar/app_bar';
import styles from '../../styles/styles';
import CircularProgress from 'react-native-circular-progress-indicator';
import ProfileListTile from '../../components/profile_screen_list_tile/profile_screen_list_tile';

import CustomDivider from '../../components/divider/divider';

const ProfileScreen = () => {
  interface ListTileProps {
    key: string;
    tileName: string;
    iconName: string;
  }

  const tilesData1: ListTileProps[] = [
    {tileName: 'Personal Information', iconName: 'info', key: '1'},
    {
      tileName: 'Medical Information',
      iconName: 'medical-information',
      key: '2',
    },
    {tileName: 'Saved Addresses', iconName: 'place', key: '3'},
  ];
  const tilesData2: ListTileProps[] = [
    {
      tileName: 'Frequently Asked Questions',
      iconName: 'contact-support',
      key: '4',
    },
    {tileName: 'Report a Fraud', iconName: 'report', key: '5'},
    {tileName: 'Privacy Policy', iconName: 'policy', key: '6'},
    {tileName: 'Terms of Use', iconName: 'description', key: '7'},
    {tileName: 'Contact Us', iconName: 'call', key: '8'},
  ];

  return (
    <View>
      <>
        <MyHeader title="My Account" />
        <View style={styles.container}>
          <View style={{backgroundColor: '#37BD6B'}}>
            <Text style={styles.text}>Complete your Profile</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.columnContainer}>
                <CircularProgress
                  value={22}
                  radius={35}
                  maxValue={100}
                  inActiveStrokeColor={'#fff'}
                  inActiveStrokeOpacity={1}
                  activeStrokeColor={'#FF7171'}
                  progressValueColor={'#FF7171'}
                  rotation={0}
                  valueSuffix={'%'}
                />
                <Text style={styles.columnText}>Completed</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#434343', fontSize: 14}}>
                  Tell us what your occupations is
                </Text>
                <Text style={{color: '#37BD6B', fontSize: 18}}>
                  +{' '}
                  <Text style={{textDecorationLine: 'underline'}}>
                    Add Occupation
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: 300, paddingBottom: 5}}>
            <FlatList
              data={tilesData1}
              renderItem={({item}) => (
                <ProfileListTile
                  key={item.key}
                  tileName={item.tileName}
                  iconName={item.iconName}
                />
              )}
            />
          </View>

          <CustomDivider thickness={0.7} colour={'#B3B3B3'} />
          <View style={{width: 300, paddingBottom: 5}}>
            <FlatList
              data={tilesData2}
              renderItem={({item}) => (
                <ProfileListTile
                  key={item.key}
                  tileName={item.tileName}
                  iconName={item.iconName}
                />
              )}
            />
          </View>
        </View>
      </>
    </View>
  );
};

export default ProfileScreen;
