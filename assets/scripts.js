document.getElementById("call-button")
.addEventListener("click", function(){
	alert("Calling National Emergency Service 999");
});


  let totalLife = 10;
  let lifeCounter = document.getElementById('lifeCounter');
  let lives = document.querySelectorAll('.life'); // select all hearts

  lives.forEach(life => {
    life.addEventListener('click', () => {
      totalLife++;
      lifeCounter.textContent = totalLife;
    });
  });