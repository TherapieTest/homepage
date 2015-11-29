(function () {
    angular.module('ng-smooth-scroll', [])
    .directive('ngSmoothScroll', [function () {

        return {
            restrict: 'A',
            scope: {
              duration: "@",
              offset: "@"
            },
            link: function (scope, element) {
                console.log('[smoothScrol] init');

                var trigger = angular.element('.scroll-to', element);

                trigger.on('click', function () {
                    var $this = angular.element(this),
                        targetHref = $this.attr('href'),
                        targetLocation = $("a[name=" + targetHref.slice(1) + "]");

                    $('html, body').animate({
                        scrollTop: targetLocation.offset().top-scope.offset
                    }, 1000);

                    return true;
                });
            }
        }
    }]);
}());
