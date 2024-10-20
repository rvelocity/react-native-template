import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected!);
    });

    return () => unsubscribe();
  }, []);

  return isOnline;
};

export default useOnlineStatus;
