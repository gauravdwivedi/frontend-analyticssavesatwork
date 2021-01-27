import React from 'react';
import { useState } from 'react';
// import { axiosInstance } from '../axios-instance';
import axios from 'axios';

import './AddYoutubeVideo.css';

const AddYoutubeVideo = () => {
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  function onsubmit(e) {
    e.preventDefault();
    console.log(
      songName + ' ' + artistName + ' ' + youtubeLink + ' ' + thumbnail
    );

    const data = { songName, artistName, youtubeLink, thumbnail };

    axios.post('http://localhost:5000/api/v1/youtube', data);
  }

  return (
    <div>
      <form className="form-container">
        <img />
        <label style={{ textAlign: 'center' }}>Add Youtube Video</label>
        <input
          className="field"
          value={songName}
          type="text"
          onChange={(e) => setSongName(e.target.value)}
          placeholder="Song Name"
        />
        <input
          className="field"
          value={artistName}
          type="text"
          onChange={(e) => setArtistName(e.target.value)}
          placeholder="Artist Name"
        />
        <input
          className="field"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          type="text"
          placeholder="Youtube Link"
        />
        <input
          className="field"
          value={thumbnail}
          type="text"
          onChange={(e) => setThumbnail(e.target.value)}
          placeholder="Upload Thumbnail/Image"
        />
        <div>
          <button className="form-btn" onClick={onsubmit}>
            Submit
          </button>
          <button className="form-btn">View</button>
        </div>
      </form>
    </div>
  );
};

export default AddYoutubeVideo;
