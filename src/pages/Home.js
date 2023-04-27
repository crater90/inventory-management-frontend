import React from 'react'
//import logo from '../logo.svg';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faBars,
  faUsers,
  faBoxes,
  faTruck,
  faExchangeAlt,
  faChartPie,
  faUserCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto px-0">
          <nav id="sidebar" class={`collapse collapse-horizontal border-end ${sidebarOpen && "show"}`}>
            <ul id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
              <li className="list-group-item border-end-0 d-inline-block text-truncate">
                <Link to="/godowns">
                  <FontAwesomeIcon icon={faWarehouse} />
                  <span>Godowns</span>
                </Link>
              </li>
              <li className="list-group-item border-end-0 d-inline-block text-truncate">
                <Link tp="/employees">
                  <FontAwesomeIcon icon={faUsers} />
                  <span>Employees</span>
                </Link>
              </li>
              <li className="list-group-item border-end-0 d-inline-block text-truncate">
                <Link to="/inwards">
                  <FontAwesomeIcon icon={faBoxes} />
                  <span>Inwards</span>
                </Link>
              </li>
              <li className="list-group-item border-end-0 d-inline-block text-truncate">
                <Link to="/outwards">
                  <FontAwesomeIcon icon={faTruck} />
                  <span>Delivery</span>
                </Link>
              </li>
              <li className="list-group-item border-end-0 d-inline-block text-truncate">
                <Link to="/returns">
                  <FontAwesomeIcon icon={faExchangeAlt} />
                  <span>Returns</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <main class="col ps-md-2 pt-2">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} class="border rounded-3 p-1 text-decoration-none"> Menu</button>
          <div class="page-header pt-3">
            <h2>Bootstrap 5 Sidebar Menu - Simple</h2>
          </div>
          <p class="lead">A offcanvas "push" vertical nav menu example.</p>
          <hr />
          <div class="row">
            <div class="col-12">
              <p>This is a simple collapsing sidebar menu for Bootstrap 5. Unlike the Offcanvas component that overlays the content, this sidebar will "push" the content. Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
              <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home