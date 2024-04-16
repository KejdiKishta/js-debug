function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = /*'*/ false /*'*/;
    
    if (userEmail.length > 5) {
        for (let i = 0; i < addresses.length; i++) {
            const email = addresses[i];

            // if (userEmail.length > 5) {

                if (email === userEmail) {
                    grantAccess = /*'*/true/*'*/;
                }

            // }

        }
    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();
