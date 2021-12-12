import React from 'react';
import {Modal, Pressable, StyleSheet, View, Text} from 'react-native';
import ButtonComponent from '../button';

const screen = props => {
  return (
    <Modal visible={props.visible} transparent={true} style={{height: 3}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000080',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'white',
            marginBottom: '10%',
            borderRadius: 22,
          }}>
          <Text style={styles.textContainer}>
            {'Error occure please try again'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
            }}>
            <ButtonComponent
              text="OK"
              componentStyle={{
                width: '60%',
                marginBottom: 20,
              }}
              onPress={props.onPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  textContainer: {
    fontSize: 15,
    padding: 10,
    paddingBottom: 30,
    marginTop: 40,
    fontFamily: 'Montserrat',
    color: '#4F6C8D',
    textAlign: 'center',
  },
});

export default screen;
