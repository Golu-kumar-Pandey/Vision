function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,

    };
    const serviceID ="service_0gzdhpy";
    const templateID ="template_k8jyj6i"
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("mobile").value ="";
            console.log(res);
            alert("your message sent successfully");
    
    
        }
    )
    .catch((err)=> console.log(err));
}
