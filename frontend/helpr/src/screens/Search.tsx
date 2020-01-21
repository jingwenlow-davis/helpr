import React, { useState, useEffect } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
// import {url} from '../App.js';

import { Card, Container, Text, Posting } from '../components';



async function makeRemoteRequest(setLoading, setData) {
  const userToken = await AsyncStorage.getItem('userToken');

  fetch(url + '/api/posts/getfeed/', {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      Authorization: 'Token ' + userToken,
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    setLoading(false);
    setData(responseJson);
  })
  .catch(error => {
    console.error(error);
  }); 
}

export default function SerachScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setData([{id: 0, title: 'Best Plumber Ever'}, {id: 1, title: 'Worst Plumber Ever'}]);
    setLoading(false);
  });

  // if (loading) {
  //   return (
  //     <Container>
  //       <ActivityIndicator />
  //     </Container>
  //   );
  // }

  return (
    <Container backgroundColor={'lightgrey'}>
      <FlatList
        data={data}
        renderItem={({item}) => 
          <Posting
            title={item.title}
          // avatarUri={url + item.image}
          />
        }
        keyExtractor={item => item.id}
      />
      
    </Container>
  );
}
