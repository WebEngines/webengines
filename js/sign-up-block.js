const template = document.createElement('template');
template.innerHTML = `
  <style>
    .sign-block{
            box-shadow:inset 12px 12px 2px 1px rgba(0, 0, 255, .2);
            height: auto;
            width: 90%;
            max-width:350px;
            margin:10px auto;
            display: flex;
            flex-direction: column;
            padding: 40px 0px;
            text-align: center;
            transition: all 0.3s ease-in-out;
            color: black;
            border: 2px solid blue;
            padding: 10px;
            background-color: white;
            border-radius:20px;
        }

        .signin{
            box-shadow:inset 12px 12px 2px 1px rgba(0, 0, 255, .2);
            padding: 10px 30px;
            background-color: #5855F3;
            border-radius: 10px;
            text-decoration: none;
            list-style: none;
            border: 2px solid blue;
            display: inline-block;
            font-weight: bolder; 
            color: white;
            margin-bottom: 10px;
        }

        .login{
            box-shadow:inset 12px 12px 2px 1px rgba(0, 0, 255, .2);
            padding: 10px 30px;
            border-radius: 10px;
            text-decoration: none;
            list-style: none;
            border: 1px solid blue;
            display: inline-block;
            font-weight: bolder; 
            color: black;
        }

        .login:hover{
            padding: 10px 30px;
            background-color: #5855F3;
            border-radius: 10px;
            text-decoration: none;
            list-style: none;
            border: 1px solid blue;
            display: inline-block;
            font-weight: bolder; 
            color: white;
        }

        .logo {
            box-shadow:inset 10px 10px 10px rgba(0, 0, 255, .2);
            border:2px solid blue;
            border-radius: 5px;
            padding: 10px;
            margin: 5px;
            z-index: 0;
        }
  </style>
  <div class="sign-block">
        <h1 class="logo">Webengines</h1>
        <h2>Webengines is a community of 01 amazing developers</h2>
        <p>"We're a place where coders share, stay up-to-date and grow their careers."</p>
        <a href="#" class="signin">Create an account</a>
        <a href="#" class="login">login</a>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
  }


}

window.customElements.define('user-card', UserCard);