$(document).ready(function(){

    /* Anything that gets to the document
        will hide the dropdown 
    */
    $(document).click(function(){
        $("#download-matrix").hide();
    });

    /* Clicks within the dropdown won't make
    it past the dropdown itself */
    $("#download-matrix").click(function(e){
    e.stopPropagation();
    });

    // show the dropdown of downloads
    $("#download-dropdown").click(function(e){
    e.stopPropagation();
    $('#download-matrix').slideToggle();
    })

    // the list of supported items 
    ScrollRate = 40; // speed

    // scroller function
    function scrollDiv() {
        
        if (!ReachedMaxScroll) {
            DivElmnt.scrollTop = PreviousScrollTop;
            PreviousScrollTop++;
            
            ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight-DivElmnt.offsetHeight);
        }
        else {
            ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
            DivElmnt.scrollTop = 0;
        PreviousScrollTop  = 0;
     
        /*	DivElmnt.scrollTop = PreviousScrollTop;
            PreviousScrollTop--; */
        }
    }
    

    // pause scroll function    
    function pauseDiv() {
        clearInterval(ScrollInterval);
    }
    // continue scroll function
    function resumeDiv() {
        PreviousScrollTop = DivElmnt.scrollTop;
        ScrollInterval    = setInterval(scrollDiv, ScrollRate);
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('#navbar').addClass('floatingNav');
        } else {
            $('#navbar').removeClass('floatingNav');
        }
    });
})
