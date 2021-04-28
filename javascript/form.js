
document.getElementById("sub_btn_han").addEventListener("click", function(event) {

    
    var form_handle = document.getElementById("sig_form");

    var nme = document.getElementById("name").value;
    var contnum = document.getElementById("con_number").value;
    var emid = document.getElementById("exampleInputEmail1").value;
    var pswd = document.getElementById("exampleInputPassword1").value;
    var conf_pswd = document.getElementById("exampleconfirmInputPassword1").value;
    // console.log(nme,contnum,emid,pswd,conf_pswd);

    if(pswd != conf_pswd){
        alert("Sorry try again!!!");
        form_handle.reset();
    }
    else{
        alert("Thanks for signing up with us!!!");
    }

    event.defaultPrevented();

  });


  document.getElementById("log_btn_han").addEventListener("click", function(event) {

    
    var form_handle = document.getElementById("log_form");

    var emid = document.getElementById("exampleInputEmail1").value;
    var pswd = document.getElementById("exampleInputPassword1").value;
    alert("you are succesfully loggen in!!!!");
  

    event.defaultPrevented();

  });


