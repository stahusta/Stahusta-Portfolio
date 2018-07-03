var zoomPicture = null;
var closeZoom = null;
$(document).ready( function () {
    //Add picture paths here:
    var picturesToZoom = [
        {
            url :  'images/ui/1.png',
        },
        {
            url :  'images/ui/2.png',
        },
        {
            url :  'images/ui/3.png',
        },
        {
            url :  'images/ui/4.png',
        },
        {
            url :  'images/ui/5.png',
        },
        {
            url :  'images/ui/6.png',
        },
        {
            url :  'images/ui/7.png',
        },
        {
            url :  'images/ui/8.png',
        },
        {
            url :  'images/ui/9.png',
        },
        {
            url :  'images/ui/10.png',
        },
        {
            url :  'images/ui/11.png',
        },
        {
            url :  'images/ui/12.png',
        },
        {
            url :  'images/ui/13.png',
        },
        {
            url :  'images/ui/14.png',
        },
        {
            url :  'images/ui/15.gif',
        },
        {
            url :  'images/ui/16.png',
        },
        {
            url :  'images/ui/17.gif',
        },
        {
            url :  'images/ui/18.png',
        },
                {
            url :  'images/ui/19.png',
        },
        {
            url :  'images/ui/20.png',
        },
        {
            url :  'images/ui/21.png',
        },
        {
            url :  'images/ui/22.png',
        },
        {
            url :  'images/ui/23.png',
        },
        {
            url :  'images/ui/24.png',
        },
        {
            url :  'images/ui/25.png',
        },
        {
            url :  'images/ui/26.png',
        },
        {
            url :  'images/ui/27.png',
        },
         {
            url :  'images/ui/28.png',
        },
        {
            url :  'images/ui/29.png',
        },
        {
            url :  'images/design/d1.png',
        },
    ];
    
    zoomPicture = function (index) {
        $('#zoom-popup').find('img')
            .attr('src', picturesToZoom[index-1].url)
        $('#zoom-popup').fadeIn(300);
    }
    
    closeZoom = function () {
        $('#zoom-popup').fadeOut(300);
    }
});