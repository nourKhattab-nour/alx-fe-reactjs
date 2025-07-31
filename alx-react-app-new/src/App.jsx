import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Footer from './components/Footer';

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
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;