var counters = document.querySelectorAll('.counter');
var speed = 200;

counters.forEach(counter => {
    var updateCount = () => {
        var target = +counter.getAttribute('data-target');
        var count = +counter.innerText;

        var inc = target/speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }else
        {
            count.innerText = target;
        }
    }

    updateCount();
});