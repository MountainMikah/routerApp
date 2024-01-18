//page 1
import React from 'react';
import { Pressable, Text, TextInput, View } from "react-native";
import { Link } from 'expo-router';
import Styles from '../styles/page-style';

export default function Page() {
    const [food, onChangeFood] = React.useState("");
  return (
    <View style={Styles.page}>
          <Text>This is the App Directory.</Text>
          <Text>This is the first page located here</Text>
          <TextInput style={Styles.input} onChangeText={onChangeFood} value={food} placeholder={"Choose your favourite food"} />
          <Link style={Styles.button} href={{ pathname: "/page2", params: { food } }} asChild ><Pressable ><Text> Submit to page 2</Text></Pressable></Link>
      </View>
  );
}

