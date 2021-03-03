/* Development data. */
/* const d = [
  {
    id: 736885,
    pageURL: "https://pixabay.com/photos/tree-sunset-amazing-beautiful-736885/",
    type: "photo",
    tags: "tree, sunset, amazing",
    previewURL: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_150.jpg",
    previewWidth: 150,
    previewHeight: 93,
    webformatURL: "https://pixabay.com/get/51e3d34b4257b10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 398,
    largeImageURL: "https://pixabay.com/get/51e3d34b4257b108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 1920,
    imageHeight: 1195,
    imageSize: 186303,
    views: 3169144,
    downloads: 1394219,
    favorites: 3538,
    likes: 4726,
    comments: 869,
    user_id: 909086,
    user: "Bessi",
    userImageURL: "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg",
  },
  {
    id: 1072823,
    pageURL: "https://pixabay.com/photos/road-forest-season-autumn-fall-1072823/",
    type: "photo",
    tags: "road, forest, season",
    previewURL: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_150.jpg",
    previewWidth: 150,
    previewHeight: 87,
    webformatURL: "https://pixabay.com/get/57e0d2414250af14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 373,
    largeImageURL:
      "https://pixabay.com/get/57e0d2414250af14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 3160,
    imageHeight: 1846,
    imageSize: 3819762,
    views: 2048766,
    downloads: 1019781,
    favorites: 3077,
    likes: 3975,
    comments: 777,
    user_id: 1720744,
    user: "Valiphotos",
    userImageURL: "https://cdn.pixabay.com/user/2019/03/07/09-34-13-97_250x250.jpg",
  },
  {
    id: 276014,
    pageURL: "https://pixabay.com/photos/tree-flowers-meadow-tree-trunk-276014/",
    type: "photo",
    tags: "tree, flowers, meadow",
    previewURL: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_150.jpg",
    previewWidth: 150,
    previewHeight: 95,
    webformatURL: "https://pixabay.com/get/54e7d3434b56b10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 407,
    largeImageURL: "https://pixabay.com/get/54e7d3434b56b108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 4090,
    imageHeight: 2602,
    imageSize: 2134495,
    views: 1539376,
    downloads: 526708,
    favorites: 2838,
    likes: 3620,
    comments: 885,
    user_id: 1107275,
    user: "Larisa-K",
    userImageURL: "https://cdn.pixabay.com/user/2015/06/13/06-38-56-116_250x250.jpg",
  },
  {
    id: 931706,
    pageURL: "https://pixabay.com/photos/forest-mist-nature-trees-mystic-931706/",
    type: "photo",
    tags: "forest, mist, nature",
    previewURL: "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_150.jpg",
    previewWidth: 150,
    previewHeight: 84,
    webformatURL: "https://pixabay.com/get/5fe3d4444a54b10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 360,
    largeImageURL: "https://pixabay.com/get/5fe3d4444a54b108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 3840,
    imageHeight: 2160,
    imageSize: 1990949,
    views: 958654,
    downloads: 480261,
    favorites: 3202,
    likes: 3179,
    comments: 488,
    user_id: 242387,
    user: "Free-Photos",
    userImageURL: "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
  },
  {
    id: 324175,
    pageURL: "https://pixabay.com/photos/flowers-cherry-blossom-branch-324175/",
    type: "photo",
    tags: "flowers, cherry blossom, branch",
    previewURL: "https://cdn.pixabay.com/photo/2014/04/14/20/11/flowers-324175_150.jpg",
    previewWidth: 150,
    previewHeight: 99,
    webformatURL: "https://pixabay.com/get/55e2d1424d57b10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 426,
    largeImageURL: "https://pixabay.com/get/55e2d1424d57b108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 6000,
    imageHeight: 4000,
    imageSize: 2613829,
    views: 2358174,
    downloads: 1049024,
    favorites: 2844,
    likes: 3564,
    comments: 726,
    user_id: 2,
    user: "Hans",
    userImageURL: "https://cdn.pixabay.com/user/2019/01/29/15-01-52-802_250x250.jpg",
  },
  {
    id: 815297,
    pageURL: "https://pixabay.com/photos/the-road-beams-path-forest-nature-815297/",
    type: "photo",
    tags: "the road, beams, path",
    previewURL: "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_150.jpg",
    previewWidth: 150,
    previewHeight: 99,
    webformatURL: "https://pixabay.com/get/5ee1d0414355b10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 426,
    largeImageURL: "https://pixabay.com/get/5ee1d0414355b108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 3456,
    imageHeight: 2304,
    imageSize: 2442762,
    views: 1425079,
    downloads: 707172,
    favorites: 2713,
    likes: 3027,
    comments: 524,
    user_id: 1134851,
    user: "bertvthul",
    userImageURL: "https://cdn.pixabay.com/user/2017/09/06/14-08-52-481_250x250.jpg",
  },
  {
    id: 1127666,
    pageURL: "https://pixabay.com/photos/butterfly-insect-macro-animal-1127666/",
    type: "photo",
    tags: "butterfly, insect, macro",
    previewURL: "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_150.jpg",
    previewWidth: 150,
    previewHeight: 99,
    webformatURL: "https://pixabay.com/get/57e1d7444c54aa14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 426,
    largeImageURL:
      "https://pixabay.com/get/57e1d7444c54aa14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 5184,
    imageHeight: 3456,
    imageSize: 2265939,
    views: 1408580,
    downloads: 668108,
    favorites: 2136,
    likes: 2561,
    comments: 494,
    user_id: 1759589,
    user: "ROverhate",
    userImageURL: "https://cdn.pixabay.com/user/2016/01/10/09-32-50-295_250x250.jpg",
  },
  {
    id: 445228,
    pageURL: "https://pixabay.com/photos/dandelion-seeds-flower-nature-445228/",
    type: "photo",
    tags: "dandelion, seeds, flower",
    previewURL: "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_150.jpg",
    previewWidth: 150,
    previewHeight: 93,
    webformatURL: "https://pixabay.com/get/52e4d041485ab10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 401,
    largeImageURL: "https://pixabay.com/get/52e4d041485ab108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 4770,
    imageHeight: 2995,
    imageSize: 3835874,
    views: 1233329,
    downloads: 437626,
    favorites: 2358,
    likes: 2604,
    comments: 528,
    user_id: 57296,
    user: "InspiredImages",
    userImageURL: "https://cdn.pixabay.com/user/2019/11/19/18-56-46-517_250x250.jpg",
  },
  {
    id: 1072821,
    pageURL: "https://pixabay.com/photos/fall-autumn-red-season-woods-1072821/",
    type: "photo",
    tags: "fall, autumn, red",
    previewURL: "https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_150.jpg",
    previewWidth: 150,
    previewHeight: 99,
    webformatURL: "https://pixabay.com/get/57e0d2414250ad14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 426,
    largeImageURL:
      "https://pixabay.com/get/57e0d2414250ad14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 3456,
    imageHeight: 2304,
    imageSize: 5898018,
    views: 1652932,
    downloads: 754351,
    favorites: 2298,
    likes: 2771,
    comments: 500,
    user_id: 1720744,
    user: "Valiphotos",
    userImageURL: "https://cdn.pixabay.com/user/2019/03/07/09-34-13-97_250x250.jpg",
  },
  {
    id: 2031539,
    pageURL: "https://pixabay.com/photos/mountain-landscape-mountains-2031539/",
    type: "photo",
    tags: "mountain landscape, mountains, landscape",
    previewURL: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_150.jpg",
    previewWidth: 150,
    previewHeight: 84,
    webformatURL: "https://pixabay.com/get/54e0d6424f51a514f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 360,
    largeImageURL:
      "https://pixabay.com/get/54e0d6424f51a514f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 5184,
    imageHeight: 2916,
    imageSize: 5575510,
    views: 1215838,
    downloads: 815286,
    favorites: 2397,
    likes: 2713,
    comments: 339,
    user_id: 4384506,
    user: "kinkate",
    userImageURL: "https://cdn.pixabay.com/user/2020/11/14/09-29-12-942_250x250.jpg",
  },
  {
    id: 1373171,
    pageURL: "https://pixabay.com/photos/sunset-tree-water-silhouette-1373171/",
    type: "photo",
    tags: "sunset, tree, water",
    previewURL: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_150.jpg",
    previewWidth: 150,
    previewHeight: 84,
    webformatURL: "https://pixabay.com/get/57e3d2404b55ad14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 359,
    largeImageURL:
      "https://pixabay.com/get/57e3d2404b55ad14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 5105,
    imageHeight: 2871,
    imageSize: 1510356,
    views: 1142693,
    downloads: 735288,
    favorites: 2161,
    likes: 2273,
    comments: 412,
    user_id: 2508959,
    user: "Cleverpix",
    userImageURL: "https://cdn.pixabay.com/user/2016/05/05/02-59-23-101_250x250.jpg",
  },
  {
    id: 190055,
    pageURL: "https://pixabay.com/photos/mountains-sun-clouds-peak-summit-190055/",
    type: "photo",
    tags: "mountains, sun, clouds",
    previewURL: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_150.jpg",
    previewWidth: 150,
    previewHeight: 99,
    webformatURL: "https://pixabay.com/get/57e9d5434f57b10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 426,
    largeImageURL: "https://pixabay.com/get/57e9d5434f57b108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 1920,
    imageHeight: 1280,
    imageSize: 507161,
    views: 1195857,
    downloads: 458424,
    favorites: 1829,
    likes: 2454,
    comments: 428,
    user_id: 55851,
    user: "danfador",
    userImageURL: "",
  },
  {
    id: 163518,
    pageURL: "https://pixabay.com/photos/railroad-landscape-countryside-rail-163518/",
    type: "photo",
    tags: "railroad, landscape, countryside",
    previewURL: "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_150.jpg",
    previewWidth: 150,
    previewHeight: 96,
    webformatURL: "https://pixabay.com/get/57e6d6464b5ab10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 413,
    largeImageURL: "https://pixabay.com/get/57e6d6464b5ab108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 1920,
    imageHeight: 1241,
    imageSize: 638366,
    views: 786841,
    downloads: 454709,
    favorites: 1755,
    likes: 2032,
    comments: 336,
    user_id: 1107275,
    user: "Larisa-K",
    userImageURL: "https://cdn.pixabay.com/user/2015/06/13/06-38-56-116_250x250.jpg",
  },
  {
    id: 1822636,
    pageURL: "https://pixabay.com/photos/elephant-animals-asia-large-1822636/",
    type: "photo",
    tags: "elephant, animals, asia",
    previewURL: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_150.jpg",
    previewWidth: 150,
    previewHeight: 102,
    webformatURL: "https://pixabay.com/get/57e8d7414c51aa14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 436,
    largeImageURL:
      "https://pixabay.com/get/57e8d7414c51aa14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 3500,
    imageHeight: 2388,
    imageSize: 2338931,
    views: 975526,
    downloads: 473193,
    favorites: 1905,
    likes: 2164,
    comments: 249,
    user_id: 3639875,
    user: "sasint",
    userImageURL: "https://cdn.pixabay.com/user/2016/10/30/05-50-54-750_250x250.jpg",
  },
  {
    id: 615429,
    pageURL: "https://pixabay.com/photos/landscape-autumn-fog-village-615429/",
    type: "photo",
    tags: "landscape, autumn, fog",
    previewURL: "https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_150.jpg",
    previewWidth: 150,
    previewHeight: 84,
    webformatURL: "https://pixabay.com/get/50e1d047485bb10ff3d8992cc621307c173ad7e34e5077497c2879d29548cd_640.jpg",
    webformatWidth: 640,
    webformatHeight: 359,
    largeImageURL: "https://pixabay.com/get/50e1d047485bb108f5d0846096293e79173ddbec554c704f75267cd6914fc050_1280.jpg",
    imageWidth: 7236,
    imageHeight: 4070,
    imageSize: 6377618,
    views: 580346,
    downloads: 269670,
    favorites: 1467,
    likes: 1962,
    comments: 259,
    user_id: 697843,
    user: "jpeter2",
    userImageURL: "https://cdn.pixabay.com/user/2015/01/12/21-35-04-784_250x250.jpg",
  },
  {
    id: 1045954,
    pageURL: "https://pixabay.com/photos/bird-wings-fluttering-nature-1045954/",
    type: "photo",
    tags: "bird, wings, fluttering",
    previewURL: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_150.jpg",
    previewWidth: 150,
    previewHeight: 99,
    webformatURL: "https://pixabay.com/get/57e0d1464357a814f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 425,
    largeImageURL:
      "https://pixabay.com/get/57e0d1464357a814f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 4256,
    imageHeight: 2832,
    imageSize: 2352295,
    views: 577261,
    downloads: 248677,
    favorites: 1560,
    likes: 1768,
    comments: 305,
    user_id: 1651179,
    user: "homecare119",
    userImageURL: "",
  },
  {
    id: 3082832,
    pageURL: "https://pixabay.com/photos/nature-waters-lake-island-3082832/",
    type: "photo",
    tags: "nature, waters, lake",
    previewURL: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_150.jpg",
    previewWidth: 150,
    previewHeight: 84,
    webformatURL: "https://pixabay.com/get/55e0dd414251ae14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 359,
    largeImageURL:
      "https://pixabay.com/get/55e0dd414251ae14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 5757,
    imageHeight: 3238,
    imageSize: 4638828,
    views: 2181676,
    downloads: 1082692,
    favorites: 1665,
    likes: 2288,
    comments: 320,
    user_id: 7645255,
    user: "jplenio",
    userImageURL: "",
  },
  {
    id: 3140492,
    pageURL: "https://pixabay.com/photos/flower-nature-flora-petal-summer-3140492/",
    type: "photo",
    tags: "flower, nature, flora",
    previewURL: "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_150.jpg",
    previewWidth: 150,
    previewHeight: 100,
    webformatURL: "https://pixabay.com/get/55e1d1434e5bae14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 427,
    largeImageURL:
      "https://pixabay.com/get/55e1d1434e5bae14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 5689,
    imageHeight: 3803,
    imageSize: 3511611,
    views: 1404347,
    downloads: 850986,
    favorites: 1928,
    likes: 1921,
    comments: 215,
    user_id: 334088,
    user: "JillWellington",
    userImageURL: "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg",
  },
  {
    id: 1587287,
    pageURL: "https://pixabay.com/photos/italy-mountains-pragser-wildsee-1587287/",
    type: "photo",
    tags: "italy, mountains, pragser wildsee",
    previewURL: "https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_150.jpg",
    previewWidth: 150,
    previewHeight: 96,
    webformatURL: "https://pixabay.com/get/57e5dd44485aab14f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 411,
    largeImageURL:
      "https://pixabay.com/get/57e5dd44485aab14f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 2200,
    imageHeight: 1414,
    imageSize: 1270588,
    views: 707568,
    downloads: 336353,
    favorites: 1714,
    likes: 1980,
    comments: 301,
    user_id: 12019,
    user: "12019",
    userImageURL: "",
  },
  {
    id: 1072828,
    pageURL: "https://pixabay.com/photos/green-park-season-nature-outdoor-1072828/",
    type: "photo",
    tags: "green, park, season",
    previewURL: "https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_150.jpg",
    previewWidth: 150,
    previewHeight: 84,
    webformatURL: "https://pixabay.com/get/57e0d2414250a414f1dc846096293e79173ddbec554c704f75267cd6914fc050_640.jpg",
    webformatWidth: 640,
    webformatHeight: 360,
    largeImageURL:
      "https://pixabay.com/get/57e0d2414250a414f6da8c7dda793677123ddce05a576c48732f72d3954bc75db0_1280.jpg",
    imageWidth: 3456,
    imageHeight: 1944,
    imageSize: 4796428,
    views: 983455,
    downloads: 526546,
    favorites: 2048,
    likes: 2231,
    comments: 352,
    user_id: 1720744,
    user: "Valiphotos",
    userImageURL: "https://cdn.pixabay.com/user/2019/03/07/09-34-13-97_250x250.jpg",
  },
]; */

