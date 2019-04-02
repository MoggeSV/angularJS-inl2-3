app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/grid.view.html",
        controller: "angularController" 
    })

    .when("/gridview", { 
        templateUrl: "views/grid.view.html",
        controller: "angularController" 
    })
    
    .when("/listview", { 
        templateUrl: "views/list.view.html",
        controller: "angularController"
    })
})