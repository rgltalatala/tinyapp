let generateArt = () => {
    const canvas = document.createElement('canvas');
    canvas.id = "art";
    canvas.height = "500";
    canvas.width = "500";
    canvas.style.border = "4px solid #FF66FF"
    canvas.style.background = "#000000"

    // const tinyart = document.getElementById('tinyart'); 
    const context = canvas.getContext("2d");
  
    for (let x = 0; x < 255; x++){
      for (let y = 0; y < 255; y++){
        if ((x ^ y) % 10) {
          context.fillRect(x*4, y*4, 4, 4); 
          context.fillStyle = `rgb(${x}, ${y}, ${x * y % 255})`
        }
      }
    }

    let display = document.getElementById('display');
    display.append(canvas);
  }
  
  document.addEventListener("DOMContentLoaded", generateArt)
  // makeArt();

  