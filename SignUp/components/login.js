import React,{useState}  from "react";
import { Button, Text, View , ScrollView ,TextInput,StyleSheet} from "react-native";

export default function Login(){
const [email,setEmail] = useState("");
const [passaword,setPassword] = useState("");
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>login </Text>

            <View style={styles.form}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                style={styles.inputField}
                placeholder="Enter your email"
                keyboardType="default"
                value="email"
                onChangeText={(val)=>setEmail}
                ></TextInput>
            </View>
            <View style={styles.divider}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                style={styles.inputField}
                placeholder="Enter your Password"
                secureTextEntry
                keyboardType="numeric"
                value="password"
                onChangeText={(val)=>setPassword}
                ></TextInput>
            </View>
            <Button title="Login" />

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 60,
        paddingHorizontal: 30,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },
    form: {
        marginVertical: 35,
    },
    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },

    divider: {
        paddingVertical: 12,
    },

    log: {
        textAlign: "center",
        marginVertical: 2,
    },

    signup: {
        marginTop: 40,
    }
    ,
    buttoncontainer: {
        backgroundColor: '#2B35E0',
        borderRadius: 8,
        padding: 10,
    },

    buttontext: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    },
});