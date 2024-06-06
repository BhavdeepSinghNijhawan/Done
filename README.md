<h1 align="center">GrocerGo</h1>

![image](https://github.com/BhavdeepSinghNijhawan/GrocerGo/assets/143419096/d50845e0-1243-45eb-96f3-b776a5f30311)

## TECHNICAL STACKS

### HTML

```
<!DOCTYPE html>
```

This declaration specifies the document type and version of HTML being used.

```
<html lang="en">
```

This section contains meta-information about the HTML document, such as character encoding, viewport settings, and links to external resources like stylesheets and icons.

```
<head>
```

This section contains meta-information about the HTML document, such as character encoding, viewport settings, and links to external resources like stylesheets and icons.

```
<meta charset="utf-8" />
```

Specifies the character encoding of the document as **UTF-8**, which **supports a wide range of characters** from various languages.

```
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```
Links to the favicon (website icon) that appears in the browser tab or bookmarks bar. The **%PUBLIC_URL%** placeholder gets replaced with the actual public URL of the application during the build process.

```
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Sets the viewport properties to ensure proper rendering and scaling on different devices and screen sizes.

```
<meta name="theme-color" content="#000000" />
```

Specifies the theme color of the web application. This color may be used by browsers or operating systems to customize the UI.

```
<meta name="description" content="Web site created using create-react-app" />
```

Provides a brief description of the web application for search engines and social media sharing.

```
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
```

Similar to the favicon, this links to an icon for Apple devices that support touch gestures.

```
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

Links to the web app manifest file, which provides metadata used when the web app is installed on a user's device or desktop.

```
<title>React App</title>
```

Sets the title of the web page displayed in the browser tab.

```
<body>
```

This section contains the main content of the HTML document, including any visible elements such as text, images, and interactive components.

```
<noscript>You need to enable JavaScript to run this app.</noscript>
```

Displays a message if JavaScript is disabled in the browser, informing the user that the application requires JavaScript to function properly.

```
<div id="root"></div>
```

This empty div element serves as the mounting point for the React application. React components will be rendered inside this div.

```
"short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
```

1. short_name: This is a short name for the web app, typically used on the user's home screen, launcher, or other places where space is limited. In this case, it's set to "React App".
2. name: This is the full name of the web app, which may be displayed in the app's store listing or other contexts where more space is available. Here, it's set to "Create React App Sample".
3. icons: This is an array of objects specifying the icons used for the web app. Each object contains the following properties:
- src: The path to the icon file.
- sizes: The sizes of the icon in pixels.
- type: The MIME type of the icon file.
In this example, there are three icons provided: favicon.ico in multiple sizes, logo192.png (192x192 pixels), and logo512.png (512x512 pixels).

```
"start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
```

4. start_url: This specifies the URL where the web app should start when launched. In this case, it's set to "." which means the root of the application.

5. display: This specifies how the web app should be displayed when launched. Possible values include "fullscreen", "standalone", "minimal-ui", and "browser". Here, it's set to "standalone" which means the web app will open in its own window without any browser elements.

6. theme_color: This specifies the theme color used for the web app. This color may be used by the browser or operating system to customize the UI. Here, it's set to "#000000" which represents black.

7. background_color: This specifies the background color used for the web app. It's set to "#ffffff" which represents white.

## LIVE URL

- https://grocery-shopping-website-theta.vercel.app/

## CONTRIBUTOR

- [Bhavdeep Singh Nijhawan](https://www.linkedin.com/in/bhavdeep-singh-nijhawan-739634280)
