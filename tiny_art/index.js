let makeArt = () => {
    const tinyart = document.getElementById('tinyart'); 
    const context = tinyart.getContext("2d");
  
    for (let x = 0; x < 255; x++){
      for (let y = 0; y < 255; y++){
        if ((x ^ y) % 10) {
          context.fillRect(x*4, y*4, 4, 4); 
          context.fillStyle = `rgb(${x}, ${y}, ${x * y % 255})`
        }
      }
    }
  }
  
  
  makeArt();
  