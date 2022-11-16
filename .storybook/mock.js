const fs = require('fs');

fs.readFile('../public/ui-kit.svg', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const spriteItems = data.split('</symbol>');

  const spriteItemsIds = [];

  spriteItems.forEach((item) => {
    if (item.includes('id="')) {
      const svgName = item.split('id="')[1].split('"')[0].trim();
      const svgViewbox = item.split('viewBox="')[1].split('"')[0].trim();

      spriteItemsIds.push({ [svgName]: svgViewbox });
    }
  });

  console.log(spriteItemsIds);

  return spriteItemsIds;
});

