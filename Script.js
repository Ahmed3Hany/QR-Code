
document.getElementById("generateBTN").addEventListener('click', function(){
    document.getElementById("qrcode").innerHTML = "";
    const qrcode = new QRCode(document.getElementById("qrcode"),{
        text:document.getElementById("txt").value,
        
        correctLevel:QRCode.CorrectLevel.H
    })
})
