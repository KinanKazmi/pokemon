import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();

export const localSet = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
};

export const localGet = (key: string): any => {
  const gotItem = storage.getString(key);
  if (gotItem) {
    return JSON.parse(gotItem);
  }
};


