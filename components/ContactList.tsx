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
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
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
  container: {},
  userCard: {},
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  userName: {},
  userStatus: {},
});
