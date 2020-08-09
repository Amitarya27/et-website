const menubtn = document.querySelector('#menu');
const navbar = document.querySelector('#nav');
menubtn.onclick= function(){
    // if(navbar.style.left != "0px"){
    //     navbar.style.left = '0px';
    // }else{navbar.style.left = '-400px'}

    /*doing it this way just for practice!!*/
    navbar.style.left != '0px' ? navbar.style.left = "0px" : navbar.style.left = "-200px";
}