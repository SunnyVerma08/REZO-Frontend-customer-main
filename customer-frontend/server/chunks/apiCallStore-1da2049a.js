import { w as writable } from "./index-e671fec2.js";
import axios from "axios";
import { S as SERVERADDRESS } from "./checkAuth-d57e5fd3.js";
const indexServices = writable({});
const planServices = writable({});
const appStore = writable({ loading: true });
const indexServicesApiData = async (data) => {
  try {
    const res = await axios({
      url: `${SERVERADDRESS}/api/v1/services?planName=${data}`
    });
    if (res.data.status === "success") {
      planServices.set(res.data.data.data);
      return true;
    }
    console.log(res);
  } catch (err) {
  }
};
export { appStore as a, indexServicesApiData as b, indexServices as i, planServices as p };
