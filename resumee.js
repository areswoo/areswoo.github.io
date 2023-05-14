window.onload = function () {
    var initLang = getLang();
    changeLang(initLang);
}

function selectLang(){
    var selectedLang = document.getElementById("language");
    var langValue = selectedLang.options[selectedLang.selectedIndex].value;
    
    changeLang(langValue);
}

function changeLang(lang) {
    if (lang == "es") {
        for (var i = 0; i < titles.length; i++) {
            document.getElementById(titles[i]).innerHTML = titles_esp[i];
        }
        for (var i = 0; i < items.length; i++) {
            document.getElementById(items[i]).innerHTML = txt_esp[i];
        }
    }
    else if (lang == "en") {
        for (var i = 0; i < titles.length; i++) {
            document.getElementById(titles[i]).innerHTML = titles_eng[i];
        }
        for (var i = 0; i < items.length; i++) {
            document.getElementById(items[i]).innerHTML = txt_eng[i];
        }
    }
    /*else if(lang == "ko"){
        for(var i = 0; i < titles.length; i++){
            document.getElementById(titles[i]).innerHTML = titles_kor[i];
        }
        for(var i = 0; i < items.length; i++){
            document.getElementById(items[i]).innerHTML = txt_kor[i];
        }
    }*/
    else {
        for (var i = 0; i < titles.length; i++) {
            document.getElementById(titles[i]).innerHTML = titles_eng[i];
        }
        for (var i = 0; i < items.length; i++) {
            document.getElementById(items[i]).innerHTML = txt_eng[i];
        }
    }
}

function getLang() {
    var lang = navigator.language.split("-")[0];

    if (lang == "ko") {
        return "ko";
    }
    else if (lang == "es") {
        return "es";
    }
    else if (lang == "en") {
        return "en";
    }
    else {
        return "en";
    }
}
