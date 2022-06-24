function printMain() {
    const initPage = document.body.innerHTML;
    var sizeValue = document.getElementById("print_size");
    var value = sizeValue.options[sizeValue.selectedIndex].value;


    function beforePrint() {
        document.body.innerHTML = document.getElementById("resumee").outerHTML;
        document.getElementById("resumee").classList.add(value);
    }
    function afterPrint() {
        document.body.innerHTML = initPage;
    }
    function beforePrintHandler() {
        for (let id in Chart.instances) {
            Chart.instances[id].resize();
        }
    }
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('beforeprint', beforePrintHandler);
    window.print();
    window.addEventListener('afterprint', afterPrint());
}