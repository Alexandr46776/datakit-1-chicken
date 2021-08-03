$("#navToggle").click(function() {
    $(this).toggleClass("active");
    //открытие 
    $(".overlay").toggleClass("open");
    // блокирует скролл
    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $("body").removeClass('locked')
    $('.navBurger ').removeClass('active');
 
});

function checkCookies(){
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('cookie_notification');
    let cookieBtn = cookieNotification.querySelector('.cookie_accept');

    // Если записи про кукисы нет или она просрочена, то показываем информацию про кукисы
    if( !cookieDate || (+cookieDate + 1) < Date.now() ){
        cookieNotification.classList.add('show');
    }

    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function(){
        localStorage.setItem( 'cookieDate', Date.now() );
        cookieNotification.classList.remove('show');
    })
}
checkCookies();

