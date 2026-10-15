// Filtres de la boutique : type d'objet + couleur. Sans JavaScript, toutes les pièces restent visibles.
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll('#produits .card'));
  var catBtns = Array.prototype.slice.call(document.querySelectorAll('[data-filter-cat]'));
  var colBtns = Array.prototype.slice.call(document.querySelectorAll('[data-filter-couleur]'));
  var count = document.getElementById('count');
  var empty = document.getElementById('vide');
  var reset = document.getElementById('reset');

  var cats = catBtns.map(function (b) { return b.dataset.filterCat; });
  var cols = colBtns.map(function (b) { return b.dataset.filterCouleur; });
  var params = new URLSearchParams(location.search);
  var state = {
    cat: cats.indexOf(params.get('cat')) > -1 ? params.get('cat') : 'tout',
    couleur: cols.indexOf(params.get('couleur')) > -1 ? params.get('couleur') : 'tout'
  };

  function apply() {
    var n = 0;
    cards.forEach(function (c) {
      var ok = (state.cat === 'tout' || c.dataset.cat === state.cat) &&
               (state.couleur === 'tout' || c.dataset.couleur === state.couleur);
      c.hidden = !ok;
      if (ok) n++;
    });
    catBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.filterCat === state.cat)); });
    colBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.filterCouleur === state.couleur)); });
    count.textContent = n + (n > 1 ? ' pièces' : ' pièce');
    empty.hidden = n !== 0;
    reset.hidden = state.cat === 'tout' && state.couleur === 'tout';

    var p = new URLSearchParams();
    if (state.cat !== 'tout') p.set('cat', state.cat);
    if (state.couleur !== 'tout') p.set('couleur', state.couleur);
    try {
      history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p.toString() : '') + location.hash);
    } catch (e) { /* ouverture en local : on ignore */ }
  }

  catBtns.forEach(function (b) {
    b.addEventListener('click', function () { state.cat = b.dataset.filterCat; apply(); });
  });
  colBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      state.couleur = state.couleur === b.dataset.filterCouleur ? 'tout' : b.dataset.filterCouleur;
      apply();
    });
  });
  reset.addEventListener('click', function () { state.cat = 'tout'; state.couleur = 'tout'; apply(); });

  apply();
})();
