(function () {
    var $g_examples = document.querySelector('#examplesList');

    function init() {
        bindEvents();
    }

    function bindEvents() {
        document.querySelector('#showExamples').addEventListener('click', showExamples);
        document.querySelector('html').addEventListener('click', hideExamples);
    }

    function showExamples(event) {
        event = event || window.event;

        event.stopPropagation();
        event.preventDefault();


        if (!$g_examples.isVisible) {
            $g_examples.style.display = 'block';
            $g_examples.isVisible = true;
        } else {
            $g_examples.style.display = 'none';
            $g_examples.isVisible = false;
        }
    }

    function hideExamples() {
        $g_examples.style.display = 'none';
    }

    init();
})();