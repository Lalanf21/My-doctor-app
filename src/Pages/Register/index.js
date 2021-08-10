import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Header, Input} from '../../components';
import {colors} from '../../utils/';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Input title="Full name" />
        <Input title="Pekerjaan" />
        <Input title="Email" />
        <Input title="Password" />
        <Button title="Register" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
