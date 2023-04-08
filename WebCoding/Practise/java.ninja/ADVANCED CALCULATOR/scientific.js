var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click', e=>{
        btntext=e.target.innerText;
        if(btntext=='×')
        {
            btntext='*';
        }
        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}

function sin()
{
    screen.value=Math.sin(screen.value)
}

function pi()
{
    screen.value=3.1415926535897932384626433832795;
}

function cos()
{
    screen.value=Math.cos(screen.value);
}

function log()
{
    screen.value=Math.log(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value);
}

function pow()
{
    screen.value=Math.pow(screen.value,2);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function e()
{
    screen.value=2.7182818284590452353602874713527;
}

function fact()
{
    var i, num, f;
    f=1
    num=screen.value
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;

    screen.value=f;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}