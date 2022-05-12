function printMain(){
    const initPage = document.body.outerHTML;
    function beforePrint(){
        document.body.outerHTML = document.getElementsByTagName("main")[0].innerHTML;
    }
    function afterPrint(){
        document.body.outerHTML = initPage;
    }
    window.onbeforeprint = beforePrint;
    window.print();
    window.onafterprint = afterPrint;
}