//page 2
import { Pressable, Text, View } from "react-native";
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-style';

export default function Page() {
    const params = useLocalSearchParams();
    const { food } = params;
    return (
        <View style={Styles.page}>
            <Text>This is the second page, cool</Text>
            <Text> Your favourite thing to eat is {food}!</Text>
            <Link style={Styles.button} href="/" asChild><Pressable><Text>Home Page 1</Text></Pressable></Link>
        </View>
    );
}

