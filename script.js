window.onload = function() {
  var reproducirAlbumClicsModernos = document.getElementById('reproducirAlbumClicsModernos');
  var reproducirAlbumPianoBar = document.getElementById('reproducirAlbumPianoBar');
  var reproducirAlbumParteDeLaReligion = document.getElementById('reproducirAlbumParteDeLaReligion')
  var audio_PianoBar = new Audio('PianoBar_Album.mp3'); // Reemplaza 'ruta_de_tu_cancion.mp3' con la ruta a tu archivo MP3
  var audio_album = new Audio('album.mp3');
  var audio_ParteDeLaReligion = new Audio('Charly García - Parte de la religión (1987) (Álbum Completo).mp3')
  

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
  reproducirAlbumParteDeLaReligion.onclick = function() {
    if (audio_ParteDeLaReligion .paused) {
        audio_ParteDeLaReligion .play();
        reproducirAlbumParteDeLaReligion.innerHTML = 'Pausar';
    } else {
        audio_ParteDeLaReligion .pause();
        reproducirAlbumParteDeLaReligion.innerHTML = 'Reproducir';
    }
};
reproducirAlbumYendoDeLaCamaAlLiving.onclick = function() {
    if (audio_YendoDeLaCamaAlLiving.paused) {
        audio_YendoDeLaCamaAlLiving.play();
        reproducirAlbumYendoDeLaCamaAlLiving.innerHTML = 'Pausar';
    } else {
        audio_YendoDeLaCamaAlLiving.pause();
        reproducirAlbumYendoDeLaCamaAlLiving.innerHTML = 'Reproducir';
    }
};
};
