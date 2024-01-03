import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = [
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
  ];

  function handleParticipantAdd() {
    console.log('button clicked!');
  }

  function handleParticipantRemove(name: string) {
    console.log(`${name} removed!`);
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
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
