export const checkValidity = ( value, rules, filedName ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
        if(!isValid){
            return   `Please enter ${filedName}`
        }
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
        if(!isValid){
            return  `Minimum charter ${rules.minLength}`
        }
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
        if(!isValid){
            return  `Maxmum charter ${rules.maxLength}`
        }
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
        if(!isValid){
            return  `Invalid email-Id`
        }
    }

    return isValid;
}
