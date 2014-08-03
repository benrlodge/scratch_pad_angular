function ItemsCtrl($scope) {
    // NOTE: I'm not sure there is other ways to avoid "$apply already in progress" (https://coderwall.com/p/ngisma)
    $scope.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
    $scope.items = [];
    var firebase = new Firebase("https://hiroshi.firebaseio-demo.com/items");
    $scope.addItem = function () {
        firebase.push({"content": $scope.itemContent})
        $scope.itemContent = '';
    };
    $scope.removeItem = function () {
        var item = this.item;
        firebase.child(item[".name"]).remove();
    };
    firebase.on("child_added", function(addedSnap) {
        var item = {
            ".name": addedSnap.name(),
            "content": addedSnap.val().content
        };
        $scope.safeApply(function() {
            $scope.items.push(item);
        });
        firebase.child(addedSnap.name()).on("value", function(valueSnap) {
            $scope.safeApply(function() {
                if (valueSnap.val()) {
                    item.content = valueSnap.val().content;
                } else {
                    var idx = -1;
                    $scope.items.forEach(function(e, i) {
                        if (e[".name"] == valueSnap.name()) {
                            idx = i;
                            return;
                        }
                    });
                    if (idx > -1) {
                        $scope.items.splice(idx, 1);
                    }
                }
            });
        });
    });
    $scope.$watch("items", function(newItems, oldItems) {
        // TODO: How do I check which item is updated in a better way?
        newItems.forEach(function(newItem) {
            oldItems.forEach(function(oldItem) {
                if (newItem[".name"] == oldItem[".name"] && newItem.content != oldItem.content) {
                    firebase.child(newItem[".name"]).update({"content": newItem.content});
                }
            });
        });
    }, true);
}
