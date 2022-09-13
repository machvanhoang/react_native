import React, {useState}  from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, TextInput, CheckBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function GetStartedScreen({ navigation }) {
  const SIGN_IN = "SIGN_IN";
  const SIGN_UP = "SIGN_UP";
  const [page, setPage] = useState(SIGN_IN);
  const [isSelected, setSelection] = useState(false);
  const [username, onChangeUserName] = useState("");
  const [password, onChangePassword] = useState("");
  const [email, onChangeEmail] = useState("");
  const [sign_password, onChangeSignPassword] = useState("");
  const [retype_password, onChangeSignRetypePassword] = useState("");
  return (
    <>
      <SafeAreaView style={{ backgroundColor:"#ffe8ee" }}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle={'dark-content'}
          translucent={true}
        />
        <View style={{ height: "30%", display: "flex", alignItems:"center", justifyContent: "center" }}>
          <View style={
             { 
              display:"flex",
              justifyContent:"center",
              alignItems: "center",
              width: 170,
              height: 170,
              backgroundColor:"#ee9e95",
              borderRadius:170,
              borderColor: "#fff",
              borderStyle:"solid",
              borderWidth: 1
              }}>
            <Text style={{ color: "#fff", fontWeight:"bold",fontSize: 32 }}>Ko Stype</Text>
            <Text style={{ color: "#fff", textTransform:"uppercase",fontSize: 8, fontWeight:"bold", marginTop: 5 }}>Korean Beauty Cosmetic</Text>
          </View>
        </View>
        <View style={{ height: "70%", paddingTop: 10 }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: "70%", display: "flex", flexDirection:"row" }}>
                  <View style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity 
                      style={
                        style_started.button
                      }
                      disabled={ (page == SIGN_IN) ? true : false }
                      onPress={()=>{
                        setPage(SIGN_IN);
                     }}
                    >
                      <Text style={ style_started.text}>Sign in</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                     style={style_started.button} 
                     disabled={ (page == SIGN_UP) ? true : false }
                     onPress={()=>{
                        setPage(SIGN_UP);
                     }}
                    >
                      <Text style={ style_started.text}>Sign up</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            </View>
            { page == SIGN_IN &&
              <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                <View style={style_started.form}>
                  <View>
                    <TextInput
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderColor: "#363636",
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: 4
                      }}
                      onChangeText={onChangeUserName}
                      value={ username }
                      placeholder={'Username or Email'}
                    />
                  </View>
                  <View style={{ marginTop: 15 }}>
                    <TextInput
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderColor: "#363636",
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: 4
                      }}
                      value={ password }
                      secureTextEntry={true}
                      onChangeText={onChangePassword}
                      placeholder={'Password'}
                    />
                  </View>
                  <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 15 }}>
                    <View>
                      <Text style={{ fontWeight: "bold", color:"#333", fontSize: 14 }}>Sign in with</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection:"row" , alignItems: "center", justifyContent: "center", marginTop: 10}}>
                        <View style={style_started.social}>
                          <TouchableOpacity style={style_started.social_button}>
                            <Text>FB</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={style_started.social}>
                          <TouchableOpacity style={style_started.social_button}>
                            <Text>TW</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={style_started.social}>
                          <TouchableOpacity style={style_started.social_button}>
                            <Text>GG</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                      <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity>
                          <Text style={{ fontSize: 10 }}>Forgot your password</Text>
                        </TouchableOpacity>
                      </View>
                </View>
                <View style={{ marginTop: 10, display: "flex", alignItems: "center" , justifyContent: "center" }}>
                    <View style={{ width: "70%" }}>
                      <TouchableOpacity style={
                        {
                          borderRadius:5,
                          paddingLeft: 75,
                          paddingRight: 75,
                          backgroundColor: "#ee9e95",
                          paddingTop: 8,
                          paddingBottom: 8,
                          width: "100%"
                        }
                      }>
                        <Text style={
                          {
                            color: "#fff", 
                            fontWeight: "bold",
                            fontSize: 16
                          }
                        }>
                          Submit
                        </Text>
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
            }
            { page == SIGN_UP &&
              <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
              <View style={style_started.form}>
                <View>
                  <TextInput
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderColor: "#363636",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderRadius: 4
                    }}
                    value={ email }
                    onChangeText={onChangeEmail}
                    placeholder={'Email'}
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <TextInput
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderColor: "#363636",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderRadius: 4
                    }}
                    secureTextEntry={true}
                    value={ sign_password }
                    onChangeText={onChangeSignPassword}
                    placeholder={'Password'}
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <TextInput
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderColor: "#363636",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderRadius: 4
                    }}
                    secureTextEntry={true}
                    value={ retype_password }
                    onChangeText={onChangeSignRetypePassword}
                    placeholder={'Retype password'}
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  {/* <Text style={{ fontSize: 11, fontWeight: "normal", color: "#333333" }}>I have read infomation.</Text> */}
                  <View style={styles.checkboxContainer}>
                    <Text style={{ fontSize: 11, fontWeight: "normal", color: "#333333" }}>Do you like React Native?</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 10, display: "flex", alignItems: "center" , justifyContent: "center" }}>
                  <View style={{ width: "70%" }}>
                    <TouchableOpacity style={
                      {
                        borderRadius:5,
                        paddingLeft: 75,
                        paddingRight: 75,
                        backgroundColor: "#ee9e95",
                        paddingTop: 8,
                        paddingBottom: 8,
                        width: "100%"
                      }
                    }>
                      <Text style={
                        {
                          color: "#fff", 
                          fontWeight: "bold",
                          fontSize: 16
                        }
                      }>
                        Create Account
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
            }
        </View>
      </SafeAreaView>
    </>
  );
}
const style_started = StyleSheet.create({
  button:{
    backgroundColor: "#ee9e95",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 5
  },
  text:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  form:{
    backgroundColor: "#fff",
    width: "70%",
    borderRadius: 25,
    padding:30
  },
  social:{
    paddingLeft:5,
    paddingRight:5
  },
  social_button:{
    backgroundColor: "#fee9ee",
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25
  }
});
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex1}>
        <View style={styles.ec_clip}>
          <View>
            <Text style={styles.title}>Ko Stype</Text>
          </View>
          <View>
            <Text style={styles.sub}>Korean Beauty Cosmetic</Text>
          </View>
        </View>
      </View>
      <View style={styles.flex2}>
        <View style={styles.flex_button}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              navigation.navigate('GetStarted')
            }}>
            <Text style={styles.text_button}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ title: 'Home Page' }} component={HomeScreen} />
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  flex1: {
    width: "100%",
    height: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%"
  },
  flex2: {
    width: "100%",
    height: "25%"
  },
  flex3: {
    backgroundColor: "green",
    width: "100%",
    height: "25%"
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold"
  },
  sub: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#fff",
    marginTop: 10
  },
  ec_clip: {
    height: 250,
    width: 250,
    backgroundColor: "#ee9e95",
    borderRadius: 255,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  flex_button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#ee9e95",
    paddingTop: 13,
    paddingBottom: 13,
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: 3,
    shadowOpacity: 3,
    shadowRadius: 10
  },
  text_button: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  }
});
export default App;