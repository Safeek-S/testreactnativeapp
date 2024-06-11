import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomColor: '#B3B3B3',
    borderBottomWidth: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  headerTitle: {
    lineHeight: 25,
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 9,
    color: '#000000',
    fontSize: 23,
  },
  container: {
    height: 200,
    width: 400,
    backgroundColor: '#EDF9F2',
    // flex: 1, // Makes the container take up all available space
    flexDirection: 'column', // Arranges children vertically
    alignItems: 'center', // Horizontally center the children
  },
  text: {
    color: '#FFFFFF',
    fontSize: 10,
    marginTop: 8,
    marginLeft: 11,
    marginBottom: 8, // Add some margin for spacing
  },
  columnContainer: {
    flexDirection: 'column', // Arranges children horizontally
    alignItems: 'center', // Distribute children evenly
  },
  columnText: {
    marginTop: 5,

    fontSize: 12,
  },
});

export default styles;
