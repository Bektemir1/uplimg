$(document).ready(()=>{
   $('#modal-btn').click(()=>{
        $('.upload-section').css({'display':'block'})
   })
   $('#close').click(()=>{
       $('.upload-section').css({"display": "none"})
   })
})

$(document).ready(function() {
  $('.form img').click(()=>{
    $('#file-upload').click();
  })
  $('.error-img').click(()=>{
    $('#file-upload').click();
  })
  $('.last-form img').click(()=>{
    $('#file-upload').click();
      
  })


  const handleFiles = (files) => {
  const selectedFiles = [...files];
  selectedFiles.map((item)=>{
        const fileName = item.name;
        const fileSize = item.size;
        checkExtenstion(fileName)
        $('.names').text(fileName).css({"font-weight":"600"});
        $('.size').text(fileSize+" KB");
        $('.progress-name').text(fileName);
        $('.info-img').css({"display": "inline-block"})
        $('.file-info').css({"display":"flex"})
  })
  
}
$('#file-upload').change(function(e){
      handleFiles(e.target.files)
       });
  });

  function checkExtenstion(file){
    const arrayFile = file.split('');
    const indexDot = arrayFile.indexOf('.');
    const sliceArray = arrayFile.slice(indexDot).join('')
    if(sliceArray !== '.docx'){
      $('.error-block').css({"display": "block"})
      $('.form').css({"display": "none"})
      $('.last-form').css({"display":"none"})
      }
      else{
       
        move()
      }
  }

  var i = 0;
   let count = 0;
   function move() {
     if (i == 0) {
       i = 1;
       var elem = document.getElementById("progress-bar");
       var id = setInterval(frame, 100);
       var width = 1;
       function frame() {
         if (width >= 101) {
           $('.success-block').css({"display":"block"})

            setTimeout(()=>{
             $('.success-block').css({"display":"none"})
             $('.last-form').css({"display":'block'})
          

             },2000)
           clearInterval(id);
           $('.progressing').css({"display": "none"})
           i = 0;
           width=0;
           count=0;
      }
       else {
       
        
           width+=5;
           count+=4;
           elem.style.width = width + "%";
           document.getElementById('percent').innerHTML = count;
           $('.form').css({"display": "none"})
           $('.error-block').css({"display": "none"})
           $('.last-form').css({"display":"none"})
           $('.progressing').css({"display": "block"}) 
           
           $('.close-progress').click(()=>{
            $('.form').css({"display": "block"})
            $('.error-block').css({"display": "none"})
            $('.last-form').css({"display":"none"})
            $('.progressing').css({"display": "none"}) 
           })
           
         }
        

       }
     }
   }
