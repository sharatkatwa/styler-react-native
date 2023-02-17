import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>pink</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>dark pink</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>darker pink</Text>
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
    backgroundColor: '#393053',
  },
  cardTwo: {
    backgroundColor: '#393053',
  },
  cardThree: {
    backgroundColor: '#393053',
  },
  cardText: {
    color: '#fff',
  },
});

export default FlatCards;
