window.onload = function() {
  var reproducirAlbumClicsModernos = document.getElementById('reproducirAlbumClicsModernos');
  var reproducirAlbumPianoBar = document.getElementById('reproducirAlbumPianoBar');
  var audio_PianoBar = new Audio('PianoBar_Album.mp3'); // Reemplaza 'ruta_de_tu_cancion.mp3' con la ruta a tu archivo MP3
  var audio_album = new Audio('album.mp3');

  reproducirAlbumClicsModernos.onclick = function() {
      if (audio_album.paused) {
          audio_album.play();
          reproducirAlbumClicsModernos.innerHTML = 'Pausar';
      } else {
          audio_album.pause();
          reproducirAlbumClicsModernos.innerHTML = 'Reproducir';
      }
  };
  
  reproducirAlbumPianoBar.onclick = function() {
      if (audio_PianoBar.paused) {
          audio_PianoBar.play();
          reproducirAlbumPianoBar.innerHTML = 'Pausar';
      } else {
          audio_PianoBar.pause();
          reproducirAlbumPianoBar.innerHTML = 'Reproducir';
      }
  };
};
