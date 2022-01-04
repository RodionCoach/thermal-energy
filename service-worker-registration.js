window.addEventListener("DOMContentLoaded", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`service-worker.js`, {
        scope: `${
          process.env.NODE_ENV === "production"
            ? location.pathname.split("/")?.reduce((acc, path) => {
                if (!!path && path !== "index.html") {
                  return `${acc}${path}/`;
                }

                return acc;
              }, "/")
            : `/${process.env.WIDGET_PATH}/`
        }`,
      })
      .then(() => {})
      .catch((error) =>
        console.warn(`Service Worker registration error: ${error}`)
      );
  }
});
