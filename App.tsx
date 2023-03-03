import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const Post = styled.View`
  padding: 15px;
  background-color: black;
  height: 100px;
  width:  100px;
  border-radius: 10px;
`

export default function App() {
  return (
    <Post />
  );
}

