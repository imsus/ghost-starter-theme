importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/assets/css/app.css",
    "revision": "44e3d44fcfef50769d9122601ba4119f"
  },
  {
    "url": "/assets/js/app.js",
    "revision": "394dd7800ca41d286605bf33becb3f41"
  },
  {
    "url": "/assets/js/manifest.js",
    "revision": "b9dbf7750d84861f2ee12504998141d1"
  },
  {
    "url": "/assets/js/vendor.js",
    "revision": "8227c9a764cc6c3e6fa1aa4446218135"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
