import React from 'react'

const Header = () => {
  return (
    <nav className=" flex justify-around items-center p-4 border-b-2  border-b-zinc-100">
      <img src="./icons/icon_menu.svg" alt="menu" className="menu" />
      <div className="navbar-left ">
        <ul className="flex gap-5 text-slate-400">
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="flex gap-5">
          <li className="navbar-email">Eldivi@gmail.com</li>
          <li className="navbar-shopping-cart">
            <img src="https://svgshare.com/i/ei9.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header
