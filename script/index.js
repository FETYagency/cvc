const btn = document.querySelector("[type='submit']");

const inputs = document.querySelectorAll("input");
const owner = document.getElementById("owner");
const ownerNumber = document.getElementById("ownerNumber");
const exp = document.querySelectorAll(".double_inputs>input");
const cvc = document.getElementById("CVC");


const ownerNumber_error = document.querySelector(".ownerNumber_Error");
const exp_Error = document.querySelector(".exp_Error");
const cvc_Error = document.querySelector(".cvc_Error");

const errorMsg = document.querySelectorAll("[class*=_Error]");                    
errorMsg.forEach(e=>e.style.display="none"); 


btn.disabled=true;



const inputsWrapper = document.querySelector(".form__wrapper");
const wrapperContent = document.querySelectorAll(".form__wrapper>div")


inputs.forEach((e)=>{
    e.addEventListener("input", ()=>{ 
        const accessibility=[];
        
        const firstRegex = /^(?![A-Za-z])[0-9]{16}(?<![A-Za-z])$/;
        const secondeRegex =/^\d{2}$/;
        const thirdRegex = /^\d{3}$/;
        
        if(firstRegex.test(ownerNumber.value)){
            accessibility.push(true);
        }else{
            accessibility.push(false);
        }
        if(thirdRegex.test(cvc.value)){
            accessibility.push(true);
        }else{
            accessibility.push(false);
        }

        for (let i = 0; i < exp.length; i++) {
            if(secondeRegex.test(exp[i].value)){
                accessibility.push(true)
            }else{
                accessibility.push(false)
            }
        }
        console.log(accessibility)

        for(let i = 0; i < accessibility.length; i++){
            if(accessibility[i]===false){
                btn.disabled=true;
                break;
            }else{
                btn.disabled=false;
            }
        }

        if(firstRegex.test(ownerNumber.value)===false){
            ownerNumber.style.borderColor="red";
            ownerNumber.style.borderImage="none";
            ownerNumber_error.style.display="block";
        }else{
            ownerNumber.style.borderImage="linear-gradient(to bottom,hsl(249, 99%, 64%), hsl(278, 94%, 30%))";
            ownerNumber.style.borderImageSlice="1";
            ownerNumber_error.style.display="none";
        }


        for(let i = 0; i<exp.length; i++){
            if(secondeRegex.test(exp[i].value)===false || exp[i].value===""){
                exp[i].style.borderColor="red";
                exp[i].style.borderImage="none";
            }else{
                exp[i].style.borderColor="grey";
                exp[i].style.borderImage="linear-gradient(to bottom,hsl(249, 99%, 64%), hsl(278, 94%, 30%))";
                exp[i].style.borderImageSlice="1";
            }
        }
        if(exp[0].value==="" || exp[1].value==""){
            exp_Error.style.display="block";
        }else{
            exp_Error.style.display="none";
        }

        if(thirdRegex.test(cvc.value)===false){
            cvc.style.borderColor="red";
            cvc.style.borderImage="none";
            cvc_Error.style.display="block";
        }else{
            cvc.style.borderImage="linear-gradient(to bottom,hsl(249, 99%, 64%), hsl(278, 94%, 30%))";
            cvc.style.borderImageSlice="1";
            cvc_Error.style.display="none";
        }
    })
})

document.forms[0].addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Display the thank you message
    const valid = document.createElement('img');
    valid.src="images/icon-complete.svg";
    const header = document.createElement("h1");
    header.innerHTML=`<p class='thankU_header'>thank you !</p>`;
    const para = document.createElement("p");
    para.textContent=`We’ve added your card details`;
    
    wrapperContent.forEach(e=>e.remove())
    inputsWrapper.append(valid);
    inputsWrapper.append(header);
    inputsWrapper.append(para);
  
    // Disable the submit button to prevent multiple submissions
    btn.disabled = true;
});

console.log(document);
