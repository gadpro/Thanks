$(function () {
    $(window).keydown(function (event){
        var keycode = event.which;
        if (keycode == 13) {
            var url_value = $("#inputinfo").val();
            if(url_value == 'thank'){
                window.open('https://game.gadpro.tk/thank.html', "_blank");
            }
            else{
                if(url_value == 'homo'){
                    const audioh = new Audio('./audio/homo.mp3')
                    audioh.play()
                }
                if(url_value == 'rickroll' || url_value == 'rickastley'){
                    window.open('https://www.bilibili.com/video/BV1GJ411x7h7')
                }
                if(url_value == 'spasmodic'){
                    const audios = new Audio('./audio/spasmodic.mp3')
                    audios.play()
                }
                if(url_value != 'homo' && url_value != 'rickroll' && url_value != 'rickastley' && url_value != 'spasmodic'){
                    window.open('https://game.gadpro.tk/success.html', "_blank");
                }
            }
        };
    });
});