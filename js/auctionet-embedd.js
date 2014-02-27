/*yepnope1.5.x|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);

// Auctionet Plugin
(function (window) {
  "use strict";

  var host = 'http://localhost/auctionet-embed';

  var locales = {
    en: {
      days: 'days',
      day: 'day',
      hours: 'hours',
      min: 'min',
      price: 'Starting price',
      time: 'Time left',
      no_objects_found: 'No objects where found',
      heading: 'Some heading for the module',
      popularItems: 'Popular items',
      lastestItems: 'Latest items',
      endingSoon: 'Ending soon',
      seeAll: 'See all'
    },
    de: {
      days: 'tage',
      day: 'tag',
      hours: 'stunden',
      min: 'min',
      price: 'Startpreis',
      time: 'Restzeit',
      no_objects_found: 'Keine Objekte gefunden, wo',
      heading: 'Einige Überschrift des Moduls',
      popularItems: 'Beliebte artikel',
      lastestItems: 'Neueste artikel',
      endingSoon: 'bald endend',
      seeAll: 'Alle ansehen'
    },
    sv: {
      days: 'dagar',
      day: 'dag',
      hours: 'timmar',
      min: 'minuter',
      price: 'Utgångspris',
      time: 'Tid kvar',
      no_objects_found: 'Inga objekt hittades',
      heading: 'Någon rubrik för widgeten',
      popularItems: 'Populära föremål',
      lastestItems: 'Senast tillagda',
      endingSoon: 'Snart slut',
      seeAll: 'Se alla'
    }
  }

  window.auctioNet = {
    defaults : {
      companyId: null,
      backgroundColors: {
        image: '#f5f5f5',
        meta: '#f5f5f5'
      },
      textColors: {
        itemId: '#000',
        link: '#8a8b87',
        heading: '#000',
        priceHeading: '#5d5d5d',
        priceValue: '#5d5d5d',
        timeHeading: '#5d5d5d',
        timeValue: '#5d5d5d'
      },
      locale: 'sv',
      howManyItems: 4
    },

    init : function (options) {
      auctioNet = this;

      // TODO: Implement DOM-ready to catch later loaded jQuery.
      yepnope([{
          test: window.jQuery,
          nope: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js',
        }, {
          test: window._,
          nope: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js',
        }, {
          test: window.Hogan,
          nope: '//twitter.github.com/hogan.js/builds/2.0.0/hogan-2.0.0.js',
        }, {
          load: [host + '/css/auctionet-embed.css', '//fonts.googleapis.com/css?family=Open+Sans:300italic,300,600'],
          complete: function () {
            jQuery(function() {
              auctioNet.embed(options);
            });
          }
        }]);

    },

    embed : function(options) {
      var document = window.document,
          $ = jQuery;

      this.settings = _.defaults(options, this.defaults);

      var data = {
        url: this.buildLinkUrl(),
        textColors: this.settings.textColors,
        text: locales[this.settings.locale],
        host: host,
        linkUrl: this.buildLinkUrl()
      }

      // TODO: Precompile with hulk.
      var template = '<div id="auctioNetWrapper"><div id="auctioNetHeader"><h2 style="color: {{textColors.heading}}">{{text.heading}}</h2><a href="{{linkUrl}}"><img src="{{host}}/img/logo.jpg" width="30%" height="30%" /></a></div><ul id="external-objects"></ul><div id="auctioNetButtons"><a href="javascript:void(0)" rel="bid_on" class="objects-btn active">{{text.popularItems}}</a><a href="javascript:void(0)" rel="recent" class="objects-btn">{{text.lastestItems}}</a><a href="javascript:void(0)" rel="ending" class="objects-btn">{{text.endingSoon}}</a><span class="button-divider"> | </span><a href="{{url}}" class="objects-btn all">{{text.seeAll}}</a></div></div></div>';
      var compiledTemplate = Hogan.compile(template);
      var renderedTemplate = compiledTemplate.render(data);

      $("#auctioNetEmbed").after(renderedTemplate)

      $('#auctioNetButtons a:not(.all)').click(_.bind(this.onClickObjectButton, this));

      this.externalObjects = $('#external-objects')
      this.loadExternalObjects('bid_on')
    },

    timeDifference : function (date1, date2) {
      var one_day = 1000 * 60 * 60 * 24,
          one_hour = 1000 * 60 * 60,
          one_minute = 1000 * 60,

      date1_ms = date1.getTime(),
      date2_ms = date2.getTime(),
      difference_ms = Math.abs(date1_ms - date2_ms),
      diff = '';

      if (difference_ms/one_day < 1.0) {
        if (difference_ms > one_hour) {
          diff = Math.round(difference_ms/one_hour) + ' ' + locales[this.settings.locale].hour;
        } else {
          diff = Math.round(difference_ms/one_minute) + locales[this.settings.locale].min;
        }
      } else {
        diff = Math.round(difference_ms/one_day) + (Math.round(difference_ms/one_day) === 1 ? ' ' + locales[this.settings.locale].day : ' ' + locales[this.settings.locale].days);
      }

      return diff;
    },

    drawObject : function (object) {
      var data = {
        imageUrl: object.images[0].thumb,
        id: object.id,
        title: object.title.length > 54 ? object.title.substring(0, 54) + '...' : object.title,
        url: object.url,
        price: object.estimate + ' ' + object.currency,
        endsIn: this.timeDifference(new Date(), new Date(object.ends_at * 1000)),
        priceText: locales[this.settings.locale].price,
        timeText: locales[this.settings.locale].time,
        textColors: this.settings.textColors,
        backgroundColors: this.settings.backgroundColors
      }

      // TODO: Precompile with hulk.
      var template = '<li><div class="object-image" style="background-color: {{backgroundColors.image}}"><a href="{{url}}"><img src="{{imageUrl}}" alt="{{title}}" /></a></div><a class="object-link" href="{{url}}" style="color: {{textColors.link}}"><strong style="color: {{textColors.itemId}}">{{id}}</strong> {{title}}</a><dl style="background-color: {{backgroundColors.meta}}"><dt class="border" style="color: {{textColors.priceHeading}}">{{priceText}}</dt><dd class="border" style="color: {{textColors.priceValue}}">{{price}}</dd><dt style="color: {{textColors.timeHeading}}">{{timeText}}</dt><dd style="color: {{textColors.timeValue}}">{{endsIn}}</dd></dl></li>';
      var compiledTemplate = Hogan.compile(template);
      return compiledTemplate.render(data);
    },

    displayNoObjectsFound : function (response) {
      var htmlString = '<li><h4>' + locales[this.settings.locale].no_objects_found + '</h4></li>';
      this.externalObjects.html(htmlString);
    },

    displayExternalObjects : function (items) {
      var htmlString = ''
      _.each(items, _.bind(function(element, index, list) {
        htmlString += this.drawObject(items[index]);
      }, this));
      this.externalObjects.html(htmlString);
    },

    loadedObjects : function (responseObject) {
      if (responseObject && responseObject.items) {
        this.displayExternalObjects(responseObject.items);
      }
    },

    buildUrl: function (filter) {
      return 'https://auctionet.com/api/v2/items.json?locale=' + this.settings.locale + '&company_id=' + this.settings.companyId + '&order=' + filter + '&per_page=' + this.settings.howManyItems;
    },

    buildLinkUrl: function () {
      return 'https://auctionet.com/' + this.settings.locale + '/search?company_id=' + this.settings.companyId;
    },

    loadExternalObjects : function (filter) {
      $.ajax({
        url: this.buildUrl(filter),
        dataType: 'jsonp',
        success: _.bind(this.loadedObjects, this),
        error: this.displayNoObjectsFound
      });
    },

    onClickObjectButton : function (e) {
      e.preventDefault();

      var self = $(e.target),
          filter = self.attr('rel');

      self.addClass('active');
      self.siblings(':not(.all)').removeClass('active');

      this.loadExternalObjects(filter);
    },
  };
}(window));
