jQuery('#contact-form').validate({

    rules:{
        name:"required",
        email:"required",
        password:{
          required:true,
          minlength:5
        },
      },messages:{

      }



});