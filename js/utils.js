var zoomPicture = null;
var closeZoom = null;
$(document).ready( function () {
    //Add picture paths here:
    var picturesToZoom = [
        {
            url :  'images/ui/1.jpg',
        },
        {
            url :  'images/ui/2.jpg',
        },
        {
            url :  'images/ui/3.jpg',
        },
        {
            url :  'images/ui/4.jpg',
        },
        {
            url :  'images/ui/5.jpg',
        },
        {
            url :  'images/ui/6.jpg',
        },
        {
            url :  'images/ui/7.jpg',
        },
        {
            url :  'images/ui/8.jpg',
        },
        {
            url :  'images/ui/9.jpg',
        },
        {
            url :  'images/ui/10.jpg',
        },
        {
            url :  'images/ui/11.jpg',
        },
        {
            url :  'images/ui/12.jpg',
        },
        {
            url :  'images/ui/13.jpg',
        },
        {
            url :  'images/ui/14.jpg',
        },
        {
            url :  'images/ui/15.gif',
        },
        {
            url :  'images/ui/16.jpg',
        },
        {
            url :  'images/ui/17.gif',
        },
        {
            url :  'images/ui/18.jpg',
        },
                {
            url :  'images/ui/19.jpg',
        },
        {
            url :  'images/ui/20.jpg',
        },
        {
            url :  'images/ui/21.jpg',
        },
        {
            url :  'images/ui/22.jpg',
        },
        {
            url :  'images/ui/23.jpg',
        },
        {
            url :  'images/ui/24.jpg',
        },
        {
            url :  'images/ui/25.jpg',
        },
        {
            url :  'images/ui/26.jpg',
        },
        {
            url :  'images/ui/27.jpg',
        },
         {
            url :  'images/ui/28.jpg',
        },
        {
            url :  'images/ui/29.jpg',
        },
        {
            url :  'images/ui/30.gif',
        },
        {
            url :  'images/ui/31.jpg',
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