export function updatePassword(password, passwordRef){
    const weak = passwordStrength(password)
    let power = 100
    weak.forEach(weakness => {
        if (weakness == null) return
        power -= weakness.deduction
    })
    passwordRef.style.setProperty('--passwordStrength', `hsl(${power * 2}, 98%, 52%, 0.251)`)
    passwordRef.style.setProperty('--passwordColor', `hsl(${power * 2 - 6},  98%, 76%)`)
}

function passwordStrength(password){
    const weak = []
    weak.push(lengthWeak(password))
    weak.push(lowercase(password))
    weak.push(uppercase(password))
    weak.push(numbers(password))
    weak.push(specialChar(password))
    weak.push(repeat(password))

    return weak
}

function lengthWeak(password){
    if (password.length <= 5) {
        return {
            deduction: 30
        }
    }

    if (password.length <= 10) {
        return {
            deduction: 15
        }
    }
}

function lowercase(password) {
    return typeWeakness(password, /[a-z]/g)
}

function uppercase(password) {
    return typeWeakness(password, /[A-Z]/g)
}

function numbers(password) {
    return typeWeakness(password, /[0-9]/g)
}

function specialChar(password) {
    return typeWeakness(password, /[^0-9a-zA-Z\s]/g)
}

function typeWeakness(password, regex) {
    const matches = password.match(regex) || []

    if (matches.length === 0) {
        return {
            deduction: 20
        }
    } else if (matches.length <= 2) {
        return {
            deduction: 5
        }
    }
}

function repeat(password) {
    const matches = password.match(/(.)\1/) || []

    if (matches.length > 0) {
        return {
            deduction: matches.length * 10
        }
    }
}