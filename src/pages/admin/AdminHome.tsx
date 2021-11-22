//@ts-nocheck
//NPM PAckages
import { Link } from "react-router-dom";
//Local imports
import ItemList from "../../components/admin/ItemList";
import AdminForm from "../../components/admin/AdminForm";

// You see, here you are calling AdminHome (i prefer AdminPage, but AdminHome is good enough)
// Why do you called just Admin in the routes, it creates unncesary confusion.
export default function AdminHome() {
  return (
    <div>
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link className="logout-btn" to={"/logout"}>
            <span>LogOut </span>
            <i class="fas fa-sign-out-alt"></i>
          </Link>
        </div>
      </div>
      <section id="tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            {/* We have discussed about this before, if the button needs too many attributes, create a custom button and hide the complexity there */}
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Movies & Series
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="add-tab"
              data-bs-toggle="tab"
              data-bs-target="#add-item"
              type="button"
              role="tab"
              aria-controls="add-item"
              aria-selected="false"
            >
              Add New Item
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <ItemList />
          </div>
          <div
            class="tab-pane fade"
            id="add-item"
            role="tabpanel"
            aria-labelledby="add-tab"
          >
            <AdminForm type="create" />
          </div>
        </div>
      </section>
    </div>
  );
}
