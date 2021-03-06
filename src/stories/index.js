import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.css'

import theme from '../styled.theme'
import {ThemeProvider} from 'styled-components'

import Logo from '../components/Logo'
import Form from '../components/Form'
import Text from '../components/Text'
import Button from '../components/Button'


import Header from '../components/Header'
import SubmitNumber from '../components/SubmitNumber';
import Message from '../components/Message';


storiesOf('Components', module)
  .add('Logo', () => (
    <ThemeProvider theme={theme}>
      <Logo/>
    </ThemeProvider>
  ))
  .add('Large Text', () => (
    <ThemeProvider theme={theme}>
      <Text large='true'>
      Find interesting things about your favorite number
      </Text>
    </ThemeProvider>
  ))
  .add('Text', () => (
    <ThemeProvider theme={theme}>
      <Text>
      Find interesting things about your favorite number
      </Text>
    </ThemeProvider>
  ))
  .add('Default Button', () => (
    <ThemeProvider theme={theme}>
      <Button>
        Trivia
      </Button>
    </ThemeProvider>
  ))
  .add('Selected Button', () => (
    <ThemeProvider theme={theme}>
      <Button selected>
        Trivia
      </Button>
    </ThemeProvider>
  ))
  .add('Form', () => (
    <ThemeProvider theme={theme}>
      <Form/>
    </ThemeProvider>
  ))
storiesOf('User Interface', module)
  .add('Header', () => (
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
  ))
  .add('Submit Number', () => (
    <ThemeProvider theme={theme}>
      <SubmitNumber/>
    </ThemeProvider>
  ))
  .add('Message', () => (
    <ThemeProvider theme={theme}>
      <Message>
        Hola Soy Santiago, soy desarrollador frontend y me gusta programar.
      </Message>
    </ThemeProvider>
  ))