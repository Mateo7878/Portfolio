export function validate(input)
{
    const inputType = input.dataset.type;
    if(validations[inputType])
    {
        validations[inputType](input);
    }

    if(input.validity.valid)
    {
        input.parentElement.classList.remove("input-info--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else
    {
        input.parentElement.classList.add("input-info--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = showMessageError(inputType,input);
    } 
}

const errorTypes = 
[
    "valueMissing",
    "typeMissmatch"
];

const messagesError = 
{
    name: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email:
    {
        valueMissing: "Este campo no puede estar vacío",
        typeMissmatch: "El correo no es válido"
    }
}

function showMessageError(inputType, input)
{
    let mesage = "";
    errorTypes.forEach( (error) => 
        {
            if(input.validity[error])
            {
               mesage = messagesError[inputType][error];

            }
        })

    return mesage;
}
