import "./navbar.css"
function Navbar() {
    

    return (
        <>
        <nav class="navbar"  >
            <a href="#" class="logo">SHOP.CO</a>
            <ul class="nav-links">
                <li><a href="#">Home hemant</a></li>
                <li><a href="#">On Sale</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
            <div class="search-container">
                <input type="search" placeholder="Search" />
                <button>Search</button>
            </div>
            
        </nav>
        </>
       
    )
}

export default Navbar




