import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-gallery-on-greene.cloudfunctions.net/api",
});
