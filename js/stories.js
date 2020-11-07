const template1 = document.createElement('template');
template1.innerHTML = `
      <style>
        .post{
            width: 600px;
            margin: 10px;
            border-radius: 10px;
            height: auto;
            border: 1px solid grey;
            background-color: white;
        }

        .sreensaver{
            width: 100%;
            height: 200px;
            border-radius: 10px;
        }

        .postDetail{
            display: inline-block;
            height: auto;
            width: 100%;
        }

        .postersImage{
            width: 54px;
            border-radius: 50%;
            float: left;
            padding: 10px;
        }

        .nameAndDate{
            display: flex;
            flex-direction: column;
        }

        .date{
            margin-top: -20px;
            font-size: 14px;
        }

        .postTitle{
            margin-left: 40px;
            margin-right: 20px;
        }

                
        .react{
            display: grid;
            color: black;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding: 20px 20px;
            justify-content: center;
            align-items: center;
            align-content: center;
        }

        .like{
            width: auto;
            margin: 10px;
            height: 20px;
        }

        .comment{
            width: auto;
            margin: 10px;
            height: 20px;
        }

        .bookmark{
            width: auto;
            margin: 10px;
            height: 20px;
        }

        .read{
            text-align: center;
            width: auto;
            margin: 10px;
            height: 20px;
        }

        .bookmark a{
            padding: 5px 20px;
            background-color: aliceblue;
            text-decoration: none;
            color: black;
            justify-content: center;
            align-content: center;
            align-items: center;
        }

        .bookmark a:hover{
            padding: 5px 20px;
            background-color: blue;
            text-decoration: none;
            color: white;
        }

        .views{
            width: 34px;
            float: left;
            border-radius: 50%;
            float: left;
            padding: 10px;
        }
    
        .like , .comment{
            display: inline-block;
            height: auto;
            width: 100%;
            padding: 10px;
        }

        .postersImage{
            width: 54px;
            border-radius: 50%;
            float: left;
            padding: 10px;
        }

        .nameAndDate{
            display: flex;
            flex-direction: column;
        }

        @media (max-width:868px){
            .post{
                width: auto;
                margin: 2px;
                height: auto;
                background-color: white;
            }

            .sreensaver{
                display:none;
            }

            .react{
                color: black;
                grid-template-column: 1fr 1fr;

            }

            
            .bookmark, .read{
                display:none;
            }
        }
    </style>
    

    <div class="post">
        <div class="postimage">
            <img class="sreensaver"src="https://thumbs.dreamstime.com/z/green-planet-your-hands-save-earth-environment-concept-green-planet-your-hands-environment-concept-116939326.jpg" alt="" srcset="">
        </div>

        <div class="postDetail">
            <span>
                <img src="res/add.png" class="postersImage" alt="" srcset="">  
            </span>
            <div class="nameAndDate">
                <h3 class="posters">Jamal akbar</h3>
                <span class="date">20 December</span>
            </div>
        </div>

        <div class="Actualpost">
            <h1 class="postTitle">
                5 React-Based Projects Every Beginner Must Try
            </h1>
        </div>
        
        <div class="react">
            <div class="sym like">
                <div>
                    <img class="views" src="res/checklist.png" alt="" srcset="">
                </div>
                <h5 class="likes">20 Like</h5>
            </div>
            <div class="sym comment">
                <div>
                    <img class="views" src="res/add.png" alt="" srcset="">
                </div>
                <h5 class="likes">20 Comment</h5>
            </div>
            <div class="sym read">
                <span>2 min read</span>
            </div>
            <div class="sym bookmark">
                <a href="http:#">Bookmark</a>
            </div>

        </div>
    </div>

`;

class PostCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template1.content.cloneNode(true));
    
  }


}

window.customElements.define('post-card', PostCard);