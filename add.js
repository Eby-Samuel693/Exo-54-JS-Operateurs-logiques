let x = 1;
let y = 4;
let z = -1;

if(x < 2); {
    console.log("x est bien plus petit que 2!")
}
if(y > 3); {
    console.log("y est bien plus grand que 3!")
}
if(z < 0); {
    console.log("z est inferienre a 0")
}
if( x < 2 && y > 3 && z < 0);{
    console.log("les 3 condition sont réuni!")
}

if( x < 2 && y > 3 || z <2); {
    console.log("le 2 premiere OU la troisieme !")
}
let para = document.getElementById('P1')
para.innerText = ("x est plus petit que 2 et y plus grant que 0.z et inférienre a 0");