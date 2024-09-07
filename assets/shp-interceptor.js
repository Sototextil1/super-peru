(function() {
    if (window.shpConfigAsync) {
        window.Promise.all(window.shpConfigPromises).then(function(data) {
            data[0]();
        });
    } else {
        window.shpConfigAsync = true;
    }
})();
