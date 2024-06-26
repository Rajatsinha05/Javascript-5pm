const navbar = (login = "login", signup = "signup", productsCount) => {
  return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/project/index.html">Javascript</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/project/index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/project/pages/Products.html">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/project/pages/AddProduct.html"
              >Add Product</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/project/pages/Cart.html">Cart 
             <span class="badge text-bg-secondary" id="count"></span></a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="/project/pages/Login.html">${login}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/project/pages/Signup.html">${signup}</a>
          </li>
        </ul>
        <form class="d-flex" role="search"  id="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="searchValue"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>`
}



export default navbar