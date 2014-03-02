# Auctionet Embed

## Quick start
Add the script file in the ```<head>``` section.

```
<script data-host='http://auctionet.com/assets/public/embed' src="js/auctionet-embed.1.0.1.js?v1" id='auctioNetEmbedScript'></script>
```

Then add the embedd code wherever you want the widget:

```
  <script id='auctioNetEmbed'>
    auctioNet.init({
      companyId: 52,
      locale: 'de',
      heading: 'Some heading'
    });
  </script>
```
