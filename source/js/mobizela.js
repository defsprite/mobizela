soundManager.setup({
    //url:'/path/to/swfs/',
    flashVersion:9,
    preferFlash:false,
    defaultOptions:{
      // set global default volume for all sound objects
      volume:100
    }
  }
);

function annoy() {
  soundManager.play('mySound', {
    onfinish:annoy
  });
}

soundManager.onready(function () {
  soundManager.createSound({
    id:'mySound',
    url:'/snd/shittyzela.mp3',
    autoLoad:true,
    autoPlay:true,
    volume:100
  });

});

document.getElementById("container").addEventListener("click", function() {
  annoy();
});