/* Store required HTML elements. */
const main = document.getElementById("main");
const loadingSpinner = document.getElementById("loading-spinner");

/* Global variables. */
let isFetching;
let imagesFetchedCount = 0;
let imagesLoadedCount = 0;
let areAllImagesLoaded = false;

const apiKey = "19722596-13a0944a6e5250a30156a39da";
const searchTerm = encodeURIComponent("nature");
const imageType = "photo";
const perPage = 10;
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=${imageType}&per_page=${perPage}&pretty=true`;

/* Show and Hide the loading spinner */
const showLoadingSpinner = () => {
  loadingSpinner.style.display = "block";
  isFetching = true;
};

const hideLoadingSpinner = () => {
  loadingSpinner.style.display = "none";
  isFetching = false;
};

/* Check if all fetched images are loaded. */
const imageIsLoaded = () => {
  imagesLoadedCount++;

  if (imagesLoadedCount === imagesFetchedCount) {
    areAllImagesLoaded = true;
  }
};

/* Fetch images from API and store them in a global variable. */
const fetchImages = async () => {
  showLoadingSpinner();
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const imagesData = data.hits;
    imagesFetchedCount += imagesData.length;
    hideLoadingSpinner();
    return imagesData;
  } catch (err) {
    hideLoadingSpinner();
    console.log("Error occurred while fetching images", err);
  }
};

/* Helper functions. */
const setAttributes = (element, attributesObj) => {
  for (const key in attributesObj) {
    element.setAttribute(key, attributesObj[key]);
  }
};

const appendChildren = (parent, childrenArr) => {
  childrenArr.forEach((c) => parent.append(c));
};

/* Create a figure and append its contents to it. */
const createFigure = (
  imgSrc,
  imgAlt,
  viewsCount,
  downloadsCount,
  favoritesCount,
  likesCount,
  commentsCount,
  author,
  authorId
) => {
  /* Create <figure> HTML element. */
  const figure = document.createElement("figure");
  figure.classList.add("figure");

  /* Create <div> HTML element as a container for image and stats. */
  const imageAndStatsContainer = document.createElement("div");
  imageAndStatsContainer.classList.add("image-stats-container");

  /* Create <img> HTML element. */
  const image = document.createElement("img");
  setAttributes(image, { src: imgSrc, alt: imgAlt, title: imgAlt });
  //   image.setAttribute("src", imgSrc);
  //   image.setAttribute("alt", imgAlt);
  //   image.setAttribute("title", imgAlt);
  //   image.setAttribute("loading", "lazy");
  image.classList.add("image");
  image.addEventListener("load", imageIsLoaded);

  /* Create <div> HTML element as a container for stats. */
  const stats = document.createElement("div");
  stats.classList.add("stats", "small-text");

  /* Create <span> HTML element for each stat. */
  const views = document.createElement("span");
  views.textContent = `Views: ${viewsCount.toLocaleString()}`;

  const downloads = document.createElement("span");
  downloads.textContent = `Downloads: ${downloadsCount.toLocaleString()}`;

  const favorites = document.createElement("span");
  favorites.textContent = `Favorites: ${favoritesCount.toLocaleString()}`;

  const likes = document.createElement("span");
  likes.textContent = `Likes: ${likesCount.toLocaleString()}`;

  const comments = document.createElement("span");
  comments.textContent = `Comments: ${commentsCount.toLocaleString()}`;

  /* Create <figcaption> HTML element. */
  const figcaption = document.createElement("figcaption");
  figcaption.classList.add("figcaption", "small-text");

  /* Create <p> HTML element as image credit. */
  const imageCredit = document.createElement("p");
  imageCredit.textContent = "Image by ";
  imageCredit.classList.add("image-credit");

  /* Create <a> HTML element as a link for crediting the author of the image. */
  const authorLink = document.createElement("a");
  authorLink.textContent = author;
  authorLink.setAttribute("href", `https://pixabay.com/users/${authorId}`);

  /* Appending all created elements. */
  imageCredit.append(authorLink);
  figcaption.append(imageCredit);

  appendChildren(stats, [views, downloads, favorites, likes, comments]);
  //   stats.append(views);
  //   stats.append(downloads);
  //   stats.append(favorites);
  //   stats.append(likes);
  //   stats.append(comments);

  imageAndStatsContainer.append(image);
  imageAndStatsContainer.append(stats);

  figure.append(imageAndStatsContainer);
  figure.append(figcaption);

  return figure;
};

/* Render figures and append them to <main>. */
const renderFigures = (figuresDataArr) => {
  figuresDataArr.forEach((figureData) => {
    const figure = createFigure(
      figureData.webformatURL,
      figureData.tags,
      figureData.views,
      figureData.downloads,
      figureData.favorites,
      figureData.likes,
      figureData.comments,
      figureData.user,
      figureData.user_id
    );

    main.append(figure);
  });
};

/* Trigger fetching more images. */
window.addEventListener("scroll", async () => {
  if (
    document.documentElement.getBoundingClientRect().bottom < window.innerHeight + 10 &&
    !isFetching &&
    areAllImagesLoaded
  ) {
    const moreImages = await fetchImages();

    renderFigures(moreImages);
  }
});

/* Initial render for figures. */
const initialRender = async () => {
  const fetchedImages = await fetchImages();

  renderFigures(fetchedImages);
};

initialRender();
