import React from 'react';
import { LoginView } from './modules'

const App = () => (
  <div style={styles.container}>
    <LoginView />
  </div>
);

const styles = {
  container: {
    fontFamily: 'Roboto',
  }
}
export default App;