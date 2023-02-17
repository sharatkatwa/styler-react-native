import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.cards, styles.cardEvaluation]}>
        <Image
          source={require('./imgs/example.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Middle of Nowhere</Text>
          <Text style={styles.cardLable}>UK, london</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            amet suscipit fuga commodi Lorem facere veritatis perspiciatis.
          </Text>
          <Text style={styles.cardFooter}>4hour 50min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  cards: {
    marginHorizontal: 8,
    borderRadius: 8,
    width: 340,
    height: 360,
  },
  cardEvaluation: {
    backgroundColor: '#fff',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    flex: 1,
    alignSelf: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: 340,
    height: 180,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    marginHorizontal: 8,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,

    color: '#060047',
  },
  cardLable: {
    fontSize: 16,
    color: '#060047',
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 15,

    color: '#18191A',
  },
  cardFooter: {
    flex: 1,
    alignSelf: 'flex-end',
    color: '#060047',
    marginTop: 28,
  },
});
