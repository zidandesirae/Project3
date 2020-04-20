import React from 'react';
// import Login from './components/PageBuild/Login';
// import SignUp from './components/PageBuild/SignUp';
import Main from './components/PageBuild/Main';
// import Settings from "./components/PageBuild/Settings";
import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';

class App extends React.Component {
  public render () {
    return <ScheduleComponent> </ScheduleComponent>
  }
}

function App() {
  return (
    <Main />
  );
}

export default App;
