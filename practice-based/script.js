function button()
{
    let strEm = document.getElementById("textlog").value;
    let strPa = document.getElementById("passlog").value;
    let boollog = false;
    let boolpas = false;
    console.log(strEm);
    if (strEm.length == 0)
    {
        document.getElementById('at').innerHTML = "Это полне не может быть пустым";
        document.getElementById('blocklog').style.border = "0.2vmin solid red";
        document.getElementById('blocklog').style.boxShadow = "0 0.4vmin red";
    }
    else if (strEm.indexOf('@') == -1 || strEm.indexOf('.') == -1 || (strEm.indexOf('@') > strEm.indexOf('.')) || (strEm.indexOf('@') == 0) || ((strEm.indexOf('.')-strEm.indexOf('@')) == 1) || ((strEm.length-strEm.indexOf('.')) == 1))
    {
        document.getElementById('at').innerHTML = "Введите правильный адрес";
        document.getElementById('blocklog').style.border = "0.2vmin solid red";
        document.getElementById('blocklog').style.boxShadow = "0 0.4vmin red";
    }
    else
    {
        document.getElementById('at').innerHTML = "";
        document.getElementById('blocklog').style.border = "0.2vmin solid rgb(122,122,122)";
        document.getElementById('blocklog').style.boxShadow = "0 0.4vmin rgb(122,122,122)";
        boollog = true;
    }
    
    if (strPa.length == 0)
    {
        document.getElementById('ap').innerHTML = "Это полне не может быть пустым";
        document.getElementById('blockpas').style.border = "0.2vmin solid red";
        document.getElementById('blockpas').style.boxShadow = "0 0.4vmin red";
    }
    else
    {
        document.getElementById('ap').innerHTML = "";
        document.getElementById('blockpas').style.border = "0.2vmin solid rgb(122,122,122)";
        document.getElementById('blockpas').style.boxShadow = "0 0.4vmin rgb(122,122,122)";
        boolpas = true;
    }
    
    if (boollog == true && boolpas == true)
    {
        window.open('profile.html');
    }
}