// Check the Documentation and Manual Here: https://webgi.xyz/docs
const viewer = new CoreViewerApp({
  canvas: document.getElementById("mcanvas")
});

viewer
  .initialize({
    caching: true,
    ground: true,
    bloom: true,
    enableDrop: false
  })
  .then((viewer) => {
    /// Set the quality based on display
    viewer.renderManager.displayCanvasScaling = window.devicePixelRatio;

    const loadingScreen = viewer.getPlugin(LoadingScreenPlugin);
    loadingScreen.loadingTextHeader = "Loading Custom 3D Experience";
    loadingScreen.showFileNames = false;

    // Load a model
    const model =
      "aka.glb";
    viewer.load(model);
    console.log(viewer);
  });