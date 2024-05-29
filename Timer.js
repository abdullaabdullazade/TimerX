import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    var interval;
    if (running) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const startPause = () => {
    setRunning(!running);
  };

  const resetTimer = () => {
    setTime(0);
    setRunning(false);
  };

  const displayTime = (secs) => {
    const getSecs = `0${secs % 60}`.slice(-2);
    const mins = Math.floor(secs / 60);
    const getMins = `0${mins % 60}`.slice(-2);
    const getHrs = `0${Math.floor(mins / 60)}`.slice(-2);
    return `${getHrs}:${getMins}:${getSecs}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.timerText}>{displayTime(time)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={startPause}>
            <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetTimer}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  timerText: {
    fontSize: 48,
    color: 'yellow',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
  },
  button: {
    backgroundColor: 'coral',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
