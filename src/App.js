import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Auth.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <h2> Biotex sample manufacturing process Video Streaming</h2>
      <video width="700px" height="400px" controls controlsList="nodownload">
        <source src="https://d2ew4cu4j3xyjz.cloudfront.net/Dr_Peter_Attia_Huberman_Lab_Podcast.mp4" type="video/mp4" />
      </video>
      <div className="sign-out-container">
        <button className="sign-out-button" onClick={() => Auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
