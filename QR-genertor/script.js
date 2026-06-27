const text=document.getElementById("input")
const sizes=document.getElementById("size")
const generate=document.getElementById("Generate") 
const Download=document.getElementById("Download") 

const qrbody=document.querySelector(".qr-body")

generate.addEventListener("click", (e)=>{
    e.preventDefault()
    text.value==="" || text.value===undefined ? alert("enter the text or URL"):generateQrcode()
});

sizes.addEventListener("change",(e)=>{
    sizes.value=e.target.value; 
})
function generateQrcode(){
    qrbody.innerHTML="";
    new QRCode(qrbody, {
    text: text.value,
    width: sizes.value,
    height: sizes.value,
    colorDark : "#000000",
    colorLight : "#b66be7",
    correctLevel : QRCode.CorrectLevel.H
});
}

Download.addEventListener("click",()=>{
    let img=document.querySelector(".qr-body img");
    if(img!==null){
        let imgAtri=img.getAttribute("src")
        Download.setAttribute("href",imgAtri)
    }
    else{
        Download.setAttribute("href",`${document.querySelector("canvas").toDataURL()}`);
    }
})
