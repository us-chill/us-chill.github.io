// Hamburger nav
document.getElementById('nav-toggle').onclick = () => {
  document.getElementById('main-nav').classList.toggle('show');
};
// Dark/Light mode toggle
document.getElementById('mode-toggle').onclick = () => {
  document.body.classList.toggle('dark');
  // Optionally save mode to localStorage
  // localStorage.setItem('uschill-mode', document.body.classList.contains('dark') ? 'dark' : 'light');
};
// (Optional) Load mode from localStorage
// if (localStorage.getItem('uschill-mode') === 'dark') document.body.classList.add('dark');

// Dummy data (replace with fetch or real data in production)
const movies = [
  { poster: 'assets/images/movie1.jpg', title: 'The Chill Adventure', synopsis: 'Follow a group of friends on their wild journey across the US.' },
  { poster: 'assets/images/movie2.jpg', title: 'Stream Dream', synopsis: 'A heartwarming story about following your passion in the world of streaming.' },
  { poster: 'assets/images/movie3.jpg', title: 'Viral City', synopsis: 'A city where every moment could go viral, but at what cost?' },
  { poster: 'assets/images/movie4.jpg', title: 'Midnight Show', synopsis: 'When the city sleeps, the real action begins.' },
  { poster: 'assets/images/movie5.jpg', title: 'Trendsetters', synopsis: 'Meet the people who start every trend you follow.' },
  { poster: 'assets/images/movie6.jpg', title: 'Chill Vibes', synopsis: 'Sometimes the best stories are the ones you just chill to.' },
];

const videos = [
  { thumbnail: 'assets/images/vid1.jpg', title: 'Epic Skate Trick' },
  { thumbnail: 'assets/images/vid2.jpg', title: 'Comedy Gold: Prank of the Year' },
  { thumbnail: 'assets/images/vid3.jpg', title: 'Heartwarming Rescue' },
  { thumbnail: 'assets/images/vid4.jpg', title: 'Insane Dance Moves' },
  { thumbnail: 'assets/images/vid5.jpg', title: 'Ultimate Challenge Compilation' },
  { thumbnail: 'assets/images/vid6.jpg', title: 'Street Musician Goes Viral' },
];

// Render Movies
const movieContainer = document.getElementById('movie-list');
if (movieContainer && typeof movies !== 'undefined') {
  movies.slice(0, 6).forEach(m => {
    const el = document.createElement('div');
    el.className = 'card glass';
    el.innerHTML = `
      <div class="card-img-wrap"><img src="${m.poster}" alt="${m.title}"></div>
      <div class="card-content">
        <h3>${m.title}</h3>
        <p>${m.synopsis.substring(0, 80)}...</p>
        <a href="movie.html" class="btn btn-glass">View Trailer</a>
      </div>
    `;
    movieContainer.appendChild(el);
  });
}

// Render Videos
const videoContainer = document.getElementById('video-list');
if (videoContainer && typeof videos !== 'undefined') {
  videos.slice(0, 6).forEach(v => {
    const el = document.createElement('div');
    el.className = 'card glass';
    el.innerHTML = `
      <div class="card-img-wrap"><img src="${v.thumbnail}" alt="${v.title}"></div>
      <div class="card-content">
        <h3>${v.title}</h3>
        <a href="video.html" class="btn btn-glass">Watch Now</a>
      </div>
    `;
    videoContainer.appendChild(el);
  });
}