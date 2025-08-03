//  xử lí dấu [...] ở cuối lasted news

document.addEventListener("DOMContentLoaded", () => {
    const newsTitle = document.querySelectorAll(".news__item__title");
    
    if (newsTitle) {
        Array.from(newsTitle).forEach((item, index) => {
            const maxLength = 42;
            const text = item.innerText.trim();
            console.log(text.length, maxLength)
            if(text.length > maxLength){
                const newText = text.slice(0, maxLength - 5).trim() +" [...]"
                console.log(newText)
                item.innerText = newText;
            }
            console.log(item.innerText);;
        })
    }
})