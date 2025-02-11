function countUp(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = range / (duration / 10); // Chia nhỏ bước nhảy
    let timer = setInterval(function () {
        current += increment;
        obj.innerText = Math.floor(current);
        if (current >= end) {
            obj.innerText = end;
            clearInterval(timer);
        }
    }, 10);
}

window.onload = function () {
    countUp("established-number", 0, 1994, 1000); // Tăng từ 0 đến 1994 trong 2 giây
    countUp("employee-number", 0, 100, 1000); // Tăng từ 0 đến 100 trong 2 giây
};


