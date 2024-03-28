


function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)

  document.getElementById('fullName').textContent = data.name || '';
  document.getElementById('sub').textContent = data.sub || '';
  document.getElementById('given_name').textContent = data.given_name || '';
  document.getElementById('family_name').textContent = data.family_name || '';
  document.getElementById('email').textContent = data.email || '';
  document.getElementById('verifiedEmail').textContent = data.email_verified || '';
  document.getElementById('picture').setAttribute('src', data.picture || '');
}

window.onload = function () {
  const clientID = window.prompt("Cole a sua Cliente ID", "")

  google.accounts.id.initialize({
      client_id: clientID,
      callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
      document.getElementById("buttonDiv"), {
          theme: "filled_black",
          size: "large",
          type: "standard",
          shape: "pill",
          locale: "pt-BR",
          logo_alignment: "left",
      } // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
}