
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const dialogBox = document.getElementById('dialog-box');
    const enterBtn = document.getElementById('enter-btn');
    const exitBtn = document.getElementById('exit-btn');
    const ignoreBtn = document.getElementById('ignore-btn');

    const imageLinks = [
        "https://zhuanlan.zhihu.com/p/432384779/1",
        "https://zhuanlan.zhihu.com/p/432384779/2",
        "https://zhuanlan.zhihu.com/p/432384779/3",
        "https://zhuanlan.zhihu.com/p/432384779/4",
        "https://zhuanlan.zhihu.com/p/432384779/5",
        "https://zhuanlan.zhihu.com/p/432384779/6",
        "https://zhuanlan.zhihu.com/p/432384779/7",
        "https://zhuanlan.zhihu.com/p/432384779/8",
        "https://zhuanlan.zhihu.com/p/432384779/9",
        "https://zhuanlan.zhihu.com/p/432384779/10"
    ];

    const randomImage = imageLinks[Math.floor(Math.random() * imageLinks.length)];
    const img = new Image();
    img.src = randomImage;

    img.onload = () => {
        imageContainer.appendChild(img);
        dialogBox.style.display = "block";
    };

    img.onerror = () => {
        ignoreBtn.style.display = "inline-block";
        dialogBox.style.display = "block";
    };

    enterBtn.addEventListener('click', () => {
        window.location.href = "https://youtu.be/uHgt8giw1LY?si=6Tr0FylK77wNKCvH";
    });

    exitBtn.addEventListener('click', () => {
        window.location.href = "https://my.4399.com/game/";
    });

    ignoreBtn.addEventListener('click', () => {
        dialogBox.style.display = "block";
    });
});
