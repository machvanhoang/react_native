import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
class LoginComponents extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.loginPage}>
                <View style={[styles.loginPage, styles.wrapper]}>
                    <View >
                        <View style={styles.width}>
                            <Text>
                                Tài khoản
                            </Text>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    value="admin"
                                    placeholder="example"
                                />
                            </View>
                        </View>
                        <View style={styles.width}>
                            <Text>
                                Mật khẩu
                            </Text>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    value="admin123"
                                    placeholder="******"
                                />
                            </View>
                        </View>
                        <View style={styles.width}>
                            <Pressable style={styles.black} onPress={() => (Alert.alert('Hellow world'))}>
                                <Text style={styles.color_white}>Đăng nhập</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    loginPage: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10%',
        width: '100%',
        boxSizing: 'border-box',
    },
    wrapper: {
        backgroundColor: '#fff',
        padding: '10%',
        width: '90%'
    },
    input: {
        height: 40,
        paddingLeft: 10,
        margin: 12,
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 1,
        padding: 10,
        minWidth: 240,
        borderRadius: 3
    },
    width: {
        width: '100%'
    },
    black: {
        backgroundColor: '#000',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        cursor: 'pointer',
        boxSizing: 'border-box',
    },
    color_white: {
        color: '#fff',
        minWidth: 240,
        textAlign: 'center',
    }
});
export default LoginComponents;