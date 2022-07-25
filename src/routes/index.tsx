import react,{useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AppRoutes } from './app.routes'
import { AppLoading } from '../components/AppLoading';
import { Signin } from '../screens/Signin';

export function Routes() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  //const [user, setUser] = useState<FirebaseAuthTypes.UserCredential | null>(null);

  useEffect(() => {
/*     const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return subscriber; */
  }, []);

  if (loading) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      {/* {user?<AppRoutes	/>:<Signin/>} */}
      <AppRoutes />
    </NavigationContainer>
  )

}