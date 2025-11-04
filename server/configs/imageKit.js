import ImageKit from "@imagekit/nodejs";

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: "private_YPkerNou2ur+9BG5jV51LC8AbTM=",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export default imageKit;
