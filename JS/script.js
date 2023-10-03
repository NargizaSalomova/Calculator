let result = document.getElementById("display");

let insert = (number) => {
    result.value+=number;
}

let equal = () =>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        result.value='error'
    }
}

function clean(){
    result.value="";
}

