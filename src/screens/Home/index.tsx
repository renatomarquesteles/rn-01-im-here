import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState([
    'John',
    'Steve',
    'Carl',
    'Renato',
    'Jack',
    'Andrew',
    'Jane',
    'Lucy',
    'Smith',
    'Philipp',
    'Joseph',
    'Ronald',
    'William',
    'David',
  ]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Duplicated participant',
        'There is already a participant with this name on the list.'
      );
    }

    setParticipants((state) => [...state, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      `Removing ${name}`,
      'Are you sure you want to remove this participant?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            setParticipants((state) =>
              state.filter((participant) => participant !== name)
            );
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>Tuesday, January 4, 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            No one has arrived yet? Add participants to the list.
          </Text>
        )}
      />
    </View>
  );
}
