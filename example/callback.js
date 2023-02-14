function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Load script failed !"));
        document.head.append(script);
    });
}

loadScript("https://developer.mozilla.org/fr/")
    .then((data) => data + 50)
    .then((data2) => console.log(data2))
    .catch((error) => console.log(error));