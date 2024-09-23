import importAll from "../../../utils/getImages";

const newsImages = importAll(require.context("./", false, /\.(jpg|jpeg|png)$/));

export default newsImages;
