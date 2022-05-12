function printMain(){
    const initPage = document.body.outerHTML;
    console.log(initPage);
    function beforePrint(){
        document.body.innerHTML = document.getElementsByTagName("main")[0].outerHTML;
    }
    function afterPrint(){
        document.body.innerHTML = initPage;
    }
    window.onbeforeprint = beforePrint;
    window.print();
    console.log(window.onafterprint = afterPrint);
    console.log(initPage);
}