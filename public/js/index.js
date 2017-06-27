function sendData(){
    var txt = $("#text").val();
   $.post("/test", {data: txt}, function(result){

       console.log(result);
        $("div1").html(
            '<div>'+result.name+'</div><br>'+
            '<div>'+result.hero+'</div><br>'+
            '<div>'+result.type+'</div><br>'+
            '<div>'+result.episode+'</div><br>'+
            '<div>'+result.date+'</div><br>'+
        );
   });
}

$("#btn").click(sendData);
