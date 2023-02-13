import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>pink</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>dark pink</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>darker pink</Text>
        </View>
        {/* <View style={[styles.card, styles.cardOne]}>
          <Text>pink</Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  card: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF5F9E',
  },
  cardTwo: {
    backgroundColor: '#E90064',
  },
  cardThree: {
    backgroundColor: '#B3005E',
  },
});

export default FlatCards;
