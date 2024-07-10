document.getElementById('calculatorForm').addEventListener('submit', function(Event)
{
    Event.preventDefault();

    let UserPromptNumber1 = parseFloat(document.getElementById('UserPromptNumber1').value);
    let UserPromptNumber2 = parseFloat(document.getElementById('UserPromptNumber2').value);
    let ArithmeticOperations = document.getElementById('ArithmeticOperations').value;
    let DisplayFinalResult;

    switch (ArithmeticOperations)
    {
        case "Addition":
        {
            DisplayFinalResult = UserPromptNumber1 + UserPromptNumber2;
            break;
        }

        case "Subtraction":
        {
            DisplayFinalResult = UserPromptNumber1 - UserPromptNumber2;
            break;
        }

        case "Multiplication":
        {
            DisplayFinalResult = UserPromptNumber1 * UserPromptNumber2;
            break;
        }

        case "Division":
        {
            if (UserPromptNumber2 !== 0)
            {
                DisplayFinalResult = UserPromptNumber1 / UserPromptNumber2;
                break;
            }

            else
            {
                DisplayFinalResult = "Number can not be divide by zero!";
            }
        }
    }

    document.getElementById('DisplayFinalResult').innerHTML = `Result: ${DisplayFinalResult}`;
});
