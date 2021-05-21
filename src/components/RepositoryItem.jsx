import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({repo}) => {
    return (
      <View>
        <Text>{repo.fullName}</Text>
        <Text>{repo.description}</Text>
        <Text>{repo.language}</Text>
        <Text>Forks: {repo.forksCount}</Text>
        <Text>Stars: {repo.stargazersCount}</Text>
        <Text>Reviews: {repo.reviewCount}</Text>
        <Text>Rating: {repo.ratingAverage}</Text>
      </View>   
    );
  };
  
  export default RepositoryItem;