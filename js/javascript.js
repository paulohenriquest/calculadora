var input = document.querySelector(".input-campo"),
    btn = document.querySelector("number"),
    operador = document.querySelectorAll("nn");

    for(var i = 0; i < btn.length; i++){
        document.onkeypress = function(event){
            var key = event.charCode;
            // console.log(key)
            for(var e = 0; e <= 10; e++){
                if(key === (48+e)){
                    resultado.innerHTML += e;
                }
            }
            switch(key){
                case 42:
                    resultado.innerHTML +="*";
                break;
                    
                case 43:
                    resultado.innerHTML +="+";
                break;

                case 45:
                    resultado.innerHTML +="-";
                break;

                case 46:
                    resultado.innerHTML +=".";
                break;

                case 47:
                    resultado.innerHTML +="/";
                break;

                case 61:
                    var equacao = input.innerHTML;
                    if(equacao) {
                        try {
                            input.innerHTML = eval(equacao);   
                        } catch (e) {
                            console.log(equacao);
                            alert('Deu um erro');
                        }
                    }
                break;
                case 67: 
                    resultado.innerHTML = ""
                break;
                case 99:
                    resultado.innerHTML = ""
                break;
                default:
                    console.log("teste");
                break;
            }
        };
        btn[i].addEventListener('click', function(){
            var inputVal = input.innerHTML;
            btnVal = this.innerHTML;
            switch(btnVal){
                case "c":
                    resultado.innerHTML = "";
                break;
                case "=":
                    var equacao = inputVal;
                    if(equacao) {
                    try {
                        input.innerHTML = eval(equacao);   
                    } catch (e) {
                        alert('Deu um erro');
                    }
                }
                break;
                default:
                    input.innerHTML += inputVal;
                break;
            }
        })
    }
