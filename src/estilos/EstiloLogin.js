import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
  },

  lingua: {
    color: '#c4c4c4',
    fontSize: '15px',
    marginTop: '5px',
  },

  margemSeta: {
    textAlignVertical: 'center',
  },

  logo: {
    width: '220px',
    height: '80px',
    marginTop: Platform.OS === 'android' ? '13%' : '15%',
    marginBottom: Platform.OS === 'android' ? '10%' : '10%',
  },

  titulo: {
    width: '100px',
    height: '100px',
    flexDirection: 'row',
    resizeMode: 'center',
    marginBottom: '-10%',
    marginTop: '-5%',
  },

  input: {
    width: '90%',
    height: '40px',
    backgroundColor: '#F4F3F3',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    borderWidth: '1px',
    borderColor: '#E0E0E0',
    flexDirection: 'row'
  },

  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },

  forgotText: {
    color: '#399fff',
  },

  loginbutton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 15,
  },

  loginText: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
  },
});
