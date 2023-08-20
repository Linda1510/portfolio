

import Jungle from "./../assets/junglebackground.jpg";



const Header =()=>{
return <div className="header">

   
    <div className="header__title">
    <a className="navigation__url" href="/work">My work</a>
    <a className="navigation__url" href="/get_to_know_me">Get to know me</a>
    </div>
 <img  src={Jungle} alt="background" />
<div className="header__card">

<h1>HELLO WORLD!</h1>
 <h2>WELCOME TO MY PAGE!</h2>
 
</div>
<footer className="header__footer">

</footer>

    </div>
};
export default Header;