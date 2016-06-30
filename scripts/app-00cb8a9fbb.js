function routesConfig(e,t,a){a.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{template:"<app></app>"}).state("app.list",{url:"/",template:"<list></list>"}).state("app.movie",{url:"/movie/:movieId",template:"<movie></movie>"}).state("app.poster",{url:"/poster",template:"<poster></poster>"}).state("app.favourites",{url:"/favourites",template:"<favourites></favourites>"}).state("app.about",{url:"/about",template:"<about></about>"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("app",["ui.router","ngFlag","slick"]),angular.module("app").service("Persistence",function(){var e=this;e.save=function(e){localStorage.setItem("mon_espace_de_stockage",JSON.stringify(e))},e.importSaved=function(){return null===localStorage.getItem("mon_espace_de_stockage")?[]:JSON.parse(localStorage.getItem("mon_espace_de_stockage"))},e.supprimerdeListe=function(t,a){t.splice(t.indexOf(a),1),e.save(t)}}),angular.module("app").component("poster",{templateUrl:"app/component/poster.html",controller:function(){},bindings:{movie:"<"}}),angular.module("app").component("movie",{templateUrl:"app/component/movie.html",controller:["$stateParams","$http",function(e,t){var a=this;t.get("https://amc.ig.he-arc.ch/tmdb/movie/"+e.movieId+"?language=fr").then(function(e){a.movie=e.data})}]}),angular.module("app").component("list",{templateUrl:"app/component/list.html",controller:["Persistence","$http",function(e,t){var a=this;t.get("https://amc.ig.he-arc.ch/tmdb/movie/popular?language=fr").then(function(e){a.movies=e.data.results}),a.maListe=e.importSaved(),a.ajouterAListe=function(t){a.maListe.push(t),e.save(a.maListe)}}]}),angular.module("app").component("favourites",{templateUrl:"app/component/favourites.html",controller:["Persistence",function(e){var t=this;t.maListe=e.importSaved()}]}),angular.module("app").component("app",{templateUrl:"app/home.html"}),angular.module("app").run(["$templateCache",function(e){e.put("app/home.html",'<nav id="navbar-menu" class="navbar navbar-default">\r\n    <!--navbar navbar-inverse-->\r\n    <div class="container-fluid">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class="navbar-header">\r\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\r\n\t\t\t\t\t\t<span class="sr-only">Toggle navigation</span>\r\n\t\t\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t \t</button>\r\n            <a class="navbar-brand" href="#">Home<span class="sr-only">(current)</span></a>\r\n        </div>\r\n\r\n        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n            <ul class="nav navbar-nav">\r\n                <!--<li class="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>-->\r\n                <li><a ui-sref="app.list"> Accueil</a></li>\r\n                <li><a ui-sref="app.favourites"> Mes favoris</a></li>\r\n                <li><a ng-href="/component/about/">About</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<ui-view></ui-view>'),e.put("app/component/favourites.html",'<div class="row jumbotron form-group">\n  <label>Recherche: <input ng-model="$ctrl.searchText"></label>\n</div>\n<div class="row">\n  <div class="col-md-6"> \n    <div ng-init="$ctrl.movies"></div>  \n    <ul> \n      <li id="searchTextResult" ng-repeat="el in $ctrl.maListe |filter:$ctrl.searchText track by $index ">\n         <a ui-sref="app.movie({movieId:el.id})"> {{el.title}}\n        <poster movie="el"></poster></a>\n      </li>\n    </ul>\n  </div>\n</div>'),e.put("app/component/list.html",'<div class="container">\n  <div class="row jumbotron form-group">\n    <div>\n      <!-- A completer -->\n      <label>Recherche: <input ng-model="$ctrl.searchText"></label>\n    </div>\n  </div>\n\n  <div class="row">\n    <div ng-init="$ctrl.movies"></div>\n    <ul>\n      <li class="col-xs-12 col-sm-4 col-md-3" style="height:350px" ng-repeat="el in $ctrl.movies |filter:$ctrl.searchText track by $index ">\n        <a ui-sref="app.movie({movieId:el.id})"> {{el.title}}\n            <poster movie="el"></poster>\n          </a>\n        <button ng-click="$ctrl.ajouterAListe(el)" class="btn btn-icon">\n            <span class="glyphicon glyphicon-heart" ng-class="{active: item.favorite}"></span>\n          </button>\n      </li>\n    </ul>\n    <br>\n    <slick class="col-xs-12" dots="true" infinite="false" speed="300" slides-to-show="5" touch-move="false" slides-to-scroll="1">\n      <div class="searchTextResult" ng-repeat="el in $ctrl.movies ">\n        <a ui-sref="app.movie({movieId:el.id})">\n          <poster movie="el"></poster>\n        </a>\n      </div>\n    </slick>\n  </div>\n</div>'),e.put("app/component/movie.html",'<div class="component container">\n  <div class="row">\n    <div ng-if !="$ctrl.movie.backdrop_path" class="col-md-12"></div>\n\n    <div ng-if="$ctrl.movie.backdrop_path" id="imgbackground" class="col-md-12" style="width:100%;height:250px;background:url(http://image.tmdb.org/t/p/w1000/{{$ctrl.movie.backdrop_path}}) no-repeat;background-size:cover" id="imgbackground" class="col-md-12" style="width:100%;height:250px;background:url(http://image.tmdb.org/t/p/w1000/{{$ctrl.movie.backdrop_path}}) no-repeat;background-size: cover">\n    </div>\n\n    <div class="col-md-12">\n      <h2>{{$ctrl.movie.title}}</h2>\n      <p><strong>Categorie: </strong></p>\n      <ul>\n        <li ng-repeat="categorie in $ctrl.movie.genres">{{categorie.name}} </li>\n      </ul>\n      <p style="text-align:justify"><strong>Description: </strong> {{$ctrl.movie.overview}}</p>\n      <p><strong>Note obtenue: </strong> {{$ctrl.movie.vote_average}}/10</p>\n      <p ng-repeat="prod_country in $ctrl.movie.production_countries">\n        <flag country="{{ prod_country.iso_3166_1 }}" size="32"></flag> {{ prod_country.name }} </p>\n      <poster movie="$ctrl.movie"></poster>\n    </div>\n  </div>\n</div>'),e.put("app/component/poster.html",'<div class="poster">\n      <a ui-sref="app.movie({movieId: $ctrl.movie.id})"> \n            <img ng-if="$ctrl.movie.poster_path" ng-src="https://image.tmdb.org/t/p/w185/{{$ctrl.movie.poster_path}}" alt="Description">\n            <img ng-if !="$ctrl.movie.poster_path" ng-src="http://loremflickr.com/185/252/cars" alt="img">\n      </a>\n</div>\n<!-- onerror="this.src=\'http://loremflickr.com/185/252/cars\'"-->')}]),angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-00cb8a9fbb.js.map
