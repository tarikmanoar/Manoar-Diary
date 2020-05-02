$(function () {
    $('.container').ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: true,
    });
});
function mul(x) {
    let demo = document.getElementById('demo');
    let y = '';
    for (let i = 1; i <= 10; i++) {
        console.log(x + '*' + i + '=' + i * x);
        y += x + '*' + i + '=' + i * x +'<br>';
        demo.innerHTML = y;
    }
}
function insrt(num) {
    console.log($('.cal-dis').val());
    
    $('.cal-dis').val($('.cal-dis').val() + num);
}

function eql() {
    $('.cal-dis').val(eval($('.cal-dis').val()));
}

function c() {
    $('.cal-dis').val('');
}

function del() {
    let value = $('.cal-dis').val();
    $('.cal-dis').val(value.substring(0, value.length - 1));
}