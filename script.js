if (screen.width > 880) {
    document.querySelector("#bgimg").style.height = "480px";
    document.querySelector("#content").style.padding = "5%";
} else {
    document.querySelector("#bgimg").style.height = "auto";
}
console.log(screen.width);