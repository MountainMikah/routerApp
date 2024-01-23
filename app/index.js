//page 1
//TODO: Get Clear button working, having some rotating element on page 2
import React from 'react';
import { Pressable, Text, TextInput, View } from "react-native";
import { Link } from 'expo-router';
import Styles from '../styles/page-style';

export default function Page() {
    const [name, onChangeName] = React.useState("");
    const [adverb, onChangeAdverb] = React.useState("");
    const [job, onChangeJob] = React.useState("");
  return (
    <View style={Styles.page}>
          <Text style={Styles.title}>How To play Mad Libs</Text>
          <Text> Mad libs is played by filling in the below text boxes with a coresponding word type. and then the words are put into a fun story for you to read</Text>
          <TextInput style={Styles.input} onChangeText={onChangeName} value={name} placeholder={"Put a Name here"} />
          <TextInput style={Styles.input} onChangeText={onChangeAdverb} value={adverb} placeholder={"Put a Adverb/Action here"} />
          <TextInput style={Styles.input} onChangeText={onChangeJob} value={job} placeholder={"Put an occupation/Job here"} />
          <Link style={Styles.button} href={{ pathname: "/page2", params: { job, name, adverb } }} asChild ><Pressable ><Text> Submit to page 2</Text></Pressable></Link>
          <Pressable style={Styles.button} onPress={() => {  }}><Text>   Clear   </Text></Pressable>
      </View>
  );
}

