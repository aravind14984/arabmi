let a=document.getElementById('height'),
    b=document.getElementById('weight'),
    c=document.getElementById('result'),
    d=document.getElementById('status');
let e=document.getElementById('$1');
document.querySelector('.aru').style.display='none';
document.querySelector('img').style.display='none';
e.addEventListener('submit',calculation);
function calculation(e){

    document.querySelector('img').style.display='block';
    document.querySelector('.aru').style.display='none';
    window.setTimeout(warnora1,2000);
    
    if(a.value<0 || b.value<0)
    {
        window.alert('ht and wt cannot be -ve');
    }
    let x=parseFloat((a.value)/((b.value)));
    c.value=x;
    if(isFinite(x) && x>0)
    {
        if(x>20 )
        {
            d.value='Perfect';
            d.style.background='green';
            d.style.color='yellow';

        }
        else if(x<20)
        {
            d.value='Take Care';
            d.style.background='red';

        }
        //document.querySelector('.aru').style.display='block';
    }
    else{
       window.setTimeout(warnora,3000);
    }
    e.preventDefault();

}
function warnora()
{
 let y=document.createElement('h3');
 y.innerText='please correct your thing';
 y.style.color='red';
 document.getElementById('$1').insertBefore(y,document.querySelector('label'));
}
function warnora1()
{
    document.querySelector('img').style.display='none';
    document.querySelector('.aru').style.display='block';
    
}