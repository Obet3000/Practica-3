import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  ToastAndroid,
  View,
  Button,
  Alert,
} from 'react-native';

const Formulario = () => {
  const [Heigth, setHeigth] = useState('');
  const [Weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [BMI, setBMI] = useState(0);

  const calculateBMI = () => {
    const text = 'Your BMI is:';
    const h = Number(Heigth) / 100;
    const w = Number(Weight);
    const ans = w / (h * h);
    setBMI(ans);
    setMessage(`${text} ${ans.toFixed(1)}`);
  };

  const validateInputs = () => {
    setMessage('');
    setBMI(0);
    const ok =
      Heigth.length &&
      Weight.length &&
      !Heigth.includes(' ') &&
      !Weight.includes(' ') &&
      !isNaN(Heigth) &&
      !isNaN(Weight);
    return Number(Heigth) > 0 && ok;
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.sentenses}>Heigth {'(cm)'}</Text>
        <TextInput
          value={Heigth}
          placeholder="Type your Heigth"
          style={styles.input}
          onChangeText={setHeigth}
          keyboardType="phone-pad"
          type="outlined"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sentenses}>Weight {'(KG)'}</Text>
        <TextInput
          value={Weight}
          placeholder="Type your Weigth"
          style={styles.input}
          onChangeText={setWeight}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.message}>{message}</Text>
        <Button
          title="Calculate BMI"
          color=""
          onPress={() => {
            if (validateInputs()) {
              calculateBMI();
            } else {
              Alert.alert(
                'Only Numbers are admited and heigth must be grater than 0',
              );
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 10,
  },
  formContainer: {
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  sentenses: {
    color: '#808080',
    marginVertical: 10,
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    marginVertical: 10,
    color: '#000000',
    backgroundColor: '#E5E5EA',
  },
  message: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 20,
    color: '#808080',
    fontWeight: '400',
  },
});

export default Formulario;
