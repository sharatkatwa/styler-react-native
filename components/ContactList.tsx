import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Sharat Katwa',
      status: 'A Tech and Opensource enthusiast',
      imageUrl: 'https://avatars.githubusercontent.com/u/60929610?v=4',
    },
    {
      uid: 2,
      name: 'Kartik Khode',
      status: 'Enthusiastic Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/118898604?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(
          ({uid, name, status, imageUrl}): JSX.Element => (
            <View key={uid} style={styles.userCard}>
              <Image source={{uri: imageUrl}} style={styles.userImage} />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          ),
        )}
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
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#18122B',
    padding: 8,
    marginBottom: 6,
    borderRadius: 8,
    elevation: 4,
    shadowOpacity: 0.6,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  userStatus: {
    color: '#fff',
  },
});
