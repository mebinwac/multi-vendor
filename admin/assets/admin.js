function mpToggle(){var m=document.getElementById('mp-menu'),b=document.getElementById('mp-backdrop');if(!m)return;if(m.classList.contains('open')){mpClose();}else{m.classList.add('open');b.classList.add('show');}}
function mpClose(){var m=document.getElementById('mp-menu'),b=document.getElementById('mp-backdrop');if(m){m.classList.remove('open');b.classList.remove('show');}}
document.addEventListener('keydown',function(e){if(e.key==='Escape')mpClose();});

// Highlight current page in mega-menu
document.addEventListener('DOMContentLoaded', function(){
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#mp-menu a.mp-link').forEach(function(a){
    if (a.getAttribute('href') === path) a.classList.add('current');
  });
});
