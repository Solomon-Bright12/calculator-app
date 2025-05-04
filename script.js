    const output = document.getElementById("Output");
    const buttons = document.querySelectorAll("button");

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Get the inner text from the <h1> or <h3> inside button
            let value = e.target.innerText;

            switch (value) {
                case "=":
                    try {
                        let result = expression
                            .replace(/×/g, '*')
                            .replace(/÷/g, '/')
                            .replace(/π/g, Math.PI)
                            .replace(/\^/g, '')
                            .replace(/\(/g, '*')
                            .replace(/\)/g, '')
                            .replace(/\%/g, '*0.01');
                        output.innerText = eval(result);
                        expression = output.innerText;
                    } catch (err) {
                        output.innerText = "Error";
                        expression = "";
                    }
                    break;
                case "DeL":
                    expression = expression.slice(0, -1);
                    output.innerText = expression;
                    break;
                default:
                    expression += value;
                    output.innerText = expression;
            }
        });
    });
