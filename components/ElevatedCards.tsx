import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>hey</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Text>these</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>cards</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Text>are</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>scrollable</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  container: {
    // flex: 1,
    // flexDirection: 'row',
  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 200,
    marginHorizontal: 8,
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  cardOne: {
    backgroundColor: '#060047',
  },
  cardTwo: {
    backgroundColor: '#FF5F9E',
  },
});
