let tiktak = 0;
document.addEventListener("DOMContentLoaded", function(){
    let HP = document.querySelectorAll('.numberOfHP');

    function tik(){
        HP.forEach(function(HPall){
            HPall.classList.add('hide');
        })
        tiktak = 1;
        check();
    }
    function tak(){
        HP.forEach(function(HPall){
            HPall.classList.remove('hide');
        })
        tiktak = 0;
        check();
    }
    function check(){
        if(tiktak == 0){
            setTimeout(tik, 1000);
        }if(tiktak == 1){
            setTimeout(tak, 1000);
        }
    }
    check();
});