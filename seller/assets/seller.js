// Collapsible fieldsets only — nav groups handled by inline onclick on each <a>
document.addEventListener('click', function(e){
  var leg = e.target.closest('.fieldset > .legend');
  if (leg) leg.parentElement.classList.toggle('collapsed');
});
