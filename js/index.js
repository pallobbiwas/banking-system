/* log out part */
document.getElementById('log-out').addEventListener('click', function(){
    window.location.href='login.html'
});
//add and update deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositValue=document.getElementById('deposit-input');
    //convert string to float
    const depositValueNumber = parseFloat(depositValue.value);
   //find the replace value
   const pastValue = document.getElementById('past-value');
   const pastValueNumber = parseFloat(pastValue.innerText);
   //add old and new data
   const totalValue = depositValueNumber + pastValueNumber;
   //replace value
   pastValue.innerText = totalValue;
   //add to blance
   //find blance field
   const blanceInput = document.getElementById('blance-input');
   const blanceInputNumber = parseFloat(blanceInput.innerText);
   blanceInput.innerText = blanceInputNumber + depositValueNumber;
    


    //clear value
    depositValue.value = '';
    
});
//withdrao part
document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrowValue = document.getElementById('withdrow-input');
    const withdrowValueNumber = parseFloat(withdrowValue.value);
    console.log(withdrowValueNumber);
    const oldWithdrow = document.getElementById('old-withdrow');
    const oldWithdrowNumber = parseFloat(oldWithdrow.innerText)
   

    //blance pard
    const blanceInput = document.getElementById('blance-input');
    const blanceInputNumber = parseFloat(blanceInput.innerText);

    if(oldWithdrowNumber < blanceInputNumber){
        oldWithdrow.innerText = oldWithdrowNumber + withdrowValueNumber;


        blanceInput.innerText = blanceInputNumber - withdrowValueNumber;
    }else{
        alert('insuficient blance')
    }





    withdrowValue.value = '';
});