function printMain() {
    const initPage = document.body.innerHTML;
    var sizeValue = document.getElementById("print_size");
    var value = sizeValue.options[sizeValue.selectedIndex].value;


    function beforePrint() {
        document.body.innerHTML = document.getElementsByTagName("main")[0].outerHTML;
        document.getElementsByTagName("main")[0].classList.add(value);
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