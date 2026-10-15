// Galerie de la fiche produit : un clic sur une miniature change la grande photo.
(function () {
  var main = document.getElementById('photo');
  var thumbs = Array.prototype.slice.call(document.querySelectorAll('.thumb'));
  thumbs.forEach(function (t) {
    t.addEventListener('click', function () {
      main.src = t.dataset.src;
      main.alt = t.dataset.alt;
      thumbs.forEach(function (o) { o.setAttribute('aria-current', String(o === t)); });
    });
  });
})();
