const imgs = [
    {source: '../image/monkey_1.jpg'},
    {source: '../image/monkey_2.jpg'},
    {source: '../image/monkey_3.jpg'},
    {source: '../image/monkey_4.jpg'},
    {source: '../image/monkey_5.jpg'}
]

document.addEventListener('DOMContentLoaded', function () {
        let img = document.querySelector('#imgContainer');
        let index = 0;
        img.addEventListener('click', function () {
                if (index < imgs.length - 1) {
                    index++;
                } else {
                    index = 0;
                }
                img.src = imgs[index].source;
                return index;
            }
        );
    }
);
