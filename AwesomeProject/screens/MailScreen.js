import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

export default function MailScreen() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = async () => {
    let options = {
      recipients: [to],
      subject: subject,
      body: body,
    };
    await MailComposer.composeAsync(options);
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envoyer un e-mail</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTo(text)}
          value={to}
          placeholder="Destinataire"
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSubject(text)}
          value={subject}
          placeholder="Objet"
        />
      </View>
      <TextInput
        style={styles.bodyInput}
        onChangeText={(text) => setBody(text)}
        value={body}
        placeholder="Corps de l'e-mail"
        multiline={true}
        numberOfLines={5}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  bodyInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
