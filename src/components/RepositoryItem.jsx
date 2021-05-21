import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#ddd',
    fontSize: 30,
    color: theme.colors.textPrimary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  repoTitle: {
    marginTop: 10,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  repoDescription: {
    margin: 8,
    color: theme.colors.textSecondary
  },
  repoLanguage: {
    padding: 5,
    marginTop: 5,
    marginLeft: 8,
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  repoStatistic: {
    margin: 10,
    padding: 5,
    flexDirection: 'column'
  },
  repoStatNumber: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.logo} source={{ uri: repo.ownerAvatarUrl }} />
        <View>
          <Text style={styles.repoTitle}>{repo.fullName}</Text>
          <Text style={styles.repoDescription}>{repo.description}</Text>
          <Text style={styles.repoLanguage}>{repo.language.trim()}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={styles.repoStatistic}>
          <Text style={styles.repoStatNumber}>{repo.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.repoStatistic}>
          <Text style={styles.repoStatNumber}>{repo.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.repoStatistic}>
          <Text style={styles.repoStatNumber}>{repo.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.repoStatistic}>
          <Text style={styles.repoStatNumber}>{repo.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>

  );
};

export default RepositoryItem;