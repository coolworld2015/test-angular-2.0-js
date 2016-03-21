(function () {
    var NameService = function () {
    };

    NameService.prototype.greeting = function () {
        return 'Eduard Tkachuk';
    };

    var HeroService = function () {
        this.heroes = [
            {"id": 11, "name": "Mr. Nice"},
            {"id": 12, "name": "Narco"},
            {"id": 13, "name": "Bombasto"},
            {"id": 14, "name": "Celeritas"},
            {"id": 15, "name": "Magneta"},
            {"id": 16, "name": "RubberMan"},
            {"id": 17, "name": "Dynama"},
            {"id": 18, "name": "Dr IQ"},
            {"id": 19, "name": "Magma"},
            {"id": 20, "name": "Tornado"}
        ];
    };

    HeroService.prototype.getHeroes = function () {
        return this.heroes;
    };

    var MyName = ng.core
        .Component({
            selector: 'my-name',
            providers: [NameService],
            template: '<div>{{greeting}}</div>'
        })
        .Class({
            constructor: [NameService, function (service) {
                this.greeting = service.greeting();
            }]
        });

    var Heroes = ng.core
        .Component({
            selector: 'heroes',
            providers: [HeroService],
            template: '<table>' +
            '<tr *ngFor="#hero of heroes" (click)="onSelect(hero)">' +
            '<td>{{hero.id}}</td>' +
            '<td>{{hero.name}}</td>' +
            '</tr>' +
            '</table>'
        })
        .Class({
            constructor: [HeroService, function (service) {
                this.heroes = service.getHeroes();
            }]
        });

    var app = ng.core
        .Component({
            selector: 'my-app',
            directives: [Heroes, MyName],
            template: '<h1>Hello Angular 2 !!!</h1>' +
            '<heroes></heroes><br>' +
            '<my-name></my-name>'
        })
        .Class({
            constructor: function () {
            }
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app);
    });
})();