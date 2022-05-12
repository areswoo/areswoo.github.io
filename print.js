function printMain(){
    const initPage = document.body.innerHTML;
    function beforePrint(){
        document.body.innerHTML = document.getElementsByTagName("main")[0].outerHTML;
    }
    function afterPrint(original){
        document.body.innerHTML = original;
        console.log(original);
    }
    window.onbeforeprint = beforePrint;
    window.print();
    window.onafterprint = afterPrint(initPage);
}