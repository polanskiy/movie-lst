import * as React from 'react';
import logo from '@/images/wp.png';

export interface AppProps {
  kek: string;
}

const App: React.FC<AppProps> = () => {
  const kek = async () => Promise.resolve('async working');
  React.useEffect(() => {
    kek().then(console.log);
  }, []);

  return (
    <div className="app">
      test123
      <img src={logo} alt="" />
      <div className="logo" />
    </div>
  );
};

export default App;
