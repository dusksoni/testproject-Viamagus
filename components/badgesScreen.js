// badgesScreen.js

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    title: 'First Stripe Earned',
    multiple: 3,
    description: 'Top 10% of highest spending players in a month',
    imageUrl: require('../assets/image/listImage.png'),
},
{
    id: '2',
    title: 'Badge 2',
    multiple: null,
    description: 'Description for Badge 2',
    imageUrl: require('../assets/image/listImage.png'),
  },
{
    id: '2',
    title: 'Badge 2',
    multiple: null,
    description: 'Description for Badge 2',
    imageUrl: require('../assets/image/listImage.png'),
  },
{
    id: '2',
    title: 'Born Winner',
    multiple: null,
    description: 'Top 10% of highest spending players in a month',
    imageUrl: require('../assets/image/listImage.png'),
  },
{
    id: '2',
    title: 'Trader of the Month',
    multiple: null,
    description: 'Won 7 under-over games in a row',
    imageUrl: require('../assets/image/listImage.png'),
  },
  // Add more items as needed
];

const BadgeItem = ({ item }) => {
  return (
    <View style={styles.badgeItemContainer}>
      <Image source={item.imageUrl} style={styles.badgeImage}/>
      <View style={styles.badgeTextContainer}>
        <View style={styles.titleView}>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.multiple}> {item.multiple !== null? `x ${item.multiple}`: ""}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const BadgesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BadgeItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3FA',
    padding: 16,
  },
  badgeItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 5
  },
  badgeImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 16,
  },
  badgeTextContainer: {
    flex: 1,
  },
  titleView: {
    flexDirection: "row",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: "#333333"
  },
  multiple: {
    fontSize: 14,
    fontWeight: '600',
    color: "#FFA600"
  },
  description: {
    fontSize: 14,
    color: '#727682',
    fontWeight: "500"
  },
});

export default BadgesScreen;
