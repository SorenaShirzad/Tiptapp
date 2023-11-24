var texts = [
    'Move',
    'Recycle',
    'Give away',

  ];
  var textIndex = 0;
  var isTyping = true;
  var txt = texts[textIndex];
  var i = 0;
  var speed = 70;
  
  function typeWriter() {
    if (isTyping) {
      document.getElementById("works").textContent += txt.charAt(i);
      i++;
      if (i === txt.length) {
        isTyping = false;
        setTimeout(typeWriter, 2000);
      } else {
        setTimeout(typeWriter, speed);
      }
    } else {
      if (i > 0) {
        document.getElementById("works").textContent = txt.slice(0, i - 1);
        i--;
        setTimeout(typeWriter, 100);
      } else {
        isTyping = true;
        textIndex++;
        if (textIndex >= texts.length) {
          textIndex = 0;
        }
        txt = texts[textIndex];
        setTimeout(typeWriter, 2000);
      }
    }
  }
  
  typeWriter();


  /*let display = document
  .getElementById("menu")
  .addEventListener("click", function () {
    var span = document.getElementById("span");
    span.classList.toggle("active");
    var body = document.querySelector("body");
    body.classList.toggle("active2");
  });

console.log(display);
*/