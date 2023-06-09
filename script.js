window.onload = function() {
    var reproducirBtn = document.getElementById('reproducirBtn');
    var reproducirAlbumClicsModernos = document.getElementById('reproducirAlbumClicsModernos');
    var audio_nosiguenpegandoabajo = new Audio('cancion.mp3'); // Reemplaza 'ruta_de_tu_cancion.mp3' con la ruta a tu archivo MP3
    var audio_album = new Audio('album.mp3');
    reproducirBtn.onclick = function() {
      if (audio_nosiguenpegandoabajo.paused) {
        audio_nosiguenpegandoabajo.play();
        reproducirBtn.innerHTML = 'Pausar';
      } else {
        audio_nosiguenpegandoabajo.pause();
        reproducirBtn.innerHTML = 'Reproducir';
      }
    };
    reproducirAlbumClicsModernos.onclick = function() {
        if (audio_album.paused) {
            audio_album.play();
            reproducirAlbumClicsModernos.innerHTML = 'pausar';
        } else {
            audio_album.pause();
            reproducirAlbumClicsModernos.innerHTML = '▷';
        }
      };
  };
 