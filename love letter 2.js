$(document).ready(function () {
  // --- NUEVAS CONSTANTES DE INTRODUCCIÓN ---
  const introScreen = $("#intro-screen");
  const enterButton = $("#enter-button");
  // ----------------------------------------

  // Las constantes existentes (envelope, openBtn, etc.) van aquí.
  const envelope = $("#envelope");
  const openBtn = $("#open");
// ... resto de las constantes ...
// ...

  // --- NUEVA FUNCIONALIDAD DE INTRODUCCIÓN ---
  enterButton.click(() => {
    introScreen.addClass("hidden");
  });
  // ----------------------------------------


// ... el resto de tu código JS (openBtn.click, readBtn.click, etc.) va aquí sin cambios.
// ...
});

$(document).ready(function () {
  const envelope = $("#envelope");
  const openBtn = $("#open");
  const closeBtn = $("#close");
  const readBtn = $("#read");
  const body = $("body");

  // Referencia al elemento de audio
  const dynamiteAudio = $("#dynamiteAudio")[0]; 

  openBtn.click(() => {
    envelope.addClass("open").removeClass("close");
    readBtn.fadeIn();
    
    // Reproducir la canción al abrir la carta
    const playPromise = dynamiteAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Música 'dynamate.mp3' reproduciéndose.");
        })
        .catch(error => {
          console.error("Fallo al reproducir el audio:", error);
        });
    }
  });

  // Funcionalidad de LEER CARTA COMPLETA
  readBtn.click(() => {
    body.addClass("reading"); // Amplía la carta
    readBtn.hide(); 
    
    $("#back").show(); // Muestra el botón 'Cerrar Carta' dentro
  });
  
  // Funcionalidad de CERRAR CARTA DESDE DENTRO (Botón #back)
  $("#back").click(() => {
    body.removeClass("reading"); // Vuelve al tamaño del sobre
    $("#back").hide(); 
    readBtn.show(); // Vuelve a mostrar 'Leer carta completa'
  });


  // Funcionalidad de CERRAR SOBRE (Botón #close)
  closeBtn.click(() => {
    envelope.addClass("close").removeClass("open");
    body.removeClass("reading"); // Sale del modo lectura si estaba ahí
    readBtn.hide();
    
    // Pausa y reinicia la canción
    dynamiteAudio.pause();
    dynamiteAudio.currentTime = 0; 
    
    $("#back").hide(); // Oculta el botón de cerrar interno
  });
});