$(document).ready(function(){
    const active = 'tristate-btn-active';
    const inactive = 'tristate-btn-inactive';
    const yes = 'tristate-btn-yes';
    const no = 'tristate-btn-no';

    $('div.tristate-button').each(function(i, obj) {
        var btnYes = $(this).find(':button.'+yes);
        var btnNo = $(this).find(':button.'+no);
        var bothButtons = [btnYes, btnNo];

        var callback = null;
        var attr = $(this).attr('data-callback');
        if (typeof attr !== typeof undefined && attr !== false) {
            callback = window[attr];
        }

        // if both buttons exist, make them into tri-state relationship
        if(btnYes.length && btnNo.length) {
            bothButtons.map(function (btn, index) {
                // set both to inactive if not set already
                if(!btn.hasClass(active) && !btn.hasClass(inactive)){
                    btn.addClass('tristate-btn-inactive');
                }

                // whenever a button is clicked:
                // set each button to inactivate itself if active (null state),
                // otherwise set itself to active, and the other button to inactive
                btn.click(function(e) {
                    console.log($(this));
                    if($(this).hasClass(active)){
                        $(this).removeClass(active).addClass(inactive);
                        callback(-1);
                    } else if($(this).hasClass(inactive)){
                        $(this).removeClass(inactive).addClass(active); // activate this button
                        bothButtons[index == 1 ? 0 : 1].removeClass(active).addClass(inactive); // deactivate the other button
                        if($(this).hasClass(yes)){
                            callback(1);
                        } else if($(this).hasClass(no)){
                            callback(0);
                        } else {
                            throw "Something has gone wrong."
                        }

                    } else {
                        throw "Something has gone wrong."
                    }
                })

            })
        }
    });

});