//page 2
import { Pressable, Text, View } from "react-native";
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-style';

export default function Page() {
    const params = useLocalSearchParams();
    const { name,adverb,job } = params;
    return (
        <View style={Styles.page}>
            <Text style={Styles.title}>This is the second page, look below to read your story!</Text>
            <Text>The Current Date is {new Date().toDateString()}</Text>
            <Text style={Styles.story}>On a day that was perfect for {adverb}
            {name} had to go to work as a {job}</Text>
            <Text style={Styles.story}>But as the day progressed and {name} got bored</Text>
            <Text style={Styles.story}>    they decided to go {adverb} anyways </Text>
            <View style={Styles.signBox}><Text style={Styles.label }>Signed</Text></View>
            <Link style={Styles.button} href="/" asChild><Pressable><Text>Home Page 1</Text></Pressable></Link>
        </View>
    );
}

