
    function onRegister(event){
        event.preventDefault();
        let name = document.getElementById("name").value;
        let lastName = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let user = document.getElementById("user").value;
        let password = document.getElementById("password").value;
        let phone = document.getElementById("phone").value;
        
        let emptyName = name === '';
        let emptyLastName = lastName === '';
        let emptyEmail = email === '';
        let validMail = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$').test(email);
        let emptyUser = user === ''

        let errorMessage = ''

        if(emptyName || name.length > 30)
            errorMessage = errorMessage === '' ? "Inserte un nombre válido" : errorMessage;

        if(emptyLastName || lastName.length > 80)
            errorMessage = errorMessage === '' ?  "Inserte un apellido válido" : errorMessage

        if(emptyEmail || !validMail || email.length > 100)
            errorMessage = errorMessage === '' ? "Inserte un mail válido" : errorMessage
        
        if(emptyUser || user.length > 20)
            errorMessage = errorMessage === '' ? "Inserte un usuario válido" : errorMessage 
            
        if(!new RegExp('[0-9]').test(phone) || phone.length > 15)
            errorMessage = errorMessage === '' ? "Inserte un teléfono válido" : errorMessage

        if(errorMessage.trim()!='')
            alert(errorMessage);
        else{
            alert(`Bienvenido ${name} ${lastName} a Desafío Latam ${user}:${password}`)
        }

    }
