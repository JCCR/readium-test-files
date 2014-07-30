(function() {
    // var rsoSupported = typeof navigator.epubReadingSystem != 'undefined';
    var rso = navigator.epubReadingSystem;
    if (!rso) {
        //bail out, all tests default to fail in the html
        return;
    }
    
    var name = navigator.epubReadingSystem.name;
    var version = navigator.epubReadingSystem.version;
    var layoutStyle = navigator.epubReadingSystem.layoutStyle;

    window.onload = function() {
        document.getElementById('rso-010-result').innerHTML = 'PASS';
        if (name) {
            document.getElementById('rso-020-result').innerHTML = "The name field is '" + name + "'.";
        }
        if (version) {
            document.getElementById('rso-030-result').innerHTML = "The version field is '" + version + "'.";
        }
        if (layoutStyle) {
            document.getElementById('rso-040-result').innerHTML = "The layoutStyle field is '" + layoutStyle + "'.";
        }
        var features10 = ["dom-manipulation", "layout-changes", "touch-events", "mouse-events", "keyboard-events", "spine-scripting"];
        for (var i = 0; i < features10.length; i++) {
            var feature = features10[i];
            var ret = navigator.epubReadingSystem.hasFeature(feature);
            document.getElementById(feature).innerHTML = ret;
        }
    }
})();
