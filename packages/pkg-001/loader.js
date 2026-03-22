async function loadPackage(manifestPath){
  const res = await fetch(manifestPath);
  const pkg = await res.json();

  console.log("Loading Package:", pkg.name);

  // preload assets
  pkg.assets.forEach(asset => {
    fetch(asset);
  });

  // load first page
  if(pkg.pages && pkg.pages.length > 0){
    loadPage(pkg.pages[0]);
  }
}
