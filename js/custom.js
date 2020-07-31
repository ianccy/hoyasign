  (function(){
    var trackArr = [25,50,75,95];
    var activeArr = [];
    document.addEventListener('scroll',function(e){
      var percent = Math.floor(((window.pageYOffset + window.innerHeight) / document.body.scrollHeight) * 100);
      trackArr.forEach(function(value,index){
        if(percent >= value){
          if(activeArr.indexOf(value) === -1){
            ga('send', 'event', 'post_scroll', value +'%',document.querySelector('title').textContent,{
              nonInteraction: true
            });
            activeArr.push(value);
          }
        }
      })
    });
  }());