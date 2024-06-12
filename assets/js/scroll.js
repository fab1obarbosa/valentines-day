document.addEventListener('DOMContentLoaded', () => {
  // Atraso inicial
  const initialDelay = 500;

  // Função para revelar elementos gradualmente
  const revealElements = () => {
    const elements = document.querySelectorAll('.sr');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.transitionDelay = `${index * 300}ms`;
        element.style.opacity = 1;
      }, initialDelay);
    });
  };

  // Chame a função para revelar elementos após um atraso inicial
  setTimeout(revealElements, initialDelay);
});