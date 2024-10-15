import { ApplicationProvider } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';


const App = () => {
  return (
    <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation/>
        </ApplicationProvider>
    </Provider> 
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
