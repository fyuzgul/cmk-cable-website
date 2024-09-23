import importAll from "../../../utils/getImages";

const images = importAll(require.context("./", false, /\.(jpg|jpeg|png)$/));

export default images;
