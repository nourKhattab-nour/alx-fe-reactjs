//Task One
// import Header from './components/Header';
// import UserProfile from './components/UserProfile';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       minHeight: '100vh'
//     }}>
//       <Header />
//       <div style={{ padding: '20px' }}>
//         <UserProfile 
//           name="Alice" 
//           age={25} 
//           bio="Loves hiking and photography" 
//         />
//         <MainContent />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


//Task Two
// import Counter from './components/Counter';

// function App() {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       padding: '20px',
//       backgroundColor: '#f0f2f5'
//     }}>
//       <Counter />
//     </div>
//   );
// }

// export default App;


//Task Three
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;