(function(){
  window.SiteRoutes = {
    lostAnimalsHome: 'src/features/lost-animals/index.html',
    lostAnimalsSearch: 'src/features/lost-animals/search.html',
    lostAnimalsReport: 'src/features/lost-animals/report-found.html',
    lostAnimalsEnroll: 'src/features/lost-animals/enroll.html',
    bundlesHome: 'src/features/bundles/index.html',
    kbwgHome: 'kbwg-home.html'
  };

  window.redirectToSiteRoute = function redirectToSiteRoute(name){
    var routes = window.SiteRoutes || {};
    var target = routes[name];
    if (!target) return;
    var qs = window.location.search || '';
    var hash = window.location.hash || '';
    window.location.replace(target + qs + hash);
  };
})();
