function printMain(){
    var initPage = document.body.innerHTML;
    function beforePrint(){
        document.body.innerHTML = document.getElementsByTagName("main")[0].innerHTML;
    }
    function afterPrint(){
        document.body.innerHTML = initPage;
    }
    window.onbeforeprint = beforePrint;
    window.print();
    window.onafterprint = afterPrint;
}