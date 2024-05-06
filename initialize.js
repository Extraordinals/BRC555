// Asynchronously initializes modules of different types (script, style, object)
async function initialize(modules, loadScript) {
  // Extract the last part of the URL path to get inscription id
  const path = window.location.pathname.split("/");
  const id = path[path.length - 1];

  let objects = {}; // Holds loaded objects
  let libs = {}; // Holds loaded libraries (scripts)

  // Iterate over each module descriptor to load it according to its type
  for (let module of modules) {
    if (module.type === "script") {
      // Load script modules and store them in the libs object
      libs[module.name] = await loadScript(module.id, module.name);
    } else if (module.type === "style") {
      // Create a link element for the stylesheet and append to the document head
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = module.id;
      document.head.appendChild(style);
    } else if (module.type === "object") {
      // Fetch and store objects based on an identifier
      objects[module.name] = await fetchOrdinal(module.id);
    }
  }

  // Invoke loadInscription function once modules are loaded
  loadInscription();
}
