 $(function(){
            $('#select').click(function(){
                $('#sel-option').show();        
            });
            $('#sel-option a').click(function(e){
                $('#select').text($(this).text());
                $('#sel-option').hide(); 
                $(this).addClass('current');
                e.preventDefault();
            })
        })

        $('.off').click(function(e){
    
            $('.onn').css("display","block");

            $('.rightside').css('right', '-20px')

            $('.off').css("display","none")
        })

        $('.onn').click(function(e){
    
            $('.off').css("display","block");

            $('.rightside').css('right', '-100%')

            $('.onn').css("display","none");

        })

        $('.menu-btn').click(function(e){
            $('user-card').css('left', '20%');

            $('.menu-btn').css("display","none");

            $('.cancel-btn').css("display","block");
        })

        $('.cancel-btn').click(function(e){
            
            $('user-card').css('left', "-100%");

            $('.menu-btn').css("display","block");

            $('.cancel-btn').css("display","none");
        })

        const navbar = document.querySelector(".leftside");

        const menuBtn = document.querySelector(".left-side");

        const cancelBtn = document.querySelector(".close-btn");

        menuBtn.onclick = ()=>{

            $('.leftside').css('left', 0)

        }

        cancelBtn.onclick = ()=>{

            $('.leftside').css('left', '-200%')

        }

