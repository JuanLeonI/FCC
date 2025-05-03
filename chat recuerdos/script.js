const mensajes = [
    { texto: "NO, CTM", tipo: "sent" },
    { texto: "Andale no seas culo 🥺 ", tipo: "received" },
    { texto: "OK BRO 🙄, te amooo", tipo: "sent" },
    { texto: "¿Entonces si quieres ver como nos conocimos? ", tipo: "received" },
    { texto: "Claro, me encantaría", tipo: "sent" },
    { texto: "¿Recuerdas como nos conocimos? ", tipo: "received" },
    { texto: "¡Sí, claro! Fue un día tan especial para mí.", tipo: "sent" },
    {
      texto:
        "¡Qué lindo! Fue el 25 de junio de 2020 aprox. ¡Nunca lo olvidaré! 💖",
      tipo: "received",
    },
    {
      texto: "¿Qué te parece si seguimos recordando otros momentos especiales?",
      tipo: "received",
    },
    { texto: "Sí, me encantaría. ¿Qué más recuerdas?", tipo: "sent" },
    {
      texto:
        "Recuerdo nuestro primera foto juntos. Fue el 3 de Julio de 2020, un recuerdo para toda la vida. 👀",
      tipo: "received",
      imagen: "https://raw.githubusercontent.com/JuanLeonI/FCC/main/chat%20recuerdos/imagenes/Viaje.jpg",
    },
    {
      texto:
        "¡Qué increíble! Fue muy especial. ¿Cómo olvidar esa experiencia?",
      tipo: "sent",
    },
    {
      texto:
        "¡Me alegra que te haya gustado! ¿Recuerdas cuándo te dije 'CTM' por primera vez?",
      tipo: "received",
    },
    {
      texto:
        "No, pero no importa porque fue un momento mágico para mí. 😂",
      tipo: "sent",
    },
    {
      texto:
        "¡Qué lindo! Esos momentos son los que siempre llevo en mi corazón. 💖",
      tipo: "received",
    },
    {
      texto: "A mí también, cara de perro. Cada día contigo es especial. 💕",
      tipo: "sent",
    },
    { texto: "¡Recuerdos completados! 😊", tipo: "received" },
  ];
  
  let indiceMensaje = 0;
  
  const chatBox = document.getElementById("chat-box");
  const nextButton = document.getElementById("next-button");
  
  nextButton.addEventListener("click", () => {
    if (indiceMensaje < mensajes.length) {
      const mensaje = mensajes[indiceMensaje];
      agregarMensaje(mensaje.texto, mensaje.tipo, mensaje.imagen);
      indiceMensaje++;
    } else {
      nextButton.disabled = true;
    }
  });
  
  function agregarMensaje(texto, tipo, imagen = null) {
    let mensaje = document.createElement("div");
    mensaje.classList.add("message", tipo);
    mensaje.textContent = texto;
  
    if (imagen) {
      let img = document.createElement("img");
      img.src = imagen;
      img.alt = "Recuerdo especial";
      img.style.maxWidth = "100%";
      mensaje.appendChild(img);
    }
  
    chatBox.appendChild(mensaje);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  // Botón Volver
  document.getElementById('volver-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "../index.html";
  });  
  // Iniciar música al abrir la carta (opcional)
  document.addEventListener('DOMContentLoaded', function() {
    musica.play().catch(e => console.log("Autoplay bloqueado: ", e));
    document.querySelector('.music-controls i').className = 'bx bx-pause';
  });
  // En tu JS de cartas, agregar:
  document.body.addEventListener('click', function initAudio() {
    musica.play().then(() => {
      document.querySelector('.music-controls i').className = 'bx bx-pause';
    });
    document.body.removeEventListener('click', initAudio);
  }, { once: true });