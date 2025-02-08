function emailRegister(){
    const email=document.querySelector(".newsletter-email").value;
    const url=document.querySelector(".newsletter-url").value;
    $.ajax({
        method: "POST",
        content_type: "application/json",
        url: url,
        data: JSON.stringify(
            { "email": email}
        )
    }).done(function( msg ) {
        let pureData =JSON.parse(JSON.stringify(msg));
        console.log(pureData);
		let resp = pureData['response'];;
        
        // console.log(pureData)
        // Error Handler : 
		if(resp=='fail'){
     
            alertify.error(message)
		}
        
        // Success Handler : 
		if(resp=='success'){
            document.querySelector("#offer-email").value=' '
            document.querySelector("#newsletter-email").value=' ';
		}
	});
}


ratings=document.querySelector(".rating-val").value
pack=document.querySelector(".pack-ratings");
console.log(pack,ratings)
pack.style.width=`${ratings*20}%`;
