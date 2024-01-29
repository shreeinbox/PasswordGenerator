const letters = ["A",
"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]



function generatePasswords(){
    let randomIndex;
    let objPswd1;
    let objPswd2;
    const passwordlength = 15;
    let password1='';
    let password2='';

    for(i=0; i<passwordlength; i++){
        randomIndex = Math.floor (Math.random() * letters.length);
        password1 += letters[randomIndex]
    }

    objPswd1 = document.getElementById("pswd1")
    objPswd1.textContent = password1

    for(i=0; i<passwordlength; i++){
        randomIndex = Math.floor (Math.random() * letters.length);
        password2 += letters[randomIndex]
    }

    objPswd2 = document.getElementById("pswd2")
    objPswd2.textContent = password2

}


