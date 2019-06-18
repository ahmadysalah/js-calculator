
const Btn=document.querySelectorAll('.numbers > div');
const typing= document.querySelector('#input-typ');
const result= document.querySelector('#input-result');
const Btn_dot=document.querySelector('.dot');
const opr="/*-+";
let history='';

//// lestener for all btn
Btn.forEach((Btn)=> {
  Btn.addEventListener('click', () => {
    //// get btn id's and put it in btn_id // 
    let btn_id=event.srcElement.id;
    switch(btn_id) {
    case 'equal':
        ///// go to the functhin and get answer         
       equal(history);
    break;
    case 'c':
        history='';
        typing.removeAttribute('value'); 
        result.removeAttribute('value'); 
        Btn_dot.removeAttribute('disabled');
    break;
    case 'back':
        history=history.substring(0, history.length - 1);
        typing.setAttribute('value',history);
        break;
    case '.':
        Btn_dot.setAttribute('disabled','disabled');
        
        /// for any btn click
        default:
         /// rols should be
        if((history[history.length-1]=='*'|| history[history.length-1]=='/' || history[history.length-1]=='+' || history[history.length-1]=='-') && (btn_id=='*'|| btn_id=='/' || btn_id=='+' || btn_id=='-'))
            {
               alert("Wrong, You Insert tow oprators")
            }   
             else{
                  if(btn_id=='*'|| btn_id=='/' || btn_id=='+' || btn_id=='-')
                  { ////// this is an operation should dot be not disabled
                  Btn_dot.removeAttribute('disabled');
                  }
                  //// lets typing
                  history+=btn_id;
                  typing.setAttribute('value',history);
                  }
                        }   
                        }
                      )});


///// function to get the result 
function equal(history)
  {
  //// chek if double operation
  if(check(history)){
  history=eval(history)
    if(history){
    ///// round the result
          history=Math.round(history*100)/100;
          result.setAttribute('value',history)
            /// if div by 0
            if (history=="Infinity" || history=="-Infinity"){
            alert("Wrong, You tries to divide by ZERO!")
            history='';
            typing.removeAttribute('value'); 
            result.removeAttribute('value'); 
            }
            }
            else {
            /// if press = without numbers
            history='';
            alert ("Wrong, You Dont Inter the numbers yet!");
               }
     }
  }

            /// cheker if duble opr
            function check(history){
            if (history[0]=="*" || history[0]=="/" || history[history.length-1]=='*' ||  history[history.length-1]=='/')
            {
              alert ("Wrong, you Insert wrong opration")
            }
            else { return true;}

            }