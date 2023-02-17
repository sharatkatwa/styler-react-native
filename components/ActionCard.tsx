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
      <Text style={styles.headingText}>Blog Card</Text>
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
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://twitter.com/kartikkhode21')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
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
    alignContent: 'center',
    marginHorizontal: 8,
    width: 340,
    height: 345,
    borderRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  cardEvaluation: {
    backgroundColor: '#18122B',
    elevation: 4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  bodyContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  bodyText: {
    color: '#fff',
  },
  cardImage: {
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
    borderRadius: 5,
    alignSelf: 'center',
    height: 180,
    width: 320,
  },

  gradient: {},

  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#18191A',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
    elevation: 2,
  },
});
