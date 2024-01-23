import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',

    },
    input: {
        width: '80%',
        flex: .08,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        margin: 15,
    },
    button: {
        backgroundColor: 'lightgreen',
        borderRadius: 30,
        padding: 20,
        margin: 10,
    },
    title: {
        padding:20,
        fontSize:20,
    },
    story: {
        fontSize: 16,
        paddingTop:15,
    },
    signBox: {
        borderWidth: 3,
        borderStyle: 'solid',
        width: 250,
        height: 90,
    },
    label: {
        alignContent:'left',
    },
});
export default styles;