function routesConfig(t,e,n){n.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),t.state("app",{template:"<app></app>"}).state("app.list",{url:"/",template:"<list></list>"}).state("app.movie",{url:"/movie/:movieId",template:"<movie></movie>"}).state("app.poster",{url:"/poster",template:"<poster></poster>"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("app",["ui.router"]),angular.module("app").service("Persistence",function(){var t=this;t.save=function(t){localStorage.setItem("mon_espace_de_stockage",JSON.stringify(t))},t.importSaved=function(){return JSON.parse(localStorage.getItem("mon_espace_de_stockage"))},t.supprimerdeListe=function(e,n){e.splice(e.indexOf(n),1),t.save(e)},t.ajouterAListe=function(e,n){e.push(n),t.save(e)}}),angular.module("app").component("poster",{templateUrl:"app/component/poster.html",controller:function(){},bindings:{movie:"<"}}),angular.module("app").component("movie",{templateUrl:"app/component/movie.html",controller:["$stateParams","$http",function(t,e){var n=this;e.get("https://amc.ig.he-arc.ch/tmdb/movie/"+t.movieId+"?language=fr").then(function(t){n.movie=t.data})}]}),angular.module("app").component("list",{templateUrl:"app/component/list.html",controller:["Persistence","$http",function(t,e){var n=this;e.get("https://amc.ig.he-arc.ch/tmdb/movie/popular?language=fr").then(function(t){n.movies=t.data.results}),n.maListe=[],n.ajouterAListe=function(e){t.ajouterAListe(n.maListe,e)}}]}),angular.module("app").component("favourites",{templateUrl:"app/component/favourites.html",controller:["Save","$http",function(t,e){var n=this;n.maListe=[],n.maListe=t.importSaved()}]}),angular.module("app").component("app",{templateUrl:"app/home.html"}),angular.module("app").run(["$templateCache",function(t){t.put("app/home.html",'<nav id="navbar-menu" class="navbar navbar-default">\r\n    <!--navbar navbar-inverse-->\r\n    <div class="container-fluid">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class="navbar-header">\r\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\r\n\t\t\t\t\t\t<span class="sr-only">Toggle navigation</span>\r\n\t\t\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t \t</button>\r\n            <a class="navbar-brand" href="#">Home<span class="sr-only">(current)</span></a>\r\n        </div>\r\n\r\n        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n            <ul class="nav navbar-nav">\r\n                <!--<li class="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>-->\r\n                <li><a ng-href="/component/list/"> Accueil</a></li>\r\n                <li><a href="#citation">About</a></li>\r\n                <li><a href="#citation">About</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<ui-view></ui-view>'),t.put("app/component/favourites.html",'<div class="row jumbotron form-group">\n  <label>Recherche: <input ng-model="$ctrl.searchText"></label>\n</div>\n\n<div class="row">\n  <div class="col-md-6"> \n    <div ng-init="$ctrl.movies"></div>  \n    <ul> \n      <li id="searchTextResult" ng-repeat="el in $ctrl.movies |filter:$ctrl.searchText track by $index ">\n         <a ui-sref="app.movie({movieId:el.id})"> {{el.title}}\n        <poster movie="el"></poster></a>\n      </li>\n    </ul>\n  </div>\n</div>'),t.put("app/component/list.html",'<div class="container">\n  <div class="row jumbotron form-group">\n    <div>\n      <!-- A completer -->\n      <label>Recherche: <input ng-model="$ctrl.searchText"></label>¨\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-md-6">\n      <div ng-init="$ctrl.movies"></div>\n      <ul>\n        <li id="searchTextResult" ng-repeat="el in $ctrl.movies |filter:$ctrl.searchText track by $index ">\n          <a ui-sref="app.movie({movieId:el.id})"> {{el.title}}\n        <poster movie="el"></poster></a>\n          <button ng-click="$ctrl.ajouterAListe(el)" class="btn btn-icon">\n            <span class="glyphicon glyphicon-heart" ng-class="{active: item.favorite}"></span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>'),t.put("app/component/movie.html",'<div class="component container">\n  <div class="row">\n    <div id="imgbackground" class="col-md-12" style="width:100%;height:250px;background:url(http://image.tmdb.org/t/p/w1000/{{$ctrl.movie.backdrop_path}}) no-repeat;background-size: cover">\n    </div>\n    <div class="col-md-12">\n      <h2>{{$ctrl.movie.title}}</h2>\n        <p><strong>Categorie: </strong> {{$ctrl.movie.genres[0].name}}</p>\n        <p style="text-align:justify"><strong>Description: </strong> {{$ctrl.movie.overview}}</p>\n        <p><strong>Note obtenue: </strong> {{$ctrl.movie.vote_average}}/10</p>\n        <poster movie="$ctrl.movie"></poster>\n    </div>\n  </div>\n</div>'),t.put("app/component/poster.html",'<div class="poster">\n      <a ui-sref="app.movie({movieId: $ctrl.movie.id})"> \n            <img ng-if="$ctrl.movie.poster_path" ng-src="http://image.tmdb.org/t/p/w185/{{$ctrl.movie.poster_path}}" alt="Description">\n            <img ng-if !="$ctrl.movie.poster_path" ng-src="http://loremflickr.com/185/252/cars" alt="img">\n      </a>\n</div>\n<!-- onerror="this.src=\'http://loremflickr.com/185/252/cars\'"-->')}]),angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-cb8b1aa162.js.map
