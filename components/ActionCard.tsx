import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.cards, styles.cardEvaluation]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Relational vs Non-Relational Database
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1675063971510/51fccb5c-da9f-4403-9b93-0034f69730ac.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Let’s start simple. What is a database? A database is a set of data
            held in a computer that can be accessible in various manners. There
            are two main database types: Relational & Non-Relational. So, what’s
            the difference?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://simple-express.hashnode.dev/relational-vs-non-relational-database',
              )
            }>
            <Text>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://twitter.com/kartikkhode21')}>
            <Text>Follow Me</Text>
          </TouchableOpacity>
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
    flex: 1,
    marginHorizontal: 8,
  },
  cardEvaluation: {},
  headingContainer: {},
  headerText: {},
  bodyContainer: {},
  bodyText: {},
  cardImage: {
    flex: 1,
    alignSelf: 'center',
    height: 200,
    width: 350,
  },
  footerContainer: {},
});
