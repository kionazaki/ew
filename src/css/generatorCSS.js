function generatorCSS()
{
    var sheet = document.createElement('style');
    sheet.innerHTML = `
        .ewApp {background-color: yellow;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 25px;

                }

        .ewApp__test {font-family: 'Times New Roman', Times, serif; font-size: 250%;}`;
    document.body.appendChild(sheet);
}

export default generatorCSS;
