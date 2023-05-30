import { g as getContext } from "./index-a25d457a.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var DownArrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAaCAYAAAAg0tunAAACN0lEQVRoge3YSU8UQRyG8R8YL95EgwqI8eKKOvhRjAsnY1y/G0biijHxbIIa4xYTY9x3hAHBux7KTpqhN6Z7YBp9LpOprq5/95O3urqLZI5jNOVYp9iPE6tcszQbEtrGcAD78B7zq3AdQziNfuzE01WoWQmtAk8JSYho4APmOngNg7gQ+9+HYTzpYM3KiAs8KSSvlSP4hGYH6g/jLHpa2jcLSXyO3x2oWxmRwDFLk9fKYbxT7XQewjnL5UX0YRceV1izcnr//r4s0PcMdldUdxDnC/R7UVG9jhEl8Bs+CtM1i4bySdwhyEtLXsS4Lk8fS5+Bc/gsTNcsGniLn23UGxAWjN6cfpfVIH0sX4WbikkctXKJA8IzL+nVKc64msgj+Waa+IpDOeeO4jUWCtTpx8WUenEmhJW3NqTd0Cy+yJd4VL7EflzKqBVxBc9y+nQdWTc1i+8YyRmjgTeSJW4Xpu3GnDEm1FAe+amYwTQOZvTpEZL4Coux9q3CtM2Td1VNvjqSyBMIPxRLYlziFmHaFpHX9a8qWRQRSEjijORPvYge4Zm5iGPYlDPmNTWXR/7LbCsjwlZXWa7jUQXjrDlFExgxLT+JedywTuSxcoEEiXOyNx/SuIWHbZzXtbQjkLCoNK1M4k3rTB7tCyRILJrESTwoUatrKSOQIHFe2P5P4zbul6zTtZQVSNgKS5M4aR3LoxqBBIkL2Btru4OpisbvWqoSSNjB+YU9uIt7FY79T7FtrS/gPzXiD0DhaBn4KEmPAAAAAElFTkSuQmCC";
export { DownArrow as D, page as p };
