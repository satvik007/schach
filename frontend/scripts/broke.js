var current_frame, total_frames, paths, lengths, handle;

var init = function() {
  current_frame = 0;
  total_frames = 60;
  paths = document.querySelectorAll('.pencil-outline path, .pencil-text path');
  lengths = [];
  paths.forEach(function(path,i) {
    let l = path.getTotalLength();
    lengths[i] = l;
    path.style.setProperty('stroke-dasharray', l + ' ' + l);
    path.style.setProperty('stroke-dashoffset', l);
  });
  handle = 0;
}

var draw = function() {
  var progress = current_frame/total_frames;
  if (progress > 1) {
    window.cancelAnimationFrame(handle);
  } else {
    current_frame++;
    paths.forEach(function(path,j) {
      path.style.setProperty('stroke-dashoffset',Math.floor(lengths[j] * (1 - progress)));
    });
    handle = window.requestAnimationFrame(draw);
  }
  if ( current_frame >= total_frames ) {
    document.querySelectorAll('.pencil-color')[0].classList.add('show');
    document.querySelectorAll('.pencil-outline')[0].classList.remove('show');
    setTimeout(function(){
      document.querySelectorAll('.illustration')[0].classList.add('broken');
    }, 500);
  }
};

export default function brokeScript() {
  init();
  document.querySelectorAll('.illustration')[0].classList.add('show');
  draw();
}
