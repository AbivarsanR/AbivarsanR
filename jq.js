


        $ ("#img1").hide();
        $ ("#img2").hide();
        $("#img3").hide();
        $ ("#img1").fadeToggle(100);
        $("#img2").fadeToggle(700)
        $("#img3").fadeToggle(2000)
       
       
       $("#f").hide();
       $("#s").hide();
       $("#t").hide();
       $("#fo").hide();
       $("#fi").hide();
       $("#si").hide();
       $("#se").hide();
       $("#ei").hide();
       $("#ni").hide();
       $("#in").hide();       
    
       $("#f").show(2000);
       $("#s").show(2500);
       $("#t").show(3000);
       $("#fo").show(3500);
       $("#fi").show(4000);
       $("#si").show(4500);
       $("#se").show(5000);
       $("#ei").show(5500);
       $("#ni").show(6000); 
       $("#in").show(6500);      
    
       
        
        
    
        //$("body").css("background-color","green");
        
        //function fun(){

            /*tr = document.getElementById("tree").value;
    
           for (let i = 0; i <100; i++) 
            {
                const nu = document.createElement("trf");
            
            document.getElementById("trf").innerText=nu;
        }
    
    }*/

   function mult(){

            let inputvalue = document.getElementById("input").value;
            document.getElementById('output').innerHTML ='';
                
            let number = parseInt(inputvalue);
            document.getElementById('output').innerHTML ='Number:'+number+'<br><br>';

            for(let i=1;i<=10;i++){
                let num = number*i;
                document.getElementById('output').innerHTML += number + ' x ' + i + ' = ' + num + '<br>';
                
                console.log(num);

                
                
            }

            
                
   }
       





function reset(){
  Input_1 = document.getElementById("input1").value;
  Input_2 = document.getElementById('input2').value;

   var input={
    email:'abivarsan@gmail',
    password : '1234'
   };

  if(Input_1 == input.email && Input_2 == input.password )
  {
  document.getElementById('inputvalue').innerHTML="";
  window.location.href='index1.html';
  }
  else
  {
    
    
   alert('Email or password is incorrect!');
  }

}

    
    

