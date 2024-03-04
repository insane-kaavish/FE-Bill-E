import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useAuth } from './AuthProvider';

const CreateAccount = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [keNumber, setKeNumber] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    keNumber: false,
  });
  const { signup } = useAuth();
  const [error, setError] = useState('');

  const handleFocus = (field) => {
    setIsTyping(true);
    if (!touchedFields[field]) {
      setTouchedFields((prevState) => ({ ...prevState, [field]: true }));
    }
  };

  const handleChange = () => {
    setIsTyping(true);
  };

  const handleBlur = (field) => {
    if (field !== '' && !isTyping) {
      setTouchedFields((prevState) => ({ ...prevState, [field]: true }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    // Validate email only if it has been touched or if it has some text and is not in focus
    if ((touchedFields.email || email !== '') && !validateEmail(email)) {
      setError('Invalid email address');
      setLoading(false);
      return;
    }

    // Prepare the data to send
    if (name === '' || email === '' || password === '' || confirmPassword === '') return;
    if (!email.includes('@') || !email.includes('.com')) {
      setError('Invalid email address');
      setLoading(false);
      return;
    } else {
      setError('');
    }
    const data = {
      first_name: name,
      last_name: '',
      email: email,
      password: password,
      ke_num: keNumber,
    };

    // Make the API call
    const response = await signup(data);
    if (response.status !== 201) {
      const responseBody = await response.json();
      setError(responseBody.message); // Assuming the error message is in the `message` property
      setLoading(false);
      return;
    }
    console.log("successfully signed up");
    navigation.navigate('RoomData');
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, touchedFields.name && !isTyping && { borderColor: 'red' }]}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          onFocus={() => handleFocus('name')}
          onBlur={() => handleBlur('name')}
        />
      </View>

      <View style={[styles.inputContainer, touchedFields.email && !isTyping && { borderColor: 'red' }]}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            handleChange(); // Call handleChange to reset error when typing
          }}
          autoCapitalize='none'
          onFocus={() => handleFocus('email')}
          onBlur={() => handleBlur('email')}
        />
      </View>

      <View style={[styles.inputContainer, touchedFields.keNumber && !isTyping && { borderColor: 'red' }]}>
        <TextInput
          style={styles.input}
          placeholder="K-Electric Account Number"
          value={keNumber}
          onChangeText={(text) => setKeNumber(text)}
          onFocus={() => handleFocus('keNumber')}
          onBlur={() => handleBlur('keNumber')}
        />
      </View>

      <View style={[styles.inputContainer, touchedFields.password && !isTyping && { borderColor: 'red' }]}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
          onFocus={() => handleFocus('password')}
          onBlur={() => handleBlur('password')}
        />
      </View>

      {/* Confirm Password Field */}
      <View style={[styles.inputContainer, touchedFields.confirmPassword && !isTyping && { borderColor: 'red' }]}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          autoCapitalize='none'
          onChangeText={(text) => setConfirmPassword(text)}
          onFocus={() => handleFocus('confirmPassword')}
          onBlur={() => handleBlur('confirmPassword')}
        />
      </View>
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.footerTextHighlight}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    borderColor: '#ccc',
  },
  input: {
    height: 43,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#535CE8',
    borderRadius: 26,
    paddingVertical: 12,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171A1F',
    marginTop: 20,
  },
  footerTextHighlight: {
    color: '#535CE8',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default CreateAccount;
