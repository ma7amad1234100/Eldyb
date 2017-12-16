$(function () {
    'use strict';
    $('.upper-bar .nav-link').on('mouseenter mouseleave', function () {$(this).toggleClass('text-muted text-white'); });
    
    var win = $(window),
        winH = win.height(),
        winW = win.width(),
        headerH = $('.header').height(winH),
        headerContent = $('.header .header-content'),
        brandDiv = $('.header .navbar .brand');
    
    // Header Content Margin Top
    headerContent.css('marginTop', (headerH.innerHeight() - $('.header .navbar').innerHeight() - headerContent.innerHeight()) / 2);
    // Brand Margin Right
    brandDiv.css('marginRight', ((winW - brandDiv.innerWidth()) / 2) - $('.header .navbar .icon').innerWidth());
    win.on('resize', function () {
        var brandDiv = $('.header .navbar .brand'),
            winW = win.width();
        brandDiv.css('marginRight', ((winW - brandDiv.innerWidth()) / 2) - $('.header .navbar .icon').innerWidth());
    });
    
    //Hover Nav-Link Top
    $('.header .hover-nav-link').css('top', $('.header .navbar').offset().top + $('.header .navbar').innerHeight());
    
    // Nav bar scroll
    win.on('scroll', function () {
        var winST = win.scrollTop(),
            navBar = $('.header .navbar'),
            navBarChildren = $('.header .navbar .nav-link, .header .navbar .navbar-brand, .header .navbar .icon i');
        
        window.console.log(navBar.innerHeight());
        if (winST <= $('.header .upper-bar').innerHeight()) {
            navBar.css({
                position: 'static',
                background: 'none'
            });
            navBarChildren.css('color', '#fff');
            $('.header .hover-nav-link').css('top', navBar.innerHeight() + navBar.offset().top);
        } else if (winST >= navBar.offset().top || winST <= navBar.offset().top) {
            navBar.css({
                position: 'absolute',
                top: $(window).scrollTop(),
                width: '100%',
                backgroundColor: '#014280'
            });
            navBarChildren.css('color', '#ec1c23');
            $('.header .hover-nav-link').css('top', navBar.innerHeight());
        }
    });
    $('.header .navbar').on({
        mouseenter: function () {
            $(this).css('backgroundColor', '#014280');
            $('.header .navbar .nav-link, .header .navbar .navbar-brand, .header .navbar .icon i').css('color', '#ec1c23');
        },
        mouseleave: function () {
            if ($(this).offset().top <= $('.header .upper-bar').innerHeight()) {
                $(this).css('background', 'none');
                $('.header .navbar .nav-link, .header .navbar .navbar-brand, .header .navbar .icon i').css('color', '#fff');
            }
            
        }
    });
    
    // on hover on nav-link 
    $('.header .navbar .nav-link').on({
        mouseenter: function () {
            $($(this).data('class')).slideDown(300).css({
                display: 'flex'
            }).siblings().slideUp();
            $(this).children().css('borderBottom', '2px solid #ec1c23');
            $($(this).data('class')).parent().css('left', $(this).offset().left);
        },
        mouseleave: function () {
            $(this).children().css('borderBottom', '0');
            $('.header .hover-nav-link .row').on('mouseleave', function () {
                $(this).slideUp();
            });
        }
            
            /*$($(this).data('class')).slideUp(300);*/
    });
    
    
    window.console.log($('.header .navbar .nav-link').data('class'));
    
});

/* containerH = $('.header .container').height(headerH.innerHeight() - $('.header .navbar').innerHeight()),
        headerContent = $('.header .header-content');
    headerContent.css('marginTop', (containerH.innerHeight() - headerContent.innerHeight()) / 2);*/