document.addEventListener("DOMContentLoaded", async function () {
  // Function to load a script dynamically and expose the module
  function loadScript(url, moduleName) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => resolve(window[moduleName]); // On load, expose the module
      script.onerror = reject; // Handle loading errors
      document.head.appendChild(script);
    });
  }

  // IDs and variables are declared here
  const fetcherId =
    "/content/e79ea5aa40fd255406f44cf508d18e853cb982fd0f2734c98cd008934088cd4di0";
  const mainParentId = "YOUR-MAIN-PARENT-ID";

  let layeredParentId;
  let libList;
  let modules;
  let initializeLib;

  try {
    // Dynamically load the fetcher script and store the module
    await loadScript(fetcherId, "fetcher");
    // Fetch the last child ID from the main parent
    layeredParentId = await fetchLastChild(mainParentId, true);

    if (!layeredParentId) {
      throw new Error(`${mainParentId} has no child inscription!`);
    }

    // Fetch the library list from the last child
    libList = await fetchLastChild(layeredParentId);

    if (!libList) {
        throw new Error(`${layeredParentId} has no child inscription!`);
      }

    // Check for the presence of necessary properties
    if (!libList.hasOwnProperty("modules")) {
      throw new Error(
        `Modules field not found in last child of ${layeredParentId}`
      );
    }

    if (!libList.hasOwnProperty("initialize")) {
      throw new Error(`Could not initialize from ${layeredParentId}`);
    }

    modules = libList.modules;
    initializeLib = libList.initialize;

    // Load and initialize the library
    await loadScript(initializeLib.id, initializeLib.name);
    await initialize(modules, loadScript);
  } catch (err) {
    // Handle any errors that occur during the loading process
    console.error("An error occurred while loading the module! ", err);
  }
});
