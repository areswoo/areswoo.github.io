function printMain(){
    const initPage = document.body.outerHTML;
    function beforePrint(){
        document.body.innerHTML = document.getElementsByTagName("main")[0].outerHTML;
    }
    function afterPrint(){
        document.body.innerHTML = initPage;
    }
    window.onbeforeprint = beforePrint;
    window.print();
    window.onafterprint = afterPrint;
}