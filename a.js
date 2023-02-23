set(); 

function set(){ 
    var items = document.getElementById("tweet"); 
    var posted = document.getElementById("post");
    items.innerHTML = "";
    posted.value = ""; 

    if(localStorage.getItem("p_array")!== null){ 
        var p_array = JSON.parse(localStorage.getItem("p_array"));
        
    p_array.forEach((comment, index) => {
        
        tweet.insertAdjacentHTML(
            "afterbegin",
            `
            <br>
            <div class="tweet">
            <div class="tweet-header" style="border-width: 3px;
            border-style: double;
            border-image: linear-gradient(to right,yellow,#f9a01b, orange, red ) 1;">
            <img id="tweet-pic" src="as.jpeg"><br><br>
            <div class="text_area_div" style="margin-left: 20px;"><span>@NereousDacanay</span>
            
            <p> <br> 
              ` + 
        comment +  
        `&nbsp; <br> <button style="float:right;"  class="open" value="`+ 
        index + 
        `"><i class="fa fa-pencil-square-o" aria-hidden="true" style="font-size: 25px; width: 25px; height: 25px; "></i></button> 
        <button style="float:right;" onClick="del(` + 
        index + 
        `)"><i class="fa fa-trash" aria-hidden="true" style="font-size: 25px; width: 25px; height: 25px;"></i></button>
                   </p>
                   <br>
                    
                
                </div>
            </div>
        </div>  
    `
        );   
        });

    let appear = document.querySelectorAll(".open"); 
    appear.forEach(function (e) {
        e.addEventListener("click", function(){
            var p_array = JSON.parse(localStorage.getItem("p_array")); 
            console.log(p_array[this.value]);
            document.getElementById("post_update").value = p_array[this.value]; 
            document.getElementById("index").value = this.value; 
            p_modal.showModal(); 

        });
    });
    }
}


 var darkModeToggle = document.getElementById("dark-mode");
    darkModeToggle.addEventListener("click", function() {
    var textArea = document.getElementById("post");
  var body = document.body;
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    
    textArea.style.backgroundColor = "black";
    textArea.style.color = "white"  
    
    
  } else {
    body.classList.remove("dark-mode");
    textArea.style.backgroundColor = "white";
    textArea.style.color = "black"; 
    
  }
});


function edit(){ 
    let e_post = document.getElementById("post_update").value; 
    let index = document.getElementById("index").value; 
    let p_array = JSON.parse(localStorage.getItem("p_array")); 
    p_array[index] = e_post; 
    localStorage.setItem("p_array", JSON.stringify(p_array)); 
    e_post.value = ""; 
    index.value=""; 
    p_modal.close(); 
    set(); 
}
function del(index) { 
    p_array = JSON.parse(localStorage.getItem("p_array")); 
    p_array.splice(index,1); 
    localStorage.setItem("p_array",JSON.stringify(p_array));
    set(); 
}

function submit(){ 
    let p_array; 
    var items = document.getElementById("post").value;
    if(localStorage.getItem("p_array") == null ){ 
        p_array = [items]; 
        localStorage.setItem("p_array",JSON.stringify(p_array)); 
    } else { 
        p_array = JSON.parse(localStorage.getItem("p_array")); 
        p_array.push(items); 
        localStorage.setItem("p_array",JSON.stringify(p_array));
    }
    set();
}
let close = document.querySelector(".modal-btn");
let p_modal = document.querySelector(".p_modal"); 
close.addEventListener("click", function (e){ 
    console.log(e); 
    p_modal.close();
});
   






