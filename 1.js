new Promise(function(resolve,reject){
    let script = document.createElement('script');
    script.src ='https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js';
    script.onload = () => resolve(script);
    document.head.append(script);
}).then(script=>{
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});
})



