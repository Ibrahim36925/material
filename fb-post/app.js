var div1 = document.getElementById("div1")
var para = document.getElementById("para")
var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var text = "";

function postingValue(){
    var val = document.getElementById("textArea1").value;
    var postDate = new Date();
    var time = postDate.toLocaleTimeString().split("");
    time.splice(4, 3);
    var date = arr[postDate.getMonth()] + " " + postDate.getDate() + " at " + time.join("");
if (val !== "") {
    
    document.getElementById("textArea1").value = "";
    document.getElementById("main").innerHTML += `
    
    <div class="post">


    <div class="post-sec">
    <img src="img/IMG-20220227-WA0019.jpg" width="40px" height="40px" class="image2" alt="">
    <div class ="time">
    <p class="name1">Ibrahim Ahmed</p>
    <p id="time">${date}</p>
    </div>
    <i onclick="deletePost()" id="option" class="fa-solid fa-trash"></i>
</div>
<div class="bgPosition" ${text}>
<p>
    ${val}
</p>
</div >
<div class="like-comment-sec">
<div onclick="thumbChange()" class="like">
    <i class="fa-regular fa-thumbs-up"></i>Like
</div>
<div class="comment">
    <i class="fa-solid fa-comment"></i>
    Comment
</div>
</div>
<div id="comment-box">
<img src="img/IMG-20220227-WA0019.jpg" width="40px" height="40px" class="image2" alt="">
<input type="text" placeholder="Write a comment..." id="comment-text" />
<i onclick="onShare()" id="commented" class="fa-solid fa-share"></i>
</div>
<div id="comment">
</div>
        
            </div>`

      
        
//        document.getElementById("textArea1");
//   var div1= document.getElementById("div1");
//   var div = document.createElement("div");
//   div.classList.add = "post"
//   var text = document.createTextNode(val.value);
//   div.appendChild(text);
  
//    div1.appendChild(div); 
//    para.style.color = "#000"
//    para.style.marginLeft = 30 + "px"
//    para.style.fontFamily = "my-font"
//    para.style.fontSize = 20 + "px"
//    para.style.marginTop = 10 + "px"
//     div1.style.display = "block";







    

}   
    

  
else{
    var post = document.getElementById("error")
    post.innerHTML = "!Please enter a valid post"
    post.style.color = "red"
    post.style.textAlign = "center"
 
}

setTimeout(function postingValue(){
    var post = document.getElementById("error").innerHTML = ""
    
},2000)
}




function onShare() {
    var commentVal = event.target.previousElementSibling.value;
    var gettingCommentList = event.target.parentNode.nextElementSibling;
    if (commentVal !== "") {
        event.target.previousElementSibling.value = "";
        gettingCommentList.innerHTML += `
        <div class="comment-list">
            <p>${commentVal}</p><i onclick="deleteComment()" id="bin" class="fa-solid fa-trash"></i>
        </div>
`;
    }
    event.target.previousElementSibling.focus();
}



function likeIn() {
    var icon = document.getElementById("icon");
    icon.style.color = "blue";
}
function deletePost() {
    event.target.parentNode.parentNode.remove();
}

function deleteComment() {
    event.target.parentNode.remove()
}
function thumbChange() {
    if (event.target.classList.contains("fa-thumbs-up")) {
        if (event.target.classList.contains("fa-regular")) {
            event.target.classList.remove("fa-regular")
            event.target.classList.add("fa-solid")
        } else if (event.target.classList.contains("fa-solid")) {
            event.target.classList.remove("fa-solid")
            event.target.classList.add("fa-regular")
        }
    } else if (event.target.children[0].classList.contains("fa-thumbs-up")) {
        if (event.target.children[0].classList.contains("fa-regular")) {
            event.target.children[0].classList.remove("fa-regular")
            event.target.children[0].classList.add("fa-solid")
        } else if (event.target.children[0].classList.contains("fa-solid")) {
            event.target.children[0].classList.remove("fa-solid")
            event.target.children[0].classList.add("fa-regular")
        }
    }
}