export function AddPasswordAction(action, passwordLabel) {
    return{
        type: 'ADD_PASSWORD',
        action,
        label: passwordLabel
    }
}

export function AddCpfAction(action, cpfLabel) {
    return{
        type: 'ADD_CPF',
        action,
        label: cpfLabel
    }
}

export function UserLogin(action, loginLabel) {
    return{
        type: 'ADD_CPF',
        action,
        label: loginLabel
    }
}

export function NewPassword(action, passwordLabel) {
    return{
        type: 'NEW_PASSWORD',
        action,
        label: passwordLabel
    }
}
