$(document).ready(function(){
    const menu = $('.nav-btn');
    const close = $('.nav-close');
    const links = $('.nav-links');
    const card1 = $('.card1');
    const card2 = $('.card2');
    const card3 = $('.card3');
    const bs = $('.bs');
    const bes = $('.bes');
    const mse = $('.mse');
    const fund = $('.fund');
    const total = $('.total');
    const day = $('.day');
    const bar = $(':root');
    const toTop = $('.to-top');
    const project = $('.btn-project');
    const modal = $('.con-modal');
    const success = $('.con-success');
    const radios = $(':radio');
    const closeModal = $('.close');
    const closeSuccess = $('.btn-success');
    const cont = $('.btn-cont');
    const book = $('.bookmark');

    let dayleft = 56;
    let totalBackers = 5007;
    let funds = 89914;
    let bookmark = false;

    let barValues = (funds/100000) * 100;

    let bsleft = 101;
    let besleft = 64;
    let mseleft = 0;


    window.onscroll = function() {myFunction()};
        function myFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            toTop.css('opacity','1');
        } else {
            toTop.css('opacity','0');
        }
    }
    

    barValuess = barValues.toString() + '%';

    bar.css('--bar',barValuess);
    

    if(bsleft == 0){
        card1.addClass('disabled');
        $('#card2').prop('disabled',true);
    }
    if(besleft == 0){
        card2.addClass('disabled');
        $('#card3').prop('disabled',true);
    }
    if(mseleft == 0){
        card3.addClass('disabled');
        $('#card4').prop('disabled',true);
    }
    bs.html(bsleft);
    bes.html(besleft);
    mse.html(mseleft);
    fund.html(funds);

    day.html(dayleft);
    total.html(totalBackers);

    modal.find('.card-footers').hide();
    modal.find('.hl').hide();

    $(':checked').parents('.card').addClass('card-active');
    $(':checked').parent().siblings('.hl').show();
    $(':checked').parent().siblings('.card-footers').show();

    
    

    cont.click(function(){
        funds += parseInt($(this).prev().children('span').text());
        totalBackers++;

        if($(this).parents('.card').hasClass('card1')) {
            bsleft--;
        }
        if($(this).parents('.card').hasClass('card2')) {
            besleft--;
        }
        if($(this).parents('.card').hasClass('card3')) {
            mseleft--;
        }

        barValues = (funds/100000) * 100;
        barValuess = barValues.toString() + '%';

        bar.css('--bar',barValuess);

        modal.hide();
        success.show();

        total.html(totalBackers);
        bs.html(bsleft);
        bes.html(besleft);
        mse.html(mseleft);
        fund.html(funds);
    })

    radios.click(function(){
        if(!($(this).parents('.card').hasClass('disabled'))) {
            $(this).parents('.card').addClass('card-active');
            $(this).parents('label').siblings().children('.card').removeClass('card-active');
            $(this).parent().siblings('.hl').show();
            $(this).parent().siblings('.card-footers').show();
            $(this).parents('label').siblings().find('.hl').hide();
            $(this).parents('label').siblings().find('.card-footers').hide();
        }
    });

    modal.find('.card').hover(function(){
        if(!($(this).hasClass('disabled'))) {
            $(this).find('.radios').addClass('modal-active');
            $(this).find('h4').css({'color':'hsl(176, 50%, 47%)'});
        }
    },
    function(){
        $(this).find('.radios').removeClass('modal-active');
        $(this).find('h4').css({'color':'black'})
    }); 

    closeSuccess.click(function(){
        success.hide();
    });

    closeModal.click(function(){
        modal.hide();
    });

    project.click(function(){
        modal.show();
    });

    menu.click(function(){
        menu.css('display','none');
        close.css('display', 'inline');
        links.css('display','inline-block');
    });
    close.click(function(){
        menu.css('display','inline');
        close.css('display', 'none');
        links.css('display','none');
    });
    book.click(function(){
        bookmark = !bookmark;
        if(bookmark) {
            $(this).find('circle').attr('fill','hsl(176, 72%, 28%)');
            $(this).find('path').attr('fill','white');
            $(this).css('color', 'hsl(176, 72%, 28%)');
            $(this).find('span').text('Bookmarked');
        } else {
            $(this).find('circle').attr('fill','#2f2f2f');
            $(this).find('path').attr('fill','#b1b1b1');
            $(this).css('color','hsl(0, 0%, 60%)');
            $(this).find('span').text('Bookmark');
        }
    });

    (window).resize(function(){

        if ($(window).width() > 450) {  
            links.click(function(){
                menu.css('display','inline');
                close.css('display', 'none');
                links.css('display','none');
            });
        } 
    });
})