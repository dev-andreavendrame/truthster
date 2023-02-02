// Graphic imports
import { useState, useEffect } from 'react';
import { Box, AppBar, Typography, Button } from '@mui/material';
import './App.css';

// Logic imports
import { INSERT_INTERVIEW_DATA, GET_ALL_DATA, REMOVE_INTERVIEW_DATA } from './components/API/APIs';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://158.110.146.227:9000',
});


function App() {

  // React
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
  });

  const insertTestEntry = () => {
    api.post(INSERT_INTERVIEW_DATA, {
      user_id: "The identifier",
      date: "the project creation date",
      media: [{
        type: "media type",
        path: "position of the media file",
        sig_hash: "the user signature of the hash of the media file"
      }],
      permision: "project's permissions",
      interviewee_id: "The interviewee identifier",
      gps: "interviewee position"
    },)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const getAllData = () => {
    api.get(GET_ALL_DATA)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const deleteInterviewData = () => {
    const userId = "The identifier";
    const mediaHash = "the user signature of the hash of the media file";
    api.get(REMOVE_INTERVIEW_DATA, {
      user_id: userId,
      media: [{
        type: "media type",
        path: "position of the media file",
        sig_hash: "the user signature of the hash of the media file"
      }],
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <AppBar position="static" sx={{ height: 130, backgroundColor: "#282c34", boxShadow: 24 }}>

      <Box display="inline-flex" alignItems="center" justifyContent="space-between" sx={{ height: 100, mt: 3 }} >
        <Box display='inline-flex' sx={{ ml: 4, alignItems: "center" }}>
          <Box >
            <Typography sx={{ ml: 2, fontWeight: 'bold', fontSize: 'clamp(26px, 4vw, 40px)', textAlign: 'left' }} variant='h4' >
              Truthster
            </Typography>
            <Typography sx={{ ml: 2, mb: 3, fontWeight: 'normal', fontSize: 'clamp(18px, 4vw, 30px)', textAlign: 'left' }} variant='h5'>
              Client UI
            </Typography>
          </Box>
        </Box>
        <Box sx={{ minWidth: 50 }} />
        <Box display="inline-flex" gap={3} sx={{ mr: 5, mb: 2, alignItems: "center", justifyContent: "flex-end", minHeight: 10 }}>
          <Button onClick={insertTestEntry} className='blueGradientButton blueGradientButton--navigation' variant='contained' size='large' sx={{ width: 200, maxHeight: 100, borderRadius: 10 }}>
            insert test entry
          </Button>
          <Button onClick={getAllData} className='blueGradientButton blueGradientButton--navigation' variant='contained' size='large' sx={{ width: 200, maxHeight: 100, borderRadius: 10 }}>
            Load
            <br />
            all data
          </Button>
          <Button onClick={deleteInterviewData} className='blueGradientButton blueGradientButton--navigation' variant='contained' size='large' sx={{ width: 200, maxHeight: 100, borderRadius: 10 }}>
            Remove
            <br />
            interview
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}

export default App;
