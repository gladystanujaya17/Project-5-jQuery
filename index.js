$(document).ready(function(){
    //CLICK EVENT

    // //using tag name
    // $('p').click(function(){
    //     $(this).hide() //refers ke elementnya itu sendiri
    // }) -> global function, jadi dianggap kalau ada yg pakai p itu jd single, jd usahain pakai id

    //using id
    $('#one-click').click(function(){
        $(this).hide() //refers ke elementnya itu sendiri
    })

    //using class
    $('.oneClick').click(function(){
        $(this).hide() //refers ke elementnya itu sendiri
    })

    //action to other object
    $('#hide1').click(function(){
        $('.text1').hide() //refers ke elementnya itu sendiri
    })

    //double click
    $('#doubleClick').dblclick(function(){
        $(this).hide()
    })

    //Change Event
    $('.inputAddress').change(function(){
        $('.alertAddress').show()
    })

    //Blur Event
    $('.inputAddressBlur').change(function(){
        $('.alertAddressBlur').show()
    })

    //Event Data
    $('li').each(function(){
        $(this).on('click', {x:1}, function(event){
            alert("List " + $(this).index() + ". adalah data ke: " + event.data.x)
        })
    })

    //Prevent Default
    $('.link-disabled').click(function(e){
        e.preventDefault()
    })

    //Show
    $('.show').click(function(){
        $('.text3').show()
    })

    //Hide
    $('.hide').click(function(){
        $('.text3').hide()
    })

    //Toggle
    $('.toggle').click(function(){
        $('.text4').toggle()
    })

    //Animate
    //Memperkecil box
    $('.clickToSmall').click(function(){
        $('.box').animate({
            width: "100px",
            height: "100px",
            marginleft: "100px"
        }, 1000)
    })

    //Memperbesar box
    $('.clickToBig').click(function(){
        $('.box').animate({
            width: "300px",
            height: "300px",
            marginleft: "0px"
        }, 1000)
    })
})

//Mouse Position
$(document).mousemove(function(event){
    $('.pointerCount').text('X: ' + event.pageX + ', Y: ' + event.pageY)
})