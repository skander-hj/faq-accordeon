var buttonn = document.getElementsByClassName("buttonn");


for (i=0;i < buttonn.length; i++)
{
    buttonn[i].addEventListener("click",function(){
        var text =this.nextElementSibling;
        if (text.style.display==="none"){
            text.style.display = "flex"
        }
        else{
            text.style.display= "none"
        }
    })
}