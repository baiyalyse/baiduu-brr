document.addEventListener('DOMContentLoaded', () => {
  const maxCandles = 22; 
  let candleCount = 0;   

  document.body.addEventListener('click', (event) => {
    if (candleCount >= maxCandles) return;

    const candleGif = document.createElement('img');
    candleGif.src = 'candle.gif';  
    candleGif.classList.add('candle');

    candleGif.style.left = event.pageX + 'px';
    candleGif.style.top = event.pageY + 'px';

    document.body.appendChild(candleGif);

    candleCount++;
  });
});
