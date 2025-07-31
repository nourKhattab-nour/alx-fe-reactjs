import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App" style={{ 
      minHeight: '100vh',
      position: 'relative',
      paddingBottom: '60px' // Footer height
    }}>
      <Header />
      <div style={{ padding: '20px' }}>
        <UserProfile 
          name="Alice" 
          age={25} 
          bio="Loves hiking and photography" 
        />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;