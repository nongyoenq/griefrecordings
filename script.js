const form = document.getElementById("orderForm");

if(form){
	
	form.addEventListener("submit",function(e){
		
		e.preventDefault();
		
		alert("Already get it.");
		
	});
	
}

// dark-mode
function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<hr>
		<nav class="center">
			<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="artists.html">Artists</a>
			<a href="videos.html">Videos</a>
			<a href="articles.html">Articles</a>
			<a href="order.html">Order</a>
			<a href="contact.html">Contact</a>
		</nav>
		<hr>
    ` ;
  }
}
customElements.define('nav-bar', NavBar);


class FootBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
						<footer style="border-top: 1px solid #ccc;">
		<div class="a">
			<p>© 2023 - 2026 grief recordings Ltd.</p>
			</div>
		</footer>
    ` ;
  }
}
customElements.define('footer-bar', FootBar);