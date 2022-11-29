//import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSecureLocalStorage = (key, value) => {
    //return SecureStore.setItemAsync(key, value);
    return AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getSecureLocalStorage = (key) => {
    //return SecureStore.getItemAsync(key);
    // With Async you'l need to JSON parse returned data
    return AsyncStorage.getItem(key);
};