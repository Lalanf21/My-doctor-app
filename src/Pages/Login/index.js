import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';

export default function Login() {
  return (
    <View style={styles.wrapper}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai konsultasi</Text>
      <Input title="Email address" />
      <Gap height={24} />
      <Input title="Pasword" />
      <Gap height={10} />
      <Link title="Forgot password" size={12} />
      <Gap height={40} />
      <Button title="Login" />
      <Gap height={30} />
      <Link title="Create New Account" size={18} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 42,
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginVertical: 40,
    maxWidth: 153,
  },
});
