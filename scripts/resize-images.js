const { glob } = require("glob");
const sharp = require("sharp");
const path = require("path");

// Required for our buffer shenanigans on windows
sharp.cache(false);

// Get the image directory from argv
const [, , PATTERN = "./public/**/*.png", TARGET_WIDTH = "1024"] = process.argv;

async function resizeImages(pattern) {
  console.log("Finding images to resize using pattern: " + pattern);

  try {
    const files = await glob(pattern);
    console.log("found " + files.length + " files");

    const width = parseInt(TARGET_WIDTH, 10);

    for (const imagePath of files) {
      const buffer = await sharp(imagePath)
        .resize({ width, fit: "contain" })
        .toBuffer();

      const outputPath = path.join(
        path.dirname(imagePath),
        `${path.basename(imagePath, path.extname(imagePath))}.png`
      );

      // sharp does not, by default, allow ovewiting, so we do some buffer shenanigans
      sharp(buffer).toFile(outputPath);

      console.log(`Resized image is saved as ${outputPath}`);
    }
  } catch (err) {
    console.error("Error while resizing files:", err);
    process.exit(1);
  }
}

// Start of actual script execution
resizeImages(PATTERN).then(() => console.log("✨ done!"));
