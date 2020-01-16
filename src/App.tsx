import React, { useEffect } from 'react';
import * as authAPI from './lib/api/auth';
import './App.css';

const App: React.FC = () => {
  const onClickFacebook = async () => {
    try {
      const { data } = await authAPI.social('facebook');
      console.log('data', data);
      window.location.href = data;
      console.log('data', data);
    } catch (err) {
      console.log('err', err);
    }
  };
  const onClickGoogle = async () => {
    try {
      const { data } = await authAPI.social('google');
      window.location.href = data;
    } catch (err) {
      console.log('err', err);
    }
  };

  const ping = async () => {
    try {
      const { data } = await authAPI.ping();
      console.log(data);
    } catch (err) {
      console.log('err', err);
    }
  };
  useEffect(() => {
    ping();
  }, []);
  return (
    <div className="App">
      <div>
        <button className="facebook" type="button" onClick={onClickFacebook}>
          facebook
        </button>
      </div>
      <div>
        <button className="google" type="button" onClick={onClickGoogle}>
          google
        </button>
      </div>
    </div>
  );
};
export default App;
