import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Review = () => {
  const ratingSummary = [
    { star: 5, percent: 75 },
    { star: 4, percent: 15 },
    { star: 3, percent: 5 },
    { star: 2, percent: 3 },
    { star: 1, percent: 2 },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Ethan Carter',
      time: '2 months ago',
      rating: 5,
      comment:
        'Excellent driver! Punctual, friendly, and the car was spotless. Made the journey very comfortable.',
      likes: 12,
      dislikes: 2,
      image: 'https://i.pravatar.cc/100?img=1',
    },
    {
      id: 2,
      name: 'Olivia Bennett',
      time: '3 months ago',
      rating: 3,
      comment:
        'Good driver, but the car could have been a bit cleaner. Overall, a decent experience.',
      likes: 5,
      dislikes: 1,
      image: 'https://i.pravatar.cc/100?img=2',
    },
    {
      id: 3,
      name: 'Noah Thompson',
      time: '4 months ago',
      rating: 5,
      comment:
        'Fantastic driver! Very professional and made sure I got to my destination safely and on time.',
      likes: 8,
      dislikes: 0,
      image: 'https://i.pravatar.cc/100?img=3',
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1fa000" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Reviews</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Segment Buttons */}
        <View style={styles.segmentContainer}>
          <TouchableOpacity style={styles.segmentActive}>
            <Text style={styles.segmentActiveText}>As Driver</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.segmentInactive}>
            <Text style={styles.segmentInactiveText}>As Passenger</Text>
          </TouchableOpacity>
        </View>

        {/* Rating Section */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingValue}>4.8</Text>

          <View style={styles.starRow}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" size={20} color="#1fa000" />
            ))}
          </View>

          <Text style={styles.reviewCount}>125 reviews</Text>

          {ratingSummary.map((item, i) => (
            <View key={i} style={styles.ratingRow}>
              <Text style={styles.ratingLabel}>{item.star}</Text>

              <View style={styles.ratingBarBackground}>
                <View style={[styles.ratingBarFill, { width: `${item.percent}%` }]} />
              </View>

              <Text style={styles.ratingPercent}>{item.percent}%</Text>
            </View>
          ))}
        </View>

        {/* Reviews List */}
        {reviews.map((item) => (
          <View style={styles.reviewCard} key={item.id}>
            <View style={styles.reviewHeader}>
              <Image source={{ uri: item.image }} style={styles.avatar} />

              <View>
                <Text style={styles.reviewerName}>{item.name}</Text>
                <Text style={styles.reviewTime}>{item.time}</Text>
              </View>
            </View>

            <View style={styles.starRow}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <Icon key={i} name="star" size={18} color="#1fa000" />
              ))}
            </View>

            <Text style={styles.reviewText}>{item.comment}</Text>

            <View style={styles.actionRow}>
              <View style={styles.actionBtn}>
                <Icon name="thumb-up-outline" size={18} color="#333" />
                <Text style={styles.actionCount}>{item.likes}</Text>
              </View>

              <View style={styles.actionBtn}>
                <Icon name="thumb-down-outline" size={18} color="#333" />
                <Text style={styles.actionCount}>{item.dislikes}</Text>
              </View>
            </View>
          </View>
        ))}

        <View style={{ height: 40 }} />

      </ScrollView>
    </SafeAreaView>
  );
};

export default Review;

const styles = StyleSheet.create({
  /* -------- SAFE AREA FIX -------- */
  safe: {
    flex: 1,
    backgroundColor: '#1fa000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 0,
  },

  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  /* Header */
  header: {
    backgroundColor: '#1fa000',
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },

  /* Segments */
  segmentContainer: {
    flexDirection: 'row',
    marginTop: -20,
    marginHorizontal: 16,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    padding: 4,
  },

  segmentActive: {
    flex: 1,
    backgroundColor: '#1fa000',
    paddingVertical: 10,
    borderRadius: 8,
  },

  segmentActiveText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },

  segmentInactive: {
    flex: 1,
    paddingVertical: 10,
  },

  segmentInactiveText: {
    textAlign: 'center',
    color: '#333',
  },

  ratingContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 16,
  },

  ratingValue: {
    fontSize: 40,
    fontWeight: '700',
  },

  starRow: {
    flexDirection: 'row',
    marginVertical: 6,
  },

  reviewCount: {
    fontSize: 14,
    marginBottom: 20,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  ratingLabel: {
    width: 20,
  },

  ratingBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 10,
  },

  ratingBarFill: {
    height: 6,
    backgroundColor: '#1fa000',
    borderRadius: 5,
  },

  ratingPercent: {
    width: 40,
    textAlign: 'right',
  },

  reviewCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  reviewHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
  },

  reviewTime: {
    fontSize: 12,
    color: '#888',
  },

  reviewText: {
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
    color: '#333',
  },

  actionRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },

  actionCount: {
    marginLeft: 4,
    fontSize: 14,
  },
});
