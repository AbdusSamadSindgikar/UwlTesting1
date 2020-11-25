function test(){
    var a ="ABCDE";
    var b ="12344";
    var login = false;
    if(a.length > 5){
        alert('provide name')
    }
    
    else{

    document.getElementById('un').value = a;

    document.getElementById('pw').value = b;

    var bt=document.getElementById('btn');
    bt.click(); 
    }

    var login=localStorage.getItem('login');
    if(login=='true'){
        login = true;
    }else{
        login = false;
    }
    if(login){
        console.log(login)
    }
    
    
    
    
};