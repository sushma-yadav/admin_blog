import './assets/css/style.css';
import Header from './components/common/header/Header';
import Router from './components/common/Router';
import Sidebar from './components/common/sidebar/Sidebar';

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className='dashboard_sidebar'>
        <Header />
        <Router />
      </div>
    </div>
  );
}

export default App;
