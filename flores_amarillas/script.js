function launchFireworks() {
  const fireworksContainer = document.querySelector('.fireworks-container');
  const floatingHearts = document.querySelector('.floating-hearts');
  const fallingPetals = document.querySelector('.falling-petals');

  // Generar fuegos artificiales
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.top = `${Math.random() * 100}vh`;
    firework.style.left = `${Math.random() * 100}vw`;
    fireworksContainer.appendChild(firework);

    const smoke = document.createElement('div');
    smoke.classList.add('smoke');
    smoke.style.top = `${Math.random() * 100}vh`;
    smoke.style.left = `${Math.random() * 100}vw`;
    fireworksContainer.appendChild(smoke);

    // Eliminar fuegos artificiales y humo después de la animación
    setTimeout(() => {
      firework.remove();
      smoke.remove();
    }, 1000);
  }

  // Generar corazones flotando
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    heart.style.left = `${Math.random() * 100}vw`;
    floatingHearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  // Generar pétalos cayendo
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}vw`;
    fallingPetals.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 5000);
  }

  // Mostrar el mensaje final
  setTimeout(() => {
    const message = document.createElement('h1');
    message.textContent = "Feliz día de las flores amarillas, mi amor. Siempre te voy a amar. ¡Me encantas!";
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.color = '#ff69b4';
    message.style.fontSize = '36px';
    fireworksContainer.appendChild(message);
  }, 2000);
}
