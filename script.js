document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const audioPlayer = document.getElementById('audio-player');
  const playBtn = document.getElementById('play-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progressBar = document.getElementById('progress-bar');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const volumeSlider = document.getElementById('volume-slider');
  const searchInput = document.getElementById('search-input');
  const songList = document.getElementById('song-list');
  const currentTitle = document.getElementById('current-title');
  const currentThumbnail = document.getElementById('current-thumbnail');

  // Playlist data with artists
  const playlist = [
    {
      title: "Aapetola Bonga",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Aapetola%20Bonga%20%20New%20Santali%20Video%20%202025%20I%20Swagatika%20I%20Sukumar%20D.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1fQRRC4o-k6yXFP6X3WXRohVx3jGIJFJwTsrnvu1RdCUBSGfryZWMeg&s=10",
      type: "Santali Song",
      artist: "Swagatika & Sukumar D"
    },
    {
      title: "Okalekan Dulal",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/BANJU%20SOREN%20OFFICIAL%20-%20OKALEKAN%20DULAL%20%EF%BD%9C%EF%BD%9C%20SANTALI%20NEW%20STUDIO%20VERSION%202024%20%EF%BD%9C%EF%BD%9C%20KUMAR%20SAWAN%20%26%20NIRMALA.mp3",
      thumbnail: "https://c.saavncdn.com/237/Okalekan-Dulal-Santali-2024-20240830225519-500x500.jpg",
      type: "Santali song",
      artist: "Banju Soren"
    },
    {
      title: "E Hapan Mai",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/RAHLA%20RIMIL%20CREATION%20-%20E%20Hapan%20Mai%20Santali%20Video%20%EF%BD%9C%EF%BD%9C%20New%20Santali%20Song%202020%20%EF%BD%9C%EF%BD%9C%20Sili%20Tudu%20%26%20Sagen%20Hembram.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFptjUJUjXNJiMZmVyYwBZJUwJojZE5J3lvMFlVDHPRTmLpj94y1QLbK6z&s=10",
      type: "Santali song",
      artist: "Kanchan Soren"
    },
    {
      title: "Amge Setah Sisir",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Buddhadev%20Mandi%20-%20Amge%20Setah%20Sisir.mp3",
      thumbnail: "https://c.saavncdn.com/375/Amge-Setah-Sisir-Bhojpuri-2024-20240722201615-500x500.jpg",
      type: "Santali Song",
      artist: "Buddhadev Mandi"
    },
    {
      title: "UPAL BAHA",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/UPAL%20BAHA%20SANTALI%20SONG.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_-OPu7MOgNdhjk8xP8EV_Nu6mTqcZlVsm9S5pPipg_kQM9QycXC1_OU&s=10",
      type: "Santali Song",
      artist: "Rimi Saren"
    },
    {
      title: "NAWA ALBUM HEROING",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/NAWA%20ALBUM%20HEROINE%20NEW%20SANTALI.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB44Nhvw1_4oICasuVohLDxgUCMW7McBGsSA&s",
      type: "Santali Song",
      artist: "GANGADHAR & RUPALI"
    },
    {
      title: "Sard Baha",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Release%20-%20Sard%20Baha.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsSIT2i8AXjvoSEpRu1sBpu3qU0Yne3yRsQ&s",
      type: "Santali song",
      artist: "Unknown Artist"
    },
    {
      title: "Buru Songha Re",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Susmita%20Hembram%20-%20Buru%20Songha%20Re.mp3",
      thumbnail: "https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/2KJ57N7AbO/size_m.jpg",
      type: "Santali song",
      artist: "Susmita Hembram"
    },
    {
      title: "Gum Sum Gum",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Rusika%20Bakhol%20-%20Gum%20Sum%20Gum.mp3",
      thumbnail: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/1a/88/021a88b5-166a-9b31-2526-2e9758e39432/7333483039308.jpg/632x632bb.webp",
      type: "Santali song",
      artist: "Rusika Bakhol"
    },
    {
      title: "Jiyal Jharna",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Santhali%20Diwana%20-%20Jiyal%20Jharna.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsPiq2s0FP9TBNh6ncI97iKVL5Eqh0K2kuOZ5OJ6RTpC9g-vdggx77DRX&s=10",
      type: "Santali song",
      artist: "Santhali Diwana"
    },
    {
      title: "Monetinj Tahe Kana",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Sawan%20Murmu%20-%20Monetinj%20Tahe%20Kana.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ2Lobc0Rf7zBiEVEh85EZe8CiAUr2TDsZD1Suv-0OBWbHpfMIwkw-GkD&s=10",
      type: "Santali song",
      artist: "Sawan Murmu"
    },
    {
      title: "Deuli Dam Phud Ena",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/DEULI%20DAM%20PHUD%20ENA.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjK-AgN-1JtU0rGes4qk-y-9JDhN6NvlEqCtvd6rXRH_Y_xMCD5jQj5je&s=10",
      type: "Santali song",
      artist: "SANJAY HANSDAH & SONY HEMBRAM"
    },
    {
      title: "Kehna Galat Galat/Ye Jo Halka Halka Suroor",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Madhur%20Sharma%20-%20Kehna%20Galat%20Galat%20%EF%BD%9C%20Ye%20Jo%20Halka%20Halka%20Suroor%20%EF%BD%9C%20Madhur%20Sharma%20%EF%BD%9C%20Swapnil%20Tare%20%40PearlRecords.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOfBAaN8Uvkb9xQmTtsFAHEu_E760auAvPS3F0ySRouK8RoJstRlJ4yan&s=10",
      type: "Hindi song",
      artist: "Madhur Sharma"
    },
    {
      title: "Dheema Dheema",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Sony%20Music%20South%20-%20Love%20Insurance%20Kompany%20-%20Dheema%20Video%20%EF%BD%9C%20Pradeep%20Ranganathan%20%EF%BD%9C%20Anirudh%20Ravichander%20%EF%BD%9C%20Vignesh%20Shivan.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqdTpSkfYMqk__6jaJzSy012WUOcFUhW-sIpEEgiJUUxuxAg3E4Ir_Jxd&s=10",
      type: "Tamil Song",
      artist: "Pradeep Ranganathan"
    },
    {
      title: "Keno Je Toke",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/SVF%20Music%20-%20Keno%20Je%20Toke%20%EF%BD%9C%20Lyrical%20%EF%BD%9C%20Mon%20Jaane%20Na%20%EF%BD%9C%20Yash%20%EF%BD%9C%20Mimi%20%EF%BD%9C%20Raj%20Barman%20%EF%BD%9C%20Prasen%20%EF%BD%9C%20Dabbu%20%EF%BD%9C%20SVF%20Music.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQnCnH_Tg5QnrboMSKBsUjqAtsMycGkk9bncZqmOsVT3etMBk4TeliB0&s=10",
      type: "Bangali Song",
      artist: "Yash & Mimi"
    },
    {
      title: "Pan Baha",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Biswajit%20Mandi%20-%20Pan%20Baha.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZKIJQ406-Qs7J8gScs-0aewF-bMRxM07KEQKVHNHVJIdDyBlLO0Ge4Ay&s=10",
      type: "Santali Song",
      artist: "Biswajit Mandi & Sarathi Hembram"
    },
    {
      title: "Arziyaan",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Goldie%20Sohel%20-%20Arziyaan.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0UpXOoMvKqZt-SxPXTga5RixpkS9NFuk6lG8dhtmmpc2HAsjltTU3cY&s=10",
      type: "Hindi Song",
      artist: "Goldie Sohel"
    },
    {
      title: "Piya",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Jubin%20Nautiyal%20-%20Piya.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQPO_3hSGXlf4WivuqvJsQpUier_oJVJj-IaTioHwuVtKof4ALUt29oY&s=10",
      type:"Hindi Song",
      artist:"Jubin Nautiyal"
    },
    {
      title: "Hemal Umul",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/Ayo%20Kole%20Production%20-%20HEMAL%20UMUL%20II%20KUMAR%20SAWAN%20%20I%20NIRMALA%20KISKU%20I.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hOErXEdSj28DH0MUHD-NrCbBzJ1U5DkOdA&s",
      type:"Santali Song",
      artist:"Kumar Sawan & Nirmala Kisku"
    },
    {
      title: "Jivi Re",
      src: "https://raw.githubusercontent.com/prabir-hansda/Music-public-for-read/refs/heads/main/SUNIL%20HANSDA%20-%20Jivi%20Re.mp3",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYr7VyLi5SMF0n_KaVGyiqtb98KX31CCPjKQ&s",
      type:"Santali Song",
      artist:"Sunil Hansda"
    }
  ];

  // Player state
  let currentSongIndex = 0;
  let isPlaying = false;
  let mediaSessionActionHandlersSetup = false;

  // Initialize the player
  function initPlayer() {
    renderPlaylist();
    loadSong(currentSongIndex);
    
    // Set initial volume
    audioPlayer.volume = volumeSlider.value;
    
    // Setup media session for mobile notifications
    setupMediaSession();
  }

  // Setup Media Session API for mobile notifications
  function setupMediaSession() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: playlist[currentSongIndex].title,
        artist: playlist[currentSongIndex].artist || 'Unknown Artist',
        artwork: [
          { src: playlist[currentSongIndex].thumbnail, sizes: '96x96', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '128x128', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '192x192', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '256x256', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '384x384', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '512x512', type: 'image/jpeg' }
        ]
      });

      if (!mediaSessionActionHandlersSetup) {
        // Action handlers
        navigator.mediaSession.setActionHandler('play', () => {
          playSong();
        });
        
        navigator.mediaSession.setActionHandler('pause', () => {
          pauseSong();
        });
        
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          prevSong();
        });
        
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          nextSong();
        });
        
        navigator.mediaSession.setActionHandler('seekbackward', (details) => {
          const skipTime = details.seekOffset || 10;
          audioPlayer.currentTime = Math.max(audioPlayer.currentTime - skipTime, 0);
        });
        
        navigator.mediaSession.setActionHandler('seekforward', (details) => {
          const skipTime = details.seekOffset || 10;
          audioPlayer.currentTime = Math.min(audioPlayer.currentTime + skipTime, audioPlayer.duration);
        });
        
        navigator.mediaSession.setActionHandler('seekto', (details) => {
          if (details.fastSeek && 'fastSeek' in audioPlayer) {
            audioPlayer.fastSeek(details.seekTime);
            return;
          }
          audioPlayer.currentTime = details.seekTime;
        });
        
        mediaSessionActionHandlersSetup = true;
      }
    }
  }

  // Update Media Session metadata when song changes
  function updateMediaSessionMetadata() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: playlist[currentSongIndex].title,
        artist: playlist[currentSongIndex].artist || 'Unknown Artist',
        artwork: [
          { src: playlist[currentSongIndex].thumbnail, sizes: '96x96', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '128x128', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '192x192', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '256x256', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '384x384', type: 'image/jpeg' },
          { src: playlist[currentSongIndex].thumbnail, sizes: '512x512', type: 'image/jpeg' }
        ]
      });
    }
  }

  // Render playlist with search highlighting
  function renderPlaylist(filter = '') {
    songList.innerHTML = '';
    
    const filteredSongs = filter 
      ? playlist.filter(song => 
          song.title.toLowerCase().includes(filter.toLowerCase()) || 
          song.type.toLowerCase().includes(filter.toLowerCase()) ||
          (song.artist && song.artist.toLowerCase().includes(filter.toLowerCase())))
      : playlist;
    
    filteredSongs.forEach((song, index) => {
      const songItem = document.createElement('div');
      songItem.classList.add('song-item');
      if (playlist.indexOf(song) === currentSongIndex && !filter) {
        songItem.classList.add('active');
      }
      
      // Highlight matching text if searching
      const title = filter ? highlightMatch(song.title, filter) : song.title;
      const type = filter ? highlightMatch(song.type, filter) : song.type;
      const artist = song.artist 
        ? (filter ? highlightMatch(song.artist, filter) : song.artist)
        : 'Unknown Artist';
      
      songItem.innerHTML = `
        <img src="${song.thumbnail}" alt="${song.title}">
        <div class="song-details">
          <h4>${title}</h4>
          <p>${type} - ${artist}</p>
        </div>
      `;
      
      songItem.addEventListener('click', () => {
        currentSongIndex = playlist.indexOf(song);
        playSelectedSong(currentSongIndex);
      });
      songList.appendChild(songItem);
    });
  }

  // Highlight matching text in search results
  function highlightMatch(text, match) {
    if (!match || !text) return text;
    
    const regex = new RegExp(match, 'gi');
    return text.replace(regex, (matched) => 
      `<span style="color: var(--accent-color); font-weight: bold;">${matched}</span>`
    );
  }

  // Load song
  function loadSong(index) {
    const song = playlist[index];
    currentTitle.textContent = song.title;
    currentThumbnail.src = song.thumbnail;
    audioPlayer.src = song.src;
    
    // Update active song in playlist
    const songItems = document.querySelectorAll('.song-item');
    songItems.forEach(item => item.classList.remove('active'));
    if (songItems[index]) {
      songItems[index].classList.add('active');
    }
    
    // Update media session
    updateMediaSessionMetadata();
  }

  // Play selected song
  function playSelectedSong(index) {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    playSong();
  }

  // Play song
  function playSong() {
    isPlaying = true;
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
    // Update media session playback state
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'playing';
    }
  }

  // Pause song
  function pauseSong() {
    isPlaying = false;
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    
    // Update media session playback state
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'paused';
    }
  }

  // Previous song
  function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
      currentSongIndex = playlist.length - 1;
    }
    loadSong(currentSongIndex);
    if (isPlaying) {
      playSong();
    }
  }

  // Next song
  function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > playlist.length - 1) {
      currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    if (isPlaying) {
      playSong();
    }
  }

  // Update progress bar
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.setProperty('--progress', `${progressPercent}%`);
    
    // Update time display
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    
    // Update media session position state
    if ('mediaSession' in navigator && !isNaN(duration)) {
      navigator.mediaSession.setPositionState({
        duration: duration,
        playbackRate: audioPlayer.playbackRate,
        position: currentTime
      });
    }
  }

  // Set progress when clicking on progress bar
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
  }

  // Event listeners
  playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
  });

  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);

  audioPlayer.addEventListener('timeupdate', updateProgress);
  audioPlayer.addEventListener('ended', nextSong);
  audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = `${Math.floor(audioPlayer.duration / 60)}:${Math.floor(audioPlayer.duration % 60).toString().padStart(2, '0')}`;
  });

  progressBar.addEventListener('click', setProgress);

  volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
  });

  searchInput.addEventListener('input', () => {
    renderPlaylist(searchInput.value);
  });

  // Initialize player
  initPlayer();
});