async function loadPackage(manifestPath){
  const res = await fetch(manifestPath);
  const pkg = await res.json();

  // تحقق الترخيص
  const licenseRes = await fetch('licenses/pkg-001.json');
  const license = await licenseRes.json();

  const userKey = prompt("Enter License Key for " + pkg.name);
  if(userKey !== license.licenseKey){
    alert("Invalid License! Access Denied.");
    return;
  }

  console.log("License Verified:", userKey);

  // preload assets
  pkg.assets.forEach(asset => {
    fetch(asset);
  });

  // load first page
  if(pkg.pages && pkg.pages.length > 0){
    loadPage(pkg.pages[0]);
  }
}
