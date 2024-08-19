const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

  <style>
    header {
      position: sticky;
      top: 0px;
      background-color: white;
	  z-index: 99;
    }

	#nav{
      border-bottom:2px dashed black;
      list-style:none;
      margin:0;
      padding:5px;
      text-align:center;
	  font-size: 12px;

    }
    #nav li{
      position:relative;
      display:inline;
    }
    #nav a{
      display:inline-block;
      padding:5px 2px;
    }
    #nav ul{
      position:absolute;
      /*top:100%; Uncommenting this makes the dropdowns work in IE7 but looks a little worse in all other browsers. Your call. */
      left:-9999px;
      margin:0;
      padding:0;
      text-align:left;
    }
    #nav ul li{
      display:block;
    }
    #nav li:hover ul{
      left:0;
    }
    #nav li:hover a{
      text-decoration:underline;
      background:white;
      color: black;
    }
    #nav li:hover ul a{
      text-decoration:none;
      background:solid;
    }
    #nav li:hover ul a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }
    #nav ul a{
      white-space:normal;
      display:block;
      border-bottom:1px solid #ccc;
    }
    a{
      color:black;
      text-decoration:none;
      font-weight:bold;
    }
    a:hover{
      text-decoration:underline;
      background:#f1f1f1;
    }

	@media (max-width:400px) {
		#nav{
			list-style:none;
			margin:0;
			padding:10px;
			text-align:center;
			font-size: 12px;
			.font-family:Martian Mono;
		}
		}
		
	/* Hide the checkbox */
        .dropdown input[type="checkbox"] {
            display: none;
        }

        /* Style the dropdown container */
        .dropdown {
            position: relative;
            display: inline-block;
        }

        /* Style the dropdown button */
        .dropdown-button {
			background-color: #e4ffb2;
            color: black;
            padding: 5px 10px;
            font-size: 0.8rem;
            border: 1px solid black;
			border-radius: 4px;
            cursor: pointer;
            text-align: center;
        }

        /* Style the dropdown content */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 115px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            border-radius: 4px;
            overflow: hidden;
        }

        /* Style each item inside the dropdown */
        .dropdown-content ol {
            list-style: none;
            margin: 0px;
            padding: 0px;
			font-size: 0.8rem;
        }

        .dropdown-content li {
            padding: 2px 6px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content li a {
            color: black;
            text-decoration: none;
            display: block;
        }

        .dropdown-content li a:hover {
            background-color: #f1f1f1;
        }

        /* Show the dropdown content when the checkbox is checked */
        .dropdown input[type="checkbox"]:checked ~ .dropdown-content {
            display: block;
        }
		
		.yellow{
			background-color: #fff33d;
		}
		
  </style>


  <header>
    <ul id="nav">

		<li>
		<a href="index.html">Home</a>
		</li>

		<li>|</li>

		<li>
		<a href="about.html">About</a>
		</li>
		
		<li>|</li>
		
		<div class="dropdown">
        <input type="checkbox" id="dropdown-toggle">
        <label for="dropdown-toggle" class="dropdown-button">Select page ▼</label>
        <div class="dropdown-content">
            <ol>
				<li class="yellow"><a href="index.html">&nbspi</a></li>
				<li class="yellow"><a href="index2.html">ii</a></li>
				<li><a href="02.html">&nbsp2</a></li>
                <li><a href="03.html">&nbsp3</a></li>
				<li><a href="04.html">&nbsp4</a></li>
                <li><a href="05.html">&nbsp5</a></li>
                <li><a href="06.html">&nbsp6</a></li>
				<li><a href="07.html">&nbsp7</a></li>
				<li><a href="08.html">&nbsp8</a></li>
				<li><a href="09.html">&nbsp9</a></li>
				<li><a href="10.html">10</a></li>
				<li><a href="11.html">11</a></li>
				<li><a href="12.html">12</a></li>
				<li><a href="13.html">13</a></li>
				<li><a href="14.html">14</a></li>
				<li><a href="15.html">15</a></li>
				<li><a href="16.html">16</a></li>
				<li><a href="17.html">17</a></li>
				<li><a href="18.html">18</a></li>
				<li><a href="19.html">19</a></li>
				<li><a href="20.html">20</a></li>
				<li><a href="21.html">21</a></li>
            </ol>
        </div>
    </div>
	</ul>
	
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
