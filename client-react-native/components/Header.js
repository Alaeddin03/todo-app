import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>To Do</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        paddingTop: 38,
        backgroundColor: '#336140',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})