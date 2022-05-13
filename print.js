function printMain(){
    const initPage = document.body.innerHTML;
    const faV4 = document.getElementById("fa-v4-font-face");
    const faV5 = document.getElementById("fa-v5-font-face");
    const faV4Shim = document.getElementById("fa-v4-shims");
    const faMain = document.getElementById("fa-main");
    var sizeValue = document.getElementById("print_size");
    var value = sizeValue.options[sizeValue.selectedIndex].value;


    function beforePrint(){
        document.body.innerHTML = document.getElementsByTagName("main")[0].outerHTML + faV5.outerHTML + faV4.outerHTML + faV4Shim.outerHTML + faMain.outerHTML;
        document.getElementsByTagName("main")[0].classList.add(value);
        console.log(faV5.outerHTML);
    }
    function afterPrint(){
        document.body.innerHTML = initPage;
    }
    window.onbeforeprint = beforePrint;
    window.print();
    window.onafterprint = afterPrint();
}