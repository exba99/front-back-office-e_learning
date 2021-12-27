'use strict';
function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer: document.getElementById('viewerContainer'),
    viewerContainer: document.getElementById('viewer'),
    eventBus: null,
    toolbar: {
      container: document.getElementById('toolbarViewer'),
      numPages: document.getElementById('numPages'),
      pageNumber: document.getElementById('pageNumber'),
      scaleSelectContainer: document.getElementById('scaleSelectContainer'),
      scaleSelect: document.getElementById('scaleSelect'),
      customScaleOption: document.getElementById('customScaleOption'),
      previous: document.getElementById('previous'),
      next: document.getElementById('next'),
      zoomIn: document.getElementById('zoomIn'),
      zoomOut: document.getElementById('zoomOut'),
      viewFind: document.getElementById('viewFind'),
      openFile: document.getElementById('openFile'),
      print: document.getElementById('print'),
      presentationModeButton: document.getElementById('presentationMode'),
      download: document.getElementById('download'),
      viewBookmark: document.getElementById('viewBookmark'),
    },
    secondaryToolbar: {
      toolbar: document.getElementById('secondaryToolbar'),
      toggleButton: document.getElementById('secondaryToolbarToggle'),
      toolbarButtonContainer: document.getElementById(
        'secondaryToolbarButtonContainer',
      ),
      presentationModeButton: document.getElementById(
        'secondaryPresentationMode',
      ),
      openFileButton: document.getElementById('secondaryOpenFile'),
      printButton: document.getElementById('secondaryPrint'),
      downloadButton: document.getElementById('secondaryDownload'),
      viewBookmarkButton: document.getElementById('secondaryViewBookmark'),
      firstPageButton: document.getElementById('firstPage'),
      lastPageButton: document.getElementById('lastPage'),
      pageRotateCwButton: document.getElementById('pageRotateCw'),
      pageRotateCcwButton: document.getElementById('pageRotateCcw'),
      toggleHandToolButton: document.getElementById('toggleHandTool'),
      documentPropertiesButton: document.getElementById('documentProperties'),
    },
    fullscreen: {
      contextFirstPage: document.getElementById('contextFirstPage'),
      contextLastPage: document.getElementById('contextLastPage'),
      contextPageRotateCw: document.getElementById('contextPageRotateCw'),
      contextPageRotateCcw: document.getElementById('contextPageRotateCcw'),
    },
    sidebar: {
      mainContainer: document.getElementById('mainContainer'),
      outerContainer: document.getElementById('outerContainer'),
      toggleButton: document.getElementById('sidebarToggle'),
      thumbnailButton: document.getElementById('viewThumbnail'),
      outlineButton: document.getElementById('viewOutline'),
      attachmentsButton: document.getElementById('viewAttachments'),
      thumbnailView: document.getElementById('thumbnailView'),
      outlineView: document.getElementById('outlineView'),
      attachmentsView: document.getElementById('attachmentsView'),
    },
    findBar: {
      bar: document.getElementById('findbar'),
      toggleButton: document.getElementById('viewFind'),
      findField: document.getElementById('findInput'),
      highlightAllCheckbox: document.getElementById('findHighlightAll'),
      caseSensitiveCheckbox: document.getElementById('findMatchCase'),
      findMsg: document.getElementById('findMsg'),
      findResultsCount: document.getElementById('findResultsCount'),
      findStatusIcon: document.getElementById('findStatusIcon'),
      findPreviousButton: document.getElementById('findPrevious'),
      findNextButton: document.getElementById('findNext'),
    },
    passwordOverlay: {
      overlayName: 'passwordOverlay',
      container: document.getElementById('passwordOverlay'),
      label: document.getElementById('passwordText'),
      input: document.getElementById('password'),
      submitButton: document.getElementById('passwordSubmit'),
      cancelButton: document.getElementById('passwordCancel'),
    },
    documentProperties: {
      overlayName: 'documentPropertiesOverlay',
      container: document.getElementById('documentPropertiesOverlay'),
      closeButton: document.getElementById('documentPropertiesClose'),
      fields: {
        fileName: document.getElementById('fileNameField'),
        fileSize: document.getElementById('fileSizeField'),
        title: document.getElementById('titleField'),
        author: document.getElementById('authorField'),
        subject: document.getElementById('subjectField'),
        keywords: document.getElementById('keywordsField'),
        creationDate: document.getElementById('creationDateField'),
        modificationDate: document.getElementById('modificationDateField'),
        creator: document.getElementById('creatorField'),
        producer: document.getElementById('producerField'),
        version: document.getElementById('versionField'),
        pageCount: document.getElementById('pageCountField'),
      },
    },
    errorWrapper: {
      container: document.getElementById('errorWrapper'),
      errorMessage: document.getElementById('errorMessage'),
      closeButton: document.getElementById('errorClose'),
      errorMoreInfo: document.getElementById('errorMoreInfo'),
      moreInfoButton: document.getElementById('errorShowMore'),
      lessInfoButton: document.getElementById('errorShowLess'),
    },
    printContainer: document.getElementById('printContainer'),
    openFileInputName: 'fileInput',
    debuggerScriptPath: './debugger.js',
  };
}
function webViewerLoad() {
  var e = getViewerConfiguration();
  (window.PDFViewerApplication = pdfjsWebLibs.pdfjsWebApp.PDFViewerApplication),
    pdfjsWebLibs.pdfjsWebApp.PDFViewerApplication.run(e);
}
(function () {
  var e = navigator.userAgent,
    t = /Android/.test(e),
    n = /Android\s[0-2][^\d]/.test(e),
    i = /Android\s[0-4][^\d]/.test(e),
    r = e.indexOf('Chrom') >= 0,
    a = /Chrome\/(39|40)\./.test(e),
    s = e.indexOf('Trident') >= 0,
    o = /\b(iPad|iPhone|iPod)(?=;)/.test(e),
    c = e.indexOf('Opera') >= 0,
    l = /Safari\//.test(e) && !/(Chrome\/|Android\s)/.test(e);
  'undefined' == typeof PDFJS &&
    (('undefined' != typeof window ? window : this).PDFJS = {}),
    (function () {
      function e(e, t) {
        return new n(this.slice(e, t));
      }
      function t(e, t) {
        arguments.length < 2 && (t = 0);
        for (var n = 0, i = e.length; n < i; ++n, ++t) this[t] = 255 & e[n];
      }
      function n(n) {
        var i, r, a;
        if ('number' == typeof n) for (i = [], r = 0; r < n; ++r) i[r] = 0;
        else if ('slice' in n) i = n.slice(0);
        else for (i = [], r = 0, a = n.length; r < a; ++r) i[r] = n[r];
        return (
          (i.subarray = e),
          (i.buffer = i),
          (i.byteLength = i.length),
          (i.set = t),
          'object' == typeof n && n.buffer && (i.buffer = n.buffer),
          i
        );
      }
      return 'undefined' != typeof Uint8Array
        ? ('undefined' == typeof Uint8Array.prototype.subarray &&
            ((Uint8Array.prototype.subarray = function (e, t) {
              return new Uint8Array(this.slice(e, t));
            }),
            (Float32Array.prototype.subarray = function (e, t) {
              return new Float32Array(this.slice(e, t));
            })),
          void (
            'undefined' == typeof Float64Array &&
            (window.Float64Array = Float32Array)
          ))
        : ((window.Uint8Array = n),
          (window.Int8Array = n),
          (window.Uint32Array = n),
          (window.Int32Array = n),
          (window.Uint16Array = n),
          (window.Float32Array = n),
          void (window.Float64Array = n));
    })(),
    (function () {
      window.URL || (window.URL = window.webkitURL);
    })(),
    (function () {
      if ('undefined' != typeof Object.defineProperty) {
        var e = !0;
        try {
          Object.defineProperty(new Image(), 'id', { value: 'test' });
          var t = function () {};
          (t.prototype = { get id() {} }),
            Object.defineProperty(new t(), 'id', {
              value: '',
              configurable: !0,
              enumerable: !0,
              writable: !1,
            });
        } catch (t) {
          e = !1;
        }
        if (e) return;
      }
      Object.defineProperty = function (e, t, n) {
        delete e[t],
          'get' in n && e.__defineGetter__(t, n.get),
          'set' in n && e.__defineSetter__(t, n.set),
          'value' in n &&
            (e.__defineSetter__(t, function (e) {
              return (
                this.__defineGetter__(t, function () {
                  return e;
                }),
                e
              );
            }),
            (e[t] = n.value));
      };
    })(),
    (function () {
      var e = XMLHttpRequest.prototype,
        t = new XMLHttpRequest();
      if (
        ('overrideMimeType' in t ||
          Object.defineProperty(e, 'overrideMimeType', {
            value: function (e) {},
          }),
        !('responseType' in t))
      )
        return (
          (PDFJS.disableWorker = !0),
          Object.defineProperty(e, 'responseType', {
            get: function () {
              return this._responseType || 'text';
            },
            set: function (e) {
              ('text' !== e && 'arraybuffer' !== e) ||
                ((this._responseType = e),
                'arraybuffer' === e &&
                  'function' == typeof this.overrideMimeType &&
                  this.overrideMimeType('text/plain; charset=x-user-defined'));
            },
          }),
          'undefined' != typeof VBArray
            ? void Object.defineProperty(e, 'response', {
                get: function () {
                  return 'arraybuffer' === this.responseType
                    ? new Uint8Array(new VBArray(this.responseBody).toArray())
                    : this.responseText;
                },
              })
            : void Object.defineProperty(e, 'response', {
                get: function () {
                  if ('arraybuffer' !== this.responseType)
                    return this.responseText;
                  var e,
                    t = this.responseText,
                    n = t.length,
                    i = new Uint8Array(n);
                  for (e = 0; e < n; ++e) i[e] = 255 & t.charCodeAt(e);
                  return i.buffer;
                },
              })
        );
    })(),
    (function () {
      if (!('btoa' in window)) {
        var e =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        window.btoa = function (t) {
          var n,
            i,
            r = '';
          for (n = 0, i = t.length; n < i; n += 3) {
            var a = 255 & t.charCodeAt(n),
              s = 255 & t.charCodeAt(n + 1),
              o = 255 & t.charCodeAt(n + 2),
              c = a >> 2,
              l = ((3 & a) << 4) | (s >> 4),
              h = n + 1 < i ? ((15 & s) << 2) | (o >> 6) : 64,
              u = n + 2 < i ? 63 & o : 64;
            r += e.charAt(c) + e.charAt(l) + e.charAt(h) + e.charAt(u);
          }
          return r;
        };
      }
    })(),
    (function () {
      if (!('atob' in window)) {
        var e =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        window.atob = function (t) {
          if (((t = t.replace(/=+$/, '')), t.length % 4 === 1))
            throw new Error('bad atob input');
          for (
            var n, i, r = 0, a = 0, s = '';
            (i = t.charAt(a++));
            ~i && ((n = r % 4 ? 64 * n + i : i), r++ % 4)
              ? (s += String.fromCharCode(255 & (n >> ((-2 * r) & 6))))
              : 0
          )
            i = e.indexOf(i);
          return s;
        };
      }
    })(),
    (function () {
      'undefined' == typeof Function.prototype.bind &&
        (Function.prototype.bind = function (e) {
          var t = this,
            n = Array.prototype.slice.call(arguments, 1),
            i = function () {
              var i = n.concat(Array.prototype.slice.call(arguments));
              return t.apply(e, i);
            };
          return i;
        });
    })(),
    (function () {
      var e = document.createElement('div');
      'dataset' in e ||
        Object.defineProperty(HTMLElement.prototype, 'dataset', {
          get: function () {
            if (this._dataset) return this._dataset;
            for (var e = {}, t = 0, n = this.attributes.length; t < n; t++) {
              var i = this.attributes[t];
              if ('data-' === i.name.substring(0, 5)) {
                var r = i.name
                  .substring(5)
                  .replace(/\-([a-z])/g, function (e, t) {
                    return t.toUpperCase();
                  });
                e[r] = i.value;
              }
            }
            return (
              Object.defineProperty(this, '_dataset', {
                value: e,
                writable: !1,
                enumerable: !1,
              }),
              e
            );
          },
          enumerable: !0,
        });
    })(),
    (function () {
      function e(e, t, n, i) {
        var r = e.className || '',
          a = r.split(/\s+/g);
        '' === a[0] && a.shift();
        var s = a.indexOf(t);
        return (
          s < 0 && n && a.push(t),
          s >= 0 && i && a.splice(s, 1),
          (e.className = a.join(' ')),
          s >= 0
        );
      }
      var t = document.createElement('div');
      if (!('classList' in t)) {
        var n = {
          add: function (t) {
            e(this.element, t, !0, !1);
          },
          contains: function (t) {
            return e(this.element, t, !1, !1);
          },
          remove: function (t) {
            e(this.element, t, !1, !0);
          },
          toggle: function (t) {
            e(this.element, t, !0, !0);
          },
        };
        Object.defineProperty(HTMLElement.prototype, 'classList', {
          get: function () {
            if (this._classList) return this._classList;
            var e = Object.create(n, {
              element: { value: this, writable: !1, enumerable: !0 },
            });
            return (
              Object.defineProperty(this, '_classList', {
                value: e,
                writable: !1,
                enumerable: !1,
              }),
              e
            );
          },
          enumerable: !0,
        });
      }
    })(),
    (function () {
      'console' in window
        ? 'bind' in console.log ||
          ((console.log = (function (e) {
            return function (t) {
              return e(t);
            };
          })(console.log)),
          (console.error = (function (e) {
            return function (t) {
              return e(t);
            };
          })(console.error)),
          (console.warn = (function (e) {
            return function (t) {
              return e(t);
            };
          })(console.warn)))
        : (window.console = {
            log: function () {},
            error: function () {},
            warn: function () {},
          });
    })(),
    (function () {
      function e(e) {
        t(e.target) && e.stopPropagation();
      }
      function t(e) {
        return e.disabled || (e.parentNode && t(e.parentNode));
      }
      c && document.addEventListener('click', e, !0);
    })(),
    (function () {
      s && (PDFJS.disableCreateObjectURL = !0);
    })(),
    (function () {
      'language' in navigator ||
        (PDFJS.locale = navigator.userLanguage || 'en-US');
    })(),
    (function () {
      (l || n || a || o) &&
        ((PDFJS.disableRange = !0), (PDFJS.disableStream = !0));
    })(),
    (function () {
      (history.pushState && !n) || (PDFJS.disableHistory = !0);
    })(),
    (function () {
      if (window.CanvasPixelArray)
        'function' != typeof window.CanvasPixelArray.prototype.set &&
          (window.CanvasPixelArray.prototype.set = function (e) {
            for (var t = 0, n = this.length; t < n; t++) this[t] = e[t];
          });
      else {
        var n,
          a = !1;
        if (
          (r
            ? ((n = e.match(/Chrom(e|ium)\/([0-9]+)\./)),
              (a = n && parseInt(n[2]) < 21))
            : t
            ? (a = i)
            : l &&
              ((n = e.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//)),
              (a = n && parseInt(n[1]) < 6)),
          a)
        ) {
          var s = window.CanvasRenderingContext2D.prototype,
            o = s.createImageData;
          (s.createImageData = function (e, t) {
            var n = o.call(this, e, t);
            return (
              (n.data.set = function (e) {
                for (var t = 0, n = this.length; t < n; t++) this[t] = e[t];
              }),
              n
            );
          }),
            (s = null);
        }
      }
    })(),
    (function () {
      function e(e) {
        window.setTimeout(e, 20);
      }
      return o
        ? void (window.requestAnimationFrame = e)
        : void (
            'requestAnimationFrame' in window ||
            (window.requestAnimationFrame =
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              e)
          );
    })(),
    (function () {
      (o || t) && (PDFJS.maxCanvasPixels = 5242880);
    })(),
    (function () {
      s && window.parent !== window && (PDFJS.disableFullscreen = !0);
    })(),
    (function () {
      'currentScript' in document ||
        Object.defineProperty(document, 'currentScript', {
          get: function () {
            var e = document.getElementsByTagName('script');
            return e[e.length - 1];
          },
          enumerable: !0,
          configurable: !0,
        });
    })(),
    (function () {
      var e = document.createElement('input');
      try {
        e.type = 'number';
      } catch (i) {
        var t = e.constructor.prototype,
          n = Object.getOwnPropertyDescriptor(t, 'type');
        Object.defineProperty(t, 'type', {
          get: function () {
            return n.get.call(this);
          },
          set: function (e) {
            n.set.call(this, 'number' === e ? 'text' : e);
          },
          enumerable: !0,
          configurable: !0,
        });
      }
    })(),
    (function () {
      if (document.attachEvent) {
        var e = document.constructor.prototype,
          t = Object.getOwnPropertyDescriptor(e, 'readyState');
        Object.defineProperty(e, 'readyState', {
          get: function () {
            var e = t.get.call(this);
            return 'interactive' === e ? 'loading' : e;
          },
          set: function (e) {
            t.set.call(this, e);
          },
          enumerable: !0,
          configurable: !0,
        });
      }
    })();
}.call('undefined' == typeof window ? this : window),
  (document.webL10n = (function (e, t, n) {
    function i() {
      return t.querySelectorAll('link[type="application/l10n"]');
    }
    function r() {
      var e = t.querySelector('script[type="application/l10n"]');
      return e ? JSON.parse(e.innerHTML) : null;
    }
    function a(e) {
      return e ? e.querySelectorAll('*[data-l10n-id]') : [];
    }
    function s(e) {
      if (!e) return {};
      var t = e.getAttribute('data-l10n-id'),
        n = e.getAttribute('data-l10n-args'),
        i = {};
      if (n)
        try {
          i = JSON.parse(n);
        } catch (e) {
          console.warn('could not parse arguments for #' + t);
        }
      return { id: t, args: i };
    }
    function o(e) {
      var n = t.createEvent('Event');
      n.initEvent('localized', !0, !1), (n.language = e), t.dispatchEvent(n);
    }
    function c(e, t, n) {
      (t = t || function (e) {}), (n = n || function () {});
      var i = new XMLHttpRequest();
      i.open('GET', e, C),
        i.overrideMimeType && i.overrideMimeType('text/plain; charset=utf-8'),
        (i.onreadystatechange = function () {
          4 == i.readyState &&
            (200 == i.status || 0 === i.status ? t(i.responseText) : n());
        }),
        (i.onerror = n),
        (i.ontimeout = n);
      try {
        i.send(null);
      } catch (e) {
        n();
      }
    }
    function l(e, t, n, i) {
      function r(e) {
        return e.lastIndexOf('\\') < 0
          ? e
          : e
              .replace(/\\\\/g, '\\')
              .replace(/\\n/g, '\n')
              .replace(/\\r/g, '\r')
              .replace(/\\t/g, '\t')
              .replace(/\\b/g, '\b')
              .replace(/\\f/g, '\f')
              .replace(/\\{/g, '{')
              .replace(/\\}/g, '}')
              .replace(/\\"/g, '"')
              .replace(/\\'/g, "'");
      }
      function a(e, n) {
        function i(e, n, i) {
          function c() {
            for (;;) {
              if (!p.length) return void i();
              var e = p.shift();
              if (!h.test(e)) {
                if (n) {
                  if ((b = u.exec(e))) {
                    (g = b[1].toLowerCase()),
                      (v = '*' !== g && g !== t && g !== m);
                    continue;
                  }
                  if (v) continue;
                  if ((b = d.exec(e))) return void a(s + b[1], c);
                }
                var l = e.match(f);
                l && 3 == l.length && (o[l[1]] = r(l[2]));
              }
            }
          }
          var p = e.replace(l, '').split(/[\r\n]+/),
            g = '*',
            m = t.split('-', 1)[0],
            v = !1,
            b = '';
          c();
        }
        function a(e, t) {
          c(
            e,
            function (e) {
              i(e, !1, t);
            },
            function () {
              console.warn(e + ' not found.'), t();
            },
          );
        }
        var o = {},
          l = /^\s*|\s*$/,
          h = /^\s*#|^\s*$/,
          u = /^\s*\[(.*)\]\s*$/,
          d = /^\s*@import\s+url\((.*)\)\s*$/i,
          f = /^([^=\s]*)\s*=\s*(.+)$/;
        i(e, !0, function () {
          n(o);
        });
      }
      var s = e.replace(/[^\/]*$/, '') || './';
      c(
        e,
        function (e) {
          (y += e),
            a(e, function (e) {
              for (var t in e) {
                var i,
                  r,
                  a = t.lastIndexOf('.');
                a > 0
                  ? ((i = t.substring(0, a)), (r = t.substr(a + 1)))
                  : ((i = t), (r = A)),
                  w[i] || (w[i] = {}),
                  (w[i][r] = e[t]);
              }
              n && n();
            });
        },
        i,
      );
    }
    function h(e, t) {
      function n(e) {
        var t = e.href;
        this.load = function (e, n) {
          l(t, e, n, function () {
            console.warn(t + ' not found.'),
              console.warn('"' + e + '" resource not found'),
              (S = ''),
              n();
          });
        };
      }
      e && (e = e.toLowerCase()), (t = t || function () {}), u(), (S = e);
      var a = i(),
        s = a.length;
      if (0 === s) {
        var c = r();
        if (c && c.locales && c.default_locale) {
          if (
            (console.log('using the embedded JSON directory, early way out'),
            (w = c.locales[e]),
            !w)
          ) {
            var h = c.default_locale.toLowerCase();
            for (var d in c.locales) {
              if (((d = d.toLowerCase()), d === e)) {
                w = c.locales[e];
                break;
              }
              d === h && (w = c.locales[h]);
            }
          }
          t();
        } else console.log('no resource to load, early way out');
        return o(e), void (x = 'complete');
      }
      var f = null,
        p = 0;
      f = function () {
        p++, p >= s && (t(), o(e), (x = 'complete'));
      };
      for (var g = 0; g < s; g++) {
        var m = new n(a[g]);
        m.load(e, f);
      }
    }
    function u() {
      (w = {}), (y = ''), (S = '');
    }
    function d(e) {
      function t(e, t) {
        return t.indexOf(e) !== -1;
      }
      function n(e, t, n) {
        return t <= e && e <= n;
      }
      var i = {
          af: 3,
          ak: 4,
          am: 4,
          ar: 1,
          asa: 3,
          az: 0,
          be: 11,
          bem: 3,
          bez: 3,
          bg: 3,
          bh: 4,
          bm: 0,
          bn: 3,
          bo: 0,
          br: 20,
          brx: 3,
          bs: 11,
          ca: 3,
          cgg: 3,
          chr: 3,
          cs: 12,
          cy: 17,
          da: 3,
          de: 3,
          dv: 3,
          dz: 0,
          ee: 3,
          el: 3,
          en: 3,
          eo: 3,
          es: 3,
          et: 3,
          eu: 3,
          fa: 0,
          ff: 5,
          fi: 3,
          fil: 4,
          fo: 3,
          fr: 5,
          fur: 3,
          fy: 3,
          ga: 8,
          gd: 24,
          gl: 3,
          gsw: 3,
          gu: 3,
          guw: 4,
          gv: 23,
          ha: 3,
          haw: 3,
          he: 2,
          hi: 4,
          hr: 11,
          hu: 0,
          id: 0,
          ig: 0,
          ii: 0,
          is: 3,
          it: 3,
          iu: 7,
          ja: 0,
          jmc: 3,
          jv: 0,
          ka: 0,
          kab: 5,
          kaj: 3,
          kcg: 3,
          kde: 0,
          kea: 0,
          kk: 3,
          kl: 3,
          km: 0,
          kn: 0,
          ko: 0,
          ksb: 3,
          ksh: 21,
          ku: 3,
          kw: 7,
          lag: 18,
          lb: 3,
          lg: 3,
          ln: 4,
          lo: 0,
          lt: 10,
          lv: 6,
          mas: 3,
          mg: 4,
          mk: 16,
          ml: 3,
          mn: 3,
          mo: 9,
          mr: 3,
          ms: 0,
          mt: 15,
          my: 0,
          nah: 3,
          naq: 7,
          nb: 3,
          nd: 3,
          ne: 3,
          nl: 3,
          nn: 3,
          no: 3,
          nr: 3,
          nso: 4,
          ny: 3,
          nyn: 3,
          om: 3,
          or: 3,
          pa: 3,
          pap: 3,
          pl: 13,
          ps: 3,
          pt: 3,
          rm: 3,
          ro: 9,
          rof: 3,
          ru: 11,
          rwk: 3,
          sah: 0,
          saq: 3,
          se: 7,
          seh: 3,
          ses: 0,
          sg: 0,
          sh: 11,
          shi: 19,
          sk: 12,
          sl: 14,
          sma: 7,
          smi: 7,
          smj: 7,
          smn: 7,
          sms: 7,
          sn: 3,
          so: 3,
          sq: 3,
          sr: 11,
          ss: 3,
          ssy: 3,
          st: 3,
          sv: 3,
          sw: 3,
          syr: 3,
          ta: 3,
          te: 3,
          teo: 3,
          th: 0,
          ti: 4,
          tig: 3,
          tk: 3,
          tl: 4,
          tn: 3,
          to: 0,
          tr: 0,
          ts: 3,
          tzm: 22,
          uk: 11,
          ur: 3,
          ve: 3,
          vi: 0,
          vun: 3,
          wa: 4,
          wae: 3,
          wo: 0,
          xh: 3,
          xog: 3,
          yo: 0,
          zh: 0,
          zu: 3,
        },
        r = {
          0: function (e) {
            return 'other';
          },
          1: function (e) {
            return n(e % 100, 3, 10)
              ? 'few'
              : 0 === e
              ? 'zero'
              : n(e % 100, 11, 99)
              ? 'many'
              : 2 == e
              ? 'two'
              : 1 == e
              ? 'one'
              : 'other';
          },
          2: function (e) {
            return 0 !== e && e % 10 === 0
              ? 'many'
              : 2 == e
              ? 'two'
              : 1 == e
              ? 'one'
              : 'other';
          },
          3: function (e) {
            return 1 == e ? 'one' : 'other';
          },
          4: function (e) {
            return n(e, 0, 1) ? 'one' : 'other';
          },
          5: function (e) {
            return n(e, 0, 2) && 2 != e ? 'one' : 'other';
          },
          6: function (e) {
            return 0 === e
              ? 'zero'
              : e % 10 == 1 && e % 100 != 11
              ? 'one'
              : 'other';
          },
          7: function (e) {
            return 2 == e ? 'two' : 1 == e ? 'one' : 'other';
          },
          8: function (e) {
            return n(e, 3, 6)
              ? 'few'
              : n(e, 7, 10)
              ? 'many'
              : 2 == e
              ? 'two'
              : 1 == e
              ? 'one'
              : 'other';
          },
          9: function (e) {
            return 0 === e || (1 != e && n(e % 100, 1, 19))
              ? 'few'
              : 1 == e
              ? 'one'
              : 'other';
          },
          10: function (e) {
            return n(e % 10, 2, 9) && !n(e % 100, 11, 19)
              ? 'few'
              : e % 10 != 1 || n(e % 100, 11, 19)
              ? 'other'
              : 'one';
          },
          11: function (e) {
            return n(e % 10, 2, 4) && !n(e % 100, 12, 14)
              ? 'few'
              : e % 10 === 0 || n(e % 10, 5, 9) || n(e % 100, 11, 14)
              ? 'many'
              : e % 10 == 1 && e % 100 != 11
              ? 'one'
              : 'other';
          },
          12: function (e) {
            return n(e, 2, 4) ? 'few' : 1 == e ? 'one' : 'other';
          },
          13: function (e) {
            return n(e % 10, 2, 4) && !n(e % 100, 12, 14)
              ? 'few'
              : (1 != e && n(e % 10, 0, 1)) ||
                n(e % 10, 5, 9) ||
                n(e % 100, 12, 14)
              ? 'many'
              : 1 == e
              ? 'one'
              : 'other';
          },
          14: function (e) {
            return n(e % 100, 3, 4)
              ? 'few'
              : e % 100 == 2
              ? 'two'
              : e % 100 == 1
              ? 'one'
              : 'other';
          },
          15: function (e) {
            return 0 === e || n(e % 100, 2, 10)
              ? 'few'
              : n(e % 100, 11, 19)
              ? 'many'
              : 1 == e
              ? 'one'
              : 'other';
          },
          16: function (e) {
            return e % 10 == 1 && 11 != e ? 'one' : 'other';
          },
          17: function (e) {
            return 3 == e
              ? 'few'
              : 0 === e
              ? 'zero'
              : 6 == e
              ? 'many'
              : 2 == e
              ? 'two'
              : 1 == e
              ? 'one'
              : 'other';
          },
          18: function (e) {
            return 0 === e
              ? 'zero'
              : n(e, 0, 2) && 0 !== e && 2 != e
              ? 'one'
              : 'other';
          },
          19: function (e) {
            return n(e, 2, 10) ? 'few' : n(e, 0, 1) ? 'one' : 'other';
          },
          20: function (e) {
            return (!n(e % 10, 3, 4) && e % 10 != 9) ||
              n(e % 100, 10, 19) ||
              n(e % 100, 70, 79) ||
              n(e % 100, 90, 99)
              ? e % 1e6 === 0 && 0 !== e
                ? 'many'
                : e % 10 != 2 || t(e % 100, [12, 72, 92])
                ? e % 10 != 1 || t(e % 100, [11, 71, 91])
                  ? 'other'
                  : 'one'
                : 'two'
              : 'few';
          },
          21: function (e) {
            return 0 === e ? 'zero' : 1 == e ? 'one' : 'other';
          },
          22: function (e) {
            return n(e, 0, 1) || n(e, 11, 99) ? 'one' : 'other';
          },
          23: function (e) {
            return n(e % 10, 1, 2) || e % 20 === 0 ? 'one' : 'other';
          },
          24: function (e) {
            return n(e, 3, 10) || n(e, 13, 19)
              ? 'few'
              : t(e, [2, 12])
              ? 'two'
              : t(e, [1, 11])
              ? 'one'
              : 'other';
          },
        },
        a = i[e.replace(/-.*$/, '')];
      return a in r
        ? r[a]
        : (console.warn('plural form unknown for [' + e + ']'),
          function () {
            return 'other';
          });
    }
    function f(e, t, n) {
      var i = w[e];
      if (!i) {
        if ((console.warn('#' + e + ' is undefined.'), !n)) return null;
        i = n;
      }
      var r = {};
      for (var a in i) {
        var s = i[a];
        (s = p(s, t, e, a)), (s = g(s, t, e)), (r[a] = s);
      }
      return r;
    }
    function p(e, t, n, i) {
      var r = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/,
        a = r.exec(e);
      if (!a || !a.length) return e;
      var s,
        o = a[1],
        c = a[2];
      if ((t && c in t ? (s = t[c]) : c in w && (s = w[c]), o in P)) {
        var l = P[o];
        e = l(e, s, n, i);
      }
      return e;
    }
    function g(e, t, n) {
      var i = /\{\{\s*(.+?)\s*\}\}/g;
      return e.replace(i, function (e, i) {
        return t && i in t
          ? t[i]
          : i in w
          ? w[i]
          : (console.log('argument {{' + i + '}} for #' + n + ' is undefined.'),
            e);
      });
    }
    function m(e) {
      var n = s(e);
      if (n.id) {
        var i = f(n.id, n.args);
        if (!i) return void console.warn('#' + n.id + ' is undefined.');
        if (i[A]) {
          if (0 === v(e)) e[A] = i[A];
          else {
            for (var r = e.childNodes, a = !1, o = 0, c = r.length; o < c; o++)
              3 === r[o].nodeType &&
                /\S/.test(r[o].nodeValue) &&
                (a
                  ? (r[o].nodeValue = '')
                  : ((r[o].nodeValue = i[A]), (a = !0)));
            if (!a) {
              var l = t.createTextNode(i[A]);
              e.insertBefore(l, e.firstChild);
            }
          }
          delete i[A];
        }
        for (var h in i) e[h] = i[h];
      }
    }
    function v(e) {
      if (e.children) return e.children.length;
      if ('undefined' != typeof e.childElementCount) return e.childElementCount;
      for (var t = 0, n = 0; n < e.childNodes.length; n++)
        t += 1 === e.nodeType ? 1 : 0;
      return t;
    }
    function b(e) {
      e = e || t.documentElement;
      for (var n = a(e), i = n.length, r = 0; r < i; r++) m(n[r]);
      m(e);
    }
    var w = {},
      y = '',
      A = 'textContent',
      S = '',
      P = {},
      x = 'loading',
      C = !0;
    return (
      (P.plural = function (e, t, n, i) {
        var r = parseFloat(t);
        if (isNaN(r)) return e;
        if (i != A) return e;
        P._pluralRules || (P._pluralRules = d(S));
        var a = '[' + P._pluralRules(r) + ']';
        return (
          0 === r && n + '[zero]' in w
            ? (e = w[n + '[zero]'][i])
            : 1 == r && n + '[one]' in w
            ? (e = w[n + '[one]'][i])
            : 2 == r && n + '[two]' in w
            ? (e = w[n + '[two]'][i])
            : n + a in w
            ? (e = w[n + a][i])
            : n + '[other]' in w && (e = w[n + '[other]'][i]),
          e
        );
      }),
      {
        get: function (e, t, n) {
          var i = e.lastIndexOf('.'),
            r = A;
          i > 0 && ((r = e.substr(i + 1)), (e = e.substring(0, i)));
          var a;
          n && ((a = {}), (a[r] = n));
          var s = f(e, t, a);
          return s && r in s ? s[r] : '{{' + e + '}}';
        },
        getData: function () {
          return w;
        },
        getText: function () {
          return y;
        },
        getLanguage: function () {
          return S;
        },
        setLanguage: function (e, t) {
          h(e, function () {
            t && t(), b();
          });
        },
        getDirection: function () {
          var e = ['ar', 'he', 'fa', 'ps', 'ur'],
            t = S.split('-', 1)[0];
          return e.indexOf(t) >= 0 ? 'rtl' : 'ltr';
        },
        translate: b,
        getReadyState: function () {
          return x;
        },
        ready: function (n) {
          n &&
            ('complete' == x || 'interactive' == x
              ? e.setTimeout(function () {
                  n();
                })
              : t.addEventListener &&
                t.addEventListener('localized', function e() {
                  t.removeEventListener('localized', e), n();
                }));
        },
      }
    );
  })(window, document)),
  (function (e, t) {
    'function' == typeof define && define.amd
      ? define('pdfjs-dist/build/pdf', ['exports'], t)
      : t('undefined' != typeof exports ? exports : (e.pdfjsDistBuildPdf = {}));
  })(this, function (e) {
    var t = '1.7.242',
      n = '6f0cf8c',
      i =
        'undefined' != typeof document && document.currentScript
          ? document.currentScript.src
          : null,
      r = {};
    (function () {
      !(function (e, t) {
        t((e.pdfjsSharedUtil = {}));
      })(this, function (e) {
        function t(e) {
          Z = e;
        }
        function n() {
          return Z;
        }
        function i(e) {
          Z >= Q.infos && console.log('Info: ' + e);
        }
        function r(e) {
          Z >= Q.warnings && console.log('Warning: ' + e);
        }
        function a(e) {
          console.log('Deprecated API usage: ' + e);
        }
        function s(e) {
          throw (
            (Z >= Q.errors && (console.log('Error: ' + e), console.log(o())),
            new Error(e))
          );
        }
        function o() {
          try {
            throw new Error();
          } catch (e) {
            return e.stack ? e.stack.split('\n').slice(2).join('\n') : '';
          }
        }
        function c(e, t) {
          e || s(t);
        }
        function l(e, t) {
          try {
            var n = new URL(e);
            if (!n.origin || 'null' === n.origin) return !1;
          } catch (e) {
            return !1;
          }
          var i = new URL(t, n);
          return n.origin === i.origin;
        }
        function h(e) {
          if (!e) return !1;
          switch (e.protocol) {
            case 'http:':
            case 'https:':
            case 'ftp:':
            case 'mailto:':
            case 'tel:':
              return !0;
            default:
              return !1;
          }
        }
        function u(e, t) {
          if (!e) return null;
          try {
            var n = t ? new URL(e, t) : new URL(e);
            if (h(n)) return n;
          } catch (e) {}
          return null;
        }
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !1,
            }),
            n
          );
        }
        function f(e) {
          var t;
          return function () {
            return e && ((t = Object.create(null)), e(t), (e = null)), t;
          };
        }
        function p(e) {
          return 'string' != typeof e
            ? (r('The argument for removeNullCharacters must be a string.'), e)
            : e.replace(le, '');
        }
        function g(e) {
          c(
            null !== e && 'object' == typeof e && void 0 !== e.length,
            'Invalid argument for bytesToString',
          );
          var t = e.length,
            n = 8192;
          if (t < n) return String.fromCharCode.apply(null, e);
          for (var i = [], r = 0; r < t; r += n) {
            var a = Math.min(r + n, t),
              s = e.subarray(r, a);
            i.push(String.fromCharCode.apply(null, s));
          }
          return i.join('');
        }
        function m(e) {
          c('string' == typeof e, 'Invalid argument for stringToBytes');
          for (var t = e.length, n = new Uint8Array(t), i = 0; i < t; ++i)
            n[i] = 255 & e.charCodeAt(i);
          return n;
        }
        function v(e) {
          return void 0 !== e.length
            ? e.length
            : (c(void 0 !== e.byteLength), e.byteLength);
        }
        function b(e) {
          if (1 === e.length && e[0] instanceof Uint8Array) return e[0];
          var t,
            n,
            i,
            r = 0,
            a = e.length;
          for (t = 0; t < a; t++) (n = e[t]), (i = v(n)), (r += i);
          var s = 0,
            o = new Uint8Array(r);
          for (t = 0; t < a; t++)
            (n = e[t]),
              n instanceof Uint8Array ||
                (n = 'string' == typeof n ? m(n) : new Uint8Array(n)),
              (i = n.byteLength),
              o.set(n, s),
              (s += i);
          return o;
        }
        function w(e) {
          return String.fromCharCode(
            (e >> 24) & 255,
            (e >> 16) & 255,
            (e >> 8) & 255,
            255 & e,
          );
        }
        function y(e) {
          for (var t = 1, n = 0; e > t; ) (t <<= 1), n++;
          return n;
        }
        function A(e, t) {
          return (e[t] << 24) >> 24;
        }
        function S(e, t) {
          return (e[t] << 8) | e[t + 1];
        }
        function P(e, t) {
          return (
            ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
          );
        }
        function x() {
          var e = new Uint8Array(2);
          e[0] = 1;
          var t = new Uint16Array(e.buffer);
          return 1 === t[0];
        }
        function C() {
          try {
            return new Function(''), !0;
          } catch (e) {
            return !1;
          }
        }
        function _(e) {
          var t,
            n = e.length,
            i = [];
          if ('þ' === e[0] && 'ÿ' === e[1])
            for (t = 2; t < n; t += 2)
              i.push(
                String.fromCharCode(
                  (e.charCodeAt(t) << 8) | e.charCodeAt(t + 1),
                ),
              );
          else
            for (t = 0; t < n; ++t) {
              var r = pe[e.charCodeAt(t)];
              i.push(r ? String.fromCharCode(r) : e.charAt(t));
            }
          return i.join('');
        }
        function L(e) {
          return decodeURIComponent(escape(e));
        }
        function T(e) {
          return unescape(encodeURIComponent(e));
        }
        function k(e) {
          for (var t in e) return !1;
          return !0;
        }
        function E(e) {
          return 'boolean' == typeof e;
        }
        function I(e) {
          return 'number' == typeof e && (0 | e) === e;
        }
        function D(e) {
          return 'number' == typeof e;
        }
        function F(e) {
          return 'string' == typeof e;
        }
        function R(e) {
          return e instanceof Array;
        }
        function N(e) {
          return 'object' == typeof e && null !== e && void 0 !== e.byteLength;
        }
        function O(e) {
          return 32 === e || 9 === e || 13 === e || 10 === e;
        }
        function M() {
          var e = {};
          return (
            (e.promise = new Promise(function (t, n) {
              (e.resolve = t), (e.reject = n);
            })),
            e
          );
        }
        function B(e, t, n) {
          (this.sourceName = e),
            (this.targetName = t),
            (this.comObj = n),
            (this.callbackIndex = 1),
            (this.postMessageTransfers = !0);
          var i = (this.callbacksCapabilities = Object.create(null)),
            r = (this.actionHandler = Object.create(null));
          (this._onComObjOnMessage = function (e) {
            var t = e.data;
            if (t.targetName === this.sourceName)
              if (t.isReply) {
                var a = t.callbackId;
                if (t.callbackId in i) {
                  var o = i[a];
                  delete i[a],
                    'error' in t ? o.reject(t.error) : o.resolve(t.data);
                } else s('Cannot resolve callback ' + a);
              } else if (t.action in r) {
                var c = r[t.action];
                if (t.callbackId) {
                  var l = this.sourceName,
                    h = t.sourceName;
                  Promise.resolve()
                    .then(function () {
                      return c[0].call(c[1], t.data);
                    })
                    .then(
                      function (e) {
                        n.postMessage({
                          sourceName: l,
                          targetName: h,
                          isReply: !0,
                          callbackId: t.callbackId,
                          data: e,
                        });
                      },
                      function (e) {
                        e instanceof Error && (e += ''),
                          n.postMessage({
                            sourceName: l,
                            targetName: h,
                            isReply: !0,
                            callbackId: t.callbackId,
                            error: e,
                          });
                      },
                    );
                } else c[0].call(c[1], t.data);
              } else s('Unknown action from worker: ' + t.action);
          }.bind(this)),
            n.addEventListener('message', this._onComObjOnMessage);
        }
        function j(e, t, n) {
          var i = new Image();
          (i.onload = function () {
            n.resolve(e, i);
          }),
            (i.onerror = function () {
              n.resolve(e, null), r('Error during JPEG image loading');
            }),
            (i.src = t);
        }
        var U =
            'undefined' != typeof window
              ? window
              : 'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : this,
          V = [0.001, 0, 0, 0.001, 0, 0],
          W = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4,
          },
          H = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 },
          z = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26,
          },
          G = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512,
          },
          X = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864,
          },
          q = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 },
          Y = {
            UNKNOWN: 0,
            FLATE: 1,
            LZW: 2,
            DCT: 3,
            JPX: 4,
            JBIG: 5,
            A85: 6,
            AHX: 7,
            CCF: 8,
            RL: 9,
          },
          J = {
            UNKNOWN: 0,
            TYPE1: 1,
            TYPE1C: 2,
            CIDFONTTYPE0: 3,
            CIDFONTTYPE0C: 4,
            TRUETYPE: 5,
            CIDFONTTYPE2: 6,
            TYPE3: 7,
            OPENTYPE: 8,
            TYPE0: 9,
            MMTYPE1: 10,
          },
          Q = { errors: 0, warnings: 1, infos: 5 },
          K = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotations: 78,
            endAnnotations: 79,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintJpegXObject: 82,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91,
          },
          Z = Q.warnings,
          $ = {
            unknown: 'unknown',
            forms: 'forms',
            javaScript: 'javaScript',
            smask: 'smask',
            shadingPattern: 'shadingPattern',
            font: 'font',
          },
          ee = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 },
          te = (function () {
            function e(e, t) {
              (this.name = 'PasswordException'),
                (this.message = e),
                (this.code = t);
            }
            return (e.prototype = new Error()), (e.constructor = e), e;
          })(),
          ne = (function () {
            function e(e, t) {
              (this.name = 'UnknownErrorException'),
                (this.message = e),
                (this.details = t);
            }
            return (e.prototype = new Error()), (e.constructor = e), e;
          })(),
          ie = (function () {
            function e(e) {
              (this.name = 'InvalidPDFException'), (this.message = e);
            }
            return (e.prototype = new Error()), (e.constructor = e), e;
          })(),
          re = (function () {
            function e(e) {
              (this.name = 'MissingPDFException'), (this.message = e);
            }
            return (e.prototype = new Error()), (e.constructor = e), e;
          })(),
          ae = (function () {
            function e(e, t) {
              (this.name = 'UnexpectedResponseException'),
                (this.message = e),
                (this.status = t);
            }
            return (e.prototype = new Error()), (e.constructor = e), e;
          })(),
          se = (function () {
            function e(e) {
              this.message = e;
            }
            return (
              (e.prototype = new Error()),
              (e.prototype.name = 'NotImplementedException'),
              (e.constructor = e),
              e
            );
          })(),
          oe = (function () {
            function e(e, t) {
              (this.begin = e),
                (this.end = t),
                (this.message = 'Missing data [' + e + ', ' + t + ')');
            }
            return (
              (e.prototype = new Error()),
              (e.prototype.name = 'MissingDataException'),
              (e.constructor = e),
              e
            );
          })(),
          ce = (function () {
            function e(e) {
              this.message = e;
            }
            return (
              (e.prototype = new Error()),
              (e.prototype.name = 'XRefParseException'),
              (e.constructor = e),
              e
            );
          })(),
          le = /\x00/g,
          he = (function () {
            function e(e, t) {
              (this.buffer = e),
                (this.byteLength = e.length),
                (this.length = void 0 === t ? this.byteLength >> 2 : t),
                n(this.length);
            }
            function t(e) {
              return {
                get: function () {
                  var t = this.buffer,
                    n = e << 2;
                  return (
                    (t[n] |
                      (t[n + 1] << 8) |
                      (t[n + 2] << 16) |
                      (t[n + 3] << 24)) >>>
                    0
                  );
                },
                set: function (t) {
                  var n = this.buffer,
                    i = e << 2;
                  (n[i] = 255 & t),
                    (n[i + 1] = (t >> 8) & 255),
                    (n[i + 2] = (t >> 16) & 255),
                    (n[i + 3] = (t >>> 24) & 255);
                },
              };
            }
            function n(n) {
              for (; i < n; ) Object.defineProperty(e.prototype, i, t(i)), i++;
            }
            e.prototype = Object.create(null);
            var i = 0;
            return e;
          })();
        e.Uint32ArrayView = he;
        var ue = [1, 0, 0, 1, 0, 0],
          de = (function () {
            function e() {}
            var t = ['rgb(', 0, ',', 0, ',', 0, ')'];
            (e.makeCssRgb = function (e, n, i) {
              return (t[1] = e), (t[3] = n), (t[5] = i), t.join('');
            }),
              (e.transform = function (e, t) {
                return [
                  e[0] * t[0] + e[2] * t[1],
                  e[1] * t[0] + e[3] * t[1],
                  e[0] * t[2] + e[2] * t[3],
                  e[1] * t[2] + e[3] * t[3],
                  e[0] * t[4] + e[2] * t[5] + e[4],
                  e[1] * t[4] + e[3] * t[5] + e[5],
                ];
              }),
              (e.applyTransform = function (e, t) {
                var n = e[0] * t[0] + e[1] * t[2] + t[4],
                  i = e[0] * t[1] + e[1] * t[3] + t[5];
                return [n, i];
              }),
              (e.applyInverseTransform = function (e, t) {
                var n = t[0] * t[3] - t[1] * t[2],
                  i =
                    (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / n,
                  r =
                    (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) /
                    n;
                return [i, r];
              }),
              (e.getAxialAlignedBoundingBox = function (t, n) {
                var i = e.applyTransform(t, n),
                  r = e.applyTransform(t.slice(2, 4), n),
                  a = e.applyTransform([t[0], t[3]], n),
                  s = e.applyTransform([t[2], t[1]], n);
                return [
                  Math.min(i[0], r[0], a[0], s[0]),
                  Math.min(i[1], r[1], a[1], s[1]),
                  Math.max(i[0], r[0], a[0], s[0]),
                  Math.max(i[1], r[1], a[1], s[1]),
                ];
              }),
              (e.inverseTransform = function (e) {
                var t = e[0] * e[3] - e[1] * e[2];
                return [
                  e[3] / t,
                  -e[1] / t,
                  -e[2] / t,
                  e[0] / t,
                  (e[2] * e[5] - e[4] * e[3]) / t,
                  (e[4] * e[1] - e[5] * e[0]) / t,
                ];
              }),
              (e.apply3dTransform = function (e, t) {
                return [
                  e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
                  e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
                  e[6] * t[0] + e[7] * t[1] + e[8] * t[2],
                ];
              }),
              (e.singularValueDecompose2dScale = function (e) {
                var t = [e[0], e[2], e[1], e[3]],
                  n = e[0] * t[0] + e[1] * t[2],
                  i = e[0] * t[1] + e[1] * t[3],
                  r = e[2] * t[0] + e[3] * t[2],
                  a = e[2] * t[1] + e[3] * t[3],
                  s = (n + a) / 2,
                  o = Math.sqrt((n + a) * (n + a) - 4 * (n * a - r * i)) / 2,
                  c = s + o || 1,
                  l = s - o || 1;
                return [Math.sqrt(c), Math.sqrt(l)];
              }),
              (e.normalizeRect = function (e) {
                var t = e.slice(0);
                return (
                  e[0] > e[2] && ((t[0] = e[2]), (t[2] = e[0])),
                  e[1] > e[3] && ((t[1] = e[3]), (t[3] = e[1])),
                  t
                );
              }),
              (e.intersect = function (t, n) {
                function i(e, t) {
                  return e - t;
                }
                var r = [t[0], t[2], n[0], n[2]].sort(i),
                  a = [t[1], t[3], n[1], n[3]].sort(i),
                  s = [];
                return (
                  (t = e.normalizeRect(t)),
                  (n = e.normalizeRect(n)),
                  ((r[0] === t[0] && r[1] === n[0]) ||
                    (r[0] === n[0] && r[1] === t[0])) &&
                    ((s[0] = r[1]),
                    (s[2] = r[2]),
                    ((a[0] === t[1] && a[1] === n[1]) ||
                      (a[0] === n[1] && a[1] === t[1])) &&
                      ((s[1] = a[1]), (s[3] = a[2]), s))
                );
              }),
              (e.sign = function (e) {
                return e < 0 ? -1 : 1;
              });
            var n = [
              '',
              'C',
              'CC',
              'CCC',
              'CD',
              'D',
              'DC',
              'DCC',
              'DCCC',
              'CM',
              '',
              'X',
              'XX',
              'XXX',
              'XL',
              'L',
              'LX',
              'LXX',
              'LXXX',
              'XC',
              '',
              'I',
              'II',
              'III',
              'IV',
              'V',
              'VI',
              'VII',
              'VIII',
              'IX',
            ];
            return (
              (e.toRoman = function (e, t) {
                c(I(e) && e > 0, 'The number should be a positive integer.');
                for (var i, r = []; e >= 1e3; ) (e -= 1e3), r.push('M');
                (i = (e / 100) | 0),
                  (e %= 100),
                  r.push(n[i]),
                  (i = (e / 10) | 0),
                  (e %= 10),
                  r.push(n[10 + i]),
                  r.push(n[20 + e]);
                var a = r.join('');
                return t ? a.toLowerCase() : a;
              }),
              (e.appendToArray = function (e, t) {
                Array.prototype.push.apply(e, t);
              }),
              (e.prependToArray = function (e, t) {
                Array.prototype.unshift.apply(e, t);
              }),
              (e.extendObj = function (e, t) {
                for (var n in t) e[n] = t[n];
              }),
              (e.getInheritableProperty = function (e, t, n) {
                for (; e && !e.has(t); ) e = e.get('Parent');
                return e ? (n ? e.getArray(t) : e.get(t)) : null;
              }),
              (e.inherit = function (e, t, n) {
                (e.prototype = Object.create(t.prototype)),
                  (e.prototype.constructor = e);
                for (var i in n) e.prototype[i] = n[i];
              }),
              (e.loadScript = function (e, t) {
                var n = document.createElement('script'),
                  i = !1;
                n.setAttribute('src', e),
                  t &&
                    (n.onload = function () {
                      i || t(), (i = !0);
                    }),
                  document.getElementsByTagName('head')[0].appendChild(n);
              }),
              e
            );
          })(),
          fe = (function () {
            function e(e, t, n, i, r, a) {
              (this.viewBox = e),
                (this.scale = t),
                (this.rotation = n),
                (this.offsetX = i),
                (this.offsetY = r);
              var s,
                o,
                c,
                l,
                h = (e[2] + e[0]) / 2,
                u = (e[3] + e[1]) / 2;
              switch (((n %= 360), (n = n < 0 ? n + 360 : n))) {
                case 180:
                  (s = -1), (o = 0), (c = 0), (l = 1);
                  break;
                case 90:
                  (s = 0), (o = 1), (c = 1), (l = 0);
                  break;
                case 270:
                  (s = 0), (o = -1), (c = -1), (l = 0);
                  break;
                default:
                  (s = 1), (o = 0), (c = 0), (l = -1);
              }
              a && ((c = -c), (l = -l));
              var d, f, p, g;
              0 === s
                ? ((d = Math.abs(u - e[1]) * t + i),
                  (f = Math.abs(h - e[0]) * t + r),
                  (p = Math.abs(e[3] - e[1]) * t),
                  (g = Math.abs(e[2] - e[0]) * t))
                : ((d = Math.abs(h - e[0]) * t + i),
                  (f = Math.abs(u - e[1]) * t + r),
                  (p = Math.abs(e[2] - e[0]) * t),
                  (g = Math.abs(e[3] - e[1]) * t)),
                (this.transform = [
                  s * t,
                  o * t,
                  c * t,
                  l * t,
                  d - s * t * h - c * t * u,
                  f - o * t * h - l * t * u,
                ]),
                (this.width = p),
                (this.height = g),
                (this.fontScale = t);
            }
            return (
              (e.prototype = {
                clone: function (t) {
                  t = t || {};
                  var n = 'scale' in t ? t.scale : this.scale,
                    i = 'rotation' in t ? t.rotation : this.rotation;
                  return new e(
                    this.viewBox.slice(),
                    n,
                    i,
                    this.offsetX,
                    this.offsetY,
                    t.dontFlip,
                  );
                },
                convertToViewportPoint: function (e, t) {
                  return de.applyTransform([e, t], this.transform);
                },
                convertToViewportRectangle: function (e) {
                  var t = de.applyTransform([e[0], e[1]], this.transform),
                    n = de.applyTransform([e[2], e[3]], this.transform);
                  return [t[0], t[1], n[0], n[1]];
                },
                convertToPdfPoint: function (e, t) {
                  return de.applyInverseTransform([e, t], this.transform);
                },
              }),
              e
            );
          })(),
          pe = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224,
            8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222,
            8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352,
            376, 381, 305, 322, 339, 353, 382, 0, 8364,
          ];
        !(function () {
          if (U.Promise)
            return (
              'function' != typeof U.Promise.all &&
                (U.Promise.all = function (e) {
                  var t,
                    n,
                    i = 0,
                    r = [],
                    a = new U.Promise(function (e, i) {
                      (t = e), (n = i);
                    });
                  return (
                    e.forEach(function (e, a) {
                      i++,
                        e.then(function (e) {
                          (r[a] = e), i--, 0 === i && t(r);
                        }, n);
                    }),
                    0 === i && t(r),
                    a
                  );
                }),
              'function' != typeof U.Promise.resolve &&
                (U.Promise.resolve = function (e) {
                  return new U.Promise(function (t) {
                    t(e);
                  });
                }),
              'function' != typeof U.Promise.reject &&
                (U.Promise.reject = function (e) {
                  return new U.Promise(function (t, n) {
                    n(e);
                  });
                }),
              void (
                'function' != typeof U.Promise.prototype.catch &&
                (U.Promise.prototype.catch = function (e) {
                  return U.Promise.prototype.then(void 0, e);
                })
              )
            );
          var e = 0,
            t = 1,
            n = 2,
            i = 500,
            a = {
              handlers: [],
              running: !1,
              unhandledRejections: [],
              pendingRejectionCheck: !1,
              scheduleHandlers: function (t) {
                t._status !== e &&
                  ((this.handlers = this.handlers.concat(t._handlers)),
                  (t._handlers = []),
                  this.running ||
                    ((this.running = !0),
                    setTimeout(this.runHandlers.bind(this), 0)));
              },
              runHandlers: function () {
                for (
                  var e = 1, i = Date.now() + e;
                  this.handlers.length > 0;

                ) {
                  var r = this.handlers.shift(),
                    a = r.thisPromise._status,
                    s = r.thisPromise._value;
                  try {
                    a === t
                      ? 'function' == typeof r.onResolve && (s = r.onResolve(s))
                      : 'function' == typeof r.onReject &&
                        ((s = r.onReject(s)),
                        (a = t),
                        r.thisPromise._unhandledRejection &&
                          this.removeUnhandeledRejection(r.thisPromise));
                  } catch (e) {
                    (a = n), (s = e);
                  }
                  if ((r.nextPromise._updateStatus(a, s), Date.now() >= i))
                    break;
                }
                return this.handlers.length > 0
                  ? void setTimeout(this.runHandlers.bind(this), 0)
                  : void (this.running = !1);
              },
              addUnhandledRejection: function (e) {
                this.unhandledRejections.push({ promise: e, time: Date.now() }),
                  this.scheduleRejectionCheck();
              },
              removeUnhandeledRejection: function (e) {
                e._unhandledRejection = !1;
                for (var t = 0; t < this.unhandledRejections.length; t++)
                  this.unhandledRejections[t].promise === e &&
                    (this.unhandledRejections.splice(t), t--);
              },
              scheduleRejectionCheck: function () {
                this.pendingRejectionCheck ||
                  ((this.pendingRejectionCheck = !0),
                  setTimeout(
                    function () {
                      this.pendingRejectionCheck = !1;
                      for (
                        var e = Date.now(), t = 0;
                        t < this.unhandledRejections.length;
                        t++
                      )
                        if (e - this.unhandledRejections[t].time > i) {
                          var n = this.unhandledRejections[t].promise._value,
                            a = 'Unhandled rejection: ' + n;
                          n.stack && (a += '\n' + n.stack),
                            r(a),
                            this.unhandledRejections.splice(t),
                            t--;
                        }
                      this.unhandledRejections.length &&
                        this.scheduleRejectionCheck();
                    }.bind(this),
                    i,
                  ));
              },
            },
            s = function (t) {
              (this._status = e), (this._handlers = []);
              try {
                t.call(this, this._resolve.bind(this), this._reject.bind(this));
              } catch (e) {
                this._reject(e);
              }
            };
          (s.all = function (e) {
            function t(e) {
              a._status !== n && ((c = []), r(e));
            }
            var i,
              r,
              a = new s(function (e, t) {
                (i = e), (r = t);
              }),
              o = e.length,
              c = [];
            if (0 === o) return i(c), a;
            for (var l = 0, h = e.length; l < h; ++l) {
              var u = e[l],
                d = (function (e) {
                  return function (t) {
                    a._status !== n && ((c[e] = t), o--, 0 === o && i(c));
                  };
                })(l);
              s.isPromise(u) ? u.then(d, t) : d(u);
            }
            return a;
          }),
            (s.isPromise = function (e) {
              return e && 'function' == typeof e.then;
            }),
            (s.resolve = function (e) {
              return new s(function (t) {
                t(e);
              });
            }),
            (s.reject = function (e) {
              return new s(function (t, n) {
                n(e);
              });
            }),
            (s.prototype = {
              _status: null,
              _value: null,
              _handlers: null,
              _unhandledRejection: null,
              _updateStatus: function (e, i) {
                if (this._status !== t && this._status !== n) {
                  if (e === t && s.isPromise(i))
                    return void i.then(
                      this._updateStatus.bind(this, t),
                      this._updateStatus.bind(this, n),
                    );
                  (this._status = e),
                    (this._value = i),
                    e === n &&
                      0 === this._handlers.length &&
                      ((this._unhandledRejection = !0),
                      a.addUnhandledRejection(this)),
                    a.scheduleHandlers(this);
                }
              },
              _resolve: function (e) {
                this._updateStatus(t, e);
              },
              _reject: function (e) {
                this._updateStatus(n, e);
              },
              then: function (e, t) {
                var n = new s(function (e, t) {
                  (this.resolve = e), (this.reject = t);
                });
                return (
                  this._handlers.push({
                    thisPromise: this,
                    onResolve: e,
                    onReject: t,
                    nextPromise: n,
                  }),
                  a.scheduleHandlers(this),
                  n
                );
              },
              catch: function (e) {
                return this.then(void 0, e);
              },
            }),
            (U.Promise = s);
        })(),
          (function () {
            function e() {
              this.id = '$weakmap' + t++;
            }
            if (!U.WeakMap) {
              var t = 0;
              (e.prototype = {
                has: function (e) {
                  return !!Object.getOwnPropertyDescriptor(e, this.id);
                },
                get: function (e, t) {
                  return this.has(e) ? e[this.id] : t;
                },
                set: function (e, t) {
                  Object.defineProperty(e, this.id, {
                    value: t,
                    enumerable: !1,
                    configurable: !0,
                  });
                },
                delete: function (e) {
                  delete e[this.id];
                },
              }),
                (U.WeakMap = e);
            }
          })();
        var ge = (function () {
            function e(e, t, n) {
              for (; e.length < n; ) e += t;
              return e;
            }
            function t() {
              (this.started = Object.create(null)),
                (this.times = []),
                (this.enabled = !0);
            }
            return (
              (t.prototype = {
                time: function (e) {
                  this.enabled &&
                    (e in this.started &&
                      r('Timer is already running for ' + e),
                    (this.started[e] = Date.now()));
                },
                timeEnd: function (e) {
                  this.enabled &&
                    (e in this.started ||
                      r('Timer has not been started for ' + e),
                    this.times.push({
                      name: e,
                      start: this.started[e],
                      end: Date.now(),
                    }),
                    delete this.started[e]);
                },
                toString: function () {
                  var t,
                    n,
                    i = this.times,
                    r = '',
                    a = 0;
                  for (t = 0, n = i.length; t < n; ++t) {
                    var s = i[t].name;
                    s.length > a && (a = s.length);
                  }
                  for (t = 0, n = i.length; t < n; ++t) {
                    var o = i[t],
                      c = o.end - o.start;
                    r += e(o.name, ' ', a) + ' ' + c + 'ms\n';
                  }
                  return r;
                },
              }),
              t
            );
          })(),
          me = function (e, t) {
            return 'undefined' != typeof Blob
              ? new Blob([e], { type: t })
              : void r('The "Blob" constructor is not supported.');
          },
          ve = (function () {
            var e =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            return function (t, n, i) {
              if (!i && 'undefined' != typeof URL && URL.createObjectURL) {
                var r = me(t, n);
                return URL.createObjectURL(r);
              }
              for (
                var a = 'data:' + n + ';base64,', s = 0, o = t.length;
                s < o;
                s += 3
              ) {
                var c = 255 & t[s],
                  l = 255 & t[s + 1],
                  h = 255 & t[s + 2],
                  u = c >> 2,
                  d = ((3 & c) << 4) | (l >> 4),
                  f = s + 1 < o ? ((15 & l) << 2) | (h >> 6) : 64,
                  p = s + 2 < o ? 63 & h : 64;
                a += e[u] + e[d] + e[f] + e[p];
              }
              return a;
            };
          })();
        (B.prototype = {
          on: function (e, t, n) {
            var i = this.actionHandler;
            i[e] && s('There is already an actionName called "' + e + '"'),
              (i[e] = [t, n]);
          },
          send: function (e, t, n) {
            var i = {
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: e,
              data: t,
            };
            this.postMessage(i, n);
          },
          sendWithPromise: function (e, t, n) {
            var i = this.callbackIndex++,
              r = {
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: e,
                data: t,
                callbackId: i,
              },
              a = M();
            this.callbacksCapabilities[i] = a;
            try {
              this.postMessage(r, n);
            } catch (e) {
              a.reject(e);
            }
            return a.promise;
          },
          postMessage: function (e, t) {
            t && this.postMessageTransfers
              ? this.comObj.postMessage(e, t)
              : this.comObj.postMessage(e);
          },
          destroy: function () {
            this.comObj.removeEventListener('message', this._onComObjOnMessage);
          },
        }),
          (function (e) {
            function t(e) {
              return void 0 !== u[e];
            }
            function n() {
              o.call(this), (this._isInvalid = !0);
            }
            function i(e) {
              return '' === e && n.call(this), e.toLowerCase();
            }
            function r(e) {
              var t = e.charCodeAt(0);
              return t > 32 &&
                t < 127 &&
                [34, 35, 60, 62, 63, 96].indexOf(t) === -1
                ? e
                : encodeURIComponent(e);
            }
            function a(e) {
              var t = e.charCodeAt(0);
              return t > 32 && t < 127 && [34, 35, 60, 62, 96].indexOf(t) === -1
                ? e
                : encodeURIComponent(e);
            }
            function s(e, s, o) {
              function c(e) {
                w.push(e);
              }
              var l = s || 'scheme start',
                h = 0,
                m = '',
                v = !1,
                b = !1,
                w = [];
              e: for (; (e[h - 1] !== f || 0 === h) && !this._isInvalid; ) {
                var y = e[h];
                switch (l) {
                  case 'scheme start':
                    if (!y || !p.test(y)) {
                      if (s) {
                        c('Invalid scheme.');
                        break e;
                      }
                      (m = ''), (l = 'no scheme');
                      continue;
                    }
                    (m += y.toLowerCase()), (l = 'scheme');
                    break;
                  case 'scheme':
                    if (y && g.test(y)) m += y.toLowerCase();
                    else {
                      if (':' !== y) {
                        if (s) {
                          if (f === y) break e;
                          c('Code point not allowed in scheme: ' + y);
                          break e;
                        }
                        (m = ''), (h = 0), (l = 'no scheme');
                        continue;
                      }
                      if (((this._scheme = m), (m = ''), s)) break e;
                      t(this._scheme) && (this._isRelative = !0),
                        (l =
                          'file' === this._scheme
                            ? 'relative'
                            : this._isRelative &&
                              o &&
                              o._scheme === this._scheme
                            ? 'relative or authority'
                            : this._isRelative
                            ? 'authority first slash'
                            : 'scheme data');
                    }
                    break;
                  case 'scheme data':
                    '?' === y
                      ? ((this._query = '?'), (l = 'query'))
                      : '#' === y
                      ? ((this._fragment = '#'), (l = 'fragment'))
                      : f !== y &&
                        '\t' !== y &&
                        '\n' !== y &&
                        '\r' !== y &&
                        (this._schemeData += r(y));
                    break;
                  case 'no scheme':
                    if (o && t(o._scheme)) {
                      l = 'relative';
                      continue;
                    }
                    c('Missing scheme.'), n.call(this);
                    break;
                  case 'relative or authority':
                    if ('/' !== y || '/' !== e[h + 1]) {
                      c('Expected /, got: ' + y), (l = 'relative');
                      continue;
                    }
                    l = 'authority ignore slashes';
                    break;
                  case 'relative':
                    if (
                      ((this._isRelative = !0),
                      'file' !== this._scheme && (this._scheme = o._scheme),
                      f === y)
                    ) {
                      (this._host = o._host),
                        (this._port = o._port),
                        (this._path = o._path.slice()),
                        (this._query = o._query),
                        (this._username = o._username),
                        (this._password = o._password);
                      break e;
                    }
                    if ('/' === y || '\\' === y)
                      '\\' === y && c('\\ is an invalid code point.'),
                        (l = 'relative slash');
                    else if ('?' === y)
                      (this._host = o._host),
                        (this._port = o._port),
                        (this._path = o._path.slice()),
                        (this._query = '?'),
                        (this._username = o._username),
                        (this._password = o._password),
                        (l = 'query');
                    else {
                      if ('#' !== y) {
                        var A = e[h + 1],
                          S = e[h + 2];
                        ('file' !== this._scheme ||
                          !p.test(y) ||
                          (':' !== A && '|' !== A) ||
                          (f !== S &&
                            '/' !== S &&
                            '\\' !== S &&
                            '?' !== S &&
                            '#' !== S)) &&
                          ((this._host = o._host),
                          (this._port = o._port),
                          (this._username = o._username),
                          (this._password = o._password),
                          (this._path = o._path.slice()),
                          this._path.pop()),
                          (l = 'relative path');
                        continue;
                      }
                      (this._host = o._host),
                        (this._port = o._port),
                        (this._path = o._path.slice()),
                        (this._query = o._query),
                        (this._fragment = '#'),
                        (this._username = o._username),
                        (this._password = o._password),
                        (l = 'fragment');
                    }
                    break;
                  case 'relative slash':
                    if ('/' !== y && '\\' !== y) {
                      'file' !== this._scheme &&
                        ((this._host = o._host),
                        (this._port = o._port),
                        (this._username = o._username),
                        (this._password = o._password)),
                        (l = 'relative path');
                      continue;
                    }
                    '\\' === y && c('\\ is an invalid code point.'),
                      (l =
                        'file' === this._scheme
                          ? 'file host'
                          : 'authority ignore slashes');
                    break;
                  case 'authority first slash':
                    if ('/' !== y) {
                      c("Expected '/', got: " + y),
                        (l = 'authority ignore slashes');
                      continue;
                    }
                    l = 'authority second slash';
                    break;
                  case 'authority second slash':
                    if (((l = 'authority ignore slashes'), '/' !== y)) {
                      c("Expected '/', got: " + y);
                      continue;
                    }
                    break;
                  case 'authority ignore slashes':
                    if ('/' !== y && '\\' !== y) {
                      l = 'authority';
                      continue;
                    }
                    c('Expected authority, got: ' + y);
                    break;
                  case 'authority':
                    if ('@' === y) {
                      v && (c('@ already seen.'), (m += '%40')), (v = !0);
                      for (var P = 0; P < m.length; P++) {
                        var x = m[P];
                        if ('\t' !== x && '\n' !== x && '\r' !== x)
                          if (':' !== x || null !== this._password) {
                            var C = r(x);
                            null !== this._password
                              ? (this._password += C)
                              : (this._username += C);
                          } else this._password = '';
                        else c('Invalid whitespace in authority.');
                      }
                      m = '';
                    } else {
                      if (
                        y === f ||
                        '/' === y ||
                        '\\' === y ||
                        '?' === y ||
                        '#' === y
                      ) {
                        (h -= m.length), (m = ''), (l = 'host');
                        continue;
                      }
                      m += y;
                    }
                    break;
                  case 'file host':
                    if (
                      y === f ||
                      '/' === y ||
                      '\\' === y ||
                      '?' === y ||
                      '#' === y
                    ) {
                      2 !== m.length ||
                      !p.test(m[0]) ||
                      (':' !== m[1] && '|' !== m[1])
                        ? 0 === m.length
                          ? (l = 'relative path start')
                          : ((this._host = i.call(this, m)),
                            (m = ''),
                            (l = 'relative path start'))
                        : (l = 'relative path');
                      continue;
                    }
                    '\t' === y || '\n' === y || '\r' === y
                      ? c('Invalid whitespace in file host.')
                      : (m += y);
                    break;
                  case 'host':
                  case 'hostname':
                    if (':' !== y || b) {
                      if (
                        y === f ||
                        '/' === y ||
                        '\\' === y ||
                        '?' === y ||
                        '#' === y
                      ) {
                        if (
                          ((this._host = i.call(this, m)),
                          (m = ''),
                          (l = 'relative path start'),
                          s)
                        )
                          break e;
                        continue;
                      }
                      '\t' !== y && '\n' !== y && '\r' !== y
                        ? ('[' === y ? (b = !0) : ']' === y && (b = !1),
                          (m += y))
                        : c('Invalid code point in host/hostname: ' + y);
                    } else if (
                      ((this._host = i.call(this, m)),
                      (m = ''),
                      (l = 'port'),
                      'hostname' === s)
                    )
                      break e;
                    break;
                  case 'port':
                    if (/[0-9]/.test(y)) m += y;
                    else {
                      if (
                        y === f ||
                        '/' === y ||
                        '\\' === y ||
                        '?' === y ||
                        '#' === y ||
                        s
                      ) {
                        if ('' !== m) {
                          var _ = parseInt(m, 10);
                          _ !== u[this._scheme] && (this._port = _ + ''),
                            (m = '');
                        }
                        if (s) break e;
                        l = 'relative path start';
                        continue;
                      }
                      '\t' === y || '\n' === y || '\r' === y
                        ? c('Invalid code point in port: ' + y)
                        : n.call(this);
                    }
                    break;
                  case 'relative path start':
                    if (
                      ('\\' === y && c("'\\' not allowed in path."),
                      (l = 'relative path'),
                      '/' !== y && '\\' !== y)
                    )
                      continue;
                    break;
                  case 'relative path':
                    if (
                      y !== f &&
                      '/' !== y &&
                      '\\' !== y &&
                      (s || ('?' !== y && '#' !== y))
                    )
                      '\t' !== y && '\n' !== y && '\r' !== y && (m += r(y));
                    else {
                      '\\' === y && c('\\ not allowed in relative path.');
                      var L;
                      (L = d[m.toLowerCase()]) && (m = L),
                        '..' === m
                          ? (this._path.pop(),
                            '/' !== y && '\\' !== y && this._path.push(''))
                          : '.' === m && '/' !== y && '\\' !== y
                          ? this._path.push('')
                          : '.' !== m &&
                            ('file' === this._scheme &&
                              0 === this._path.length &&
                              2 === m.length &&
                              p.test(m[0]) &&
                              '|' === m[1] &&
                              (m = m[0] + ':'),
                            this._path.push(m)),
                        (m = ''),
                        '?' === y
                          ? ((this._query = '?'), (l = 'query'))
                          : '#' === y &&
                            ((this._fragment = '#'), (l = 'fragment'));
                    }
                    break;
                  case 'query':
                    s || '#' !== y
                      ? f !== y &&
                        '\t' !== y &&
                        '\n' !== y &&
                        '\r' !== y &&
                        (this._query += a(y))
                      : ((this._fragment = '#'), (l = 'fragment'));
                    break;
                  case 'fragment':
                    f !== y &&
                      '\t' !== y &&
                      '\n' !== y &&
                      '\r' !== y &&
                      (this._fragment += y);
                }
                h++;
              }
            }
            function o() {
              (this._scheme = ''),
                (this._schemeData = ''),
                (this._username = ''),
                (this._password = null),
                (this._host = ''),
                (this._port = ''),
                (this._path = []),
                (this._query = ''),
                (this._fragment = ''),
                (this._isInvalid = !1),
                (this._isRelative = !1);
            }
            function c(e, t) {
              void 0 === t || t instanceof c || (t = new c(String(t))),
                (this._url = e),
                o.call(this);
              var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
              s.call(this, n, null, t);
            }
            var l = !1;
            try {
              if (
                'function' == typeof URL &&
                'object' == typeof URL.prototype &&
                'origin' in URL.prototype
              ) {
                var h = new URL('b', 'http://a');
                (h.pathname = 'c%20d'), (l = 'http://a/c%20d' === h.href);
              }
            } catch (e) {}
            if (!l) {
              var u = Object.create(null);
              (u.ftp = 21),
                (u.file = 0),
                (u.gopher = 70),
                (u.http = 80),
                (u.https = 443),
                (u.ws = 80),
                (u.wss = 443);
              var d = Object.create(null);
              (d['%2e'] = '.'),
                (d['.%2e'] = '..'),
                (d['%2e.'] = '..'),
                (d['%2e%2e'] = '..');
              var f,
                p = /[a-zA-Z]/,
                g = /[a-zA-Z0-9\+\-\.]/;
              c.prototype = {
                toString: function () {
                  return this.href;
                },
                get href() {
                  if (this._isInvalid) return this._url;
                  var e = '';
                  return (
                    ('' === this._username && null === this._password) ||
                      (e =
                        this._username +
                        (null !== this._password ? ':' + this._password : '') +
                        '@'),
                    this.protocol +
                      (this._isRelative ? '//' + e + this.host : '') +
                      this.pathname +
                      this._query +
                      this._fragment
                  );
                },
                set href(e) {
                  o.call(this), s.call(this, e);
                },
                get protocol() {
                  return this._scheme + ':';
                },
                set protocol(e) {
                  this._isInvalid || s.call(this, e + ':', 'scheme start');
                },
                get host() {
                  return this._isInvalid
                    ? ''
                    : this._port
                    ? this._host + ':' + this._port
                    : this._host;
                },
                set host(e) {
                  !this._isInvalid &&
                    this._isRelative &&
                    s.call(this, e, 'host');
                },
                get hostname() {
                  return this._host;
                },
                set hostname(e) {
                  !this._isInvalid &&
                    this._isRelative &&
                    s.call(this, e, 'hostname');
                },
                get port() {
                  return this._port;
                },
                set port(e) {
                  !this._isInvalid &&
                    this._isRelative &&
                    s.call(this, e, 'port');
                },
                get pathname() {
                  return this._isInvalid
                    ? ''
                    : this._isRelative
                    ? '/' + this._path.join('/')
                    : this._schemeData;
                },
                set pathname(e) {
                  !this._isInvalid &&
                    this._isRelative &&
                    ((this._path = []), s.call(this, e, 'relative path start'));
                },
                get search() {
                  return this._isInvalid || !this._query || '?' === this._query
                    ? ''
                    : this._query;
                },
                set search(e) {
                  !this._isInvalid &&
                    this._isRelative &&
                    ((this._query = '?'),
                    '?' === e[0] && (e = e.slice(1)),
                    s.call(this, e, 'query'));
                },
                get hash() {
                  return this._isInvalid ||
                    !this._fragment ||
                    '#' === this._fragment
                    ? ''
                    : this._fragment;
                },
                set hash(e) {
                  this._isInvalid ||
                    ((this._fragment = '#'),
                    '#' === e[0] && (e = e.slice(1)),
                    s.call(this, e, 'fragment'));
                },
                get origin() {
                  var e;
                  if (this._isInvalid || !this._scheme) return '';
                  switch (this._scheme) {
                    case 'data':
                    case 'file':
                    case 'javascript':
                    case 'mailto':
                      return 'null';
                  }
                  return (e = this.host), e ? this._scheme + '://' + e : '';
                },
              };
              var m = e.URL;
              m &&
                ((c.createObjectURL = function (e) {
                  return m.createObjectURL.apply(m, arguments);
                }),
                (c.revokeObjectURL = function (e) {
                  m.revokeObjectURL(e);
                })),
                (e.URL = c);
            }
          })(U),
          (e.FONT_IDENTITY_MATRIX = V),
          (e.IDENTITY_MATRIX = ue),
          (e.OPS = K),
          (e.VERBOSITY_LEVELS = Q),
          (e.UNSUPPORTED_FEATURES = $),
          (e.AnnotationBorderStyleType = q),
          (e.AnnotationFieldFlag = X),
          (e.AnnotationFlag = G),
          (e.AnnotationType = z),
          (e.FontType = J),
          (e.ImageKind = H),
          (e.InvalidPDFException = ie),
          (e.MessageHandler = B),
          (e.MissingDataException = oe),
          (e.MissingPDFException = re),
          (e.NotImplementedException = se),
          (e.PageViewport = fe),
          (e.PasswordException = te),
          (e.PasswordResponses = ee),
          (e.StatTimer = ge),
          (e.StreamType = Y),
          (e.TextRenderingMode = W),
          (e.UnexpectedResponseException = ae),
          (e.UnknownErrorException = ne),
          (e.Util = de),
          (e.XRefParseException = ce),
          (e.arrayByteLength = v),
          (e.arraysToBytes = b),
          (e.assert = c),
          (e.bytesToString = g),
          (e.createBlob = me),
          (e.createPromiseCapability = M),
          (e.createObjectURL = ve),
          (e.deprecated = a),
          (e.error = s),
          (e.getLookupTableFactory = f),
          (e.getVerbosityLevel = n),
          (e.globalScope = U),
          (e.info = i),
          (e.isArray = R),
          (e.isArrayBuffer = N),
          (e.isBool = E),
          (e.isEmptyObj = k),
          (e.isInt = I),
          (e.isNum = D),
          (e.isString = F),
          (e.isSpace = O),
          (e.isSameOrigin = l),
          (e.createValidAbsoluteUrl = u),
          (e.isLittleEndian = x),
          (e.isEvalSupported = C),
          (e.loadJpegStream = j),
          (e.log2 = y),
          (e.readInt8 = A),
          (e.readUint16 = S),
          (e.readUint32 = P),
          (e.removeNullCharacters = p),
          (e.setVerbosityLevel = t),
          (e.shadow = d),
          (e.string32 = w),
          (e.stringToBytes = m),
          (e.stringToPDFString = _),
          (e.stringToUTF8String = L),
          (e.utf8StringToString = T),
          (e.warn = r);
      }),
        (function (e, t) {
          t((e.pdfjsDisplayDOMUtils = {}), e.pdfjsSharedUtil);
        })(this, function (e, t) {
          function n(e, t) {
            var n = t && t.url;
            if (((e.href = e.title = n ? c(n) : ''), n)) {
              var i = t.target;
              'undefined' == typeof i && (i = r('externalLinkTarget')),
                (e.target = g[i]);
              var a = t.rel;
              'undefined' == typeof a && (a = r('externalLinkRel')),
                (e.rel = a);
            }
          }
          function i(e) {
            var t = e.indexOf('#'),
              n = e.indexOf('?'),
              i = Math.min(t > 0 ? t : e.length, n > 0 ? n : e.length);
            return e.substring(e.lastIndexOf('/', i) + 1, i);
          }
          function r(e) {
            var n = t.globalScope.PDFJS;
            switch (e) {
              case 'pdfBug':
                return !!n && n.pdfBug;
              case 'disableAutoFetch':
                return !!n && n.disableAutoFetch;
              case 'disableStream':
                return !!n && n.disableStream;
              case 'disableRange':
                return !!n && n.disableRange;
              case 'disableFontFace':
                return !!n && n.disableFontFace;
              case 'disableCreateObjectURL':
                return !!n && n.disableCreateObjectURL;
              case 'disableWebGL':
                return !n || n.disableWebGL;
              case 'cMapUrl':
                return n ? n.cMapUrl : null;
              case 'cMapPacked':
                return !!n && n.cMapPacked;
              case 'postMessageTransfers':
                return !n || n.postMessageTransfers;
              case 'workerSrc':
                return n ? n.workerSrc : null;
              case 'disableWorker':
                return !!n && n.disableWorker;
              case 'maxImageSize':
                return n ? n.maxImageSize : -1;
              case 'imageResourcesPath':
                return n ? n.imageResourcesPath : '';
              case 'isEvalSupported':
                return !n || n.isEvalSupported;
              case 'externalLinkTarget':
                if (!n) return p.NONE;
                switch (n.externalLinkTarget) {
                  case p.NONE:
                  case p.SELF:
                  case p.BLANK:
                  case p.PARENT:
                  case p.TOP:
                    return n.externalLinkTarget;
                }
                return (
                  l(
                    'PDFJS.externalLinkTarget is invalid: ' +
                      n.externalLinkTarget,
                  ),
                  (n.externalLinkTarget = p.NONE),
                  p.NONE
                );
              case 'externalLinkRel':
                return n ? n.externalLinkRel : d;
              case 'enableStats':
                return !(!n || !n.enableStats);
              default:
                throw new Error('Unknown default setting: ' + e);
            }
          }
          function a() {
            var e = r('externalLinkTarget');
            switch (e) {
              case p.NONE:
                return !1;
              case p.SELF:
              case p.BLANK:
              case p.PARENT:
              case p.TOP:
                return !0;
            }
          }
          function s(e, t) {
            h('isValidUrl(), please use createValidAbsoluteUrl() instead.');
            var n = t ? 'http://example.com' : null;
            return null !== u(e, n);
          }
          var o,
            c = t.removeNullCharacters,
            l = t.warn,
            h = t.deprecated,
            u = t.createValidAbsoluteUrl,
            d = 'noopener noreferrer nofollow',
            f = (function () {
              function e() {}
              var t = ['ms', 'Moz', 'Webkit', 'O'],
                n = Object.create(null);
              return (
                (e.getProp = function (e, i) {
                  if (1 === arguments.length && 'string' == typeof n[e])
                    return n[e];
                  i = i || document.documentElement;
                  var r,
                    a,
                    s = i.style;
                  if ('string' == typeof s[e]) return (n[e] = e);
                  a = e.charAt(0).toUpperCase() + e.slice(1);
                  for (var o = 0, c = t.length; o < c; o++)
                    if (((r = t[o] + a), 'string' == typeof s[r]))
                      return (n[e] = r);
                  return (n[e] = 'undefined');
                }),
                (e.setProp = function (e, t, n) {
                  var i = this.getProp(e);
                  'undefined' !== i && (t.style[i] = n);
                }),
                e
              );
            })();
          o = function () {
            var e = document.createElement('canvas');
            e.width = e.height = 1;
            var t = e.getContext('2d'),
              n = t.createImageData(1, 1);
            return 'undefined' != typeof n.data.buffer;
          };
          var p = { NONE: 0, SELF: 1, BLANK: 2, PARENT: 3, TOP: 4 },
            g = ['', '_self', '_blank', '_parent', '_top'];
          (e.CustomStyle = f),
            (e.addLinkAttributes = n),
            (e.isExternalLinkTargetSet = a),
            (e.isValidUrl = s),
            (e.getFilenameFromUrl = i),
            (e.LinkTarget = p),
            (e.hasCanvasTypedArrays = o),
            (e.getDefaultSetting = r),
            (e.DEFAULT_LINK_REL = d);
        }),
        (function (e, t) {
          t((e.pdfjsDisplayFontLoader = {}), e.pdfjsSharedUtil);
        })(this, function (e, t) {
          function n(e) {
            (this.docId = e),
              (this.styleElement = null),
              (this.nativeFontFaces = []),
              (this.loadTestFontId = 0),
              (this.loadingContext = { requests: [], nextRequestId: 0 });
          }
          var i = t.assert,
            r = t.bytesToString,
            a = t.string32,
            s = t.shadow,
            o = t.warn;
          n.prototype = {
            insertRule: function (e) {
              var t = this.styleElement;
              t ||
                ((t = this.styleElement = document.createElement('style')),
                (t.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId),
                document.documentElement
                  .getElementsByTagName('head')[0]
                  .appendChild(t));
              var n = t.sheet;
              n.insertRule(e, n.cssRules.length);
            },
            clear: function () {
              var e = this.styleElement;
              e &&
                (e.parentNode.removeChild(e), (e = this.styleElement = null)),
                this.nativeFontFaces.forEach(function (e) {
                  document.fonts.delete(e);
                }),
                (this.nativeFontFaces.length = 0);
            },
          };
          var c = function () {
            return atob(
              'T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==',
            );
          };
          Object.defineProperty(n.prototype, 'loadTestFont', {
            get: function () {
              return s(this, 'loadTestFont', c());
            },
            configurable: !0,
          }),
            (n.prototype.addNativeFontFace = function (e) {
              this.nativeFontFaces.push(e), document.fonts.add(e);
            }),
            (n.prototype.bind = function (e, t) {
              for (
                var i = [],
                  r = [],
                  a = [],
                  s = function (e) {
                    return e.loaded.catch(function (t) {
                      o('Failed to load font "' + e.family + '": ' + t);
                    });
                  },
                  c =
                    n.isFontLoadingAPISupported &&
                    !n.isSyncFontLoadingSupported,
                  l = 0,
                  h = e.length;
                l < h;
                l++
              ) {
                var u = e[l];
                if (!u.attached && u.loading !== !1)
                  if (((u.attached = !0), c)) {
                    var d = u.createNativeFontFace();
                    d && (this.addNativeFontFace(d), a.push(s(d)));
                  } else {
                    var f = u.createFontFaceRule();
                    f && (this.insertRule(f), i.push(f), r.push(u));
                  }
              }
              var p = this.queueLoadingCallback(t);
              c
                ? Promise.all(a).then(function () {
                    p.complete();
                  })
                : i.length > 0 && !n.isSyncFontLoadingSupported
                ? this.prepareFontLoadEvent(i, r, p)
                : p.complete();
            }),
            (n.prototype.queueLoadingCallback = function (e) {
              function t() {
                for (
                  i(!a.end, 'completeRequest() cannot be called twice'),
                    a.end = Date.now();
                  n.requests.length > 0 && n.requests[0].end;

                ) {
                  var e = n.requests.shift();
                  setTimeout(e.callback, 0);
                }
              }
              var n = this.loadingContext,
                r = 'pdfjs-font-loading-' + n.nextRequestId++,
                a = { id: r, complete: t, callback: e, started: Date.now() };
              return n.requests.push(a), a;
            }),
            (n.prototype.prepareFontLoadEvent = function (e, t, n) {
              function i(e, t) {
                return (
                  (e.charCodeAt(t) << 24) |
                  (e.charCodeAt(t + 1) << 16) |
                  (e.charCodeAt(t + 2) << 8) |
                  (255 & e.charCodeAt(t + 3))
                );
              }
              function r(e, t, n, i) {
                var r = e.substr(0, t),
                  a = e.substr(t + n);
                return r + i + a;
              }
              function s(e, t) {
                if ((d++, d > 30))
                  return o('Load test font never loaded.'), void t();
                (u.font = '30px ' + e), u.fillText('.', 0, 20);
                var n = u.getImageData(0, 0, 1, 1);
                return n.data[3] > 0
                  ? void t()
                  : void setTimeout(s.bind(null, e, t));
              }
              var c,
                l,
                h = document.createElement('canvas');
              (h.width = 1), (h.height = 1);
              var u = h.getContext('2d'),
                d = 0,
                f = 'lt' + Date.now() + this.loadTestFontId++,
                p = this.loadTestFont,
                g = 976;
              p = r(p, g, f.length, f);
              var m = 16,
                v = 1482184792,
                b = i(p, m);
              for (c = 0, l = f.length - 3; c < l; c += 4)
                b = (b - v + i(f, c)) | 0;
              c < f.length && (b = (b - v + i(f + 'XXX', c)) | 0),
                (p = r(p, m, 4, a(b)));
              var w = 'url(data:font/opentype;base64,' + btoa(p) + ');',
                y = '@font-face { font-family:"' + f + '";src:' + w + '}';
              this.insertRule(y);
              var A = [];
              for (c = 0, l = t.length; c < l; c++) A.push(t[c].loadedName);
              A.push(f);
              var S = document.createElement('div');
              for (
                S.setAttribute(
                  'style',
                  'visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;',
                ),
                  c = 0,
                  l = A.length;
                c < l;
                ++c
              ) {
                var P = document.createElement('span');
                (P.textContent = 'Hi'),
                  (P.style.fontFamily = A[c]),
                  S.appendChild(P);
              }
              document.body.appendChild(S),
                s(f, function () {
                  document.body.removeChild(S), n.complete();
                });
            }),
            (n.isFontLoadingAPISupported =
              'undefined' != typeof document && !!document.fonts);
          var l = function () {
            if ('undefined' == typeof navigator) return !0;
            var e = !1,
              t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
            return t && t[1] >= 14 && (e = !0), e;
          };
          Object.defineProperty(n, 'isSyncFontLoadingSupported', {
            get: function () {
              return s(n, 'isSyncFontLoadingSupported', l());
            },
            enumerable: !0,
            configurable: !0,
          });
          var h = {
              get value() {
                return s(this, 'value', t.isEvalSupported());
              },
            },
            u = (function () {
              function e(e, t) {
                this.compiledGlyphs = Object.create(null);
                for (var n in e) this[n] = e[n];
                this.options = t;
              }
              return (
                (e.prototype = {
                  createNativeFontFace: function () {
                    if (!this.data) return null;
                    if (this.options.disableFontFace)
                      return (this.disableFontFace = !0), null;
                    var e = new FontFace(this.loadedName, this.data, {});
                    return (
                      this.options.fontRegistry &&
                        this.options.fontRegistry.registerFont(this),
                      e
                    );
                  },
                  createFontFaceRule: function () {
                    if (!this.data) return null;
                    if (this.options.disableFontFace)
                      return (this.disableFontFace = !0), null;
                    var e = r(new Uint8Array(this.data)),
                      t = this.loadedName,
                      n =
                        'url(data:' +
                        this.mimetype +
                        ';base64,' +
                        btoa(e) +
                        ');',
                      i = '@font-face { font-family:"' + t + '";src:' + n + '}';
                    return (
                      this.options.fontRegistry &&
                        this.options.fontRegistry.registerFont(this, n),
                      i
                    );
                  },
                  getPathGenerator: function (e, t) {
                    if (!(t in this.compiledGlyphs)) {
                      var n,
                        i,
                        r,
                        a = e.get(this.loadedName + '_path_' + t);
                      if (this.options.isEvalSupported && h.value) {
                        var s,
                          o = '';
                        for (i = 0, r = a.length; i < r; i++)
                          (n = a[i]),
                            (s = void 0 !== n.args ? n.args.join(',') : ''),
                            (o += 'c.' + n.cmd + '(' + s + ');\n');
                        this.compiledGlyphs[t] = new Function('c', 'size', o);
                      } else
                        this.compiledGlyphs[t] = function (e, t) {
                          for (i = 0, r = a.length; i < r; i++)
                            (n = a[i]),
                              'scale' === n.cmd && (n.args = [t, -t]),
                              e[n.cmd].apply(e, n.args);
                        };
                    }
                    return this.compiledGlyphs[t];
                  },
                }),
                e
              );
            })();
          (e.FontFaceObject = u), (e.FontLoader = n);
        }),
        (function (e, t) {
          t((e.pdfjsDisplayMetadata = {}), e.pdfjsSharedUtil);
        })(this, function (e, t) {
          function n(e) {
            return e.replace(/>\\376\\377([^<]+)/g, function (e, t) {
              for (
                var n = t.replace(
                    /\\([0-3])([0-7])([0-7])/g,
                    function (e, t, n, i) {
                      return String.fromCharCode(64 * t + 8 * n + 1 * i);
                    },
                  ),
                  i = '',
                  r = 0;
                r < n.length;
                r += 2
              ) {
                var a = 256 * n.charCodeAt(r) + n.charCodeAt(r + 1);
                i +=
                  a >= 32 && a < 127 && 60 !== a && 62 !== a && 38 !== a
                    ? String.fromCharCode(a)
                    : '&#x' + (65536 + a).toString(16).substring(1) + ';';
              }
              return '>' + i;
            });
          }
          function i(e) {
            if ('string' == typeof e) {
              e = n(e);
              var t = new DOMParser();
              e = t.parseFromString(e, 'application/xml');
            } else e instanceof Document || r('Metadata: Invalid metadata object');
            (this.metaDocument = e),
              (this.metadata = Object.create(null)),
              this.parse();
          }
          var r = t.error;
          (i.prototype = {
            parse: function () {
              var e = this.metaDocument,
                t = e.documentElement;
              if ('rdf:rdf' !== t.nodeName.toLowerCase())
                for (
                  t = t.firstChild;
                  t && 'rdf:rdf' !== t.nodeName.toLowerCase();

                )
                  t = t.nextSibling;
              var n = t ? t.nodeName.toLowerCase() : null;
              if (t && 'rdf:rdf' === n && t.hasChildNodes()) {
                var i,
                  r,
                  a,
                  s,
                  o,
                  c,
                  l,
                  h = t.childNodes;
                for (s = 0, c = h.length; s < c; s++)
                  if (
                    ((i = h[s]), 'rdf:description' === i.nodeName.toLowerCase())
                  )
                    for (o = 0, l = i.childNodes.length; o < l; o++)
                      '#text' !== i.childNodes[o].nodeName.toLowerCase() &&
                        ((r = i.childNodes[o]),
                        (a = r.nodeName.toLowerCase()),
                        (this.metadata[a] = r.textContent.trim()));
              }
            },
            get: function (e) {
              return this.metadata[e] || null;
            },
            has: function (e) {
              return 'undefined' != typeof this.metadata[e];
            },
          }),
            (e.Metadata = i);
        }),
        (function (e, t) {
          t((e.pdfjsDisplaySVG = {}), e.pdfjsSharedUtil);
        })(this, function (e, t) {
          var n = t.FONT_IDENTITY_MATRIX,
            i = t.IDENTITY_MATRIX,
            r = t.ImageKind,
            a = t.OPS,
            s = t.Util,
            o = t.isNum,
            c = t.isArray,
            l = t.warn,
            h = t.createObjectURL,
            u = {
              fontStyle: 'normal',
              fontWeight: 'normal',
              fillColor: '#000000',
            },
            d = (function () {
              function e(e, t, n) {
                for (var i = -1, r = t; r < n; r++) {
                  var a = 255 & (i ^ e[r]),
                    s = o[a];
                  i = (i >>> 8) ^ s;
                }
                return i ^ -1;
              }
              function t(t, n, i, r) {
                var a = r,
                  s = n.length;
                (i[a] = (s >> 24) & 255),
                  (i[a + 1] = (s >> 16) & 255),
                  (i[a + 2] = (s >> 8) & 255),
                  (i[a + 3] = 255 & s),
                  (a += 4),
                  (i[a] = 255 & t.charCodeAt(0)),
                  (i[a + 1] = 255 & t.charCodeAt(1)),
                  (i[a + 2] = 255 & t.charCodeAt(2)),
                  (i[a + 3] = 255 & t.charCodeAt(3)),
                  (a += 4),
                  i.set(n, a),
                  (a += n.length);
                var o = e(i, r + 4, a);
                (i[a] = (o >> 24) & 255),
                  (i[a + 1] = (o >> 16) & 255),
                  (i[a + 2] = (o >> 8) & 255),
                  (i[a + 3] = 255 & o);
              }
              function n(e, t, n) {
                for (var i = 1, r = 0, a = t; a < n; ++a)
                  (i = (i + (255 & e[a])) % 65521), (r = (r + i) % 65521);
                return (r << 16) | i;
              }
              function i(e, i, o) {
                var c,
                  l,
                  u,
                  d = e.width,
                  f = e.height,
                  p = e.data;
                switch (i) {
                  case r.GRAYSCALE_1BPP:
                    (l = 0), (c = 1), (u = (d + 7) >> 3);
                    break;
                  case r.RGB_24BPP:
                    (l = 2), (c = 8), (u = 3 * d);
                    break;
                  case r.RGBA_32BPP:
                    (l = 6), (c = 8), (u = 4 * d);
                    break;
                  default:
                    throw new Error('invalid format');
                }
                var g,
                  m,
                  v = new Uint8Array((1 + u) * f),
                  b = 0,
                  w = 0;
                for (g = 0; g < f; ++g)
                  (v[b++] = 0),
                    v.set(p.subarray(w, w + u), b),
                    (w += u),
                    (b += u);
                if (i === r.GRAYSCALE_1BPP)
                  for (b = 0, g = 0; g < f; g++)
                    for (b++, m = 0; m < u; m++) v[b++] ^= 255;
                var y = new Uint8Array([
                    (d >> 24) & 255,
                    (d >> 16) & 255,
                    (d >> 8) & 255,
                    255 & d,
                    (f >> 24) & 255,
                    (f >> 16) & 255,
                    (f >> 8) & 255,
                    255 & f,
                    c,
                    l,
                    0,
                    0,
                    0,
                  ]),
                  A = v.length,
                  S = 65535,
                  P = Math.ceil(A / S),
                  x = new Uint8Array(2 + A + 5 * P + 4),
                  C = 0;
                (x[C++] = 120), (x[C++] = 156);
                for (var _ = 0; A > S; )
                  (x[C++] = 0),
                    (x[C++] = 255),
                    (x[C++] = 255),
                    (x[C++] = 0),
                    (x[C++] = 0),
                    x.set(v.subarray(_, _ + S), C),
                    (C += S),
                    (_ += S),
                    (A -= S);
                (x[C++] = 1),
                  (x[C++] = 255 & A),
                  (x[C++] = (A >> 8) & 255),
                  (x[C++] = 65535 & ~A & 255),
                  (x[C++] = ((65535 & ~A) >> 8) & 255),
                  x.set(v.subarray(_), C),
                  (C += v.length - _);
                var L = n(v, 0, v.length);
                (x[C++] = (L >> 24) & 255),
                  (x[C++] = (L >> 16) & 255),
                  (x[C++] = (L >> 8) & 255),
                  (x[C++] = 255 & L);
                var T = a.length + 3 * s + y.length + x.length,
                  k = new Uint8Array(T),
                  E = 0;
                return (
                  k.set(a, E),
                  (E += a.length),
                  t('IHDR', y, k, E),
                  (E += s + y.length),
                  t('IDATA', x, k, E),
                  (E += s + x.length),
                  t('IEND', new Uint8Array(0), k, E),
                  h(k, 'image/png', o)
                );
              }
              for (
                var a = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
                  s = 12,
                  o = new Int32Array(256),
                  c = 0;
                c < 256;
                c++
              ) {
                for (var l = c, u = 0; u < 8; u++)
                  l =
                    1 & l
                      ? 3988292384 ^ ((l >> 1) & 2147483647)
                      : (l >> 1) & 2147483647;
                o[c] = l;
              }
              return function (e, t) {
                var n = void 0 === e.kind ? r.GRAYSCALE_1BPP : e.kind;
                return i(e, n, t);
              };
            })(),
            f = (function () {
              function e() {
                (this.fontSizeScale = 1),
                  (this.fontWeight = u.fontWeight),
                  (this.fontSize = 0),
                  (this.textMatrix = i),
                  (this.fontMatrix = n),
                  (this.leading = 0),
                  (this.x = 0),
                  (this.y = 0),
                  (this.lineX = 0),
                  (this.lineY = 0),
                  (this.charSpacing = 0),
                  (this.wordSpacing = 0),
                  (this.textHScale = 1),
                  (this.textRise = 0),
                  (this.fillColor = u.fillColor),
                  (this.strokeColor = '#000000'),
                  (this.fillAlpha = 1),
                  (this.strokeAlpha = 1),
                  (this.lineWidth = 1),
                  (this.lineJoin = ''),
                  (this.lineCap = ''),
                  (this.miterLimit = 0),
                  (this.dashArray = []),
                  (this.dashPhase = 0),
                  (this.dependencies = []),
                  (this.activeClipUrl = null),
                  (this.clipGroup = null),
                  (this.maskId = '');
              }
              return (
                (e.prototype = {
                  clone: function () {
                    return Object.create(this);
                  },
                  setCurrentPoint: function (e, t) {
                    (this.x = e), (this.y = t);
                  },
                }),
                e
              );
            })(),
            p = (function () {
              function e(e) {
                for (var t = [], n = [], i = e.length, r = 0; r < i; r++)
                  'save' !== e[r].fn
                    ? 'restore' === e[r].fn
                      ? (t = n.pop())
                      : t.push(e[r])
                    : (t.push({ fnId: 92, fn: 'group', items: [] }),
                      n.push(t),
                      (t = t[t.length - 1].items));
                return t;
              }
              function t(e) {
                if (e === (0 | e)) return e.toString();
                var t = e.toFixed(10),
                  n = t.length - 1;
                if ('0' !== t[n]) return t;
                do n--;
                while ('0' === t[n]);
                return t.substr(0, '.' === t[n] ? n : n + 1);
              }
              function r(e) {
                if (0 === e[4] && 0 === e[5]) {
                  if (0 === e[1] && 0 === e[2])
                    return 1 === e[0] && 1 === e[3]
                      ? ''
                      : 'scale(' + t(e[0]) + ' ' + t(e[3]) + ')';
                  if (e[0] === e[3] && e[1] === -e[2]) {
                    var n = (180 * Math.acos(e[0])) / Math.PI;
                    return 'rotate(' + t(n) + ')';
                  }
                } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3])
                  return 'translate(' + t(e[4]) + ' ' + t(e[5]) + ')';
                return (
                  'matrix(' +
                  t(e[0]) +
                  ' ' +
                  t(e[1]) +
                  ' ' +
                  t(e[2]) +
                  ' ' +
                  t(e[3]) +
                  ' ' +
                  t(e[4]) +
                  ' ' +
                  t(e[5]) +
                  ')'
                );
              }
              function p(e, t, n) {
                (this.current = new f()),
                  (this.transformMatrix = i),
                  (this.transformStack = []),
                  (this.extraStack = []),
                  (this.commonObjs = e),
                  (this.objs = t),
                  (this.pendingEOFill = !1),
                  (this.embedFonts = !1),
                  (this.embeddedFonts = Object.create(null)),
                  (this.cssStyle = null),
                  (this.forceDataSchema = !!n);
              }
              var g = 'http://www.w3.org/2000/svg',
                m = 'http://www.w3.org/XML/1998/namespace',
                v = 'http://www.w3.org/1999/xlink',
                b = ['butt', 'round', 'square'],
                w = ['miter', 'round', 'bevel'],
                y = 0,
                A = 0;
              return (
                (p.prototype = {
                  save: function () {
                    this.transformStack.push(this.transformMatrix);
                    var e = this.current;
                    this.extraStack.push(e), (this.current = e.clone());
                  },
                  restore: function () {
                    (this.transformMatrix = this.transformStack.pop()),
                      (this.current = this.extraStack.pop()),
                      (this.tgrp = null);
                  },
                  group: function (e) {
                    this.save(), this.executeOpTree(e), this.restore();
                  },
                  loadDependencies: function (e) {
                    for (
                      var t = e.fnArray,
                        n = t.length,
                        i = e.argsArray,
                        r = this,
                        s = 0;
                      s < n;
                      s++
                    )
                      if (a.dependency === t[s])
                        for (var o = i[s], c = 0, l = o.length; c < l; c++) {
                          var h,
                            u = o[c],
                            d = 'g_' === u.substring(0, 2);
                          (h = d
                            ? new Promise(function (e) {
                                r.commonObjs.get(u, e);
                              })
                            : new Promise(function (e) {
                                r.objs.get(u, e);
                              })),
                            this.current.dependencies.push(h);
                        }
                    return Promise.all(this.current.dependencies);
                  },
                  transform: function (e, t, n, i, r, a) {
                    var o = [e, t, n, i, r, a];
                    (this.transformMatrix = s.transform(
                      this.transformMatrix,
                      o,
                    )),
                      (this.tgrp = null);
                  },
                  getSVG: function (e, t) {
                    this.viewport = t;
                    var n = this._initialize(t);
                    return this.loadDependencies(e).then(
                      function () {
                        this.transformMatrix = i;
                        var t = this.convertOpList(e);
                        return this.executeOpTree(t), n;
                      }.bind(this),
                    );
                  },
                  convertOpList: function (t) {
                    var n = t.argsArray,
                      i = t.fnArray,
                      r = i.length,
                      s = [],
                      o = [];
                    for (var c in a) s[a[c]] = c;
                    for (var l = 0; l < r; l++) {
                      var h = i[l];
                      o.push({ fnId: h, fn: s[h], args: n[l] });
                    }
                    return e(o);
                  },
                  executeOpTree: function (e) {
                    for (var t = e.length, n = 0; n < t; n++) {
                      var i = e[n].fn,
                        r = e[n].fnId,
                        s = e[n].args;
                      switch (0 | r) {
                        case a.beginText:
                          this.beginText();
                          break;
                        case a.setLeading:
                          this.setLeading(s);
                          break;
                        case a.setLeadingMoveText:
                          this.setLeadingMoveText(s[0], s[1]);
                          break;
                        case a.setFont:
                          this.setFont(s);
                          break;
                        case a.showText:
                          this.showText(s[0]);
                          break;
                        case a.showSpacedText:
                          this.showText(s[0]);
                          break;
                        case a.endText:
                          this.endText();
                          break;
                        case a.moveText:
                          this.moveText(s[0], s[1]);
                          break;
                        case a.setCharSpacing:
                          this.setCharSpacing(s[0]);
                          break;
                        case a.setWordSpacing:
                          this.setWordSpacing(s[0]);
                          break;
                        case a.setHScale:
                          this.setHScale(s[0]);
                          break;
                        case a.setTextMatrix:
                          this.setTextMatrix(
                            s[0],
                            s[1],
                            s[2],
                            s[3],
                            s[4],
                            s[5],
                          );
                          break;
                        case a.setLineWidth:
                          this.setLineWidth(s[0]);
                          break;
                        case a.setLineJoin:
                          this.setLineJoin(s[0]);
                          break;
                        case a.setLineCap:
                          this.setLineCap(s[0]);
                          break;
                        case a.setMiterLimit:
                          this.setMiterLimit(s[0]);
                          break;
                        case a.setFillRGBColor:
                          this.setFillRGBColor(s[0], s[1], s[2]);
                          break;
                        case a.setStrokeRGBColor:
                          this.setStrokeRGBColor(s[0], s[1], s[2]);
                          break;
                        case a.setDash:
                          this.setDash(s[0], s[1]);
                          break;
                        case a.setGState:
                          this.setGState(s[0]);
                          break;
                        case a.fill:
                          this.fill();
                          break;
                        case a.eoFill:
                          this.eoFill();
                          break;
                        case a.stroke:
                          this.stroke();
                          break;
                        case a.fillStroke:
                          this.fillStroke();
                          break;
                        case a.eoFillStroke:
                          this.eoFillStroke();
                          break;
                        case a.clip:
                          this.clip('nonzero');
                          break;
                        case a.eoClip:
                          this.clip('evenodd');
                          break;
                        case a.paintSolidColorImageMask:
                          this.paintSolidColorImageMask();
                          break;
                        case a.paintJpegXObject:
                          this.paintJpegXObject(s[0], s[1], s[2]);
                          break;
                        case a.paintImageXObject:
                          this.paintImageXObject(s[0]);
                          break;
                        case a.paintInlineImageXObject:
                          this.paintInlineImageXObject(s[0]);
                          break;
                        case a.paintImageMaskXObject:
                          this.paintImageMaskXObject(s[0]);
                          break;
                        case a.paintFormXObjectBegin:
                          this.paintFormXObjectBegin(s[0], s[1]);
                          break;
                        case a.paintFormXObjectEnd:
                          this.paintFormXObjectEnd();
                          break;
                        case a.closePath:
                          this.closePath();
                          break;
                        case a.closeStroke:
                          this.closeStroke();
                          break;
                        case a.closeFillStroke:
                          this.closeFillStroke();
                          break;
                        case a.nextLine:
                          this.nextLine();
                          break;
                        case a.transform:
                          this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                          break;
                        case a.constructPath:
                          this.constructPath(s[0], s[1]);
                          break;
                        case a.endPath:
                          this.endPath();
                          break;
                        case 92:
                          this.group(e[n].items);
                          break;
                        default:
                          l('Unimplemented operator ' + i);
                      }
                    }
                  },
                  setWordSpacing: function (e) {
                    this.current.wordSpacing = e;
                  },
                  setCharSpacing: function (e) {
                    this.current.charSpacing = e;
                  },
                  nextLine: function () {
                    this.moveText(0, this.current.leading);
                  },
                  setTextMatrix: function (e, n, i, r, a, s) {
                    var o = this.current;
                    (this.current.textMatrix = this.current.lineMatrix =
                      [e, n, i, r, a, s]),
                      (this.current.x = this.current.lineX = 0),
                      (this.current.y = this.current.lineY = 0),
                      (o.xcoords = []),
                      (o.tspan = document.createElementNS(g, 'svg:tspan')),
                      o.tspan.setAttributeNS(null, 'font-family', o.fontFamily),
                      o.tspan.setAttributeNS(
                        null,
                        'font-size',
                        t(o.fontSize) + 'px',
                      ),
                      o.tspan.setAttributeNS(null, 'y', t(-o.y)),
                      (o.txtElement = document.createElementNS(g, 'svg:text')),
                      o.txtElement.appendChild(o.tspan);
                  },
                  beginText: function () {
                    (this.current.x = this.current.lineX = 0),
                      (this.current.y = this.current.lineY = 0),
                      (this.current.textMatrix = i),
                      (this.current.lineMatrix = i),
                      (this.current.tspan = document.createElementNS(
                        g,
                        'svg:tspan',
                      )),
                      (this.current.txtElement = document.createElementNS(
                        g,
                        'svg:text',
                      )),
                      (this.current.txtgrp = document.createElementNS(
                        g,
                        'svg:g',
                      )),
                      (this.current.xcoords = []);
                  },
                  moveText: function (e, n) {
                    var i = this.current;
                    (this.current.x = this.current.lineX += e),
                      (this.current.y = this.current.lineY += n),
                      (i.xcoords = []),
                      (i.tspan = document.createElementNS(g, 'svg:tspan')),
                      i.tspan.setAttributeNS(null, 'font-family', i.fontFamily),
                      i.tspan.setAttributeNS(
                        null,
                        'font-size',
                        t(i.fontSize) + 'px',
                      ),
                      i.tspan.setAttributeNS(null, 'y', t(-i.y));
                  },
                  showText: function (e) {
                    var n = this.current,
                      i = n.font,
                      a = n.fontSize;
                    if (0 !== a) {
                      var s,
                        c = n.charSpacing,
                        l = n.wordSpacing,
                        h = n.fontDirection,
                        d = n.textHScale * h,
                        f = e.length,
                        p = i.vertical,
                        g = a * n.fontMatrix[0],
                        v = 0;
                      for (s = 0; s < f; ++s) {
                        var b = e[s];
                        if (null !== b)
                          if (o(b)) v += -b * a * 0.001;
                          else {
                            n.xcoords.push(n.x + v * d);
                            var w = b.width,
                              y = b.fontChar,
                              A = w * g + c * h;
                            (v += A), (n.tspan.textContent += y);
                          }
                        else v += h * l;
                      }
                      p ? (n.y -= v * d) : (n.x += v * d),
                        n.tspan.setAttributeNS(
                          null,
                          'x',
                          n.xcoords.map(t).join(' '),
                        ),
                        n.tspan.setAttributeNS(null, 'y', t(-n.y)),
                        n.tspan.setAttributeNS(
                          null,
                          'font-family',
                          n.fontFamily,
                        ),
                        n.tspan.setAttributeNS(
                          null,
                          'font-size',
                          t(n.fontSize) + 'px',
                        ),
                        n.fontStyle !== u.fontStyle &&
                          n.tspan.setAttributeNS(
                            null,
                            'font-style',
                            n.fontStyle,
                          ),
                        n.fontWeight !== u.fontWeight &&
                          n.tspan.setAttributeNS(
                            null,
                            'font-weight',
                            n.fontWeight,
                          ),
                        n.fillColor !== u.fillColor &&
                          n.tspan.setAttributeNS(null, 'fill', n.fillColor),
                        n.txtElement.setAttributeNS(
                          null,
                          'transform',
                          r(n.textMatrix) + ' scale(1, -1)',
                        ),
                        n.txtElement.setAttributeNS(m, 'xml:space', 'preserve'),
                        n.txtElement.appendChild(n.tspan),
                        n.txtgrp.appendChild(n.txtElement),
                        this._ensureTransformGroup().appendChild(n.txtElement);
                    }
                  },
                  setLeadingMoveText: function (e, t) {
                    this.setLeading(-t), this.moveText(e, t);
                  },
                  addFontStyle: function (e) {
                    this.cssStyle ||
                      ((this.cssStyle = document.createElementNS(
                        g,
                        'svg:style',
                      )),
                      this.cssStyle.setAttributeNS(null, 'type', 'text/css'),
                      this.defs.appendChild(this.cssStyle));
                    var t = h(e.data, e.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent +=
                      '@font-face { font-family: "' +
                      e.loadedName +
                      '"; src: url(' +
                      t +
                      '); }\n';
                  },
                  setFont: function (e) {
                    var i = this.current,
                      r = this.commonObjs.get(e[0]),
                      a = e[1];
                    (this.current.font = r),
                      this.embedFonts &&
                        r.data &&
                        !this.embeddedFonts[r.loadedName] &&
                        (this.addFontStyle(r),
                        (this.embeddedFonts[r.loadedName] = r)),
                      (i.fontMatrix = r.fontMatrix ? r.fontMatrix : n);
                    var s = r.black
                        ? r.bold
                          ? 'bolder'
                          : 'bold'
                        : r.bold
                        ? 'bold'
                        : 'normal',
                      o = r.italic ? 'italic' : 'normal';
                    a < 0
                      ? ((a = -a), (i.fontDirection = -1))
                      : (i.fontDirection = 1),
                      (i.fontSize = a),
                      (i.fontFamily = r.loadedName),
                      (i.fontWeight = s),
                      (i.fontStyle = o),
                      (i.tspan = document.createElementNS(g, 'svg:tspan')),
                      i.tspan.setAttributeNS(null, 'y', t(-i.y)),
                      (i.xcoords = []);
                  },
                  endText: function () {},
                  setLineWidth: function (e) {
                    this.current.lineWidth = e;
                  },
                  setLineCap: function (e) {
                    this.current.lineCap = b[e];
                  },
                  setLineJoin: function (e) {
                    this.current.lineJoin = w[e];
                  },
                  setMiterLimit: function (e) {
                    this.current.miterLimit = e;
                  },
                  setStrokeRGBColor: function (e, t, n) {
                    var i = s.makeCssRgb(e, t, n);
                    this.current.strokeColor = i;
                  },
                  setFillRGBColor: function (e, t, n) {
                    var i = s.makeCssRgb(e, t, n);
                    (this.current.fillColor = i),
                      (this.current.tspan = document.createElementNS(
                        g,
                        'svg:tspan',
                      )),
                      (this.current.xcoords = []);
                  },
                  setDash: function (e, t) {
                    (this.current.dashArray = e), (this.current.dashPhase = t);
                  },
                  constructPath: function (e, n) {
                    var i = this.current,
                      r = i.x,
                      s = i.y;
                    i.path = document.createElementNS(g, 'svg:path');
                    for (var o = [], c = e.length, l = 0, h = 0; l < c; l++)
                      switch (0 | e[l]) {
                        case a.rectangle:
                          (r = n[h++]), (s = n[h++]);
                          var u = n[h++],
                            d = n[h++],
                            f = r + u,
                            p = s + d;
                          o.push(
                            'M',
                            t(r),
                            t(s),
                            'L',
                            t(f),
                            t(s),
                            'L',
                            t(f),
                            t(p),
                            'L',
                            t(r),
                            t(p),
                            'Z',
                          );
                          break;
                        case a.moveTo:
                          (r = n[h++]), (s = n[h++]), o.push('M', t(r), t(s));
                          break;
                        case a.lineTo:
                          (r = n[h++]), (s = n[h++]), o.push('L', t(r), t(s));
                          break;
                        case a.curveTo:
                          (r = n[h + 4]),
                            (s = n[h + 5]),
                            o.push(
                              'C',
                              t(n[h]),
                              t(n[h + 1]),
                              t(n[h + 2]),
                              t(n[h + 3]),
                              t(r),
                              t(s),
                            ),
                            (h += 6);
                          break;
                        case a.curveTo2:
                          (r = n[h + 2]),
                            (s = n[h + 3]),
                            o.push(
                              'C',
                              t(r),
                              t(s),
                              t(n[h]),
                              t(n[h + 1]),
                              t(n[h + 2]),
                              t(n[h + 3]),
                            ),
                            (h += 4);
                          break;
                        case a.curveTo3:
                          (r = n[h + 2]),
                            (s = n[h + 3]),
                            o.push(
                              'C',
                              t(n[h]),
                              t(n[h + 1]),
                              t(r),
                              t(s),
                              t(r),
                              t(s),
                            ),
                            (h += 4);
                          break;
                        case a.closePath:
                          o.push('Z');
                      }
                    i.path.setAttributeNS(null, 'd', o.join(' ')),
                      i.path.setAttributeNS(
                        null,
                        'stroke-miterlimit',
                        t(i.miterLimit),
                      ),
                      i.path.setAttributeNS(null, 'stroke-linecap', i.lineCap),
                      i.path.setAttributeNS(
                        null,
                        'stroke-linejoin',
                        i.lineJoin,
                      ),
                      i.path.setAttributeNS(
                        null,
                        'stroke-width',
                        t(i.lineWidth) + 'px',
                      ),
                      i.path.setAttributeNS(
                        null,
                        'stroke-dasharray',
                        i.dashArray.map(t).join(' '),
                      ),
                      i.path.setAttributeNS(
                        null,
                        'stroke-dashoffset',
                        t(i.dashPhase) + 'px',
                      ),
                      i.path.setAttributeNS(null, 'fill', 'none'),
                      this._ensureTransformGroup().appendChild(i.path),
                      (i.element = i.path),
                      i.setCurrentPoint(r, s);
                  },
                  endPath: function () {},
                  clip: function (e) {
                    var t = this.current,
                      n = 'clippath' + y;
                    y++;
                    var i = document.createElementNS(g, 'svg:clipPath');
                    i.setAttributeNS(null, 'id', n),
                      i.setAttributeNS(
                        null,
                        'transform',
                        r(this.transformMatrix),
                      );
                    var a = t.element.cloneNode();
                    'evenodd' === e
                      ? a.setAttributeNS(null, 'clip-rule', 'evenodd')
                      : a.setAttributeNS(null, 'clip-rule', 'nonzero'),
                      i.appendChild(a),
                      this.defs.appendChild(i),
                      t.activeClipUrl &&
                        ((t.clipGroup = null),
                        this.extraStack.forEach(function (e) {
                          e.clipGroup = null;
                        })),
                      (t.activeClipUrl = 'url(#' + n + ')'),
                      (this.tgrp = null);
                  },
                  closePath: function () {
                    var e = this.current,
                      t = e.path.getAttributeNS(null, 'd');
                    (t += 'Z'), e.path.setAttributeNS(null, 'd', t);
                  },
                  setLeading: function (e) {
                    this.current.leading = -e;
                  },
                  setTextRise: function (e) {
                    this.current.textRise = e;
                  },
                  setHScale: function (e) {
                    this.current.textHScale = e / 100;
                  },
                  setGState: function (e) {
                    for (var t = 0, n = e.length; t < n; t++) {
                      var i = e[t],
                        r = i[0],
                        a = i[1];
                      switch (r) {
                        case 'LW':
                          this.setLineWidth(a);
                          break;
                        case 'LC':
                          this.setLineCap(a);
                          break;
                        case 'LJ':
                          this.setLineJoin(a);
                          break;
                        case 'ML':
                          this.setMiterLimit(a);
                          break;
                        case 'D':
                          this.setDash(a[0], a[1]);
                          break;
                        case 'Font':
                          this.setFont(a);
                          break;
                        default:
                          l('Unimplemented graphic state ' + r);
                      }
                    }
                  },
                  fill: function () {
                    var e = this.current;
                    e.element.setAttributeNS(null, 'fill', e.fillColor);
                  },
                  stroke: function () {
                    var e = this.current;
                    e.element.setAttributeNS(null, 'stroke', e.strokeColor),
                      e.element.setAttributeNS(null, 'fill', 'none');
                  },
                  eoFill: function () {
                    var e = this.current;
                    e.element.setAttributeNS(null, 'fill', e.fillColor),
                      e.element.setAttributeNS(null, 'fill-rule', 'evenodd');
                  },
                  fillStroke: function () {
                    this.stroke(), this.fill();
                  },
                  eoFillStroke: function () {
                    this.current.element.setAttributeNS(
                      null,
                      'fill-rule',
                      'evenodd',
                    ),
                      this.fillStroke();
                  },
                  closeStroke: function () {
                    this.closePath(), this.stroke();
                  },
                  closeFillStroke: function () {
                    this.closePath(), this.fillStroke();
                  },
                  paintSolidColorImageMask: function () {
                    var e = this.current,
                      t = document.createElementNS(g, 'svg:rect');
                    t.setAttributeNS(null, 'x', '0'),
                      t.setAttributeNS(null, 'y', '0'),
                      t.setAttributeNS(null, 'width', '1px'),
                      t.setAttributeNS(null, 'height', '1px'),
                      t.setAttributeNS(null, 'fill', e.fillColor),
                      this._ensureTransformGroup().appendChild(t);
                  },
                  paintJpegXObject: function (e, n, i) {
                    var r = this.objs.get(e),
                      a = document.createElementNS(g, 'svg:image');
                    a.setAttributeNS(v, 'xlink:href', r.src),
                      a.setAttributeNS(null, 'width', r.width + 'px'),
                      a.setAttributeNS(null, 'height', r.height + 'px'),
                      a.setAttributeNS(null, 'x', '0'),
                      a.setAttributeNS(null, 'y', t(-i)),
                      a.setAttributeNS(
                        null,
                        'transform',
                        'scale(' + t(1 / n) + ' ' + t(-1 / i) + ')',
                      ),
                      this._ensureTransformGroup().appendChild(a);
                  },
                  paintImageXObject: function (e) {
                    var t = this.objs.get(e);
                    return t
                      ? void this.paintInlineImageXObject(t)
                      : void l("Dependent image isn't ready yet");
                  },
                  paintInlineImageXObject: function (e, n) {
                    var i = e.width,
                      r = e.height,
                      a = d(e, this.forceDataSchema),
                      s = document.createElementNS(g, 'svg:rect');
                    s.setAttributeNS(null, 'x', '0'),
                      s.setAttributeNS(null, 'y', '0'),
                      s.setAttributeNS(null, 'width', t(i)),
                      s.setAttributeNS(null, 'height', t(r)),
                      (this.current.element = s),
                      this.clip('nonzero');
                    var o = document.createElementNS(g, 'svg:image');
                    o.setAttributeNS(v, 'xlink:href', a),
                      o.setAttributeNS(null, 'x', '0'),
                      o.setAttributeNS(null, 'y', t(-r)),
                      o.setAttributeNS(null, 'width', t(i) + 'px'),
                      o.setAttributeNS(null, 'height', t(r) + 'px'),
                      o.setAttributeNS(
                        null,
                        'transform',
                        'scale(' + t(1 / i) + ' ' + t(-1 / r) + ')',
                      ),
                      n
                        ? n.appendChild(o)
                        : this._ensureTransformGroup().appendChild(o);
                  },
                  paintImageMaskXObject: function (e) {
                    var n = this.current,
                      i = e.width,
                      r = e.height,
                      a = n.fillColor;
                    n.maskId = 'mask' + A++;
                    var s = document.createElementNS(g, 'svg:mask');
                    s.setAttributeNS(null, 'id', n.maskId);
                    var o = document.createElementNS(g, 'svg:rect');
                    o.setAttributeNS(null, 'x', '0'),
                      o.setAttributeNS(null, 'y', '0'),
                      o.setAttributeNS(null, 'width', t(i)),
                      o.setAttributeNS(null, 'height', t(r)),
                      o.setAttributeNS(null, 'fill', a),
                      o.setAttributeNS(null, 'mask', 'url(#' + n.maskId + ')'),
                      this.defs.appendChild(s),
                      this._ensureTransformGroup().appendChild(o),
                      this.paintInlineImageXObject(e, s);
                  },
                  paintFormXObjectBegin: function (e, n) {
                    if (
                      (c(e) &&
                        6 === e.length &&
                        this.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                      c(n) && 4 === n.length)
                    ) {
                      var i = n[2] - n[0],
                        r = n[3] - n[1],
                        a = document.createElementNS(g, 'svg:rect');
                      a.setAttributeNS(null, 'x', n[0]),
                        a.setAttributeNS(null, 'y', n[1]),
                        a.setAttributeNS(null, 'width', t(i)),
                        a.setAttributeNS(null, 'height', t(r)),
                        (this.current.element = a),
                        this.clip('nonzero'),
                        this.endPath();
                    }
                  },
                  paintFormXObjectEnd: function () {},
                  _initialize: function (e) {
                    var t = document.createElementNS(g, 'svg:svg');
                    t.setAttributeNS(null, 'version', '1.1'),
                      t.setAttributeNS(null, 'width', e.width + 'px'),
                      t.setAttributeNS(null, 'height', e.height + 'px'),
                      t.setAttributeNS(null, 'preserveAspectRatio', 'none'),
                      t.setAttributeNS(
                        null,
                        'viewBox',
                        '0 0 ' + e.width + ' ' + e.height,
                      );
                    var n = document.createElementNS(g, 'svg:defs');
                    t.appendChild(n), (this.defs = n);
                    var i = document.createElementNS(g, 'svg:g');
                    return (
                      i.setAttributeNS(null, 'transform', r(e.transform)),
                      t.appendChild(i),
                      (this.svg = i),
                      t
                    );
                  },
                  _ensureClipGroup: function () {
                    if (!this.current.clipGroup) {
                      var e = document.createElementNS(g, 'svg:g');
                      e.setAttributeNS(
                        null,
                        'clip-path',
                        this.current.activeClipUrl,
                      ),
                        this.svg.appendChild(e),
                        (this.current.clipGroup = e);
                    }
                    return this.current.clipGroup;
                  },
                  _ensureTransformGroup: function () {
                    return (
                      this.tgrp ||
                        ((this.tgrp = document.createElementNS(g, 'svg:g')),
                        this.tgrp.setAttributeNS(
                          null,
                          'transform',
                          r(this.transformMatrix),
                        ),
                        this.current.activeClipUrl
                          ? this._ensureClipGroup().appendChild(this.tgrp)
                          : this.svg.appendChild(this.tgrp)),
                      this.tgrp
                    );
                  },
                }),
                p
              );
            })();
          e.SVGGraphics = p;
        }),
        (function (e, t) {
          t(
            (e.pdfjsDisplayAnnotationLayer = {}),
            e.pdfjsSharedUtil,
            e.pdfjsDisplayDOMUtils,
          );
        })(this, function (e, t, n) {
          function i() {}
          var r = t.AnnotationBorderStyleType,
            a = t.AnnotationType,
            s = t.stringToPDFString,
            o = t.Util,
            c = n.addLinkAttributes,
            l = n.LinkTarget,
            h = n.getFilenameFromUrl,
            u = t.warn,
            d = n.CustomStyle,
            f = n.getDefaultSetting;
          i.prototype = {
            create: function (e) {
              var t = e.data.annotationType;
              switch (t) {
                case a.LINK:
                  return new g(e);
                case a.TEXT:
                  return new m(e);
                case a.WIDGET:
                  var n = e.data.fieldType;
                  switch (n) {
                    case 'Tx':
                      return new b(e);
                    case 'Btn':
                      if (e.data.radioButton) return new y(e);
                      if (e.data.checkBox) return new w(e);
                      u('Unimplemented button widget annotation: pushbutton');
                      break;
                    case 'Ch':
                      return new A(e);
                  }
                  return new v(e);
                case a.POPUP:
                  return new S(e);
                case a.HIGHLIGHT:
                  return new x(e);
                case a.UNDERLINE:
                  return new C(e);
                case a.SQUIGGLY:
                  return new _(e);
                case a.STRIKEOUT:
                  return new L(e);
                case a.FILEATTACHMENT:
                  return new T(e);
                default:
                  return new p(e);
              }
            },
          };
          var p = (function () {
              function e(e, t) {
                (this.isRenderable = t || !1),
                  (this.data = e.data),
                  (this.layer = e.layer),
                  (this.page = e.page),
                  (this.viewport = e.viewport),
                  (this.linkService = e.linkService),
                  (this.downloadManager = e.downloadManager),
                  (this.imageResourcesPath = e.imageResourcesPath),
                  (this.renderInteractiveForms = e.renderInteractiveForms),
                  t && (this.container = this._createContainer());
              }
              return (
                (e.prototype = {
                  _createContainer: function () {
                    var e = this.data,
                      t = this.page,
                      n = this.viewport,
                      i = document.createElement('section'),
                      a = e.rect[2] - e.rect[0],
                      s = e.rect[3] - e.rect[1];
                    i.setAttribute('data-annotation-id', e.id);
                    var c = o.normalizeRect([
                      e.rect[0],
                      t.view[3] - e.rect[1] + t.view[1],
                      e.rect[2],
                      t.view[3] - e.rect[3] + t.view[1],
                    ]);
                    if (
                      (d.setProp(
                        'transform',
                        i,
                        'matrix(' + n.transform.join(',') + ')',
                      ),
                      d.setProp(
                        'transformOrigin',
                        i,
                        -c[0] + 'px ' + -c[1] + 'px',
                      ),
                      e.borderStyle.width > 0)
                    ) {
                      (i.style.borderWidth = e.borderStyle.width + 'px'),
                        e.borderStyle.style !== r.UNDERLINE &&
                          ((a -= 2 * e.borderStyle.width),
                          (s -= 2 * e.borderStyle.width));
                      var l = e.borderStyle.horizontalCornerRadius,
                        h = e.borderStyle.verticalCornerRadius;
                      if (l > 0 || h > 0) {
                        var f = l + 'px / ' + h + 'px';
                        d.setProp('borderRadius', i, f);
                      }
                      switch (e.borderStyle.style) {
                        case r.SOLID:
                          i.style.borderStyle = 'solid';
                          break;
                        case r.DASHED:
                          i.style.borderStyle = 'dashed';
                          break;
                        case r.BEVELED:
                          u('Unimplemented border style: beveled');
                          break;
                        case r.INSET:
                          u('Unimplemented border style: inset');
                          break;
                        case r.UNDERLINE:
                          i.style.borderBottomStyle = 'solid';
                      }
                      e.color
                        ? (i.style.borderColor = o.makeCssRgb(
                            0 | e.color[0],
                            0 | e.color[1],
                            0 | e.color[2],
                          ))
                        : (i.style.borderWidth = 0);
                    }
                    return (
                      (i.style.left = c[0] + 'px'),
                      (i.style.top = c[1] + 'px'),
                      (i.style.width = a + 'px'),
                      (i.style.height = s + 'px'),
                      i
                    );
                  },
                  _createPopup: function (e, t, n) {
                    t ||
                      ((t = document.createElement('div')),
                      (t.style.height = e.style.height),
                      (t.style.width = e.style.width),
                      e.appendChild(t));
                    var i = new P({
                        container: e,
                        trigger: t,
                        color: n.color,
                        title: n.title,
                        contents: n.contents,
                        hideWrapper: !0,
                      }),
                      r = i.render();
                    (r.style.left = e.style.width), e.appendChild(r);
                  },
                  render: function () {
                    throw new Error(
                      'Abstract method AnnotationElement.render called',
                    );
                  },
                }),
                e
              );
            })(),
            g = (function () {
              function e(e) {
                p.call(this, e, !0);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    this.container.className = 'linkAnnotation';
                    var e = document.createElement('a');
                    return (
                      c(e, {
                        url: this.data.url,
                        target: this.data.newWindow ? l.BLANK : void 0,
                      }),
                      this.data.url ||
                        (this.data.action
                          ? this._bindNamedAction(e, this.data.action)
                          : this._bindLink(e, this.data.dest)),
                      this.container.appendChild(e),
                      this.container
                    );
                  },
                  _bindLink: function (e, t) {
                    var n = this;
                    (e.href = this.linkService.getDestinationHash(t)),
                      (e.onclick = function () {
                        return t && n.linkService.navigateTo(t), !1;
                      }),
                      t && (e.className = 'internalLink');
                  },
                  _bindNamedAction: function (e, t) {
                    var n = this;
                    (e.href = this.linkService.getAnchorUrl('')),
                      (e.onclick = function () {
                        return n.linkService.executeNamedAction(t), !1;
                      }),
                      (e.className = 'internalLink');
                  },
                }),
                e
              );
            })(),
            m = (function () {
              function e(e) {
                var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                p.call(this, e, t);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    this.container.className = 'textAnnotation';
                    var e = document.createElement('img');
                    return (
                      (e.style.height = this.container.style.height),
                      (e.style.width = this.container.style.width),
                      (e.src =
                        this.imageResourcesPath +
                        'annotation-' +
                        this.data.name.toLowerCase() +
                        '.svg'),
                      (e.alt = '[{{type}} Annotation]'),
                      (e.dataset.l10nId = 'text_annotation_type'),
                      (e.dataset.l10nArgs = JSON.stringify({
                        type: this.data.name,
                      })),
                      this.data.hasPopup ||
                        this._createPopup(this.container, e, this.data),
                      this.container.appendChild(e),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            v = (function () {
              function e(e, t) {
                p.call(this, e, t);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    return this.container;
                  },
                }),
                e
              );
            })(),
            b = (function () {
              function e(e) {
                var t =
                  e.renderInteractiveForms ||
                  (!e.data.hasAppearance && !!e.data.fieldValue);
                v.call(this, e, t);
              }
              var t = ['left', 'center', 'right'];
              return (
                o.inherit(e, v, {
                  render: function () {
                    this.container.className = 'textWidgetAnnotation';
                    var e = null;
                    if (this.renderInteractiveForms) {
                      if (
                        (this.data.multiLine
                          ? ((e = document.createElement('textarea')),
                            (e.textContent = this.data.fieldValue))
                          : ((e = document.createElement('input')),
                            (e.type = 'text'),
                            e.setAttribute('value', this.data.fieldValue)),
                        (e.disabled = this.data.readOnly),
                        null !== this.data.maxLen &&
                          (e.maxLength = this.data.maxLen),
                        this.data.comb)
                      ) {
                        var n = this.data.rect[2] - this.data.rect[0],
                          i = n / this.data.maxLen;
                        e.classList.add('comb'),
                          (e.style.letterSpacing = 'calc(' + i + 'px - 1ch)');
                      }
                    } else {
                      (e = document.createElement('div')),
                        (e.textContent = this.data.fieldValue),
                        (e.style.verticalAlign = 'middle'),
                        (e.style.display = 'table-cell');
                      var r = null;
                      this.data.fontRefName &&
                        (r = this.page.commonObjs.getData(
                          this.data.fontRefName,
                        )),
                        this._setTextStyle(e, r);
                    }
                    return (
                      null !== this.data.textAlignment &&
                        (e.style.textAlign = t[this.data.textAlignment]),
                      this.container.appendChild(e),
                      this.container
                    );
                  },
                  _setTextStyle: function (e, t) {
                    var n = e.style;
                    if (
                      ((n.fontSize = this.data.fontSize + 'px'),
                      (n.direction =
                        this.data.fontDirection < 0 ? 'rtl' : 'ltr'),
                      t)
                    ) {
                      (n.fontWeight = t.black
                        ? t.bold
                          ? '900'
                          : 'bold'
                        : t.bold
                        ? 'bold'
                        : 'normal'),
                        (n.fontStyle = t.italic ? 'italic' : 'normal');
                      var i = t.loadedName ? '"' + t.loadedName + '", ' : '',
                        r = t.fallbackName || 'Helvetica, sans-serif';
                      n.fontFamily = i + r;
                    }
                  },
                }),
                e
              );
            })(),
            w = (function () {
              function e(e) {
                v.call(this, e, e.renderInteractiveForms);
              }
              return (
                o.inherit(e, v, {
                  render: function () {
                    this.container.className =
                      'buttonWidgetAnnotation checkBox';
                    var e = document.createElement('input');
                    return (
                      (e.disabled = this.data.readOnly),
                      (e.type = 'checkbox'),
                      this.data.fieldValue &&
                        'Off' !== this.data.fieldValue &&
                        e.setAttribute('checked', !0),
                      this.container.appendChild(e),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            y = (function () {
              function e(e) {
                v.call(this, e, e.renderInteractiveForms);
              }
              return (
                o.inherit(e, v, {
                  render: function () {
                    this.container.className =
                      'buttonWidgetAnnotation radioButton';
                    var e = document.createElement('input');
                    return (
                      (e.disabled = this.data.readOnly),
                      (e.type = 'radio'),
                      (e.name = this.data.fieldName),
                      this.data.fieldValue === this.data.buttonValue &&
                        e.setAttribute('checked', !0),
                      this.container.appendChild(e),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            A = (function () {
              function e(e) {
                v.call(this, e, e.renderInteractiveForms);
              }
              return (
                o.inherit(e, v, {
                  render: function () {
                    this.container.className = 'choiceWidgetAnnotation';
                    var e = document.createElement('select');
                    (e.disabled = this.data.readOnly),
                      this.data.combo ||
                        ((e.size = this.data.options.length),
                        this.data.multiSelect && (e.multiple = !0));
                    for (var t = 0, n = this.data.options.length; t < n; t++) {
                      var i = this.data.options[t],
                        r = document.createElement('option');
                      (r.textContent = i.displayValue),
                        (r.value = i.exportValue),
                        this.data.fieldValue.indexOf(i.displayValue) >= 0 &&
                          r.setAttribute('selected', !0),
                        e.appendChild(r);
                    }
                    return this.container.appendChild(e), this.container;
                  },
                }),
                e
              );
            })(),
            S = (function () {
              function e(e) {
                var t = !(!e.data.title && !e.data.contents);
                p.call(this, e, t);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    this.container.className = 'popupAnnotation';
                    var e = '[data-annotation-id="' + this.data.parentId + '"]',
                      t = this.layer.querySelector(e);
                    if (!t) return this.container;
                    var n = new P({
                        container: this.container,
                        trigger: t,
                        color: this.data.color,
                        title: this.data.title,
                        contents: this.data.contents,
                      }),
                      i = parseFloat(t.style.left),
                      r = parseFloat(t.style.width);
                    return (
                      d.setProp(
                        'transformOrigin',
                        this.container,
                        -(i + r) + 'px -' + t.style.top,
                      ),
                      (this.container.style.left = i + r + 'px'),
                      this.container.appendChild(n.render()),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            P = (function () {
              function e(e) {
                (this.container = e.container),
                  (this.trigger = e.trigger),
                  (this.color = e.color),
                  (this.title = e.title),
                  (this.contents = e.contents),
                  (this.hideWrapper = e.hideWrapper || !1),
                  (this.pinned = !1);
              }
              var t = 0.7;
              return (
                (e.prototype = {
                  render: function () {
                    var e = document.createElement('div');
                    (e.className = 'popupWrapper'),
                      (this.hideElement = this.hideWrapper
                        ? e
                        : this.container),
                      this.hideElement.setAttribute('hidden', !0);
                    var n = document.createElement('div');
                    n.className = 'popup';
                    var i = this.color;
                    if (i) {
                      var r = t * (255 - i[0]) + i[0],
                        a = t * (255 - i[1]) + i[1],
                        s = t * (255 - i[2]) + i[2];
                      n.style.backgroundColor = o.makeCssRgb(
                        0 | r,
                        0 | a,
                        0 | s,
                      );
                    }
                    var c = this._formatContents(this.contents),
                      l = document.createElement('h1');
                    return (
                      (l.textContent = this.title),
                      this.trigger.addEventListener(
                        'click',
                        this._toggle.bind(this),
                      ),
                      this.trigger.addEventListener(
                        'mouseover',
                        this._show.bind(this, !1),
                      ),
                      this.trigger.addEventListener(
                        'mouseout',
                        this._hide.bind(this, !1),
                      ),
                      n.addEventListener('click', this._hide.bind(this, !0)),
                      n.appendChild(l),
                      n.appendChild(c),
                      e.appendChild(n),
                      e
                    );
                  },
                  _formatContents: function (e) {
                    for (
                      var t = document.createElement('p'),
                        n = e.split(/(?:\r\n?|\n)/),
                        i = 0,
                        r = n.length;
                      i < r;
                      ++i
                    ) {
                      var a = n[i];
                      t.appendChild(document.createTextNode(a)),
                        i < r - 1 &&
                          t.appendChild(document.createElement('br'));
                    }
                    return t;
                  },
                  _toggle: function () {
                    this.pinned ? this._hide(!0) : this._show(!0);
                  },
                  _show: function (e) {
                    e && (this.pinned = !0),
                      this.hideElement.hasAttribute('hidden') &&
                        (this.hideElement.removeAttribute('hidden'),
                        (this.container.style.zIndex += 1));
                  },
                  _hide: function (e) {
                    e && (this.pinned = !1),
                      this.hideElement.hasAttribute('hidden') ||
                        this.pinned ||
                        (this.hideElement.setAttribute('hidden', !0),
                        (this.container.style.zIndex -= 1));
                  },
                }),
                e
              );
            })(),
            x = (function () {
              function e(e) {
                var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                p.call(this, e, t);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    return (
                      (this.container.className = 'highlightAnnotation'),
                      this.data.hasPopup ||
                        this._createPopup(this.container, null, this.data),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            C = (function () {
              function e(e) {
                var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                p.call(this, e, t);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    return (
                      (this.container.className = 'underlineAnnotation'),
                      this.data.hasPopup ||
                        this._createPopup(this.container, null, this.data),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            _ = (function () {
              function e(e) {
                var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                p.call(this, e, t);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    return (
                      (this.container.className = 'squigglyAnnotation'),
                      this.data.hasPopup ||
                        this._createPopup(this.container, null, this.data),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            L = (function () {
              function e(e) {
                var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                p.call(this, e, t);
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    return (
                      (this.container.className = 'strikeoutAnnotation'),
                      this.data.hasPopup ||
                        this._createPopup(this.container, null, this.data),
                      this.container
                    );
                  },
                }),
                e
              );
            })(),
            T = (function () {
              function e(e) {
                p.call(this, e, !0);
                var t = this.data.file;
                (this.filename = h(t.filename)),
                  (this.content = t.content),
                  this.linkService.onFileAttachmentAnnotation({
                    id: s(t.filename),
                    filename: t.filename,
                    content: t.content,
                  });
              }
              return (
                o.inherit(e, p, {
                  render: function () {
                    this.container.className = 'fileAttachmentAnnotation';
                    var e = document.createElement('div');
                    return (
                      (e.style.height = this.container.style.height),
                      (e.style.width = this.container.style.width),
                      e.addEventListener('dblclick', this._download.bind(this)),
                      this.data.hasPopup ||
                        (!this.data.title && !this.data.contents) ||
                        this._createPopup(this.container, e, this.data),
                      this.container.appendChild(e),
                      this.container
                    );
                  },
                  _download: function () {
                    return this.downloadManager
                      ? void this.downloadManager.downloadData(
                          this.content,
                          this.filename,
                          '',
                        )
                      : void u(
                          'Download cannot be started due to unavailable download manager',
                        );
                  },
                }),
                e
              );
            })(),
            k = (function () {
              return {
                render: function (e) {
                  for (
                    var t = new i(), n = 0, r = e.annotations.length;
                    n < r;
                    n++
                  ) {
                    var a = e.annotations[n];
                    if (a) {
                      var s = t.create({
                        data: a,
                        layer: e.div,
                        page: e.page,
                        viewport: e.viewport,
                        linkService: e.linkService,
                        downloadManager: e.downloadManager,
                        imageResourcesPath:
                          e.imageResourcesPath || f('imageResourcesPath'),
                        renderInteractiveForms: e.renderInteractiveForms || !1,
                      });
                      s.isRenderable && e.div.appendChild(s.render());
                    }
                  }
                },
                update: function (e) {
                  for (var t = 0, n = e.annotations.length; t < n; t++) {
                    var i = e.annotations[t],
                      r = e.div.querySelector(
                        '[data-annotation-id="' + i.id + '"]',
                      );
                    r &&
                      d.setProp(
                        'transform',
                        r,
                        'matrix(' + e.viewport.transform.join(',') + ')',
                      );
                  }
                  e.div.removeAttribute('hidden');
                },
              };
            })();
          e.AnnotationLayer = k;
        }),
        (function (e, t) {
          t(
            (e.pdfjsDisplayTextLayer = {}),
            e.pdfjsSharedUtil,
            e.pdfjsDisplayDOMUtils,
          );
        })(this, function (e, t, n) {
          var i = t.Util,
            r = t.createPromiseCapability,
            a = n.CustomStyle,
            s = n.getDefaultSetting,
            o = (function () {
              function e(e) {
                return !f.test(e);
              }
              function t(t, n, r) {
                var a = document.createElement('div'),
                  o = {
                    style: null,
                    angle: 0,
                    canvasWidth: 0,
                    isWhitespace: !1,
                    originalTransform: null,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    scale: 1,
                  };
                if ((t._textDivs.push(a), e(n.str)))
                  return (
                    (o.isWhitespace = !0), void t._textDivProperties.set(a, o)
                  );
                var c = i.transform(t._viewport.transform, n.transform),
                  l = Math.atan2(c[1], c[0]),
                  h = r[n.fontName];
                h.vertical && (l += Math.PI / 2);
                var u = Math.sqrt(c[2] * c[2] + c[3] * c[3]),
                  d = u;
                h.ascent
                  ? (d = h.ascent * d)
                  : h.descent && (d = (1 + h.descent) * d);
                var f, g;
                if (
                  (0 === l
                    ? ((f = c[4]), (g = c[5] - d))
                    : ((f = c[4] + d * Math.sin(l)),
                      (g = c[5] - d * Math.cos(l))),
                  (p[1] = f),
                  (p[3] = g),
                  (p[5] = u),
                  (p[7] = h.fontFamily),
                  (o.style = p.join('')),
                  a.setAttribute('style', o.style),
                  (a.textContent = n.str),
                  s('pdfBug') && (a.dataset.fontName = n.fontName),
                  0 !== l && (o.angle = l * (180 / Math.PI)),
                  n.str.length > 1 &&
                    (h.vertical
                      ? (o.canvasWidth = n.height * t._viewport.scale)
                      : (o.canvasWidth = n.width * t._viewport.scale)),
                  t._textDivProperties.set(a, o),
                  t._enhanceTextSelection)
                ) {
                  var m = 1,
                    v = 0;
                  0 !== l && ((m = Math.cos(l)), (v = Math.sin(l)));
                  var b,
                    w,
                    y = (h.vertical ? n.height : n.width) * t._viewport.scale,
                    A = u;
                  0 !== l
                    ? ((b = [m, v, -v, m, f, g]),
                      (w = i.getAxialAlignedBoundingBox([0, 0, y, A], b)))
                    : (w = [f, g, f + y, g + A]),
                    t._bounds.push({
                      left: w[0],
                      top: w[1],
                      right: w[2],
                      bottom: w[3],
                      div: a,
                      size: [y, A],
                      m: b,
                    });
                }
              }
              function n(e) {
                if (!e._canceled) {
                  var t = e._container,
                    n = e._textDivs,
                    i = e._capability,
                    r = n.length;
                  if (r > d) return (e._renderingDone = !0), void i.resolve();
                  var s = document.createElement('canvas');
                  s.mozOpaque = !0;
                  for (
                    var o, c, l = s.getContext('2d', { alpha: !1 }), h = 0;
                    h < r;
                    h++
                  ) {
                    var u = n[h],
                      f = e._textDivProperties.get(u);
                    if (!f.isWhitespace) {
                      var p = u.style.fontSize,
                        g = u.style.fontFamily;
                      (p === o && g === c) ||
                        ((l.font = p + ' ' + g), (o = p), (c = g));
                      var m = l.measureText(u.textContent).width;
                      t.appendChild(u);
                      var v = '';
                      0 !== f.canvasWidth &&
                        m > 0 &&
                        ((f.scale = f.canvasWidth / m),
                        (v = 'scaleX(' + f.scale + ')')),
                        0 !== f.angle &&
                          (v = 'rotate(' + f.angle + 'deg) ' + v),
                        '' !== v &&
                          ((f.originalTransform = v),
                          a.setProp('transform', u, v)),
                        e._textDivProperties.set(u, f);
                    }
                  }
                  (e._renderingDone = !0), i.resolve();
                }
              }
              function o(e) {
                for (
                  var t = e._bounds,
                    n = e._viewport,
                    r = c(n.width, n.height, t),
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var s = t[a].div,
                    o = e._textDivProperties.get(s);
                  if (0 !== o.angle) {
                    var l = r[a],
                      h = t[a],
                      u = h.m,
                      d = u[0],
                      f = u[1],
                      p = [[0, 0], [0, h.size[1]], [h.size[0], 0], h.size],
                      g = new Float64Array(64);
                    p.forEach(function (e, t) {
                      var n = i.applyTransform(e, u);
                      (g[t + 0] = d && (l.left - n[0]) / d),
                        (g[t + 4] = f && (l.top - n[1]) / f),
                        (g[t + 8] = d && (l.right - n[0]) / d),
                        (g[t + 12] = f && (l.bottom - n[1]) / f),
                        (g[t + 16] = f && (l.left - n[0]) / -f),
                        (g[t + 20] = d && (l.top - n[1]) / d),
                        (g[t + 24] = f && (l.right - n[0]) / -f),
                        (g[t + 28] = d && (l.bottom - n[1]) / d),
                        (g[t + 32] = d && (l.left - n[0]) / -d),
                        (g[t + 36] = f && (l.top - n[1]) / -f),
                        (g[t + 40] = d && (l.right - n[0]) / -d),
                        (g[t + 44] = f && (l.bottom - n[1]) / -f),
                        (g[t + 48] = f && (l.left - n[0]) / f),
                        (g[t + 52] = d && (l.top - n[1]) / -d),
                        (g[t + 56] = f && (l.right - n[0]) / f),
                        (g[t + 60] = d && (l.bottom - n[1]) / -d);
                    });
                    var m = function (e, t, n) {
                        for (var i = 0, r = 0; r < n; r++) {
                          var a = e[t++];
                          a > 0 && (i = i ? Math.min(a, i) : a);
                        }
                        return i;
                      },
                      v = 1 + Math.min(Math.abs(d), Math.abs(f));
                    (o.paddingLeft = m(g, 32, 16) / v),
                      (o.paddingTop = m(g, 48, 16) / v),
                      (o.paddingRight = m(g, 0, 16) / v),
                      (o.paddingBottom = m(g, 16, 16) / v),
                      e._textDivProperties.set(s, o);
                  } else
                    (o.paddingLeft = t[a].left - r[a].left),
                      (o.paddingTop = t[a].top - r[a].top),
                      (o.paddingRight = r[a].right - t[a].right),
                      (o.paddingBottom = r[a].bottom - t[a].bottom),
                      e._textDivProperties.set(s, o);
                }
              }
              function c(e, t, n) {
                var i = n.map(function (e, t) {
                  return {
                    x1: e.left,
                    y1: e.top,
                    x2: e.right,
                    y2: e.bottom,
                    index: t,
                    x1New: void 0,
                    x2New: void 0,
                  };
                });
                l(e, i);
                var r = new Array(n.length);
                return (
                  i.forEach(function (e) {
                    var t = e.index;
                    r[t] = { left: e.x1New, top: 0, right: e.x2New, bottom: 0 };
                  }),
                  n.map(function (t, n) {
                    var a = r[n],
                      s = i[n];
                    (s.x1 = t.top),
                      (s.y1 = e - a.right),
                      (s.x2 = t.bottom),
                      (s.y2 = e - a.left),
                      (s.index = n),
                      (s.x1New = void 0),
                      (s.x2New = void 0);
                  }),
                  l(t, i),
                  i.forEach(function (e) {
                    var t = e.index;
                    (r[t].top = e.x1New), (r[t].bottom = e.x2New);
                  }),
                  r
                );
              }
              function l(e, t) {
                t.sort(function (e, t) {
                  return e.x1 - t.x1 || e.index - t.index;
                });
                var n = {
                    x1: -(1 / 0),
                    y1: -(1 / 0),
                    x2: 0,
                    y2: 1 / 0,
                    index: -1,
                    x1New: 0,
                    x2New: 0,
                  },
                  i = [{ start: -(1 / 0), end: 1 / 0, boundary: n }];
                t.forEach(function (e) {
                  for (var t = 0; t < i.length && i[t].end <= e.y1; ) t++;
                  for (var n = i.length - 1; n >= 0 && i[n].start >= e.y2; )
                    n--;
                  var r,
                    a,
                    s,
                    o,
                    c = -(1 / 0);
                  for (s = t; s <= n; s++) {
                    (r = i[s]), (a = r.boundary);
                    var l;
                    (l =
                      a.x2 > e.x1
                        ? a.index > e.index
                          ? a.x1New
                          : e.x1
                        : void 0 === a.x2New
                        ? (a.x2 + e.x1) / 2
                        : a.x2New),
                      l > c && (c = l);
                  }
                  for (e.x1New = c, s = t; s <= n; s++)
                    (r = i[s]),
                      (a = r.boundary),
                      void 0 === a.x2New
                        ? a.x2 > e.x1
                          ? a.index > e.index && (a.x2New = a.x2)
                          : (a.x2New = c)
                        : a.x2New > c && (a.x2New = Math.max(c, a.x2));
                  var h = [],
                    u = null;
                  for (s = t; s <= n; s++) {
                    (r = i[s]), (a = r.boundary);
                    var d = a.x2 > e.x2 ? a : e;
                    u === d
                      ? (h[h.length - 1].end = r.end)
                      : (h.push({ start: r.start, end: r.end, boundary: d }),
                        (u = d));
                  }
                  for (
                    i[t].start < e.y1 &&
                      ((h[0].start = e.y1),
                      h.unshift({
                        start: i[t].start,
                        end: e.y1,
                        boundary: i[t].boundary,
                      })),
                      e.y2 < i[n].end &&
                        ((h[h.length - 1].end = e.y2),
                        h.push({
                          start: e.y2,
                          end: i[n].end,
                          boundary: i[n].boundary,
                        })),
                      s = t;
                    s <= n;
                    s++
                  )
                    if (((r = i[s]), (a = r.boundary), void 0 === a.x2New)) {
                      var f = !1;
                      for (o = t - 1; !f && o >= 0 && i[o].start >= a.y1; o--)
                        f = i[o].boundary === a;
                      for (
                        o = n + 1;
                        !f && o < i.length && i[o].end <= a.y2;
                        o++
                      )
                        f = i[o].boundary === a;
                      for (o = 0; !f && o < h.length; o++)
                        f = h[o].boundary === a;
                      f || (a.x2New = c);
                    }
                  Array.prototype.splice.apply(i, [t, n - t + 1].concat(h));
                }),
                  i.forEach(function (t) {
                    var n = t.boundary;
                    void 0 === n.x2New && (n.x2New = Math.max(e, n.x2));
                  });
              }
              function h(e, t, n, i, a) {
                (this._textContent = e),
                  (this._container = t),
                  (this._viewport = n),
                  (this._textDivs = i || []),
                  (this._textDivProperties = new WeakMap()),
                  (this._renderingDone = !1),
                  (this._canceled = !1),
                  (this._capability = r()),
                  (this._renderTimer = null),
                  (this._bounds = []),
                  (this._enhanceTextSelection = !!a);
              }
              function u(e) {
                var t = new h(
                  e.textContent,
                  e.container,
                  e.viewport,
                  e.textDivs,
                  e.enhanceTextSelection,
                );
                return t._render(e.timeout), t;
              }
              var d = 1e5,
                f = /\S/,
                p = [
                  'left: ',
                  0,
                  'px; top: ',
                  0,
                  'px; font-size: ',
                  0,
                  'px; font-family: ',
                  '',
                  ';',
                ];
              return (
                (h.prototype = {
                  get promise() {
                    return this._capability.promise;
                  },
                  cancel: function () {
                    (this._canceled = !0),
                      null !== this._renderTimer &&
                        (clearTimeout(this._renderTimer),
                        (this._renderTimer = null)),
                      this._capability.reject('canceled');
                  },
                  _render: function (e) {
                    for (
                      var i = this._textContent.items,
                        r = this._textContent.styles,
                        a = 0,
                        s = i.length;
                      a < s;
                      a++
                    )
                      t(this, i[a], r);
                    if (e) {
                      var o = this;
                      this._renderTimer = setTimeout(function () {
                        n(o), (o._renderTimer = null);
                      }, e);
                    } else n(this);
                  },
                  expandTextDivs: function (e) {
                    if (this._enhanceTextSelection && this._renderingDone) {
                      null !== this._bounds && (o(this), (this._bounds = null));
                      for (var t = 0, n = this._textDivs.length; t < n; t++) {
                        var i = this._textDivs[t],
                          r = this._textDivProperties.get(i);
                        if (!r.isWhitespace)
                          if (e) {
                            var s = '',
                              c = '';
                            1 !== r.scale && (s = 'scaleX(' + r.scale + ')'),
                              0 !== r.angle &&
                                (s = 'rotate(' + r.angle + 'deg) ' + s),
                              0 !== r.paddingLeft &&
                                ((c +=
                                  ' padding-left: ' +
                                  r.paddingLeft / r.scale +
                                  'px;'),
                                (s +=
                                  ' translateX(' +
                                  -r.paddingLeft / r.scale +
                                  'px)')),
                              0 !== r.paddingTop &&
                                ((c += ' padding-top: ' + r.paddingTop + 'px;'),
                                (s += ' translateY(' + -r.paddingTop + 'px)')),
                              0 !== r.paddingRight &&
                                (c +=
                                  ' padding-right: ' +
                                  r.paddingRight / r.scale +
                                  'px;'),
                              0 !== r.paddingBottom &&
                                (c +=
                                  ' padding-bottom: ' +
                                  r.paddingBottom +
                                  'px;'),
                              '' !== c && i.setAttribute('style', r.style + c),
                              '' !== s && a.setProp('transform', i, s);
                          } else
                            (i.style.padding = 0),
                              a.setProp(
                                'transform',
                                i,
                                r.originalTransform || '',
                              );
                      }
                    }
                  },
                }),
                u
              );
            })();
          e.renderTextLayer = o;
        }),
        (function (e, t) {
          t(
            (e.pdfjsDisplayWebGL = {}),
            e.pdfjsSharedUtil,
            e.pdfjsDisplayDOMUtils,
          );
        })(this, function (e, t, n) {
          var i = t.shadow,
            r = n.getDefaultSetting,
            a = (function () {
              function e(e, t, n) {
                var i = e.createShader(n);
                e.shaderSource(i, t), e.compileShader(i);
                var r = e.getShaderParameter(i, e.COMPILE_STATUS);
                if (!r) {
                  var a = e.getShaderInfoLog(i);
                  throw new Error('Error during shader compilation: ' + a);
                }
                return i;
              }
              function t(t, n) {
                return e(t, n, t.VERTEX_SHADER);
              }
              function n(t, n) {
                return e(t, n, t.FRAGMENT_SHADER);
              }
              function a(e, t) {
                for (var n = e.createProgram(), i = 0, r = t.length; i < r; ++i)
                  e.attachShader(n, t[i]);
                e.linkProgram(n);
                var a = e.getProgramParameter(n, e.LINK_STATUS);
                if (!a) {
                  var s = e.getProgramInfoLog(n);
                  throw new Error('Error during program linking: ' + s);
                }
                return n;
              }
              function s(e, t, n) {
                e.activeTexture(n);
                var i = e.createTexture();
                return (
                  e.bindTexture(e.TEXTURE_2D, i),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_S,
                    e.CLAMP_TO_EDGE,
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_WRAP_T,
                    e.CLAMP_TO_EDGE,
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MIN_FILTER,
                    e.NEAREST,
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MAG_FILTER,
                    e.NEAREST,
                  ),
                  e.texImage2D(
                    e.TEXTURE_2D,
                    0,
                    e.RGBA,
                    e.RGBA,
                    e.UNSIGNED_BYTE,
                    t,
                  ),
                  i
                );
              }
              function o() {
                f ||
                  ((p = document.createElement('canvas')),
                  (f = p.getContext('webgl', { premultipliedalpha: !1 })));
              }
              function c() {
                var e, i;
                o(), (e = p), (p = null), (i = f), (f = null);
                var r = t(i, g),
                  s = n(i, m),
                  c = a(i, [r, s]);
                i.useProgram(c);
                var l = {};
                (l.gl = i),
                  (l.canvas = e),
                  (l.resolutionLocation = i.getUniformLocation(
                    c,
                    'u_resolution',
                  )),
                  (l.positionLocation = i.getAttribLocation(c, 'a_position')),
                  (l.backdropLocation = i.getUniformLocation(c, 'u_backdrop')),
                  (l.subtypeLocation = i.getUniformLocation(c, 'u_subtype'));
                var h = i.getAttribLocation(c, 'a_texCoord'),
                  u = i.getUniformLocation(c, 'u_image'),
                  d = i.getUniformLocation(c, 'u_mask'),
                  b = i.createBuffer();
                i.bindBuffer(i.ARRAY_BUFFER, b),
                  i.bufferData(
                    i.ARRAY_BUFFER,
                    new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
                    i.STATIC_DRAW,
                  ),
                  i.enableVertexAttribArray(h),
                  i.vertexAttribPointer(h, 2, i.FLOAT, !1, 0, 0),
                  i.uniform1i(u, 0),
                  i.uniform1i(d, 1),
                  (v = l);
              }
              function l(e, t, n) {
                var i = e.width,
                  r = e.height;
                v || c();
                var a = v,
                  o = a.canvas,
                  l = a.gl;
                (o.width = i),
                  (o.height = r),
                  l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight),
                  l.uniform2f(a.resolutionLocation, i, r),
                  n.backdrop
                    ? l.uniform4f(
                        a.resolutionLocation,
                        n.backdrop[0],
                        n.backdrop[1],
                        n.backdrop[2],
                        1,
                      )
                    : l.uniform4f(a.resolutionLocation, 0, 0, 0, 0),
                  l.uniform1i(
                    a.subtypeLocation,
                    'Luminosity' === n.subtype ? 1 : 0,
                  );
                var h = s(l, e, l.TEXTURE0),
                  u = s(l, t, l.TEXTURE1),
                  d = l.createBuffer();
                return (
                  l.bindBuffer(l.ARRAY_BUFFER, d),
                  l.bufferData(
                    l.ARRAY_BUFFER,
                    new Float32Array([0, 0, i, 0, 0, r, 0, r, i, 0, i, r]),
                    l.STATIC_DRAW,
                  ),
                  l.enableVertexAttribArray(a.positionLocation),
                  l.vertexAttribPointer(
                    a.positionLocation,
                    2,
                    l.FLOAT,
                    !1,
                    0,
                    0,
                  ),
                  l.clearColor(0, 0, 0, 0),
                  l.enable(l.BLEND),
                  l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA),
                  l.clear(l.COLOR_BUFFER_BIT),
                  l.drawArrays(l.TRIANGLES, 0, 6),
                  l.flush(),
                  l.deleteTexture(h),
                  l.deleteTexture(u),
                  l.deleteBuffer(d),
                  o
                );
              }
              function h() {
                var e, i;
                o(), (e = p), (p = null), (i = f), (f = null);
                var r = t(i, b),
                  s = n(i, w),
                  c = a(i, [r, s]);
                i.useProgram(c);
                var l = {};
                (l.gl = i),
                  (l.canvas = e),
                  (l.resolutionLocation = i.getUniformLocation(
                    c,
                    'u_resolution',
                  )),
                  (l.scaleLocation = i.getUniformLocation(c, 'u_scale')),
                  (l.offsetLocation = i.getUniformLocation(c, 'u_offset')),
                  (l.positionLocation = i.getAttribLocation(c, 'a_position')),
                  (l.colorLocation = i.getAttribLocation(c, 'a_color')),
                  (y = l);
              }
              function u(e, t, n, i, r) {
                y || h();
                var a = y,
                  s = a.canvas,
                  o = a.gl;
                (s.width = e),
                  (s.height = t),
                  o.viewport(0, 0, o.drawingBufferWidth, o.drawingBufferHeight),
                  o.uniform2f(a.resolutionLocation, e, t);
                var c,
                  l,
                  u,
                  d = 0;
                for (c = 0, l = i.length; c < l; c++)
                  switch (i[c].type) {
                    case 'lattice':
                      (u = (i[c].coords.length / i[c].verticesPerRow) | 0),
                        (d += (u - 1) * (i[c].verticesPerRow - 1) * 6);
                      break;
                    case 'triangles':
                      d += i[c].coords.length;
                  }
                var f = new Float32Array(2 * d),
                  p = new Uint8Array(3 * d),
                  g = r.coords,
                  m = r.colors,
                  v = 0,
                  b = 0;
                for (c = 0, l = i.length; c < l; c++) {
                  var w = i[c],
                    A = w.coords,
                    S = w.colors;
                  switch (w.type) {
                    case 'lattice':
                      var P = w.verticesPerRow;
                      u = (A.length / P) | 0;
                      for (var x = 1; x < u; x++)
                        for (var C = x * P + 1, _ = 1; _ < P; _++, C++)
                          (f[v] = g[A[C - P - 1]]),
                            (f[v + 1] = g[A[C - P - 1] + 1]),
                            (f[v + 2] = g[A[C - P]]),
                            (f[v + 3] = g[A[C - P] + 1]),
                            (f[v + 4] = g[A[C - 1]]),
                            (f[v + 5] = g[A[C - 1] + 1]),
                            (p[b] = m[S[C - P - 1]]),
                            (p[b + 1] = m[S[C - P - 1] + 1]),
                            (p[b + 2] = m[S[C - P - 1] + 2]),
                            (p[b + 3] = m[S[C - P]]),
                            (p[b + 4] = m[S[C - P] + 1]),
                            (p[b + 5] = m[S[C - P] + 2]),
                            (p[b + 6] = m[S[C - 1]]),
                            (p[b + 7] = m[S[C - 1] + 1]),
                            (p[b + 8] = m[S[C - 1] + 2]),
                            (f[v + 6] = f[v + 2]),
                            (f[v + 7] = f[v + 3]),
                            (f[v + 8] = f[v + 4]),
                            (f[v + 9] = f[v + 5]),
                            (f[v + 10] = g[A[C]]),
                            (f[v + 11] = g[A[C] + 1]),
                            (p[b + 9] = p[b + 3]),
                            (p[b + 10] = p[b + 4]),
                            (p[b + 11] = p[b + 5]),
                            (p[b + 12] = p[b + 6]),
                            (p[b + 13] = p[b + 7]),
                            (p[b + 14] = p[b + 8]),
                            (p[b + 15] = m[S[C]]),
                            (p[b + 16] = m[S[C] + 1]),
                            (p[b + 17] = m[S[C] + 2]),
                            (v += 12),
                            (b += 18);
                      break;
                    case 'triangles':
                      for (var L = 0, T = A.length; L < T; L++)
                        (f[v] = g[A[L]]),
                          (f[v + 1] = g[A[L] + 1]),
                          (p[b] = m[S[L]]),
                          (p[b + 1] = m[S[L] + 1]),
                          (p[b + 2] = m[S[L] + 2]),
                          (v += 2),
                          (b += 3);
                  }
                }
                n
                  ? o.clearColor(n[0] / 255, n[1] / 255, n[2] / 255, 1)
                  : o.clearColor(0, 0, 0, 0),
                  o.clear(o.COLOR_BUFFER_BIT);
                var k = o.createBuffer();
                o.bindBuffer(o.ARRAY_BUFFER, k),
                  o.bufferData(o.ARRAY_BUFFER, f, o.STATIC_DRAW),
                  o.enableVertexAttribArray(a.positionLocation),
                  o.vertexAttribPointer(
                    a.positionLocation,
                    2,
                    o.FLOAT,
                    !1,
                    0,
                    0,
                  );
                var E = o.createBuffer();
                return (
                  o.bindBuffer(o.ARRAY_BUFFER, E),
                  o.bufferData(o.ARRAY_BUFFER, p, o.STATIC_DRAW),
                  o.enableVertexAttribArray(a.colorLocation),
                  o.vertexAttribPointer(
                    a.colorLocation,
                    3,
                    o.UNSIGNED_BYTE,
                    !1,
                    0,
                    0,
                  ),
                  o.uniform2f(a.scaleLocation, r.scaleX, r.scaleY),
                  o.uniform2f(a.offsetLocation, r.offsetX, r.offsetY),
                  o.drawArrays(o.TRIANGLES, 0, d),
                  o.flush(),
                  o.deleteBuffer(k),
                  o.deleteBuffer(E),
                  s
                );
              }
              function d() {
                v && v.canvas && ((v.canvas.width = 0), (v.canvas.height = 0)),
                  y &&
                    y.canvas &&
                    ((y.canvas.width = 0), (y.canvas.height = 0)),
                  (v = null),
                  (y = null);
              }
              var f,
                p,
                g =
                  '  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ',
                m =
                  '  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ',
                v = null,
                b =
                  '  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ',
                w =
                  '  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ',
                y = null;
              return {
                get isEnabled() {
                  if (r('disableWebGL')) return !1;
                  var e = !1;
                  try {
                    o(), (e = !!f);
                  } catch (e) {}
                  return i(this, 'isEnabled', e);
                },
                composeSMask: l,
                drawFigures: u,
                clear: d,
              };
            })();
          e.WebGLUtils = a;
        }),
        (function (e, t) {
          t(
            (e.pdfjsDisplayPatternHelper = {}),
            e.pdfjsSharedUtil,
            e.pdfjsDisplayWebGL,
          );
        })(this, function (e, t, n) {
          function i(e) {
            var t = l[e[0]];
            return t || o('Unknown IR type: ' + e[0]), t.fromIR(e);
          }
          var r = t.Util,
            a = t.info,
            s = t.isArray,
            o = t.error,
            c = n.WebGLUtils,
            l = {};
          l.RadialAxial = {
            fromIR: function (e) {
              var t = e[1],
                n = e[2],
                i = e[3],
                r = e[4],
                a = e[5],
                s = e[6];
              return {
                type: 'Pattern',
                getPattern: function (e) {
                  var o;
                  'axial' === t
                    ? (o = e.createLinearGradient(i[0], i[1], r[0], r[1]))
                    : 'radial' === t &&
                      (o = e.createRadialGradient(
                        i[0],
                        i[1],
                        a,
                        r[0],
                        r[1],
                        s,
                      ));
                  for (var c = 0, l = n.length; c < l; ++c) {
                    var h = n[c];
                    o.addColorStop(h[0], h[1]);
                  }
                  return o;
                },
              };
            },
          };
          var h = (function () {
            function e(e, t, n, i, r, a, s, o) {
              var c,
                l = t.coords,
                h = t.colors,
                u = e.data,
                d = 4 * e.width;
              l[n + 1] > l[i + 1] &&
                ((c = n), (n = i), (i = c), (c = a), (a = s), (s = c)),
                l[i + 1] > l[r + 1] &&
                  ((c = i), (i = r), (r = c), (c = s), (s = o), (o = c)),
                l[n + 1] > l[i + 1] &&
                  ((c = n), (n = i), (i = c), (c = a), (a = s), (s = c));
              var f = (l[n] + t.offsetX) * t.scaleX,
                p = (l[n + 1] + t.offsetY) * t.scaleY,
                g = (l[i] + t.offsetX) * t.scaleX,
                m = (l[i + 1] + t.offsetY) * t.scaleY,
                v = (l[r] + t.offsetX) * t.scaleX,
                b = (l[r + 1] + t.offsetY) * t.scaleY;
              if (!(p >= b))
                for (
                  var w,
                    y,
                    A,
                    S,
                    P,
                    x,
                    C,
                    _,
                    L,
                    T = h[a],
                    k = h[a + 1],
                    E = h[a + 2],
                    I = h[s],
                    D = h[s + 1],
                    F = h[s + 2],
                    R = h[o],
                    N = h[o + 1],
                    O = h[o + 2],
                    M = Math.round(p),
                    B = Math.round(b),
                    j = M;
                  j <= B;
                  j++
                ) {
                  j < m
                    ? ((L = j < p ? 0 : p === m ? 1 : (p - j) / (p - m)),
                      (w = f - (f - g) * L),
                      (y = T - (T - I) * L),
                      (A = k - (k - D) * L),
                      (S = E - (E - F) * L))
                    : ((L = j > b ? 1 : m === b ? 0 : (m - j) / (m - b)),
                      (w = g - (g - v) * L),
                      (y = I - (I - R) * L),
                      (A = D - (D - N) * L),
                      (S = F - (F - O) * L)),
                    (L = j < p ? 0 : j > b ? 1 : (p - j) / (p - b)),
                    (P = f - (f - v) * L),
                    (x = T - (T - R) * L),
                    (C = k - (k - N) * L),
                    (_ = E - (E - O) * L);
                  for (
                    var U = Math.round(Math.min(w, P)),
                      V = Math.round(Math.max(w, P)),
                      W = d * j + 4 * U,
                      H = U;
                    H <= V;
                    H++
                  )
                    (L = (w - H) / (w - P)),
                      (L = L < 0 ? 0 : L > 1 ? 1 : L),
                      (u[W++] = (y - (y - x) * L) | 0),
                      (u[W++] = (A - (A - C) * L) | 0),
                      (u[W++] = (S - (S - _) * L) | 0),
                      (u[W++] = 255);
                }
            }
            function t(t, n, i) {
              var r,
                a,
                s = n.coords,
                c = n.colors;
              switch (n.type) {
                case 'lattice':
                  var l = n.verticesPerRow,
                    h = Math.floor(s.length / l) - 1,
                    u = l - 1;
                  for (r = 0; r < h; r++)
                    for (var d = r * l, f = 0; f < u; f++, d++)
                      e(
                        t,
                        i,
                        s[d],
                        s[d + 1],
                        s[d + l],
                        c[d],
                        c[d + 1],
                        c[d + l],
                      ),
                        e(
                          t,
                          i,
                          s[d + l + 1],
                          s[d + 1],
                          s[d + l],
                          c[d + l + 1],
                          c[d + 1],
                          c[d + l],
                        );
                  break;
                case 'triangles':
                  for (r = 0, a = s.length; r < a; r += 3)
                    e(t, i, s[r], s[r + 1], s[r + 2], c[r], c[r + 1], c[r + 2]);
                  break;
                default:
                  o('illigal figure');
              }
            }
            function n(e, n, i, r, a, s, o) {
              var l,
                h,
                u,
                d,
                f = 1.1,
                p = 3e3,
                g = 2,
                m = Math.floor(e[0]),
                v = Math.floor(e[1]),
                b = Math.ceil(e[2]) - m,
                w = Math.ceil(e[3]) - v,
                y = Math.min(Math.ceil(Math.abs(b * n[0] * f)), p),
                A = Math.min(Math.ceil(Math.abs(w * n[1] * f)), p),
                S = b / y,
                P = w / A,
                x = {
                  coords: i,
                  colors: r,
                  offsetX: -m,
                  offsetY: -v,
                  scaleX: 1 / S,
                  scaleY: 1 / P,
                },
                C = y + 2 * g,
                _ = A + 2 * g;
              if (c.isEnabled)
                (l = c.drawFigures(y, A, s, a, x)),
                  (h = o.getCanvas('mesh', C, _, !1)),
                  h.context.drawImage(l, g, g),
                  (l = h.canvas);
              else {
                h = o.getCanvas('mesh', C, _, !1);
                var L = h.context,
                  T = L.createImageData(y, A);
                if (s) {
                  var k = T.data;
                  for (u = 0, d = k.length; u < d; u += 4)
                    (k[u] = s[0]),
                      (k[u + 1] = s[1]),
                      (k[u + 2] = s[2]),
                      (k[u + 3] = 255);
                }
                for (u = 0; u < a.length; u++) t(T, a[u], x);
                L.putImageData(T, g, g), (l = h.canvas);
              }
              return {
                canvas: l,
                offsetX: m - g * S,
                offsetY: v - g * P,
                scaleX: S,
                scaleY: P,
              };
            }
            return n;
          })();
          (l.Mesh = {
            fromIR: function (e) {
              var t = e[2],
                n = e[3],
                i = e[4],
                a = e[5],
                s = e[6],
                o = e[8];
              return {
                type: 'Pattern',
                getPattern: function (e, c, l) {
                  var u;
                  if (l)
                    u = r.singularValueDecompose2dScale(e.mozCurrentTransform);
                  else if (
                    ((u = r.singularValueDecompose2dScale(c.baseTransform)), s)
                  ) {
                    var d = r.singularValueDecompose2dScale(s);
                    u = [u[0] * d[0], u[1] * d[1]];
                  }
                  var f = h(a, u, t, n, i, l ? null : o, c.cachedCanvases);
                  return (
                    l ||
                      (e.setTransform.apply(e, c.baseTransform),
                      s && e.transform.apply(e, s)),
                    e.translate(f.offsetX, f.offsetY),
                    e.scale(f.scaleX, f.scaleY),
                    e.createPattern(f.canvas, 'no-repeat')
                  );
                },
              };
            },
          }),
            (l.Dummy = {
              fromIR: function () {
                return {
                  type: 'Pattern',
                  getPattern: function () {
                    return 'hotpink';
                  },
                };
              },
            });
          var u = (function () {
            function e(e, t, n, i, r) {
              (this.operatorList = e[2]),
                (this.matrix = e[3] || [1, 0, 0, 1, 0, 0]),
                (this.bbox = e[4]),
                (this.xstep = e[5]),
                (this.ystep = e[6]),
                (this.paintType = e[7]),
                (this.tilingType = e[8]),
                (this.color = t),
                (this.canvasGraphicsFactory = i),
                (this.baseTransform = r),
                (this.type = 'Pattern'),
                (this.ctx = n);
            }
            var t = { COLORED: 1, UNCOLORED: 2 },
              n = 3e3;
            return (
              (e.prototype = {
                createPatternCanvas: function (e) {
                  var t = this.operatorList,
                    i = this.bbox,
                    s = this.xstep,
                    o = this.ystep,
                    c = this.paintType,
                    l = this.tilingType,
                    h = this.color,
                    u = this.canvasGraphicsFactory;
                  a('TilingType: ' + l);
                  var d = i[0],
                    f = i[1],
                    p = i[2],
                    g = i[3],
                    m = [d, f],
                    v = [d + s, f + o],
                    b = v[0] - m[0],
                    w = v[1] - m[1],
                    y = r.singularValueDecompose2dScale(this.matrix),
                    A = r.singularValueDecompose2dScale(this.baseTransform),
                    S = [y[0] * A[0], y[1] * A[1]];
                  (b = Math.min(Math.ceil(Math.abs(b * S[0])), n)),
                    (w = Math.min(Math.ceil(Math.abs(w * S[1])), n));
                  var P = e.cachedCanvases.getCanvas('pattern', b, w, !0),
                    x = P.context,
                    C = u.createCanvasGraphics(x);
                  (C.groupLevel = e.groupLevel),
                    this.setFillAndStrokeStyleToContext(x, c, h),
                    this.setScale(b, w, s, o),
                    this.transformToScale(C);
                  var _ = [1, 0, 0, 1, -m[0], -m[1]];
                  return (
                    C.transform.apply(C, _),
                    this.clipBbox(C, i, d, f, p, g),
                    C.executeOperatorList(t),
                    P.canvas
                  );
                },
                setScale: function (e, t, n, i) {
                  this.scale = [e / n, t / i];
                },
                transformToScale: function (e) {
                  var t = this.scale,
                    n = [t[0], 0, 0, t[1], 0, 0];
                  e.transform.apply(e, n);
                },
                scaleToContext: function () {
                  var e = this.scale;
                  this.ctx.scale(1 / e[0], 1 / e[1]);
                },
                clipBbox: function (e, t, n, i, r, a) {
                  if (t && s(t) && 4 === t.length) {
                    var o = r - n,
                      c = a - i;
                    e.ctx.rect(n, i, o, c), e.clip(), e.endPath();
                  }
                },
                setFillAndStrokeStyleToContext: function (e, n, i) {
                  switch (n) {
                    case t.COLORED:
                      var a = this.ctx;
                      (e.fillStyle = a.fillStyle),
                        (e.strokeStyle = a.strokeStyle);
                      break;
                    case t.UNCOLORED:
                      var s = r.makeCssRgb(i[0], i[1], i[2]);
                      (e.fillStyle = s), (e.strokeStyle = s);
                      break;
                    default:
                      o('Unsupported paint type: ' + n);
                  }
                },
                getPattern: function (e, t) {
                  var n = this.createPatternCanvas(t);
                  return (
                    (e = this.ctx),
                    e.setTransform.apply(e, this.baseTransform),
                    e.transform.apply(e, this.matrix),
                    this.scaleToContext(),
                    e.createPattern(n, 'repeat')
                  );
                },
              }),
              e
            );
          })();
          (e.getShadingPatternFromIR = i), (e.TilingPattern = u);
        }),
        (function (e, t) {
          t(
            (e.pdfjsDisplayCanvas = {}),
            e.pdfjsSharedUtil,
            e.pdfjsDisplayDOMUtils,
            e.pdfjsDisplayPatternHelper,
            e.pdfjsDisplayWebGL,
          );
        })(this, function (e, t, n, i, r) {
          function a(e, t) {
            var n = document.createElement('canvas');
            return (n.width = e), (n.height = t), n;
          }
          function s(e) {
            e.mozCurrentTransform ||
              ((e._originalSave = e.save),
              (e._originalRestore = e.restore),
              (e._originalRotate = e.rotate),
              (e._originalScale = e.scale),
              (e._originalTranslate = e.translate),
              (e._originalTransform = e.transform),
              (e._originalSetTransform = e.setTransform),
              (e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0]),
              (e._transformStack = []),
              Object.defineProperty(e, 'mozCurrentTransform', {
                get: function () {
                  return this._transformMatrix;
                },
              }),
              Object.defineProperty(e, 'mozCurrentTransformInverse', {
                get: function () {
                  var e = this._transformMatrix,
                    t = e[0],
                    n = e[1],
                    i = e[2],
                    r = e[3],
                    a = e[4],
                    s = e[5],
                    o = t * r - n * i,
                    c = n * i - t * r;
                  return [
                    r / o,
                    n / c,
                    i / c,
                    t / o,
                    (r * a - i * s) / c,
                    (n * a - t * s) / o,
                  ];
                },
              }),
              (e.save = function () {
                var e = this._transformMatrix;
                this._transformStack.push(e),
                  (this._transformMatrix = e.slice(0, 6)),
                  this._originalSave();
              }),
              (e.restore = function () {
                var e = this._transformStack.pop();
                e && ((this._transformMatrix = e), this._originalRestore());
              }),
              (e.translate = function (e, t) {
                var n = this._transformMatrix;
                (n[4] = n[0] * e + n[2] * t + n[4]),
                  (n[5] = n[1] * e + n[3] * t + n[5]),
                  this._originalTranslate(e, t);
              }),
              (e.scale = function (e, t) {
                var n = this._transformMatrix;
                (n[0] = n[0] * e),
                  (n[1] = n[1] * e),
                  (n[2] = n[2] * t),
                  (n[3] = n[3] * t),
                  this._originalScale(e, t);
              }),
              (e.transform = function (t, n, i, r, a, s) {
                var o = this._transformMatrix;
                (this._transformMatrix = [
                  o[0] * t + o[2] * n,
                  o[1] * t + o[3] * n,
                  o[0] * i + o[2] * r,
                  o[1] * i + o[3] * r,
                  o[0] * a + o[2] * s + o[4],
                  o[1] * a + o[3] * s + o[5],
                ]),
                  e._originalTransform(t, n, i, r, a, s);
              }),
              (e.setTransform = function (t, n, i, r, a, s) {
                (this._transformMatrix = [t, n, i, r, a, s]),
                  e._originalSetTransform(t, n, i, r, a, s);
              }),
              (e.rotate = function (e) {
                var t = Math.cos(e),
                  n = Math.sin(e),
                  i = this._transformMatrix;
                (this._transformMatrix = [
                  i[0] * t + i[2] * n,
                  i[1] * t + i[3] * n,
                  i[0] * -n + i[2] * t,
                  i[1] * -n + i[3] * t,
                  i[4],
                  i[5],
                ]),
                  this._originalRotate(e);
              }));
          }
          function o(e) {
            var t,
              n,
              i,
              r,
              a = 1e3,
              s = e.width,
              o = e.height,
              c = s + 1,
              l = new Uint8Array(c * (o + 1)),
              h = new Uint8Array([
                0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
              ]),
              u = (s + 7) & -8,
              d = e.data,
              f = new Uint8Array(u * o),
              p = 0;
            for (t = 0, r = d.length; t < r; t++)
              for (var g = 128, m = d[t]; g > 0; )
                (f[p++] = m & g ? 0 : 255), (g >>= 1);
            var v = 0;
            for (p = 0, 0 !== f[p] && ((l[0] = 1), ++v), n = 1; n < s; n++)
              f[p] !== f[p + 1] && ((l[n] = f[p] ? 2 : 1), ++v), p++;
            for (0 !== f[p] && ((l[n] = 2), ++v), t = 1; t < o; t++) {
              (p = t * u),
                (i = t * c),
                f[p - u] !== f[p] && ((l[i] = f[p] ? 1 : 8), ++v);
              var b = (f[p] ? 4 : 0) + (f[p - u] ? 8 : 0);
              for (n = 1; n < s; n++)
                (b = (b >> 2) + (f[p + 1] ? 4 : 0) + (f[p - u + 1] ? 8 : 0)),
                  h[b] && ((l[i + n] = h[b]), ++v),
                  p++;
              if (
                (f[p - u] !== f[p] && ((l[i + n] = f[p] ? 2 : 4), ++v), v > a)
              )
                return null;
            }
            for (
              p = u * (o - 1),
                i = t * c,
                0 !== f[p] && ((l[i] = 8), ++v),
                n = 1;
              n < s;
              n++
            )
              f[p] !== f[p + 1] && ((l[i + n] = f[p] ? 4 : 8), ++v), p++;
            if ((0 !== f[p] && ((l[i + n] = 4), ++v), v > a)) return null;
            var w = new Int32Array([0, c, -1, 0, -c, 0, 0, 0, 1]),
              y = [];
            for (t = 0; v && t <= o; t++) {
              for (var A = t * c, S = A + s; A < S && !l[A]; ) A++;
              if (A !== S) {
                var P,
                  x = [A % c, t],
                  C = l[A],
                  _ = A;
                do {
                  var L = w[C];
                  do A += L;
                  while (!l[A]);
                  (P = l[A]),
                    5 !== P && 10 !== P
                      ? ((C = P), (l[A] = 0))
                      : ((C = P & ((51 * C) >> 4)),
                        (l[A] &= (C >> 2) | (C << 2))),
                    x.push(A % c),
                    x.push((A / c) | 0),
                    --v;
                } while (_ !== A);
                y.push(x), --t;
              }
            }
            var T = function (e) {
              e.save(),
                e.scale(1 / s, -1 / o),
                e.translate(0, -o),
                e.beginPath();
              for (var t = 0, n = y.length; t < n; t++) {
                var i = y[t];
                e.moveTo(i[0], i[1]);
                for (var r = 2, a = i.length; r < a; r += 2)
                  e.lineTo(i[r], i[r + 1]);
              }
              e.fill(), e.beginPath(), e.restore();
            };
            return T;
          }
          var c = t.FONT_IDENTITY_MATRIX,
            l = t.IDENTITY_MATRIX,
            h = t.ImageKind,
            u = t.OPS,
            d = t.TextRenderingMode,
            f = t.Uint32ArrayView,
            p = t.Util,
            g = t.assert,
            m = t.info,
            v = t.isNum,
            b = t.isArray,
            w = t.isLittleEndian,
            y = t.error,
            A = t.shadow,
            S = t.warn,
            P = i.TilingPattern,
            x = i.getShadingPatternFromIR,
            C = r.WebGLUtils,
            _ = n.hasCanvasTypedArrays,
            L = 16,
            T = 100,
            k = 4096,
            E = 0.65,
            I = !0,
            D = 1e3,
            F = 16,
            R = {
              get value() {
                return A(R, 'value', _());
              },
            },
            N = {
              get value() {
                return A(N, 'value', w());
              },
            },
            O = (function () {
              function e() {
                this.cache = Object.create(null);
              }
              return (
                (e.prototype = {
                  getCanvas: function (e, t, n, i) {
                    var r;
                    if (void 0 !== this.cache[e])
                      (r = this.cache[e]),
                        (r.canvas.width = t),
                        (r.canvas.height = n),
                        r.context.setTransform(1, 0, 0, 1, 0, 0);
                    else {
                      var o = a(t, n),
                        c = o.getContext('2d');
                      i && s(c),
                        (this.cache[e] = r = { canvas: o, context: c });
                    }
                    return r;
                  },
                  clear: function () {
                    for (var e in this.cache) {
                      var t = this.cache[e];
                      (t.canvas.width = 0),
                        (t.canvas.height = 0),
                        delete this.cache[e];
                    }
                  },
                }),
                e
              );
            })(),
            M = (function () {
              function e(e) {
                (this.alphaIsShape = !1),
                  (this.fontSize = 0),
                  (this.fontSizeScale = 1),
                  (this.textMatrix = l),
                  (this.textMatrixScale = 1),
                  (this.fontMatrix = c),
                  (this.leading = 0),
                  (this.x = 0),
                  (this.y = 0),
                  (this.lineX = 0),
                  (this.lineY = 0),
                  (this.charSpacing = 0),
                  (this.wordSpacing = 0),
                  (this.textHScale = 1),
                  (this.textRenderingMode = d.FILL),
                  (this.textRise = 0),
                  (this.fillColor = '#000000'),
                  (this.strokeColor = '#000000'),
                  (this.patternFill = !1),
                  (this.fillAlpha = 1),
                  (this.strokeAlpha = 1),
                  (this.lineWidth = 1),
                  (this.activeSMask = null),
                  (this.resumeSMaskCtx = null),
                  (this.old = e);
              }
              return (
                (e.prototype = {
                  clone: function () {
                    return Object.create(this);
                  },
                  setCurrentPoint: function (e, t) {
                    (this.x = e), (this.y = t);
                  },
                }),
                e
              );
            })(),
            B = (function () {
              function e(e, t, n, i) {
                (this.ctx = e),
                  (this.current = new M()),
                  (this.stateStack = []),
                  (this.pendingClip = null),
                  (this.pendingEOFill = !1),
                  (this.res = null),
                  (this.xobjs = null),
                  (this.commonObjs = t),
                  (this.objs = n),
                  (this.imageLayer = i),
                  (this.groupStack = []),
                  (this.processingType3 = null),
                  (this.baseTransform = null),
                  (this.baseTransformStack = []),
                  (this.groupLevel = 0),
                  (this.smaskStack = []),
                  (this.smaskCounter = 0),
                  (this.tempSMask = null),
                  (this.cachedCanvases = new O()),
                  e && s(e),
                  (this.cachedGetSinglePixelWidth = null);
              }
              function t(e, t) {
                if ('undefined' != typeof ImageData && t instanceof ImageData)
                  return void e.putImageData(t, 0, 0);
                var n,
                  i,
                  r,
                  a,
                  s,
                  o = t.height,
                  c = t.width,
                  l = o % F,
                  u = (o - l) / F,
                  d = 0 === l ? u : u + 1,
                  p = e.createImageData(c, F),
                  g = 0,
                  m = t.data,
                  v = p.data;
                if (t.kind === h.GRAYSCALE_1BPP) {
                  var b = m.byteLength,
                    w = R.value ? new Uint32Array(v.buffer) : new f(v),
                    A = w.length,
                    S = (c + 7) >> 3,
                    P = 4294967295,
                    x = N.value || !R.value ? 4278190080 : 255;
                  for (i = 0; i < d; i++) {
                    for (a = i < u ? F : l, n = 0, r = 0; r < a; r++) {
                      for (
                        var C = b - g,
                          _ = 0,
                          L = C > S ? c : 8 * C - 7,
                          T = L & -8,
                          k = 0,
                          E = 0;
                        _ < T;
                        _ += 8
                      )
                        (E = m[g++]),
                          (w[n++] = 128 & E ? P : x),
                          (w[n++] = 64 & E ? P : x),
                          (w[n++] = 32 & E ? P : x),
                          (w[n++] = 16 & E ? P : x),
                          (w[n++] = 8 & E ? P : x),
                          (w[n++] = 4 & E ? P : x),
                          (w[n++] = 2 & E ? P : x),
                          (w[n++] = 1 & E ? P : x);
                      for (; _ < L; _++)
                        0 === k && ((E = m[g++]), (k = 128)),
                          (w[n++] = E & k ? P : x),
                          (k >>= 1);
                    }
                    for (; n < A; ) w[n++] = 0;
                    e.putImageData(p, 0, i * F);
                  }
                } else if (t.kind === h.RGBA_32BPP) {
                  for (r = 0, s = c * F * 4, i = 0; i < u; i++)
                    v.set(m.subarray(g, g + s)),
                      (g += s),
                      e.putImageData(p, 0, r),
                      (r += F);
                  i < d &&
                    ((s = c * l * 4),
                    v.set(m.subarray(g, g + s)),
                    e.putImageData(p, 0, r));
                } else if (t.kind === h.RGB_24BPP)
                  for (a = F, s = c * a, i = 0; i < d; i++) {
                    for (i >= u && ((a = l), (s = c * a)), n = 0, r = s; r--; )
                      (v[n++] = m[g++]),
                        (v[n++] = m[g++]),
                        (v[n++] = m[g++]),
                        (v[n++] = 255);
                    e.putImageData(p, 0, i * F);
                  }
                else y('bad image kind: ' + t.kind);
              }
              function n(e, t) {
                for (
                  var n = t.height,
                    i = t.width,
                    r = n % F,
                    a = (n - r) / F,
                    s = 0 === r ? a : a + 1,
                    o = e.createImageData(i, F),
                    c = 0,
                    l = t.data,
                    h = o.data,
                    u = 0;
                  u < s;
                  u++
                ) {
                  for (var d = u < a ? F : r, f = 3, p = 0; p < d; p++)
                    for (var g = 0, m = 0; m < i; m++) {
                      if (!g) {
                        var v = l[c++];
                        g = 128;
                      }
                      (h[f] = v & g ? 0 : 255), (f += 4), (g >>= 1);
                    }
                  e.putImageData(o, 0, u * F);
                }
              }
              function i(e, t) {
                for (
                  var n = [
                      'strokeStyle',
                      'fillStyle',
                      'fillRule',
                      'globalAlpha',
                      'lineWidth',
                      'lineCap',
                      'lineJoin',
                      'miterLimit',
                      'globalCompositeOperation',
                      'font',
                    ],
                    i = 0,
                    r = n.length;
                  i < r;
                  i++
                ) {
                  var a = n[i];
                  void 0 !== e[a] && (t[a] = e[a]);
                }
                void 0 !== e.setLineDash &&
                  (t.setLineDash(e.getLineDash()),
                  (t.lineDashOffset = e.lineDashOffset));
              }
              function r(e, t, n, i) {
                for (var r = e.length, a = 3; a < r; a += 4) {
                  var s = e[a];
                  if (0 === s) (e[a - 3] = t), (e[a - 2] = n), (e[a - 1] = i);
                  else if (s < 255) {
                    var o = 255 - s;
                    (e[a - 3] = (e[a - 3] * s + t * o) >> 8),
                      (e[a - 2] = (e[a - 2] * s + n * o) >> 8),
                      (e[a - 1] = (e[a - 1] * s + i * o) >> 8);
                  }
                }
              }
              function a(e, t, n) {
                for (var i = e.length, r = 1 / 255, a = 3; a < i; a += 4) {
                  var s = n ? n[e[a]] : e[a];
                  t[a] = (t[a] * s * r) | 0;
                }
              }
              function w(e, t, n) {
                for (var i = e.length, r = 3; r < i; r += 4) {
                  var a = 77 * e[r - 3] + 152 * e[r - 2] + 28 * e[r - 1];
                  t[r] = n ? (t[r] * n[a >> 8]) >> 8 : (t[r] * a) >> 16;
                }
              }
              function _(e, t, n, i, s, o, c) {
                var l,
                  h = !!o,
                  u = h ? o[0] : 0,
                  d = h ? o[1] : 0,
                  f = h ? o[2] : 0;
                l = 'Luminosity' === s ? w : a;
                for (
                  var p = 1048576, g = Math.min(i, Math.ceil(p / n)), m = 0;
                  m < i;
                  m += g
                ) {
                  var v = Math.min(g, i - m),
                    b = e.getImageData(0, m, n, v),
                    y = t.getImageData(0, m, n, v);
                  h && r(b.data, u, d, f),
                    l(b.data, y.data, c),
                    e.putImageData(y, 0, m);
                }
              }
              function B(e, t, n) {
                var i = t.canvas,
                  r = t.context;
                e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
                var a = t.backdrop || null;
                if (!t.transferMap && C.isEnabled) {
                  var s = C.composeSMask(n.canvas, i, {
                    subtype: t.subtype,
                    backdrop: a,
                  });
                  return (
                    e.setTransform(1, 0, 0, 1, 0, 0),
                    void e.drawImage(s, t.offsetX, t.offsetY)
                  );
                }
                _(r, n, i.width, i.height, t.subtype, a, t.transferMap),
                  e.drawImage(i, 0, 0);
              }
              var j = 15,
                U = 10,
                V = ['butt', 'round', 'square'],
                W = ['miter', 'round', 'bevel'],
                H = {},
                z = {};
              e.prototype = {
                beginDrawing: function (e, t, n) {
                  var i = this.ctx.canvas.width,
                    r = this.ctx.canvas.height;
                  if (
                    (this.ctx.save(),
                    (this.ctx.fillStyle = 'rgb(255, 255, 255)'),
                    this.ctx.fillRect(0, 0, i, r),
                    this.ctx.restore(),
                    n)
                  ) {
                    var a = this.cachedCanvases.getCanvas(
                      'transparent',
                      i,
                      r,
                      !0,
                    );
                    (this.compositeCtx = this.ctx),
                      (this.transparentCanvas = a.canvas),
                      (this.ctx = a.context),
                      this.ctx.save(),
                      this.ctx.transform.apply(
                        this.ctx,
                        this.compositeCtx.mozCurrentTransform,
                      );
                  }
                  this.ctx.save(),
                    e && this.ctx.transform.apply(this.ctx, e),
                    this.ctx.transform.apply(this.ctx, t.transform),
                    (this.baseTransform = this.ctx.mozCurrentTransform.slice()),
                    this.imageLayer && this.imageLayer.beginLayout();
                },
                executeOperatorList: function (e, t, n, i) {
                  var r = e.argsArray,
                    a = e.fnArray,
                    s = t || 0,
                    o = r.length;
                  if (o === s) return s;
                  for (
                    var c,
                      l = o - s > U && 'function' == typeof n,
                      h = l ? Date.now() + j : 0,
                      d = 0,
                      f = this.commonObjs,
                      p = this.objs;
                    ;

                  ) {
                    if (void 0 !== i && s === i.nextBreakPoint)
                      return i.breakIt(s, n), s;
                    if (((c = a[s]), c !== u.dependency))
                      this[c].apply(this, r[s]);
                    else
                      for (var g = r[s], m = 0, v = g.length; m < v; m++) {
                        var b = g[m],
                          w = 'g' === b[0] && '_' === b[1],
                          y = w ? f : p;
                        if (!y.isResolved(b)) return y.get(b, n), s;
                      }
                    if ((s++, s === o)) return s;
                    if (l && ++d > U) {
                      if (Date.now() > h) return n(), s;
                      d = 0;
                    }
                  }
                },
                endDrawing: function () {
                  null !== this.current.activeSMask && this.endSMaskGroup(),
                    this.ctx.restore(),
                    this.transparentCanvas &&
                      ((this.ctx = this.compositeCtx),
                      this.ctx.save(),
                      this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                      this.ctx.drawImage(this.transparentCanvas, 0, 0),
                      this.ctx.restore(),
                      (this.transparentCanvas = null)),
                    this.cachedCanvases.clear(),
                    C.clear(),
                    this.imageLayer && this.imageLayer.endLayout();
                },
                setLineWidth: function (e) {
                  (this.current.lineWidth = e), (this.ctx.lineWidth = e);
                },
                setLineCap: function (e) {
                  this.ctx.lineCap = V[e];
                },
                setLineJoin: function (e) {
                  this.ctx.lineJoin = W[e];
                },
                setMiterLimit: function (e) {
                  this.ctx.miterLimit = e;
                },
                setDash: function (e, t) {
                  var n = this.ctx;
                  void 0 !== n.setLineDash &&
                    (n.setLineDash(e), (n.lineDashOffset = t));
                },
                setRenderingIntent: function (e) {},
                setFlatness: function (e) {},
                setGState: function (e) {
                  for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t],
                      r = i[0],
                      a = i[1];
                    switch (r) {
                      case 'LW':
                        this.setLineWidth(a);
                        break;
                      case 'LC':
                        this.setLineCap(a);
                        break;
                      case 'LJ':
                        this.setLineJoin(a);
                        break;
                      case 'ML':
                        this.setMiterLimit(a);
                        break;
                      case 'D':
                        this.setDash(a[0], a[1]);
                        break;
                      case 'RI':
                        this.setRenderingIntent(a);
                        break;
                      case 'FL':
                        this.setFlatness(a);
                        break;
                      case 'Font':
                        this.setFont(a[0], a[1]);
                        break;
                      case 'CA':
                        this.current.strokeAlpha = i[1];
                        break;
                      case 'ca':
                        (this.current.fillAlpha = i[1]),
                          (this.ctx.globalAlpha = i[1]);
                        break;
                      case 'BM':
                        if (a && a.name && 'Normal' !== a.name) {
                          var s = a.name
                            .replace(/([A-Z])/g, function (e) {
                              return '-' + e.toLowerCase();
                            })
                            .substring(1);
                          (this.ctx.globalCompositeOperation = s),
                            this.ctx.globalCompositeOperation !== s &&
                              S(
                                'globalCompositeOperation "' +
                                  s +
                                  '" is not supported',
                              );
                        } else
                          this.ctx.globalCompositeOperation = 'source-over';
                        break;
                      case 'SMask':
                        this.current.activeSMask &&
                          (this.stateStack.length > 0 &&
                          this.stateStack[this.stateStack.length - 1]
                            .activeSMask === this.current.activeSMask
                            ? this.suspendSMaskGroup()
                            : this.endSMaskGroup()),
                          (this.current.activeSMask = a
                            ? this.tempSMask
                            : null),
                          this.current.activeSMask && this.beginSMaskGroup(),
                          (this.tempSMask = null);
                    }
                  }
                },
                beginSMaskGroup: function () {
                  var e = this.current.activeSMask,
                    t = e.canvas.width,
                    n = e.canvas.height,
                    r = 'smaskGroupAt' + this.groupLevel,
                    a = this.cachedCanvases.getCanvas(r, t, n, !0),
                    s = this.ctx,
                    o = s.mozCurrentTransform;
                  this.ctx.save();
                  var c = a.context;
                  c.scale(1 / e.scaleX, 1 / e.scaleY),
                    c.translate(-e.offsetX, -e.offsetY),
                    c.transform.apply(c, o),
                    (e.startTransformInverse = c.mozCurrentTransformInverse),
                    i(s, c),
                    (this.ctx = c),
                    this.setGState([
                      ['BM', 'Normal'],
                      ['ca', 1],
                      ['CA', 1],
                    ]),
                    this.groupStack.push(s),
                    this.groupLevel++;
                },
                suspendSMaskGroup: function () {
                  var e = this.ctx;
                  this.groupLevel--,
                    (this.ctx = this.groupStack.pop()),
                    B(this.ctx, this.current.activeSMask, e),
                    this.ctx.restore(),
                    this.ctx.save(),
                    i(e, this.ctx),
                    (this.current.resumeSMaskCtx = e);
                  var t = p.transform(
                    this.current.activeSMask.startTransformInverse,
                    e.mozCurrentTransform,
                  );
                  this.ctx.transform.apply(this.ctx, t),
                    e.save(),
                    e.setTransform(1, 0, 0, 1, 0, 0),
                    e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                    e.restore();
                },
                resumeSMaskGroup: function () {
                  var e = this.current.resumeSMaskCtx,
                    t = this.ctx;
                  (this.ctx = e), this.groupStack.push(t), this.groupLevel++;
                },
                endSMaskGroup: function () {
                  var e = this.ctx;
                  this.groupLevel--,
                    (this.ctx = this.groupStack.pop()),
                    B(this.ctx, this.current.activeSMask, e),
                    this.ctx.restore(),
                    i(e, this.ctx);
                  var t = p.transform(
                    this.current.activeSMask.startTransformInverse,
                    e.mozCurrentTransform,
                  );
                  this.ctx.transform.apply(this.ctx, t);
                },
                save: function () {
                  this.ctx.save();
                  var e = this.current;
                  this.stateStack.push(e),
                    (this.current = e.clone()),
                    (this.current.resumeSMaskCtx = null);
                },
                restore: function () {
                  this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
                    null === this.current.activeSMask ||
                      (0 !== this.stateStack.length &&
                        this.stateStack[this.stateStack.length - 1]
                          .activeSMask === this.current.activeSMask) ||
                      this.endSMaskGroup(),
                    0 !== this.stateStack.length &&
                      ((this.current = this.stateStack.pop()),
                      this.ctx.restore(),
                      (this.pendingClip = null),
                      (this.cachedGetSinglePixelWidth = null));
                },
                transform: function (e, t, n, i, r, a) {
                  this.ctx.transform(e, t, n, i, r, a),
                    (this.cachedGetSinglePixelWidth = null);
                },
                constructPath: function (e, t) {
                  for (
                    var n = this.ctx,
                      i = this.current,
                      r = i.x,
                      a = i.y,
                      s = 0,
                      o = 0,
                      c = e.length;
                    s < c;
                    s++
                  )
                    switch (0 | e[s]) {
                      case u.rectangle:
                        (r = t[o++]), (a = t[o++]);
                        var l = t[o++],
                          h = t[o++];
                        0 === l && (l = this.getSinglePixelWidth()),
                          0 === h && (h = this.getSinglePixelWidth());
                        var d = r + l,
                          f = a + h;
                        this.ctx.moveTo(r, a),
                          this.ctx.lineTo(d, a),
                          this.ctx.lineTo(d, f),
                          this.ctx.lineTo(r, f),
                          this.ctx.lineTo(r, a),
                          this.ctx.closePath();
                        break;
                      case u.moveTo:
                        (r = t[o++]), (a = t[o++]), n.moveTo(r, a);
                        break;
                      case u.lineTo:
                        (r = t[o++]), (a = t[o++]), n.lineTo(r, a);
                        break;
                      case u.curveTo:
                        (r = t[o + 4]),
                          (a = t[o + 5]),
                          n.bezierCurveTo(
                            t[o],
                            t[o + 1],
                            t[o + 2],
                            t[o + 3],
                            r,
                            a,
                          ),
                          (o += 6);
                        break;
                      case u.curveTo2:
                        n.bezierCurveTo(
                          r,
                          a,
                          t[o],
                          t[o + 1],
                          t[o + 2],
                          t[o + 3],
                        ),
                          (r = t[o + 2]),
                          (a = t[o + 3]),
                          (o += 4);
                        break;
                      case u.curveTo3:
                        (r = t[o + 2]),
                          (a = t[o + 3]),
                          n.bezierCurveTo(t[o], t[o + 1], r, a, r, a),
                          (o += 4);
                        break;
                      case u.closePath:
                        n.closePath();
                    }
                  i.setCurrentPoint(r, a);
                },
                closePath: function () {
                  this.ctx.closePath();
                },
                stroke: function (e) {
                  e = 'undefined' == typeof e || e;
                  var t = this.ctx,
                    n = this.current.strokeColor;
                  (t.lineWidth = Math.max(
                    this.getSinglePixelWidth() * E,
                    this.current.lineWidth,
                  )),
                    (t.globalAlpha = this.current.strokeAlpha),
                    n && n.hasOwnProperty('type') && 'Pattern' === n.type
                      ? (t.save(),
                        (t.strokeStyle = n.getPattern(t, this)),
                        t.stroke(),
                        t.restore())
                      : t.stroke(),
                    e && this.consumePath(),
                    (t.globalAlpha = this.current.fillAlpha);
                },
                closeStroke: function () {
                  this.closePath(), this.stroke();
                },
                fill: function (e) {
                  e = 'undefined' == typeof e || e;
                  var t = this.ctx,
                    n = this.current.fillColor,
                    i = this.current.patternFill,
                    r = !1;
                  i &&
                    (t.save(),
                    this.baseTransform &&
                      t.setTransform.apply(t, this.baseTransform),
                    (t.fillStyle = n.getPattern(t, this)),
                    (r = !0)),
                    this.pendingEOFill
                      ? (t.fill('evenodd'), (this.pendingEOFill = !1))
                      : t.fill(),
                    r && t.restore(),
                    e && this.consumePath();
                },
                eoFill: function () {
                  (this.pendingEOFill = !0), this.fill();
                },
                fillStroke: function () {
                  this.fill(!1), this.stroke(!1), this.consumePath();
                },
                eoFillStroke: function () {
                  (this.pendingEOFill = !0), this.fillStroke();
                },
                closeFillStroke: function () {
                  this.closePath(), this.fillStroke();
                },
                closeEOFillStroke: function () {
                  (this.pendingEOFill = !0),
                    this.closePath(),
                    this.fillStroke();
                },
                endPath: function () {
                  this.consumePath();
                },
                clip: function () {
                  this.pendingClip = H;
                },
                eoClip: function () {
                  this.pendingClip = z;
                },
                beginText: function () {
                  (this.current.textMatrix = l),
                    (this.current.textMatrixScale = 1),
                    (this.current.x = this.current.lineX = 0),
                    (this.current.y = this.current.lineY = 0);
                },
                endText: function () {
                  var e = this.pendingTextPaths,
                    t = this.ctx;
                  if (void 0 === e) return void t.beginPath();
                  t.save(), t.beginPath();
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    t.setTransform.apply(t, i.transform),
                      t.translate(i.x, i.y),
                      i.addToPath(t, i.fontSize);
                  }
                  t.restore(),
                    t.clip(),
                    t.beginPath(),
                    delete this.pendingTextPaths;
                },
                setCharSpacing: function (e) {
                  this.current.charSpacing = e;
                },
                setWordSpacing: function (e) {
                  this.current.wordSpacing = e;
                },
                setHScale: function (e) {
                  this.current.textHScale = e / 100;
                },
                setLeading: function (e) {
                  this.current.leading = -e;
                },
                setFont: function (e, t) {
                  var n = this.commonObjs.get(e),
                    i = this.current;
                  if (
                    (n || y("Can't find font for " + e),
                    (i.fontMatrix = n.fontMatrix ? n.fontMatrix : c),
                    (0 !== i.fontMatrix[0] && 0 !== i.fontMatrix[3]) ||
                      S('Invalid font matrix for font ' + e),
                    t < 0
                      ? ((t = -t), (i.fontDirection = -1))
                      : (i.fontDirection = 1),
                    (this.current.font = n),
                    (this.current.fontSize = t),
                    !n.isType3Font)
                  ) {
                    var r = n.loadedName || 'sans-serif',
                      a = n.black ? '900' : n.bold ? 'bold' : 'normal',
                      s = n.italic ? 'italic' : 'normal',
                      o = '"' + r + '", ' + n.fallbackName,
                      l = t < L ? L : t > T ? T : t;
                    this.current.fontSizeScale = t / l;
                    var h = s + ' ' + a + ' ' + l + 'px ' + o;
                    this.ctx.font = h;
                  }
                },
                setTextRenderingMode: function (e) {
                  this.current.textRenderingMode = e;
                },
                setTextRise: function (e) {
                  this.current.textRise = e;
                },
                moveText: function (e, t) {
                  (this.current.x = this.current.lineX += e),
                    (this.current.y = this.current.lineY += t);
                },
                setLeadingMoveText: function (e, t) {
                  this.setLeading(-t), this.moveText(e, t);
                },
                setTextMatrix: function (e, t, n, i, r, a) {
                  (this.current.textMatrix = [e, t, n, i, r, a]),
                    (this.current.textMatrixScale = Math.sqrt(e * e + t * t)),
                    (this.current.x = this.current.lineX = 0),
                    (this.current.y = this.current.lineY = 0);
                },
                nextLine: function () {
                  this.moveText(0, this.current.leading);
                },
                paintChar: function (e, t, n) {
                  var i,
                    r = this.ctx,
                    a = this.current,
                    s = a.font,
                    o = a.textRenderingMode,
                    c = a.fontSize / a.fontSizeScale,
                    l = o & d.FILL_STROKE_MASK,
                    h = !!(o & d.ADD_TO_PATH_FLAG);
                  if (
                    ((s.disableFontFace || h) &&
                      (i = s.getPathGenerator(this.commonObjs, e)),
                    s.disableFontFace
                      ? (r.save(),
                        r.translate(t, n),
                        r.beginPath(),
                        i(r, c),
                        (l !== d.FILL && l !== d.FILL_STROKE) || r.fill(),
                        (l !== d.STROKE && l !== d.FILL_STROKE) || r.stroke(),
                        r.restore())
                      : ((l !== d.FILL && l !== d.FILL_STROKE) ||
                          r.fillText(e, t, n),
                        (l !== d.STROKE && l !== d.FILL_STROKE) ||
                          r.strokeText(e, t, n)),
                    h)
                  ) {
                    var u =
                      this.pendingTextPaths || (this.pendingTextPaths = []);
                    u.push({
                      transform: r.mozCurrentTransform,
                      x: t,
                      y: n,
                      fontSize: c,
                      addToPath: i,
                    });
                  }
                },
                get isFontSubpixelAAEnabled() {
                  var e = document.createElement('canvas').getContext('2d');
                  e.scale(1.5, 1), e.fillText('I', 0, 10);
                  for (
                    var t = e.getImageData(0, 0, 10, 10).data, n = !1, i = 3;
                    i < t.length;
                    i += 4
                  )
                    if (t[i] > 0 && t[i] < 255) {
                      n = !0;
                      break;
                    }
                  return A(this, 'isFontSubpixelAAEnabled', n);
                },
                showText: function (e) {
                  var t = this.current,
                    n = t.font;
                  if (n.isType3Font) return this.showType3Text(e);
                  var i = t.fontSize;
                  if (0 !== i) {
                    var r = this.ctx,
                      a = t.fontSizeScale,
                      s = t.charSpacing,
                      o = t.wordSpacing,
                      c = t.fontDirection,
                      l = t.textHScale * c,
                      h = e.length,
                      u = n.vertical,
                      f = u ? 1 : -1,
                      p = n.defaultVMetrics,
                      g = i * t.fontMatrix[0],
                      m = t.textRenderingMode === d.FILL && !n.disableFontFace;
                    r.save(),
                      r.transform.apply(r, t.textMatrix),
                      r.translate(t.x, t.y + t.textRise),
                      t.patternFill &&
                        (r.fillStyle = t.fillColor.getPattern(r, this)),
                      c > 0 ? r.scale(l, -1) : r.scale(l, 1);
                    var b = t.lineWidth,
                      w = t.textMatrixScale;
                    if (0 === w || 0 === b) {
                      var y = t.textRenderingMode & d.FILL_STROKE_MASK;
                      (y !== d.STROKE && y !== d.FILL_STROKE) ||
                        ((this.cachedGetSinglePixelWidth = null),
                        (b = this.getSinglePixelWidth() * E));
                    } else b /= w;
                    1 !== a && (r.scale(a, a), (b /= a)), (r.lineWidth = b);
                    var A,
                      S = 0;
                    for (A = 0; A < h; ++A) {
                      var P = e[A];
                      if (v(P)) S += (f * P * i) / 1e3;
                      else {
                        var x,
                          C,
                          _,
                          L,
                          T = !1,
                          k = (P.isSpace ? o : 0) + s,
                          I = P.fontChar,
                          D = P.accent,
                          F = P.width;
                        if (u) {
                          var R, N, O;
                          (R = P.vmetric || p),
                            (N = P.vmetric ? R[1] : 0.5 * F),
                            (N = -N * g),
                            (O = R[2] * g),
                            (F = R ? -R[0] : F),
                            (x = N / a),
                            (C = (S + O) / a);
                        } else (x = S / a), (C = 0);
                        if (n.remeasure && F > 0) {
                          var M = ((1e3 * r.measureText(I).width) / i) * a;
                          if (F < M && this.isFontSubpixelAAEnabled) {
                            var B = F / M;
                            (T = !0), r.save(), r.scale(B, 1), (x /= B);
                          } else F !== M && (x += (((F - M) / 2e3) * i) / a);
                        }
                        (P.isInFont || n.missingFile) &&
                          (m && !D
                            ? r.fillText(I, x, C)
                            : (this.paintChar(I, x, C),
                              D &&
                                ((_ = x + D.offset.x / a),
                                (L = C - D.offset.y / a),
                                this.paintChar(D.fontChar, _, L))));
                        var j = F * g + k * c;
                        (S += j), T && r.restore();
                      }
                    }
                    u ? (t.y -= S * l) : (t.x += S * l), r.restore();
                  }
                },
                showType3Text: function (e) {
                  var t,
                    n,
                    i,
                    r,
                    a = this.ctx,
                    s = this.current,
                    o = s.font,
                    l = s.fontSize,
                    h = s.fontDirection,
                    u = o.vertical ? 1 : -1,
                    f = s.charSpacing,
                    g = s.wordSpacing,
                    m = s.textHScale * h,
                    b = s.fontMatrix || c,
                    w = e.length,
                    y = s.textRenderingMode === d.INVISIBLE;
                  if (!y && 0 !== l) {
                    for (
                      this.cachedGetSinglePixelWidth = null,
                        a.save(),
                        a.transform.apply(a, s.textMatrix),
                        a.translate(s.x, s.y),
                        a.scale(m, h),
                        t = 0;
                      t < w;
                      ++t
                    )
                      if (((n = e[t]), v(n)))
                        (r = (u * n * l) / 1e3),
                          this.ctx.translate(r, 0),
                          (s.x += r * m);
                      else {
                        var A = (n.isSpace ? g : 0) + f,
                          P = o.charProcOperatorList[n.operatorListId];
                        if (P) {
                          (this.processingType3 = n),
                            this.save(),
                            a.scale(l, l),
                            a.transform.apply(a, b),
                            this.executeOperatorList(P),
                            this.restore();
                          var x = p.applyTransform([n.width, 0], b);
                          (i = x[0] * l + A), a.translate(i, 0), (s.x += i * m);
                        } else
                          S(
                            'Type3 character "' +
                              n.operatorListId +
                              '" is not available',
                          );
                      }
                    a.restore(), (this.processingType3 = null);
                  }
                },
                setCharWidth: function (e, t) {},
                setCharWidthAndBounds: function (e, t, n, i, r, a) {
                  this.ctx.rect(n, i, r - n, a - i),
                    this.clip(),
                    this.endPath();
                },
                getColorN_Pattern: function (t) {
                  var n;
                  if ('TilingPattern' === t[0]) {
                    var i = t[1],
                      r =
                        this.baseTransform ||
                        this.ctx.mozCurrentTransform.slice(),
                      a = this,
                      s = {
                        createCanvasGraphics: function (t) {
                          return new e(t, a.commonObjs, a.objs);
                        },
                      };
                    n = new P(t, i, this.ctx, s, r);
                  } else n = x(t);
                  return n;
                },
                setStrokeColorN: function () {
                  this.current.strokeColor = this.getColorN_Pattern(arguments);
                },
                setFillColorN: function () {
                  (this.current.fillColor = this.getColorN_Pattern(arguments)),
                    (this.current.patternFill = !0);
                },
                setStrokeRGBColor: function (e, t, n) {
                  var i = p.makeCssRgb(e, t, n);
                  (this.ctx.strokeStyle = i), (this.current.strokeColor = i);
                },
                setFillRGBColor: function (e, t, n) {
                  var i = p.makeCssRgb(e, t, n);
                  (this.ctx.fillStyle = i),
                    (this.current.fillColor = i),
                    (this.current.patternFill = !1);
                },
                shadingFill: function (e) {
                  var t = this.ctx;
                  this.save();
                  var n = x(e);
                  t.fillStyle = n.getPattern(t, this, !0);
                  var i = t.mozCurrentTransformInverse;
                  if (i) {
                    var r = t.canvas,
                      a = r.width,
                      s = r.height,
                      o = p.applyTransform([0, 0], i),
                      c = p.applyTransform([0, s], i),
                      l = p.applyTransform([a, 0], i),
                      h = p.applyTransform([a, s], i),
                      u = Math.min(o[0], c[0], l[0], h[0]),
                      d = Math.min(o[1], c[1], l[1], h[1]),
                      f = Math.max(o[0], c[0], l[0], h[0]),
                      g = Math.max(o[1], c[1], l[1], h[1]);
                    this.ctx.fillRect(u, d, f - u, g - d);
                  } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                  this.restore();
                },
                beginInlineImage: function () {
                  y('Should not call beginInlineImage');
                },
                beginImageData: function () {
                  y('Should not call beginImageData');
                },
                paintFormXObjectBegin: function (e, t) {
                  if (
                    (this.save(),
                    this.baseTransformStack.push(this.baseTransform),
                    b(e) && 6 === e.length && this.transform.apply(this, e),
                    (this.baseTransform = this.ctx.mozCurrentTransform),
                    b(t) && 4 === t.length)
                  ) {
                    var n = t[2] - t[0],
                      i = t[3] - t[1];
                    this.ctx.rect(t[0], t[1], n, i),
                      this.clip(),
                      this.endPath();
                  }
                },
                paintFormXObjectEnd: function () {
                  this.restore(),
                    (this.baseTransform = this.baseTransformStack.pop());
                },
                beginGroup: function (e) {
                  this.save();
                  var t = this.ctx;
                  e.isolated || m('TODO: Support non-isolated groups.'),
                    e.knockout && S('Knockout groups not supported.');
                  var n = t.mozCurrentTransform;
                  e.matrix && t.transform.apply(t, e.matrix),
                    g(e.bbox, 'Bounding box is required.');
                  var r = p.getAxialAlignedBoundingBox(
                      e.bbox,
                      t.mozCurrentTransform,
                    ),
                    a = [0, 0, t.canvas.width, t.canvas.height];
                  r = p.intersect(r, a) || [0, 0, 0, 0];
                  var s = Math.floor(r[0]),
                    o = Math.floor(r[1]),
                    c = Math.max(Math.ceil(r[2]) - s, 1),
                    l = Math.max(Math.ceil(r[3]) - o, 1),
                    h = 1,
                    u = 1;
                  c > k && ((h = c / k), (c = k)),
                    l > k && ((u = l / k), (l = k));
                  var d = 'groupAt' + this.groupLevel;
                  e.smask && (d += '_smask_' + (this.smaskCounter++ % 2));
                  var f = this.cachedCanvases.getCanvas(d, c, l, !0),
                    v = f.context;
                  v.scale(1 / h, 1 / u),
                    v.translate(-s, -o),
                    v.transform.apply(v, n),
                    e.smask
                      ? this.smaskStack.push({
                          canvas: f.canvas,
                          context: v,
                          offsetX: s,
                          offsetY: o,
                          scaleX: h,
                          scaleY: u,
                          subtype: e.smask.subtype,
                          backdrop: e.smask.backdrop,
                          transferMap: e.smask.transferMap || null,
                          startTransformInverse: null,
                        })
                      : (t.setTransform(1, 0, 0, 1, 0, 0),
                        t.translate(s, o),
                        t.scale(h, u)),
                    i(t, v),
                    (this.ctx = v),
                    this.setGState([
                      ['BM', 'Normal'],
                      ['ca', 1],
                      ['CA', 1],
                    ]),
                    this.groupStack.push(t),
                    this.groupLevel++,
                    (this.current.activeSMask = null);
                },
                endGroup: function (e) {
                  this.groupLevel--;
                  var t = this.ctx;
                  (this.ctx = this.groupStack.pop()),
                    void 0 !== this.ctx.imageSmoothingEnabled
                      ? (this.ctx.imageSmoothingEnabled = !1)
                      : (this.ctx.mozImageSmoothingEnabled = !1),
                    e.smask
                      ? (this.tempSMask = this.smaskStack.pop())
                      : this.ctx.drawImage(t.canvas, 0, 0),
                    this.restore();
                },
                beginAnnotations: function () {
                  this.save(),
                    (this.current = new M()),
                    this.baseTransform &&
                      this.ctx.setTransform.apply(this.ctx, this.baseTransform);
                },
                endAnnotations: function () {
                  this.restore();
                },
                beginAnnotation: function (e, t, n) {
                  if ((this.save(), b(e) && 4 === e.length)) {
                    var i = e[2] - e[0],
                      r = e[3] - e[1];
                    this.ctx.rect(e[0], e[1], i, r),
                      this.clip(),
                      this.endPath();
                  }
                  this.transform.apply(this, t), this.transform.apply(this, n);
                },
                endAnnotation: function () {
                  this.restore();
                },
                paintJpegXObject: function (e, t, n) {
                  var i = this.objs.get(e);
                  if (!i) return void S("Dependent image isn't ready yet");
                  this.save();
                  var r = this.ctx;
                  if (
                    (r.scale(1 / t, -1 / n),
                    r.drawImage(i, 0, 0, i.width, i.height, 0, -n, t, n),
                    this.imageLayer)
                  ) {
                    var a = r.mozCurrentTransformInverse,
                      s = this.getCanvasPosition(0, 0);
                    this.imageLayer.appendImage({
                      objId: e,
                      left: s[0],
                      top: s[1],
                      width: t / a[0],
                      height: n / a[3],
                    });
                  }
                  this.restore();
                },
                paintImageMaskXObject: function (e) {
                  var t = this.ctx,
                    i = e.width,
                    r = e.height,
                    a = this.current.fillColor,
                    s = this.current.patternFill,
                    c = this.processingType3;
                  if (
                    (I &&
                      c &&
                      void 0 === c.compiled &&
                      (i <= D && r <= D
                        ? (c.compiled = o({
                            data: e.data,
                            width: i,
                            height: r,
                          }))
                        : (c.compiled = null)),
                    c && c.compiled)
                  )
                    return void c.compiled(t);
                  var l = this.cachedCanvases.getCanvas('maskCanvas', i, r),
                    h = l.context;
                  h.save(),
                    n(h, e),
                    (h.globalCompositeOperation = 'source-in'),
                    (h.fillStyle = s ? a.getPattern(h, this) : a),
                    h.fillRect(0, 0, i, r),
                    h.restore(),
                    this.paintInlineImageXObject(l.canvas);
                },
                paintImageMaskXObjectRepeat: function (e, t, i, r) {
                  var a = e.width,
                    s = e.height,
                    o = this.current.fillColor,
                    c = this.current.patternFill,
                    l = this.cachedCanvases.getCanvas('maskCanvas', a, s),
                    h = l.context;
                  h.save(),
                    n(h, e),
                    (h.globalCompositeOperation = 'source-in'),
                    (h.fillStyle = c ? o.getPattern(h, this) : o),
                    h.fillRect(0, 0, a, s),
                    h.restore();
                  for (var u = this.ctx, d = 0, f = r.length; d < f; d += 2)
                    u.save(),
                      u.transform(t, 0, 0, i, r[d], r[d + 1]),
                      u.scale(1, -1),
                      u.drawImage(l.canvas, 0, 0, a, s, 0, -1, 1, 1),
                      u.restore();
                },
                paintImageMaskXObjectGroup: function (e) {
                  for (
                    var t = this.ctx,
                      i = this.current.fillColor,
                      r = this.current.patternFill,
                      a = 0,
                      s = e.length;
                    a < s;
                    a++
                  ) {
                    var o = e[a],
                      c = o.width,
                      l = o.height,
                      h = this.cachedCanvases.getCanvas('maskCanvas', c, l),
                      u = h.context;
                    u.save(),
                      n(u, o),
                      (u.globalCompositeOperation = 'source-in'),
                      (u.fillStyle = r ? i.getPattern(u, this) : i),
                      u.fillRect(0, 0, c, l),
                      u.restore(),
                      t.save(),
                      t.transform.apply(t, o.transform),
                      t.scale(1, -1),
                      t.drawImage(h.canvas, 0, 0, c, l, 0, -1, 1, 1),
                      t.restore();
                  }
                },
                paintImageXObject: function (e) {
                  var t = this.objs.get(e);
                  return t
                    ? void this.paintInlineImageXObject(t)
                    : void S("Dependent image isn't ready yet");
                },
                paintImageXObjectRepeat: function (e, t, n, i) {
                  var r = this.objs.get(e);
                  if (!r) return void S("Dependent image isn't ready yet");
                  for (
                    var a = r.width, s = r.height, o = [], c = 0, l = i.length;
                    c < l;
                    c += 2
                  )
                    o.push({
                      transform: [t, 0, 0, n, i[c], i[c + 1]],
                      x: 0,
                      y: 0,
                      w: a,
                      h: s,
                    });
                  this.paintInlineImageXObjectGroup(r, o);
                },
                paintInlineImageXObject: function (e) {
                  var n = e.width,
                    i = e.height,
                    r = this.ctx;
                  this.save(), r.scale(1 / n, -1 / i);
                  var a,
                    s,
                    o = r.mozCurrentTransformInverse,
                    c = o[0],
                    l = o[1],
                    h = Math.max(Math.sqrt(c * c + l * l), 1),
                    u = o[2],
                    d = o[3],
                    f = Math.max(Math.sqrt(u * u + d * d), 1);
                  if (e instanceof HTMLElement || !e.data) a = e;
                  else {
                    s = this.cachedCanvases.getCanvas('inlineImage', n, i);
                    var p = s.context;
                    t(p, e), (a = s.canvas);
                  }
                  for (
                    var g = n, m = i, v = 'prescale1';
                    (h > 2 && g > 1) || (f > 2 && m > 1);

                  ) {
                    var b = g,
                      w = m;
                    h > 2 && g > 1 && ((b = Math.ceil(g / 2)), (h /= g / b)),
                      f > 2 && m > 1 && ((w = Math.ceil(m / 2)), (f /= m / w)),
                      (s = this.cachedCanvases.getCanvas(v, b, w)),
                      (p = s.context),
                      p.clearRect(0, 0, b, w),
                      p.drawImage(a, 0, 0, g, m, 0, 0, b, w),
                      (a = s.canvas),
                      (g = b),
                      (m = w),
                      (v = 'prescale1' === v ? 'prescale2' : 'prescale1');
                  }
                  if (
                    (r.drawImage(a, 0, 0, g, m, 0, -i, n, i), this.imageLayer)
                  ) {
                    var y = this.getCanvasPosition(0, -i);
                    this.imageLayer.appendImage({
                      imgData: e,
                      left: y[0],
                      top: y[1],
                      width: n / o[0],
                      height: i / o[3],
                    });
                  }
                  this.restore();
                },
                paintInlineImageXObjectGroup: function (e, n) {
                  var i = this.ctx,
                    r = e.width,
                    a = e.height,
                    s = this.cachedCanvases.getCanvas('inlineImage', r, a),
                    o = s.context;
                  t(o, e);
                  for (var c = 0, l = n.length; c < l; c++) {
                    var h = n[c];
                    if (
                      (i.save(),
                      i.transform.apply(i, h.transform),
                      i.scale(1, -1),
                      i.drawImage(s.canvas, h.x, h.y, h.w, h.h, 0, -1, 1, 1),
                      this.imageLayer)
                    ) {
                      var u = this.getCanvasPosition(h.x, h.y);
                      this.imageLayer.appendImage({
                        imgData: e,
                        left: u[0],
                        top: u[1],
                        width: r,
                        height: a,
                      });
                    }
                    i.restore();
                  }
                },
                paintSolidColorImageMask: function () {
                  this.ctx.fillRect(0, 0, 1, 1);
                },
                paintXObject: function () {
                  S("Unsupported 'paintXObject' command.");
                },
                markPoint: function (e) {},
                markPointProps: function (e, t) {},
                beginMarkedContent: function (e) {},
                beginMarkedContentProps: function (e, t) {},
                endMarkedContent: function () {},
                beginCompat: function () {},
                endCompat: function () {},
                consumePath: function () {
                  var e = this.ctx;
                  this.pendingClip &&
                    (this.pendingClip === z ? e.clip('evenodd') : e.clip(),
                    (this.pendingClip = null)),
                    e.beginPath();
                },
                getSinglePixelWidth: function (e) {
                  if (null === this.cachedGetSinglePixelWidth) {
                    this.ctx.save();
                    var t = this.ctx.mozCurrentTransformInverse;
                    this.ctx.restore(),
                      (this.cachedGetSinglePixelWidth = Math.sqrt(
                        Math.max(
                          t[0] * t[0] + t[1] * t[1],
                          t[2] * t[2] + t[3] * t[3],
                        ),
                      ));
                  }
                  return this.cachedGetSinglePixelWidth;
                },
                getCanvasPosition: function (e, t) {
                  var n = this.ctx.mozCurrentTransform;
                  return [
                    n[0] * e + n[2] * t + n[4],
                    n[1] * e + n[3] * t + n[5],
                  ];
                },
              };
              for (var G in u) e.prototype[u[G]] = e.prototype[G];
              return e;
            })();
          (e.CanvasGraphics = B), (e.createScratchCanvas = a);
        }),
        (function (e, t) {
          t(
            (e.pdfjsDisplayAPI = {}),
            e.pdfjsSharedUtil,
            e.pdfjsDisplayFontLoader,
            e.pdfjsDisplayCanvas,
            e.pdfjsDisplayMetadata,
            e.pdfjsDisplayDOMUtils,
          );
        })(this, function (e, r, a, s, o, c, l) {
          function h(e, t, n, i) {
            var r = new q();
            arguments.length > 1 &&
              x(
                'getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument',
              ),
              t &&
                (t instanceof Y ||
                  ((t = Object.create(t)),
                  (t.length = e.length),
                  (t.initialData = e.initialData),
                  t.abort || (t.abort = function () {})),
                (e = Object.create(e)),
                (e.range = t)),
              (r.onPassword = n || null),
              (r.onProgress = i || null);
            var a;
            'string' == typeof e
              ? (a = { url: e })
              : k(e)
              ? (a = { data: e })
              : e instanceof Y
              ? (a = { range: e })
              : ('object' != typeof e &&
                  P(
                    'Invalid parameter in getDocument, need either Uint8Array, string or a parameter object',
                  ),
                e.url ||
                  e.data ||
                  e.range ||
                  P(
                    'Invalid parameter object: need either .data, .range or .url',
                  ),
                (a = e));
            var s = {},
              o = null,
              c = null;
            for (var l in a)
              if ('url' !== l || 'undefined' == typeof window)
                if ('range' !== l)
                  if ('worker' !== l)
                    if ('data' !== l || a[l] instanceof Uint8Array) s[l] = a[l];
                    else {
                      var h = a[l];
                      'string' == typeof h
                        ? (s[l] = D(h))
                        : 'object' != typeof h || null === h || isNaN(h.length)
                        ? k(h)
                          ? (s[l] = new Uint8Array(h))
                          : P(
                              'Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.',
                            )
                        : (s[l] = new Uint8Array(h));
                    }
                  else c = a[l];
                else o = a[l];
              else s[l] = new URL(a[l], window.location).href;
            (s.rangeChunkSize = s.rangeChunkSize || V),
              c || ((c = new K()), (r._worker = c));
            var d = r.docId;
            return (
              c.promise
                .then(function () {
                  if (r.destroyed) throw new Error('Loading aborted');
                  return u(c, s, o, d).then(function (e) {
                    if (r.destroyed) throw new Error('Loading aborted');
                    var t = new p(d, e, c.port),
                      n = new Z(t, r, o);
                    (r._transport = n), t.send('Ready', null);
                  });
                })
                .catch(r._capability.reject),
              r
            );
          }
          function u(e, t, n, i) {
            return e.destroyed
              ? Promise.reject(new Error('Worker was destroyed'))
              : ((t.disableAutoFetch = U('disableAutoFetch')),
                (t.disableStream = U('disableStream')),
                (t.chunkedViewerLoading = !!n),
                n && ((t.length = n.length), (t.initialData = n.initialData)),
                e.messageHandler
                  .sendWithPromise('GetDocRequest', {
                    docId: i,
                    source: t,
                    disableRange: U('disableRange'),
                    maxImageSize: U('maxImageSize'),
                    cMapUrl: U('cMapUrl'),
                    cMapPacked: U('cMapPacked'),
                    disableFontFace: U('disableFontFace'),
                    disableCreateObjectURL: U('disableCreateObjectURL'),
                    postMessageTransfers: U('postMessageTransfers') && !H,
                    docBaseUrl: t.docBaseUrl,
                  })
                  .then(function (t) {
                    if (e.destroyed) throw new Error('Worker was destroyed');
                    return t;
                  }));
          }
          var d,
            f = r.InvalidPDFException,
            p = r.MessageHandler,
            g = r.MissingPDFException,
            m = r.PageViewport,
            v = r.PasswordException,
            b = r.StatTimer,
            w = r.UnexpectedResponseException,
            y = r.UnknownErrorException,
            A = r.Util,
            S = r.createPromiseCapability,
            P = r.error,
            x = r.deprecated,
            C = r.getVerbosityLevel,
            _ = r.info,
            L = r.isInt,
            T = r.isArray,
            k = r.isArrayBuffer,
            E = r.isSameOrigin,
            I = r.loadJpegStream,
            D = r.stringToBytes,
            F = r.globalScope,
            R = r.warn,
            N = a.FontFaceObject,
            O = a.FontLoader,
            M = s.CanvasGraphics,
            B = s.createScratchCanvas,
            j = o.Metadata,
            U = c.getDefaultSetting,
            V = 65536,
            W = !1,
            H = !1,
            z = null,
            G = !1;
          'undefined' == typeof window &&
            ((W = !0),
            'undefined' == typeof require.ensure &&
              (require.ensure = require('node-ensure')),
            (G = !0)),
            'undefined' != typeof __webpack_require__ && (G = !0),
            'undefined' != typeof requirejs &&
              requirejs.toUrl &&
              (d = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js'));
          var X = 'undefined' != typeof requirejs && requirejs.load;
          z = G
            ? function (e) {
                require.ensure([], function () {
                  var t = require('./pdf.worker.js.js.js');
                  e(t.WorkerMessageHandler);
                });
              }
            : X
            ? function (e) {
                requirejs(['pdfjs-dist/build/pdf.worker'], function (t) {
                  e(t.WorkerMessageHandler);
                });
              }
            : null;
          var q = (function () {
              function e() {
                (this._capability = S()),
                  (this._transport = null),
                  (this._worker = null),
                  (this.docId = 'd' + t++),
                  (this.destroyed = !1),
                  (this.onPassword = null),
                  (this.onProgress = null),
                  (this.onUnsupportedFeature = null);
              }
              var t = 0;
              return (
                (e.prototype = {
                  get promise() {
                    return this._capability.promise;
                  },
                  destroy: function () {
                    this.destroyed = !0;
                    var e = this._transport
                      ? this._transport.destroy()
                      : Promise.resolve();
                    return e.then(
                      function () {
                        (this._transport = null),
                          this._worker &&
                            (this._worker.destroy(), (this._worker = null));
                      }.bind(this),
                    );
                  },
                  then: function (e, t) {
                    return this.promise.then.apply(this.promise, arguments);
                  },
                }),
                e
              );
            })(),
            Y = (function () {
              function e(e, t) {
                (this.length = e),
                  (this.initialData = t),
                  (this._rangeListeners = []),
                  (this._progressListeners = []),
                  (this._progressiveReadListeners = []),
                  (this._readyCapability = S());
              }
              return (
                (e.prototype = {
                  addRangeListener: function (e) {
                    this._rangeListeners.push(e);
                  },
                  addProgressListener: function (e) {
                    this._progressListeners.push(e);
                  },
                  addProgressiveReadListener: function (e) {
                    this._progressiveReadListeners.push(e);
                  },
                  onDataRange: function (e, t) {
                    for (
                      var n = this._rangeListeners, i = 0, r = n.length;
                      i < r;
                      ++i
                    )
                      n[i](e, t);
                  },
                  onDataProgress: function (e) {
                    this._readyCapability.promise.then(
                      function () {
                        for (
                          var t = this._progressListeners, n = 0, i = t.length;
                          n < i;
                          ++n
                        )
                          t[n](e);
                      }.bind(this),
                    );
                  },
                  onDataProgressiveRead: function (e) {
                    this._readyCapability.promise.then(
                      function () {
                        for (
                          var t = this._progressiveReadListeners,
                            n = 0,
                            i = t.length;
                          n < i;
                          ++n
                        )
                          t[n](e);
                      }.bind(this),
                    );
                  },
                  transportReady: function () {
                    this._readyCapability.resolve();
                  },
                  requestDataRange: function (e, t) {
                    throw new Error(
                      'Abstract method PDFDataRangeTransport.requestDataRange',
                    );
                  },
                  abort: function () {},
                }),
                e
              );
            })(),
            J = (function () {
              function e(e, t, n) {
                (this.pdfInfo = e),
                  (this.transport = t),
                  (this.loadingTask = n);
              }
              return (
                (e.prototype = {
                  get numPages() {
                    return this.pdfInfo.numPages;
                  },
                  get fingerprint() {
                    return this.pdfInfo.fingerprint;
                  },
                  getPage: function (e) {
                    return this.transport.getPage(e);
                  },
                  getPageIndex: function (e) {
                    return this.transport.getPageIndex(e);
                  },
                  getDestinations: function () {
                    return this.transport.getDestinations();
                  },
                  getDestination: function (e) {
                    return this.transport.getDestination(e);
                  },
                  getPageLabels: function () {
                    return this.transport.getPageLabels();
                  },
                  getAttachments: function () {
                    return this.transport.getAttachments();
                  },
                  getJavaScript: function () {
                    return this.transport.getJavaScript();
                  },
                  getOutline: function () {
                    return this.transport.getOutline();
                  },
                  getMetadata: function () {
                    return this.transport.getMetadata();
                  },
                  getData: function () {
                    return this.transport.getData();
                  },
                  getDownloadInfo: function () {
                    return this.transport.downloadInfoCapability.promise;
                  },
                  getStats: function () {
                    return this.transport.getStats();
                  },
                  cleanup: function () {
                    this.transport.startCleanup();
                  },
                  destroy: function () {
                    return this.loadingTask.destroy();
                  },
                }),
                e
              );
            })(),
            Q = (function () {
              function e(e, t, n) {
                (this.pageIndex = e),
                  (this.pageInfo = t),
                  (this.transport = n),
                  (this.stats = new b()),
                  (this.stats.enabled = U('enableStats')),
                  (this.commonObjs = n.commonObjs),
                  (this.objs = new $()),
                  (this.cleanupAfterRender = !1),
                  (this.pendingCleanup = !1),
                  (this.intentStates = Object.create(null)),
                  (this.destroyed = !1);
              }
              return (
                (e.prototype = {
                  get pageNumber() {
                    return this.pageIndex + 1;
                  },
                  get rotate() {
                    return this.pageInfo.rotate;
                  },
                  get ref() {
                    return this.pageInfo.ref;
                  },
                  get userUnit() {
                    return this.pageInfo.userUnit;
                  },
                  get view() {
                    return this.pageInfo.view;
                  },
                  getViewport: function (e, t) {
                    return (
                      arguments.length < 2 && (t = this.rotate),
                      new m(this.view, e, t, 0, 0)
                    );
                  },
                  getAnnotations: function (e) {
                    var t = (e && e.intent) || null;
                    return (
                      (this.annotationsPromise &&
                        this.annotationsIntent === t) ||
                        ((this.annotationsPromise =
                          this.transport.getAnnotations(this.pageIndex, t)),
                        (this.annotationsIntent = t)),
                      this.annotationsPromise
                    );
                  },
                  render: function (e) {
                    function t(e) {
                      var t = a.renderTasks.indexOf(s);
                      t >= 0 && a.renderTasks.splice(t, 1),
                        c.cleanupAfterRender && (c.pendingCleanup = !0),
                        c._tryCleanup(),
                        e ? s.capability.reject(e) : s.capability.resolve(),
                        n.timeEnd('Rendering'),
                        n.timeEnd('Overall');
                    }
                    var n = this.stats;
                    n.time('Overall'), (this.pendingCleanup = !1);
                    var i = 'print' === e.intent ? 'print' : 'display',
                      r = e.renderInteractiveForms === !0;
                    this.intentStates[i] ||
                      (this.intentStates[i] = Object.create(null));
                    var a = this.intentStates[i];
                    a.displayReadyCapability ||
                      ((a.receivingOperatorList = !0),
                      (a.displayReadyCapability = S()),
                      (a.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1,
                      }),
                      this.stats.time('Page Request'),
                      this.transport.messageHandler.send('RenderPageRequest', {
                        pageIndex: this.pageNumber - 1,
                        intent: i,
                        renderInteractiveForms: r,
                      }));
                    var s = new te(
                      t,
                      e,
                      this.objs,
                      this.commonObjs,
                      a.operatorList,
                      this.pageNumber,
                    );
                    (s.useRequestAnimationFrame = 'print' !== i),
                      a.renderTasks || (a.renderTasks = []),
                      a.renderTasks.push(s);
                    var o = s.task;
                    e.continueCallback &&
                      (x('render is used with continueCallback parameter'),
                      (o.onContinue = e.continueCallback));
                    var c = this;
                    return (
                      a.displayReadyCapability.promise.then(
                        function (e) {
                          return c.pendingCleanup
                            ? void t()
                            : (n.time('Rendering'),
                              s.initializeGraphics(e),
                              void s.operatorListChanged());
                        },
                        function (e) {
                          t(e);
                        },
                      ),
                      o
                    );
                  },
                  getOperatorList: function () {
                    function e() {
                      if (i.operatorList.lastChunk) {
                        i.opListReadCapability.resolve(i.operatorList);
                        var e = i.renderTasks.indexOf(n);
                        e >= 0 && i.renderTasks.splice(e, 1);
                      }
                    }
                    var t = 'oplist';
                    this.intentStates[t] ||
                      (this.intentStates[t] = Object.create(null));
                    var n,
                      i = this.intentStates[t];
                    return (
                      i.opListReadCapability ||
                        ((n = {}),
                        (n.operatorListChanged = e),
                        (i.receivingOperatorList = !0),
                        (i.opListReadCapability = S()),
                        (i.renderTasks = []),
                        i.renderTasks.push(n),
                        (i.operatorList = {
                          fnArray: [],
                          argsArray: [],
                          lastChunk: !1,
                        }),
                        this.transport.messageHandler.send(
                          'RenderPageRequest',
                          { pageIndex: this.pageIndex, intent: t },
                        )),
                      i.opListReadCapability.promise
                    );
                  },
                  getTextContent: function (e) {
                    return this.transport.messageHandler.sendWithPromise(
                      'GetTextContent',
                      {
                        pageIndex: this.pageNumber - 1,
                        normalizeWhitespace: !(
                          !e || e.normalizeWhitespace !== !0
                        ),
                        combineTextItems:
                          !e || e.disableCombineTextItems !== !0,
                      },
                    );
                  },
                  _destroy: function () {
                    (this.destroyed = !0),
                      (this.transport.pageCache[this.pageIndex] = null);
                    var e = [];
                    return (
                      Object.keys(this.intentStates).forEach(function (t) {
                        if ('oplist' !== t) {
                          var n = this.intentStates[t];
                          n.renderTasks.forEach(function (t) {
                            var n = t.capability.promise.catch(function () {});
                            e.push(n), t.cancel();
                          });
                        }
                      }, this),
                      this.objs.clear(),
                      (this.annotationsPromise = null),
                      (this.pendingCleanup = !1),
                      Promise.all(e)
                    );
                  },
                  destroy: function () {
                    x('page destroy method, use cleanup() instead'),
                      this.cleanup();
                  },
                  cleanup: function () {
                    (this.pendingCleanup = !0), this._tryCleanup();
                  },
                  _tryCleanup: function () {
                    this.pendingCleanup &&
                      !Object.keys(this.intentStates).some(function (e) {
                        var t = this.intentStates[e];
                        return (
                          0 !== t.renderTasks.length || t.receivingOperatorList
                        );
                      }, this) &&
                      (Object.keys(this.intentStates).forEach(function (e) {
                        delete this.intentStates[e];
                      }, this),
                      this.objs.clear(),
                      (this.annotationsPromise = null),
                      (this.pendingCleanup = !1));
                  },
                  _startRenderPage: function (e, t) {
                    var n = this.intentStates[t];
                    n.displayReadyCapability &&
                      n.displayReadyCapability.resolve(e);
                  },
                  _renderPageChunk: function (e, t) {
                    var n,
                      i,
                      r = this.intentStates[t];
                    for (n = 0, i = e.length; n < i; n++)
                      r.operatorList.fnArray.push(e.fnArray[n]),
                        r.operatorList.argsArray.push(e.argsArray[n]);
                    for (
                      r.operatorList.lastChunk = e.lastChunk, n = 0;
                      n < r.renderTasks.length;
                      n++
                    )
                      r.renderTasks[n].operatorListChanged();
                    e.lastChunk &&
                      ((r.receivingOperatorList = !1), this._tryCleanup());
                  },
                }),
                e
              );
            })(),
            K = (function () {
              function e() {
                return 'undefined' != typeof d
                  ? d
                  : U('workerSrc')
                  ? U('workerSrc')
                  : i
                  ? i.replace(/\.js$/i, '.worker.js')
                  : void P('No PDFJS.workerSrc specified');
              }
              function t() {
                if (s) return s.promise;
                s = S();
                var t =
                  z ||
                  function (t) {
                    A.loadScript(e(), function () {
                      t(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler);
                    });
                  };
                return t(s.resolve), s.promise;
              }
              function n(e) {
                (this._listeners = []),
                  (this._defer = e),
                  (this._deferred = Promise.resolve(void 0));
              }
              function r(e) {
                var t = "importScripts('" + e + "');";
                return URL.createObjectURL(new Blob([t]));
              }
              function a(e) {
                (this.name = e),
                  (this.destroyed = !1),
                  (this._readyCapability = S()),
                  (this._port = null),
                  (this._webWorker = null),
                  (this._messageHandler = null),
                  this._initialize();
              }
              var s,
                o = 0;
              return (
                (n.prototype = {
                  postMessage: function (e, t) {
                    function n(e) {
                      if ('object' != typeof e || null === e) return e;
                      if (i.has(e)) return i.get(e);
                      var r, a;
                      if ((a = e.buffer) && k(a)) {
                        var s = t && t.indexOf(a) >= 0;
                        return (
                          (r =
                            e === a
                              ? e
                              : s
                              ? new e.constructor(a, e.byteOffset, e.byteLength)
                              : new e.constructor(e)),
                          i.set(e, r),
                          r
                        );
                      }
                      (r = T(e) ? [] : {}), i.set(e, r);
                      for (var o in e) {
                        for (
                          var c, l = e;
                          !(c = Object.getOwnPropertyDescriptor(l, o));

                        )
                          l = Object.getPrototypeOf(l);
                        'undefined' != typeof c.value &&
                          'function' != typeof c.value &&
                          (r[o] = n(c.value));
                      }
                      return r;
                    }
                    if (!this._defer)
                      return void this._listeners.forEach(function (t) {
                        t.call(this, { data: e });
                      }, this);
                    var i = new WeakMap(),
                      r = { data: n(e) };
                    this._deferred.then(
                      function () {
                        this._listeners.forEach(function (e) {
                          e.call(this, r);
                        }, this);
                      }.bind(this),
                    );
                  },
                  addEventListener: function (e, t) {
                    this._listeners.push(t);
                  },
                  removeEventListener: function (e, t) {
                    var n = this._listeners.indexOf(t);
                    this._listeners.splice(n, 1);
                  },
                  terminate: function () {
                    this._listeners = [];
                  },
                }),
                (a.prototype = {
                  get promise() {
                    return this._readyCapability.promise;
                  },
                  get port() {
                    return this._port;
                  },
                  get messageHandler() {
                    return this._messageHandler;
                  },
                  _initialize: function () {
                    if (
                      !W &&
                      !U('disableWorker') &&
                      'undefined' != typeof Worker
                    ) {
                      var t = e();
                      try {
                        E(window.location.href, t) ||
                          (t = r(new URL(t, window.location).href));
                        var n = new Worker(t),
                          i = new p('main', 'worker', n),
                          a = function () {
                            n.removeEventListener('error', s),
                              i.destroy(),
                              n.terminate(),
                              this.destroyed
                                ? this._readyCapability.reject(
                                    new Error('Worker was destroyed'),
                                  )
                                : this._setupFakeWorker();
                          }.bind(this),
                          s = function (e) {
                            this._webWorker || a();
                          }.bind(this);
                        n.addEventListener('error', s),
                          i.on(
                            'test',
                            function (e) {
                              if (
                                (n.removeEventListener('error', s),
                                this.destroyed)
                              )
                                return void a();
                              var t = e && e.supportTypedArray;
                              t
                                ? ((this._messageHandler = i),
                                  (this._port = n),
                                  (this._webWorker = n),
                                  e.supportTransfers || (H = !0),
                                  this._readyCapability.resolve(),
                                  i.send('configure', { verbosity: C() }))
                                : (this._setupFakeWorker(),
                                  i.destroy(),
                                  n.terminate());
                            }.bind(this),
                          ),
                          i.on('console_log', function (e) {
                            console.log.apply(console, e);
                          }),
                          i.on('console_error', function (e) {
                            console.error.apply(console, e);
                          }),
                          i.on(
                            'ready',
                            function (e) {
                              if (
                                (n.removeEventListener('error', s),
                                this.destroyed)
                              )
                                return void a();
                              try {
                                o();
                              } catch (e) {
                                this._setupFakeWorker();
                              }
                            }.bind(this),
                          );
                        var o = function () {
                          var e = U('postMessageTransfers') && !H,
                            t = new Uint8Array([e ? 255 : 0]);
                          try {
                            i.send('test', t, [t.buffer]);
                          } catch (e) {
                            _('Cannot use postMessage transfers'),
                              (t[0] = 0),
                              i.send('test', t);
                          }
                        };
                        return void o();
                      } catch (e) {
                        _('The worker has been disabled.');
                      }
                    }
                    this._setupFakeWorker();
                  },
                  _setupFakeWorker: function () {
                    W ||
                      U('disableWorker') ||
                      (R('Setting up fake worker.'), (W = !0)),
                      t().then(
                        function (e) {
                          if (this.destroyed)
                            return void this._readyCapability.reject(
                              new Error('Worker was destroyed'),
                            );
                          var t = Uint8Array !== Float32Array,
                            i = new n(t);
                          this._port = i;
                          var r = 'fake' + o++,
                            a = new p(r + '_worker', r, i);
                          e.setup(a, i);
                          var s = new p(r, r + '_worker', i);
                          (this._messageHandler = s),
                            this._readyCapability.resolve();
                        }.bind(this),
                      );
                  },
                  destroy: function () {
                    (this.destroyed = !0),
                      this._webWorker &&
                        (this._webWorker.terminate(), (this._webWorker = null)),
                      (this._port = null),
                      this._messageHandler &&
                        (this._messageHandler.destroy(),
                        (this._messageHandler = null));
                  },
                }),
                a
              );
            })(),
            Z = (function () {
              function e(e, t, n) {
                (this.messageHandler = e),
                  (this.loadingTask = t),
                  (this.pdfDataRangeTransport = n),
                  (this.commonObjs = new $()),
                  (this.fontLoader = new O(t.docId)),
                  (this.destroyed = !1),
                  (this.destroyCapability = null),
                  (this._passwordCapability = null),
                  (this.pageCache = []),
                  (this.pagePromises = []),
                  (this.downloadInfoCapability = S()),
                  this.setupMessageHandler();
              }
              return (
                (e.prototype = {
                  destroy: function () {
                    if (this.destroyCapability)
                      return this.destroyCapability.promise;
                    (this.destroyed = !0),
                      (this.destroyCapability = S()),
                      this._passwordCapability &&
                        this._passwordCapability.reject(
                          new Error(
                            'Worker was destroyed during onPassword callback',
                          ),
                        );
                    var e = [];
                    this.pageCache.forEach(function (t) {
                      t && e.push(t._destroy());
                    }),
                      (this.pageCache = []),
                      (this.pagePromises = []);
                    var t = this,
                      n = this.messageHandler.sendWithPromise(
                        'Terminate',
                        null,
                      );
                    return (
                      e.push(n),
                      Promise.all(e).then(function () {
                        t.fontLoader.clear(),
                          t.pdfDataRangeTransport &&
                            (t.pdfDataRangeTransport.abort(),
                            (t.pdfDataRangeTransport = null)),
                          t.messageHandler &&
                            (t.messageHandler.destroy(),
                            (t.messageHandler = null)),
                          t.destroyCapability.resolve();
                      }, this.destroyCapability.reject),
                      this.destroyCapability.promise
                    );
                  },
                  setupMessageHandler: function () {
                    var e = this.messageHandler,
                      t = this.loadingTask,
                      n = this.pdfDataRangeTransport;
                    n &&
                      (n.addRangeListener(function (t, n) {
                        e.send('OnDataRange', { begin: t, chunk: n });
                      }),
                      n.addProgressListener(function (t) {
                        e.send('OnDataProgress', { loaded: t });
                      }),
                      n.addProgressiveReadListener(function (t) {
                        e.send('OnDataRange', { chunk: t });
                      }),
                      e.on(
                        'RequestDataRange',
                        function (e) {
                          n.requestDataRange(e.begin, e.end);
                        },
                        this,
                      )),
                      e.on(
                        'GetDoc',
                        function (e) {
                          var t = e.pdfInfo;
                          this.numPages = e.pdfInfo.numPages;
                          var n = this.loadingTask,
                            i = new J(t, this, n);
                          (this.pdfDocument = i), n._capability.resolve(i);
                        },
                        this,
                      ),
                      e.on(
                        'PasswordRequest',
                        function (e) {
                          if (
                            ((this._passwordCapability = S()), t.onPassword)
                          ) {
                            var n = function (e) {
                              this._passwordCapability.resolve({ password: e });
                            }.bind(this);
                            t.onPassword(n, e.code);
                          } else
                            this._passwordCapability.reject(
                              new v(e.message, e.code),
                            );
                          return this._passwordCapability.promise;
                        },
                        this,
                      ),
                      e.on(
                        'PasswordException',
                        function (e) {
                          t._capability.reject(new v(e.message, e.code));
                        },
                        this,
                      ),
                      e.on(
                        'InvalidPDF',
                        function (e) {
                          this.loadingTask._capability.reject(new f(e.message));
                        },
                        this,
                      ),
                      e.on(
                        'MissingPDF',
                        function (e) {
                          this.loadingTask._capability.reject(new g(e.message));
                        },
                        this,
                      ),
                      e.on(
                        'UnexpectedResponse',
                        function (e) {
                          this.loadingTask._capability.reject(
                            new w(e.message, e.status),
                          );
                        },
                        this,
                      ),
                      e.on(
                        'UnknownError',
                        function (e) {
                          this.loadingTask._capability.reject(
                            new y(e.message, e.details),
                          );
                        },
                        this,
                      ),
                      e.on(
                        'DataLoaded',
                        function (e) {
                          this.downloadInfoCapability.resolve(e);
                        },
                        this,
                      ),
                      e.on(
                        'PDFManagerReady',
                        function (e) {
                          this.pdfDataRangeTransport &&
                            this.pdfDataRangeTransport.transportReady();
                        },
                        this,
                      ),
                      e.on(
                        'StartRenderPage',
                        function (e) {
                          if (!this.destroyed) {
                            var t = this.pageCache[e.pageIndex];
                            t.stats.timeEnd('Page Request'),
                              t._startRenderPage(e.transparency, e.intent);
                          }
                        },
                        this,
                      ),
                      e.on(
                        'RenderPageChunk',
                        function (e) {
                          if (!this.destroyed) {
                            var t = this.pageCache[e.pageIndex];
                            t._renderPageChunk(e.operatorList, e.intent);
                          }
                        },
                        this,
                      ),
                      e.on(
                        'commonobj',
                        function (e) {
                          if (!this.destroyed) {
                            var t = e[0],
                              n = e[1];
                            if (!this.commonObjs.hasData(t))
                              switch (n) {
                                case 'Font':
                                  var i = e[2];
                                  if ('error' in i) {
                                    var r = i.error;
                                    R('Error during font loading: ' + r),
                                      this.commonObjs.resolve(t, r);
                                    break;
                                  }
                                  var a = null;
                                  U('pdfBug') &&
                                    F.FontInspector &&
                                    F.FontInspector.enabled &&
                                    (a = {
                                      registerFont: function (e, t) {
                                        F.FontInspector.fontAdded(e, t);
                                      },
                                    });
                                  var s = new N(i, {
                                    isEvalSuported: U('isEvalSupported'),
                                    disableFontFace: U('disableFontFace'),
                                    fontRegistry: a,
                                  });
                                  this.fontLoader.bind(
                                    [s],
                                    function (e) {
                                      this.commonObjs.resolve(t, s);
                                    }.bind(this),
                                  );
                                  break;
                                case 'FontPath':
                                  this.commonObjs.resolve(t, e[2]);
                                  break;
                                default:
                                  P('Got unknown common object type ' + n);
                              }
                          }
                        },
                        this,
                      ),
                      e.on(
                        'obj',
                        function (e) {
                          if (!this.destroyed) {
                            var t,
                              n = e[0],
                              i = e[1],
                              r = e[2],
                              a = this.pageCache[i];
                            if (!a.objs.hasData(n))
                              switch (r) {
                                case 'JpegStream':
                                  (t = e[3]), I(n, t, a.objs);
                                  break;
                                case 'Image':
                                  (t = e[3]), a.objs.resolve(n, t);
                                  var s = 8e6;
                                  t &&
                                    'data' in t &&
                                    t.data.length > s &&
                                    (a.cleanupAfterRender = !0);
                                  break;
                                default:
                                  P('Got unknown object type ' + r);
                              }
                          }
                        },
                        this,
                      ),
                      e.on(
                        'DocProgress',
                        function (e) {
                          if (!this.destroyed) {
                            var t = this.loadingTask;
                            t.onProgress &&
                              t.onProgress({
                                loaded: e.loaded,
                                total: e.total,
                              });
                          }
                        },
                        this,
                      ),
                      e.on(
                        'PageError',
                        function (e) {
                          if (!this.destroyed) {
                            var t = this.pageCache[e.pageNum - 1],
                              n = t.intentStates[e.intent];
                            if (
                              (n.displayReadyCapability
                                ? n.displayReadyCapability.reject(e.error)
                                : P(e.error),
                              n.operatorList)
                            ) {
                              n.operatorList.lastChunk = !0;
                              for (var i = 0; i < n.renderTasks.length; i++)
                                n.renderTasks[i].operatorListChanged();
                            }
                          }
                        },
                        this,
                      ),
                      e.on(
                        'UnsupportedFeature',
                        function (e) {
                          if (!this.destroyed) {
                            var t = e.featureId,
                              n = this.loadingTask;
                            n.onUnsupportedFeature && n.onUnsupportedFeature(t),
                              ne.notify(t);
                          }
                        },
                        this,
                      ),
                      e.on(
                        'JpegDecode',
                        function (e) {
                          if (this.destroyed)
                            return Promise.reject(
                              new Error('Worker was destroyed'),
                            );
                          var t = e[0],
                            n = e[1];
                          return 3 !== n && 1 !== n
                            ? Promise.reject(
                                new Error(
                                  'Only 3 components or 1 component can be returned',
                                ),
                              )
                            : new Promise(function (e, i) {
                                var r = new Image();
                                (r.onload = function () {
                                  var t = r.width,
                                    i = r.height,
                                    a = t * i,
                                    s = 4 * a,
                                    o = new Uint8Array(a * n),
                                    c = B(t, i),
                                    l = c.getContext('2d');
                                  l.drawImage(r, 0, 0);
                                  var h,
                                    u,
                                    d = l.getImageData(0, 0, t, i).data;
                                  if (3 === n)
                                    for (h = 0, u = 0; h < s; h += 4, u += 3)
                                      (o[u] = d[h]),
                                        (o[u + 1] = d[h + 1]),
                                        (o[u + 2] = d[h + 2]);
                                  else if (1 === n)
                                    for (h = 0, u = 0; h < s; h += 4, u++)
                                      o[u] = d[h];
                                  e({ data: o, width: t, height: i });
                                }),
                                  (r.onerror = function () {
                                    i(
                                      new Error(
                                        'JpegDecode failed to load image',
                                      ),
                                    );
                                  }),
                                  (r.src = t);
                              });
                        },
                        this,
                      );
                  },
                  getData: function () {
                    return this.messageHandler.sendWithPromise('GetData', null);
                  },
                  getPage: function (e, t) {
                    if (!L(e) || e <= 0 || e > this.numPages)
                      return Promise.reject(new Error('Invalid page request'));
                    var n = e - 1;
                    if (n in this.pagePromises) return this.pagePromises[n];
                    var i = this.messageHandler
                      .sendWithPromise('GetPage', { pageIndex: n })
                      .then(
                        function (e) {
                          if (this.destroyed)
                            throw new Error('Transport destroyed');
                          var t = new Q(n, e, this);
                          return (this.pageCache[n] = t), t;
                        }.bind(this),
                      );
                    return (this.pagePromises[n] = i), i;
                  },
                  getPageIndex: function (e) {
                    return this.messageHandler
                      .sendWithPromise('GetPageIndex', { ref: e })
                      .catch(function (e) {
                        return Promise.reject(new Error(e));
                      });
                  },
                  getAnnotations: function (e, t) {
                    return this.messageHandler.sendWithPromise(
                      'GetAnnotations',
                      { pageIndex: e, intent: t },
                    );
                  },
                  getDestinations: function () {
                    return this.messageHandler.sendWithPromise(
                      'GetDestinations',
                      null,
                    );
                  },
                  getDestination: function (e) {
                    return this.messageHandler.sendWithPromise(
                      'GetDestination',
                      { id: e },
                    );
                  },
                  getPageLabels: function () {
                    return this.messageHandler.sendWithPromise(
                      'GetPageLabels',
                      null,
                    );
                  },
                  getAttachments: function () {
                    return this.messageHandler.sendWithPromise(
                      'GetAttachments',
                      null,
                    );
                  },
                  getJavaScript: function () {
                    return this.messageHandler.sendWithPromise(
                      'GetJavaScript',
                      null,
                    );
                  },
                  getOutline: function () {
                    return this.messageHandler.sendWithPromise(
                      'GetOutline',
                      null,
                    );
                  },
                  getMetadata: function () {
                    return this.messageHandler
                      .sendWithPromise('GetMetadata', null)
                      .then(function (e) {
                        return {
                          info: e[0],
                          metadata: e[1] ? new j(e[1]) : null,
                        };
                      });
                  },
                  getStats: function () {
                    return this.messageHandler.sendWithPromise(
                      'GetStats',
                      null,
                    );
                  },
                  startCleanup: function () {
                    this.messageHandler.sendWithPromise('Cleanup', null).then(
                      function () {
                        for (var e = 0, t = this.pageCache.length; e < t; e++) {
                          var n = this.pageCache[e];
                          n && n.cleanup();
                        }
                        this.commonObjs.clear(), this.fontLoader.clear();
                      }.bind(this),
                    );
                  },
                }),
                e
              );
            })(),
            $ = (function () {
              function e() {
                this.objs = Object.create(null);
              }
              return (
                (e.prototype = {
                  ensureObj: function (e) {
                    if (this.objs[e]) return this.objs[e];
                    var t = { capability: S(), data: null, resolved: !1 };
                    return (this.objs[e] = t), t;
                  },
                  get: function (e, t) {
                    if (t)
                      return this.ensureObj(e).capability.promise.then(t), null;
                    var n = this.objs[e];
                    return (
                      (n && n.resolved) ||
                        P("Requesting object that isn't resolved yet " + e),
                      n.data
                    );
                  },
                  resolve: function (e, t) {
                    var n = this.ensureObj(e);
                    (n.resolved = !0), (n.data = t), n.capability.resolve(t);
                  },
                  isResolved: function (e) {
                    var t = this.objs;
                    return !!t[e] && t[e].resolved;
                  },
                  hasData: function (e) {
                    return this.isResolved(e);
                  },
                  getData: function (e) {
                    var t = this.objs;
                    return t[e] && t[e].resolved ? t[e].data : null;
                  },
                  clear: function () {
                    this.objs = Object.create(null);
                  },
                }),
                e
              );
            })(),
            ee = (function () {
              function e(e) {
                (this._internalRenderTask = e), (this.onContinue = null);
              }
              return (
                (e.prototype = {
                  get promise() {
                    return this._internalRenderTask.capability.promise;
                  },
                  cancel: function () {
                    this._internalRenderTask.cancel();
                  },
                  then: function (e, t) {
                    return this.promise.then.apply(this.promise, arguments);
                  },
                }),
                e
              );
            })(),
            te = (function () {
              function e(e, t, n, i, r, a) {
                (this.callback = e),
                  (this.params = t),
                  (this.objs = n),
                  (this.commonObjs = i),
                  (this.operatorListIdx = null),
                  (this.operatorList = r),
                  (this.pageNumber = a),
                  (this.running = !1),
                  (this.graphicsReadyCallback = null),
                  (this.graphicsReady = !1),
                  (this.useRequestAnimationFrame = !1),
                  (this.cancelled = !1),
                  (this.capability = S()),
                  (this.task = new ee(this)),
                  (this._continueBound = this._continue.bind(this)),
                  (this._scheduleNextBound = this._scheduleNext.bind(this)),
                  (this._nextBound = this._next.bind(this));
              }
              return (
                (e.prototype = {
                  initializeGraphics: function (e) {
                    if (!this.cancelled) {
                      U('pdfBug') &&
                        F.StepperManager &&
                        F.StepperManager.enabled &&
                        ((this.stepper = F.StepperManager.create(
                          this.pageNumber - 1,
                        )),
                        this.stepper.init(this.operatorList),
                        (this.stepper.nextBreakPoint =
                          this.stepper.getNextBreakPoint()));
                      var t = this.params;
                      (this.gfx = new M(
                        t.canvasContext,
                        this.commonObjs,
                        this.objs,
                        t.imageLayer,
                      )),
                        this.gfx.beginDrawing(t.transform, t.viewport, e),
                        (this.operatorListIdx = 0),
                        (this.graphicsReady = !0),
                        this.graphicsReadyCallback &&
                          this.graphicsReadyCallback();
                    }
                  },
                  cancel: function () {
                    (this.running = !1),
                      (this.cancelled = !0),
                      this.callback('cancelled');
                  },
                  operatorListChanged: function () {
                    return this.graphicsReady
                      ? (this.stepper &&
                          this.stepper.updateOperatorList(this.operatorList),
                        void (this.running || this._continue()))
                      : void (
                          this.graphicsReadyCallback ||
                          (this.graphicsReadyCallback = this._continueBound)
                        );
                  },
                  _continue: function () {
                    (this.running = !0),
                      this.cancelled ||
                        (this.task.onContinue
                          ? this.task.onContinue(this._scheduleNextBound)
                          : this._scheduleNext());
                  },
                  _scheduleNext: function () {
                    this.useRequestAnimationFrame &&
                    'undefined' != typeof window
                      ? window.requestAnimationFrame(this._nextBound)
                      : Promise.resolve(void 0).then(this._nextBound);
                  },
                  _next: function () {
                    this.cancelled ||
                      ((this.operatorListIdx = this.gfx.executeOperatorList(
                        this.operatorList,
                        this.operatorListIdx,
                        this._continueBound,
                        this.stepper,
                      )),
                      this.operatorListIdx ===
                        this.operatorList.argsArray.length &&
                        ((this.running = !1),
                        this.operatorList.lastChunk &&
                          (this.gfx.endDrawing(), this.callback())));
                  },
                }),
                e
              );
            })(),
            ne = (function () {
              var e = [];
              return {
                listen: function (t) {
                  x(
                    'Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead',
                  ),
                    e.push(t);
                },
                notify: function (t) {
                  for (var n = 0, i = e.length; n < i; n++) e[n](t);
                },
              };
            })();
          'undefined' != typeof t && (e.version = t),
            'undefined' != typeof n && (e.build = n),
            (e.getDocument = h),
            (e.PDFDataRangeTransport = Y),
            (e.PDFWorker = K),
            (e.PDFDocumentProxy = J),
            (e.PDFPageProxy = Q),
            (e._UnsupportedManager = ne);
        }),
        (function (e, t) {
          t(
            (e.pdfjsDisplayGlobal = {}),
            e.pdfjsSharedUtil,
            e.pdfjsDisplayDOMUtils,
            e.pdfjsDisplayAPI,
            e.pdfjsDisplayAnnotationLayer,
            e.pdfjsDisplayTextLayer,
            e.pdfjsDisplayMetadata,
            e.pdfjsDisplaySVG,
          );
        })(this, function (e, i, r, a, s, o, c, l) {
          var h = i.globalScope,
            u = i.deprecated,
            d = i.warn,
            f = r.LinkTarget,
            p = r.DEFAULT_LINK_REL,
            g = 'undefined' == typeof window;
          h.PDFJS || (h.PDFJS = {});
          var m = h.PDFJS;
          'undefined' != typeof t && (m.version = t),
            'undefined' != typeof n && (m.build = n),
            (m.pdfBug = !1),
            void 0 !== m.verbosity && i.setVerbosityLevel(m.verbosity),
            delete m.verbosity,
            Object.defineProperty(m, 'verbosity', {
              get: function () {
                return i.getVerbosityLevel();
              },
              set: function (e) {
                i.setVerbosityLevel(e);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (m.VERBOSITY_LEVELS = i.VERBOSITY_LEVELS),
            (m.OPS = i.OPS),
            (m.UNSUPPORTED_FEATURES = i.UNSUPPORTED_FEATURES),
            (m.isValidUrl = r.isValidUrl),
            (m.shadow = i.shadow),
            (m.createBlob = i.createBlob),
            (m.createObjectURL = function (e, t) {
              return i.createObjectURL(e, t, m.disableCreateObjectURL);
            }),
            Object.defineProperty(m, 'isLittleEndian', {
              configurable: !0,
              get: function () {
                var e = i.isLittleEndian();
                return i.shadow(m, 'isLittleEndian', e);
              },
            }),
            (m.removeNullCharacters = i.removeNullCharacters),
            (m.PasswordResponses = i.PasswordResponses),
            (m.PasswordException = i.PasswordException),
            (m.UnknownErrorException = i.UnknownErrorException),
            (m.InvalidPDFException = i.InvalidPDFException),
            (m.MissingPDFException = i.MissingPDFException),
            (m.UnexpectedResponseException = i.UnexpectedResponseException),
            (m.Util = i.Util),
            (m.PageViewport = i.PageViewport),
            (m.createPromiseCapability = i.createPromiseCapability),
            (m.maxImageSize = void 0 === m.maxImageSize ? -1 : m.maxImageSize),
            (m.cMapUrl = void 0 === m.cMapUrl ? null : m.cMapUrl),
            (m.cMapPacked = void 0 !== m.cMapPacked && m.cMapPacked),
            (m.disableFontFace =
              void 0 !== m.disableFontFace && m.disableFontFace),
            (m.imageResourcesPath =
              void 0 === m.imageResourcesPath ? '' : m.imageResourcesPath),
            (m.disableWorker = void 0 !== m.disableWorker && m.disableWorker),
            (m.workerSrc = void 0 === m.workerSrc ? null : m.workerSrc),
            (m.disableRange = void 0 !== m.disableRange && m.disableRange),
            (m.disableStream = void 0 !== m.disableStream && m.disableStream),
            (m.disableAutoFetch =
              void 0 !== m.disableAutoFetch && m.disableAutoFetch),
            (m.pdfBug = void 0 !== m.pdfBug && m.pdfBug),
            (m.postMessageTransfers =
              void 0 === m.postMessageTransfers || m.postMessageTransfers),
            (m.disableCreateObjectURL =
              void 0 !== m.disableCreateObjectURL && m.disableCreateObjectURL),
            (m.disableWebGL = void 0 === m.disableWebGL || m.disableWebGL),
            (m.externalLinkTarget =
              void 0 === m.externalLinkTarget ? f.NONE : m.externalLinkTarget),
            (m.externalLinkRel =
              void 0 === m.externalLinkRel ? p : m.externalLinkRel),
            (m.isEvalSupported =
              void 0 === m.isEvalSupported || m.isEvalSupported);
          var v = m.openExternalLinksInNewWindow;
          delete m.openExternalLinksInNewWindow,
            Object.defineProperty(m, 'openExternalLinksInNewWindow', {
              get: function () {
                return m.externalLinkTarget === f.BLANK;
              },
              set: function (e) {
                return (
                  e &&
                    u(
                      'PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.',
                    ),
                  m.externalLinkTarget !== f.NONE
                    ? void d('PDFJS.externalLinkTarget is already initialized')
                    : void (m.externalLinkTarget = e ? f.BLANK : f.NONE)
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            v && (m.openExternalLinksInNewWindow = v),
            (m.getDocument = a.getDocument),
            (m.PDFDataRangeTransport = a.PDFDataRangeTransport),
            (m.PDFWorker = a.PDFWorker),
            Object.defineProperty(m, 'hasCanvasTypedArrays', {
              configurable: !0,
              get: function () {
                var e = r.hasCanvasTypedArrays();
                return i.shadow(m, 'hasCanvasTypedArrays', e);
              },
            }),
            (m.CustomStyle = r.CustomStyle),
            (m.LinkTarget = f),
            (m.addLinkAttributes = r.addLinkAttributes),
            (m.getFilenameFromUrl = r.getFilenameFromUrl),
            (m.isExternalLinkTargetSet = r.isExternalLinkTargetSet),
            (m.AnnotationLayer = s.AnnotationLayer),
            (m.renderTextLayer = o.renderTextLayer),
            (m.Metadata = c.Metadata),
            (m.SVGGraphics = l.SVGGraphics),
            (m.UnsupportedManager = a._UnsupportedManager),
            (e.globalScope = h),
            (e.isWorker = g),
            (e.PDFJS = h.PDFJS);
        });
    }.call(r),
      (e.PDFJS = r.pdfjsDisplayGlobal.PDFJS),
      (e.build = r.pdfjsDisplayAPI.build),
      (e.version = r.pdfjsDisplayAPI.version),
      (e.getDocument = r.pdfjsDisplayAPI.getDocument),
      (e.PDFDataRangeTransport = r.pdfjsDisplayAPI.PDFDataRangeTransport),
      (e.PDFWorker = r.pdfjsDisplayAPI.PDFWorker),
      (e.renderTextLayer = r.pdfjsDisplayTextLayer.renderTextLayer),
      (e.AnnotationLayer = r.pdfjsDisplayAnnotationLayer.AnnotationLayer),
      (e.CustomStyle = r.pdfjsDisplayDOMUtils.CustomStyle),
      (e.createPromiseCapability = r.pdfjsSharedUtil.createPromiseCapability),
      (e.PasswordResponses = r.pdfjsSharedUtil.PasswordResponses),
      (e.InvalidPDFException = r.pdfjsSharedUtil.InvalidPDFException),
      (e.MissingPDFException = r.pdfjsSharedUtil.MissingPDFException),
      (e.SVGGraphics = r.pdfjsDisplaySVG.SVGGraphics),
      (e.UnexpectedResponseException =
        r.pdfjsSharedUtil.UnexpectedResponseException),
      (e.OPS = r.pdfjsSharedUtil.OPS),
      (e.UNSUPPORTED_FEATURES = r.pdfjsSharedUtil.UNSUPPORTED_FEATURES),
      (e.isValidUrl = r.pdfjsDisplayDOMUtils.isValidUrl),
      (e.createValidAbsoluteUrl = r.pdfjsSharedUtil.createValidAbsoluteUrl),
      (e.createObjectURL = r.pdfjsSharedUtil.createObjectURL),
      (e.removeNullCharacters = r.pdfjsSharedUtil.removeNullCharacters),
      (e.shadow = r.pdfjsSharedUtil.shadow),
      (e.createBlob = r.pdfjsSharedUtil.createBlob),
      (e.getFilenameFromUrl = r.pdfjsDisplayDOMUtils.getFilenameFromUrl),
      (e.addLinkAttributes = r.pdfjsDisplayDOMUtils.addLinkAttributes));
  }));
var DEFAULT_URL = 'compressed.tracemonkey-pldi-09.pdf',
  pdfjsWebLibs;
(pdfjsWebLibs = { pdfjsWebPDFJS: window.pdfjsDistBuildPdf }),
  function () {
    !(function (e, t) {
      t((e.pdfjsWebGrabToPan = {}));
    })(this, function (e) {
      function t(e) {
        (this.element = e.element),
          (this.document = e.element.ownerDocument),
          'function' == typeof e.ignoreTarget &&
            (this.ignoreTarget = e.ignoreTarget),
          (this.onActiveChanged = e.onActiveChanged),
          (this.activate = this.activate.bind(this)),
          (this.deactivate = this.deactivate.bind(this)),
          (this.toggle = this.toggle.bind(this)),
          (this._onmousedown = this._onmousedown.bind(this)),
          (this._onmousemove = this._onmousemove.bind(this)),
          (this._endPan = this._endPan.bind(this));
        var t = (this.overlay = document.createElement('div'));
        t.className = 'grab-to-pan-grabbing';
      }
      function n(e) {
        return 'buttons' in e && r
          ? !(1 & e.buttons)
          : s || o
          ? 0 === e.which
          : void 0;
      }
      t.prototype = {
        CSS_CLASS_GRAB: 'grab-to-pan-grab',
        activate: function () {
          this.active ||
            ((this.active = !0),
            this.element.addEventListener('mousedown', this._onmousedown, !0),
            this.element.classList.add(this.CSS_CLASS_GRAB),
            this.onActiveChanged && this.onActiveChanged(!0));
        },
        deactivate: function () {
          this.active &&
            ((this.active = !1),
            this.element.removeEventListener(
              'mousedown',
              this._onmousedown,
              !0,
            ),
            this._endPan(),
            this.element.classList.remove(this.CSS_CLASS_GRAB),
            this.onActiveChanged && this.onActiveChanged(!1));
        },
        toggle: function () {
          this.active ? this.deactivate() : this.activate();
        },
        ignoreTarget: function (e) {
          return e[i](
            'a[href], a[href] *, input, textarea, button, button *, select, option',
          );
        },
        _onmousedown: function (e) {
          if (0 === e.button && !this.ignoreTarget(e.target)) {
            if (e.originalTarget)
              try {
                e.originalTarget.tagName;
              } catch (e) {
                return;
              }
            (this.scrollLeftStart = this.element.scrollLeft),
              (this.scrollTopStart = this.element.scrollTop),
              (this.clientXStart = e.clientX),
              (this.clientYStart = e.clientY),
              this.document.addEventListener(
                'mousemove',
                this._onmousemove,
                !0,
              ),
              this.document.addEventListener('mouseup', this._endPan, !0),
              this.element.addEventListener('scroll', this._endPan, !0),
              e.preventDefault(),
              e.stopPropagation();
            var t = document.activeElement;
            t && !t.contains(e.target) && t.blur();
          }
        },
        _onmousemove: function (e) {
          if (
            (this.element.removeEventListener('scroll', this._endPan, !0), n(e))
          )
            return void this._endPan();
          var t = e.clientX - this.clientXStart,
            i = e.clientY - this.clientYStart,
            r = this.scrollTopStart - i,
            a = this.scrollLeftStart - t;
          this.element.scrollTo
            ? this.element.scrollTo({ top: r, left: a, behavior: 'instant' })
            : ((this.element.scrollTop = r), (this.element.scrollLeft = a)),
            this.overlay.parentNode || document.body.appendChild(this.overlay);
        },
        _endPan: function () {
          this.element.removeEventListener('scroll', this._endPan, !0),
            this.document.removeEventListener(
              'mousemove',
              this._onmousemove,
              !0,
            ),
            this.document.removeEventListener('mouseup', this._endPan, !0),
            this.overlay.parentNode &&
              this.overlay.parentNode.removeChild(this.overlay);
        },
      };
      var i;
      ['webkitM', 'mozM', 'msM', 'oM', 'm'].some(function (e) {
        var t = e + 'atches';
        return (
          t in document.documentElement && (i = t),
          (t += 'Selector'),
          t in document.documentElement && (i = t),
          i
        );
      });
      var r = !document.documentMode || document.documentMode > 9,
        a = window.chrome,
        s = a && (a.webstore || a.app),
        o =
          /Apple/.test(navigator.vendor) &&
          /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);
      e.GrabToPan = t;
    }),
      (function (e, t) {
        t((e.pdfjsWebOverlayManager = {}));
      })(this, function (e) {
        var t = {
          overlays: {},
          active: null,
          register: function (e, t, n, i) {
            return new Promise(
              function (r) {
                var a;
                if (!(e && t && (a = t.parentNode)))
                  throw new Error('Not enough parameters.');
                if (this.overlays[e])
                  throw new Error('The overlay is already registered.');
                (this.overlays[e] = {
                  element: t,
                  container: a,
                  callerCloseMethod: n || null,
                  canForceClose: i || !1,
                }),
                  r();
              }.bind(this),
            );
          },
          unregister: function (e) {
            return new Promise(
              function (t) {
                if (!this.overlays[e])
                  throw new Error('The overlay does not exist.');
                if (this.active === e)
                  throw new Error(
                    'The overlay cannot be removed while it is active.',
                  );
                delete this.overlays[e], t();
              }.bind(this),
            );
          },
          open: function (e) {
            return new Promise(
              function (t) {
                if (!this.overlays[e])
                  throw new Error('The overlay does not exist.');
                if (this.active) {
                  if (!this.overlays[e].canForceClose)
                    throw this.active === e
                      ? new Error('The overlay is already active.')
                      : new Error('Another overlay is currently active.');
                  this._closeThroughCaller();
                }
                (this.active = e),
                  this.overlays[this.active].element.classList.remove('hidden'),
                  this.overlays[this.active].container.classList.remove(
                    'hidden',
                  ),
                  window.addEventListener('keydown', this._keyDown),
                  t();
              }.bind(this),
            );
          },
          close: function (e) {
            return new Promise(
              function (t) {
                if (!this.overlays[e])
                  throw new Error('The overlay does not exist.');
                if (!this.active)
                  throw new Error('The overlay is currently not active.');
                if (this.active !== e)
                  throw new Error('Another overlay is currently active.');
                this.overlays[this.active].container.classList.add('hidden'),
                  this.overlays[this.active].element.classList.add('hidden'),
                  (this.active = null),
                  window.removeEventListener('keydown', this._keyDown),
                  t();
              }.bind(this),
            );
          },
          _keyDown: function (e) {
            var n = t;
            n.active &&
              27 === e.keyCode &&
              (n._closeThroughCaller(), e.preventDefault());
          },
          _closeThroughCaller: function () {
            this.overlays[this.active].callerCloseMethod &&
              this.overlays[this.active].callerCloseMethod(),
              this.active && this.close(this.active);
          },
        };
        e.OverlayManager = t;
      }),
      (function (e, t) {
        t((e.pdfjsWebPDFRenderingQueue = {}));
      })(this, function (e) {
        var t = 3e4,
          n = { INITIAL: 0, RUNNING: 1, PAUSED: 2, FINISHED: 3 },
          i = (function () {
            function e() {
              (this.pdfViewer = null),
                (this.pdfThumbnailViewer = null),
                (this.onIdle = null),
                (this.highestPriorityPage = null),
                (this.idleTimeout = null),
                (this.printing = !1),
                (this.isThumbnailViewEnabled = !1);
            }
            return (
              (e.prototype = {
                setViewer: function (e) {
                  this.pdfViewer = e;
                },
                setThumbnailViewer: function (e) {
                  this.pdfThumbnailViewer = e;
                },
                isHighestPriority: function (e) {
                  return this.highestPriorityPage === e.renderingId;
                },
                renderHighestPriority: function (e) {
                  this.idleTimeout &&
                    (clearTimeout(this.idleTimeout), (this.idleTimeout = null)),
                    this.pdfViewer.forceRendering(e) ||
                      (this.pdfThumbnailViewer &&
                        this.isThumbnailViewEnabled &&
                        this.pdfThumbnailViewer.forceRendering()) ||
                      this.printing ||
                      (this.onIdle &&
                        (this.idleTimeout = setTimeout(
                          this.onIdle.bind(this),
                          t,
                        )));
                },
                getHighestPriority: function (e, t, n) {
                  var i = e.views,
                    r = i.length;
                  if (0 === r) return !1;
                  for (var a = 0; a < r; ++a) {
                    var s = i[a].view;
                    if (!this.isViewFinished(s)) return s;
                  }
                  if (n) {
                    var o = e.last.id;
                    if (t[o] && !this.isViewFinished(t[o])) return t[o];
                  } else {
                    var c = e.first.id - 2;
                    if (t[c] && !this.isViewFinished(t[c])) return t[c];
                  }
                  return null;
                },
                isViewFinished: function (e) {
                  return e.renderingState === n.FINISHED;
                },
                renderView: function (e) {
                  var t = e.renderingState;
                  switch (t) {
                    case n.FINISHED:
                      return !1;
                    case n.PAUSED:
                      (this.highestPriorityPage = e.renderingId), e.resume();
                      break;
                    case n.RUNNING:
                      this.highestPriorityPage = e.renderingId;
                      break;
                    case n.INITIAL:
                      this.highestPriorityPage = e.renderingId;
                      var i = function () {
                        this.renderHighestPriority();
                      }.bind(this);
                      e.draw().then(i, i);
                  }
                  return !0;
                },
              }),
              e
            );
          })();
        (e.RenderingStates = n), (e.PDFRenderingQueue = i);
      }),
      (function (e, t) {
        t((e.pdfjsWebPreferences = {}));
      })(this, function (e) {
        function t() {
          return (
            i ||
              (i = Promise.resolve({
                showPreviousViewOnLoad: !0,
                defaultZoomValue: '',
                sidebarViewOnLoad: 0,
                enableHandToolOnLoad: !1,
                enableWebGL: !1,
                pdfBugEnabled: !1,
                disableRange: !1,
                disableStream: !1,
                disableAutoFetch: !1,
                disableFontFace: !1,
                disableTextLayer: !1,
                useOnlyCssZoom: !1,
                externalLinkTarget: 0,
                enhanceTextSelection: !1,
                renderer: 'canvas',
                renderInteractiveForms: !1,
                disablePageLabels: !1,
              })),
            i
          );
        }
        function n(e) {
          var t = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t;
        }
        var i = null,
          r = {
            prefs: null,
            isInitializedPromiseResolved: !1,
            initializedPromise: null,
            initialize: function () {
              return (this.initializedPromise = t()
                .then(
                  function (e) {
                    return (
                      Object.defineProperty(this, 'defaults', {
                        value: Object.freeze(e),
                        writable: !1,
                        enumerable: !0,
                        configurable: !1,
                      }),
                      (this.prefs = n(e)),
                      this._readFromStorage(e)
                    );
                  }.bind(this),
                )
                .then(
                  function (e) {
                    (this.isInitializedPromiseResolved = !0),
                      e && (this.prefs = e);
                  }.bind(this),
                ));
            },
            _writeToStorage: function (e) {
              return Promise.resolve();
            },
            _readFromStorage: function (e) {
              return Promise.resolve();
            },
            reset: function () {
              return this.initializedPromise.then(
                function () {
                  return (
                    (this.prefs = n(this.defaults)),
                    this._writeToStorage(this.defaults)
                  );
                }.bind(this),
              );
            },
            reload: function () {
              return this.initializedPromise.then(
                function () {
                  this._readFromStorage(this.defaults).then(
                    function (e) {
                      e && (this.prefs = e);
                    }.bind(this),
                  );
                }.bind(this),
              );
            },
            set: function (e, t) {
              return this.initializedPromise.then(
                function () {
                  if (void 0 === this.defaults[e])
                    throw new Error(
                      "preferencesSet: '" + e + "' is undefined.",
                    );
                  if (void 0 === t)
                    throw new Error('preferencesSet: no value is specified.');
                  var n = typeof t,
                    i = typeof this.defaults[e];
                  if (n !== i) {
                    if ('number' !== n || 'string' !== i)
                      throw new Error(
                        "Preferences_set: '" +
                          t +
                          '\' is a "' +
                          n +
                          '", expected "' +
                          i +
                          '".',
                      );
                    t = t.toString();
                  } else if ('number' === n && (0 | t) !== t)
                    throw new Error(
                      "Preferences_set: '" + t + '\' must be an "integer".',
                    );
                  return (this.prefs[e] = t), this._writeToStorage(this.prefs);
                }.bind(this),
              );
            },
            get: function (e) {
              return this.initializedPromise.then(
                function () {
                  var t = this.defaults[e];
                  if (void 0 === t)
                    throw new Error(
                      "preferencesGet: '" + e + "' is undefined.",
                    );
                  var n = this.prefs[e];
                  return void 0 !== n ? n : t;
                }.bind(this),
              );
            },
          };
        (r._writeToStorage = function (e) {
          return new Promise(function (t) {
            localStorage.setItem('pdfjs.preferences', JSON.stringify(e)), t();
          });
        }),
          (r._readFromStorage = function (e) {
            return new Promise(function (e) {
              var t = JSON.parse(localStorage.getItem('pdfjs.preferences'));
              e(t);
            });
          }),
          (e.Preferences = r);
      }),
      (function (e, t) {
        t((e.pdfjsWebViewHistory = {}));
      })(this, function (e) {
        var t = 20,
          n = (function () {
            function e(e, n) {
              (this.fingerprint = e),
                (this.cacheSize = n || t),
                (this.isInitializedPromiseResolved = !1),
                (this.initializedPromise = this._readFromStorage().then(
                  function (e) {
                    this.isInitializedPromiseResolved = !0;
                    var t = JSON.parse(e || '{}');
                    'files' in t || (t.files = []),
                      t.files.length >= this.cacheSize && t.files.shift();
                    for (var n, i = 0, r = t.files.length; i < r; i++) {
                      var a = t.files[i];
                      if (a.fingerprint === this.fingerprint) {
                        n = i;
                        break;
                      }
                    }
                    'number' != typeof n &&
                      (n = t.files.push({ fingerprint: this.fingerprint }) - 1),
                      (this.file = t.files[n]),
                      (this.database = t);
                  }.bind(this),
                ));
            }
            return (
              (e.prototype = {
                _writeToStorage: function () {
                  return new Promise(
                    function (e) {
                      var t = JSON.stringify(this.database);
                      localStorage.setItem('pdfjs.history', t), e();
                    }.bind(this),
                  );
                },
                _readFromStorage: function () {
                  return new Promise(function (e) {
                    var t = localStorage.getItem('pdfjs.history');
                    if (!t) {
                      var n = localStorage.getItem('database');
                      if (n)
                        try {
                          var i = JSON.parse(n);
                          'string' == typeof i.files[0].fingerprint &&
                            (localStorage.setItem('pdfjs.history', n),
                            localStorage.removeItem('database'),
                            (t = n));
                        } catch (e) {}
                    }
                    e(t);
                  });
                },
                set: function (e, t) {
                  if (this.isInitializedPromiseResolved)
                    return (this.file[e] = t), this._writeToStorage();
                },
                setMultiple: function (e) {
                  if (this.isInitializedPromiseResolved) {
                    for (var t in e) this.file[t] = e[t];
                    return this._writeToStorage();
                  }
                },
                get: function (e, t) {
                  return this.isInitializedPromiseResolved
                    ? this.file[e] || t
                    : t;
                },
              }),
              e
            );
          })();
        e.ViewHistory = n;
      }),
      (function (e, t) {
        t((e.pdfjsWebDownloadManager = {}), e.pdfjsWebPDFJS);
      })(this, function (e, t) {
        function n(e, t) {
          var n = document.createElement('a');
          if (n.click)
            (n.href = e),
              (n.target = '_parent'),
              'download' in n && (n.download = t),
              (document.body || document.documentElement).appendChild(n),
              n.click(),
              n.parentNode.removeChild(n);
          else {
            if (
              window.top === window &&
              e.split('#')[0] === window.location.href.split('#')[0]
            ) {
              var i = e.indexOf('?') === -1 ? '?' : '&';
              e = e.replace(/#|$/, i + '$&');
            }
            window.open(e, '_parent');
          }
        }
        function i() {}
        (i.prototype = {
          downloadUrl: function (e, i) {
            t.createValidAbsoluteUrl(e, 'http://example.com') &&
              n(e + '#pdfjs.action=download', i);
          },
          downloadData: function (e, i, r) {
            if (navigator.msSaveBlob)
              return navigator.msSaveBlob(new Blob([e], { type: r }), i);
            var a = t.createObjectURL(e, r, t.PDFJS.disableCreateObjectURL);
            n(a, i);
          },
          download: function (e, t, i) {
            if (!URL) return void this.downloadUrl(t, i);
            if (navigator.msSaveBlob)
              return void (
                navigator.msSaveBlob(e, i) || this.downloadUrl(t, i)
              );
            var r = URL.createObjectURL(e);
            n(r, i);
          },
        }),
          (e.DownloadManager = i);
      }),
      (function (e, t) {
        t((e.pdfjsWebPDFAttachmentViewer = {}), e.pdfjsWebPDFJS);
      })(this, function (e, t) {
        var n = (function () {
          function e(e) {
            (this.attachments = null),
              (this.container = e.container),
              (this.eventBus = e.eventBus),
              (this.downloadManager = e.downloadManager),
              (this._renderedCapability = t.createPromiseCapability()),
              this.eventBus.on(
                'fileattachmentannotation',
                this._appendAttachment.bind(this),
              );
          }
          return (
            (e.prototype = {
              reset: function (e) {
                this.attachments = null;
                for (var n = this.container; n.firstChild; )
                  n.removeChild(n.firstChild);
                e || (this._renderedCapability = t.createPromiseCapability());
              },
              _dispatchEvent: function (e) {
                this.eventBus.dispatch('attachmentsloaded', {
                  source: this,
                  attachmentsCount: e,
                }),
                  this._renderedCapability.resolve();
              },
              _bindLink: function (e, t, n) {
                e.onclick = function (e) {
                  return this.downloadManager.downloadData(t, n, ''), !1;
                }.bind(this);
              },
              render: function (e) {
                e = e || {};
                var n = e.attachments || null,
                  i = 0;
                if (this.attachments) {
                  var r = e.keepRenderedCapability === !0;
                  this.reset(r);
                }
                if (((this.attachments = n), !n))
                  return void this._dispatchEvent(i);
                var a = Object.keys(n).sort(function (e, t) {
                  return e.toLowerCase().localeCompare(t.toLowerCase());
                });
                i = a.length;
                for (var s = 0; s < i; s++) {
                  var o = n[a[s]],
                    c = t.getFilenameFromUrl(o.filename),
                    l = document.createElement('div');
                  l.className = 'attachmentsItem';
                  var h = document.createElement('button');
                  this._bindLink(h, o.content, c),
                    (h.textContent = t.removeNullCharacters(c)),
                    l.appendChild(h),
                    this.container.appendChild(l);
                }
                this._dispatchEvent(i);
              },
              _appendAttachment: function (e) {
                this._renderedCapability.promise.then(
                  function (e, t, n) {
                    var i = this.attachments;
                    if (i) {
                      for (var r in i) if (e === r) return;
                    } else i = Object.create(null);
                    (i[e] = { filename: t, content: n }),
                      this.render({
                        attachments: i,
                        keepRenderedCapability: !0,
                      });
                  }.bind(this, e.id, e.filename, e.content),
                );
              },
            }),
            e
          );
        })();
        e.PDFAttachmentViewer = n;
      }),
      (function (e, t) {
        t((e.pdfjsWebPDFOutlineViewer = {}), e.pdfjsWebPDFJS);
      })(this, function (e, t) {
        var n = t.PDFJS,
          i = '–',
          r = (function () {
            function e(e) {
              (this.outline = null),
                (this.lastToggleIsShow = !0),
                (this.container = e.container),
                (this.linkService = e.linkService),
                (this.eventBus = e.eventBus);
            }
            return (
              (e.prototype = {
                reset: function () {
                  (this.outline = null), (this.lastToggleIsShow = !0);
                  for (var e = this.container; e.firstChild; )
                    e.removeChild(e.firstChild);
                },
                _dispatchEvent: function (e) {
                  this.eventBus.dispatch('outlineloaded', {
                    source: this,
                    outlineCount: e,
                  });
                },
                _bindLink: function (e, i) {
                  if (i.url)
                    return void t.addLinkAttributes(e, {
                      url: i.url,
                      target: i.newWindow ? n.LinkTarget.BLANK : void 0,
                    });
                  var r = this,
                    a = i.dest;
                  (e.href = r.linkService.getDestinationHash(a)),
                    (e.onclick = function () {
                      return a && r.linkService.navigateTo(a), !1;
                    });
                },
                _setStyles: function (e, t) {
                  var n = '';
                  t.bold && (n += 'font-weight: bold;'),
                    t.italic && (n += 'font-style: italic;'),
                    n && e.setAttribute('style', n);
                },
                _addToggleButton: function (e) {
                  var t = document.createElement('div');
                  (t.className = 'outlineItemToggler'),
                    (t.onclick = function (n) {
                      if (
                        (n.stopPropagation(),
                        t.classList.toggle('outlineItemsHidden'),
                        n.shiftKey)
                      ) {
                        var i = !t.classList.contains('outlineItemsHidden');
                        this._toggleOutlineItem(e, i);
                      }
                    }.bind(this)),
                    e.insertBefore(t, e.firstChild);
                },
                _toggleOutlineItem: function (e, t) {
                  this.lastToggleIsShow = t;
                  for (
                    var n = e.querySelectorAll('.outlineItemToggler'),
                      i = 0,
                      r = n.length;
                    i < r;
                    ++i
                  )
                    n[i].classList[t ? 'remove' : 'add']('outlineItemsHidden');
                },
                toggleOutlineTree: function () {
                  this.outline &&
                    this._toggleOutlineItem(
                      this.container,
                      !this.lastToggleIsShow,
                    );
                },
                render: function (e) {
                  var n = (e && e.outline) || null,
                    r = 0;
                  if ((this.outline && this.reset(), (this.outline = n), !n))
                    return void this._dispatchEvent(r);
                  for (
                    var a = document.createDocumentFragment(),
                      s = [{ parent: a, items: this.outline }],
                      o = !1;
                    s.length > 0;

                  )
                    for (
                      var c = s.shift(), l = 0, h = c.items.length;
                      l < h;
                      l++
                    ) {
                      var u = c.items[l],
                        d = document.createElement('div');
                      d.className = 'outlineItem';
                      var f = document.createElement('a');
                      if (
                        (this._bindLink(f, u),
                        this._setStyles(f, u),
                        (f.textContent = t.removeNullCharacters(u.title) || i),
                        d.appendChild(f),
                        u.items.length > 0)
                      ) {
                        (o = !0), this._addToggleButton(d);
                        var p = document.createElement('div');
                        (p.className = 'outlineItems'),
                          d.appendChild(p),
                          s.push({ parent: p, items: u.items });
                      }
                      c.parent.appendChild(d), r++;
                    }
                  o && this.container.classList.add('outlineWithDeepNesting'),
                    this.container.appendChild(a),
                    this._dispatchEvent(r);
                },
              }),
              e
            );
          })();
        e.PDFOutlineViewer = r;
      }),
      (function (e, t) {
        t((e.pdfjsWebUIUtils = {}), e.pdfjsWebPDFJS);
      })(this, function (e, t) {
        function n(e) {
          var t = window.devicePixelRatio || 1,
            n =
              e.webkitBackingStorePixelRatio ||
              e.mozBackingStorePixelRatio ||
              e.msBackingStorePixelRatio ||
              e.oBackingStorePixelRatio ||
              e.backingStorePixelRatio ||
              1,
            i = t / n;
          return { sx: i, sy: i, scaled: 1 !== i };
        }
        function i(e, t, n) {
          var i = e.offsetParent;
          if (!i)
            return void console.error(
              'offsetParent is not set -- cannot scroll',
            );
          for (
            var r = n || !1,
              a = e.offsetTop + e.clientTop,
              s = e.offsetLeft + e.clientLeft;
            i.clientHeight === i.scrollHeight ||
            (r && 'hidden' === getComputedStyle(i).overflow);

          )
            if (
              (i.dataset._scaleY &&
                ((a /= i.dataset._scaleY), (s /= i.dataset._scaleX)),
              (a += i.offsetTop),
              (s += i.offsetLeft),
              (i = i.offsetParent),
              !i)
            )
              return;
          t &&
            (void 0 !== t.top && (a += t.top),
            void 0 !== t.left && ((s += t.left), (i.scrollLeft = s))),
            (i.scrollTop = a);
        }
        function r(e, t) {
          var n = function (n) {
              r ||
                (r = window.requestAnimationFrame(function () {
                  r = null;
                  var n = e.scrollTop,
                    a = i.lastY;
                  n !== a && (i.down = n > a), (i.lastY = n), t(i);
                }));
            },
            i = { down: !0, lastY: e.scrollTop, _eventHandler: n },
            r = null;
          return e.addEventListener('scroll', n, !0), i;
        }
        function a(e) {
          for (var t = e.split('&'), n = {}, i = 0, r = t.length; i < r; ++i) {
            var a = t[i].split('='),
              s = a[0].toLowerCase(),
              o = a.length > 1 ? a[1] : null;
            n[decodeURIComponent(s)] = decodeURIComponent(o);
          }
          return n;
        }
        function s(e, t) {
          var n = 0,
            i = e.length - 1;
          if (0 === e.length || !t(e[i])) return e.length;
          if (t(e[n])) return n;
          for (; n < i; ) {
            var r = (n + i) >> 1,
              a = e[r];
            t(a) ? (i = r) : (n = r + 1);
          }
          return n;
        }
        function o(e) {
          if (Math.floor(e) === e) return [e, 1];
          var t = 1 / e,
            n = 8;
          if (t > n) return [1, n];
          if (Math.floor(t) === t) return [1, t];
          for (var i = e > 1 ? t : e, r = 0, a = 1, s = 1, o = 1; ; ) {
            var c = r + s,
              l = a + o;
            if (l > n) break;
            i <= c / l ? ((s = c), (o = l)) : ((r = c), (a = l));
          }
          var h;
          return (h =
            i - r / a < s / o - i
              ? i === e
                ? [r, a]
                : [a, r]
              : i === e
              ? [s, o]
              : [o, s]);
        }
        function c(e, t) {
          var n = e % t;
          return 0 === n ? e : Math.round(e - n + t);
        }
        function l(e, t, n) {
          function i(e) {
            var t = e.div,
              n = t.offsetTop + t.clientTop + t.clientHeight;
            return n > f;
          }
          for (
            var r,
              a,
              o,
              c,
              l,
              h,
              u,
              d,
              f = e.scrollTop,
              p = f + e.clientHeight,
              g = e.scrollLeft,
              m = g + e.clientWidth,
              v = [],
              b = 0 === t.length ? 0 : s(t, i),
              w = b,
              y = t.length;
            w < y &&
            ((r = t[w]),
            (a = r.div),
            (o = a.offsetTop + a.clientTop),
            (c = a.clientHeight),
            !(o > p));
            w++
          )
            (u = a.offsetLeft + a.clientLeft),
              (d = a.clientWidth),
              u + d < g ||
                u > m ||
                ((l = Math.max(0, f - o) + Math.max(0, o + c - p)),
                (h = ((100 * (c - l)) / c) | 0),
                v.push({ id: r.id, x: u, y: o, view: r, percent: h }));
          var A = v[0],
            S = v[v.length - 1];
          return (
            n &&
              v.sort(function (e, t) {
                var n = e.percent - t.percent;
                return Math.abs(n) > 0.001 ? -n : e.id - t.id;
              }),
            { first: A, last: S, views: v }
          );
        }
        function h(e) {
          e.preventDefault();
        }
        function u(e) {
          var t = /^(?:([^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,
            n = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
            i = t.exec(e),
            r = n.exec(i[1]) || n.exec(i[2]) || n.exec(i[3]);
          if (r && ((r = r[0]), r.indexOf('%') !== -1))
            try {
              r = n.exec(decodeURIComponent(r))[0];
            } catch (e) {}
          return r || 'document.pdf';
        }
        function d(e) {
          var t = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY),
            n = Math.atan2(e.deltaY, e.deltaX);
          -0.25 * Math.PI < n && n < 0.75 * Math.PI && (t = -t);
          var i = 0,
            r = 1,
            a = 30,
            s = 30;
          return (
            e.deltaMode === i ? (t /= a * s) : e.deltaMode === r && (t /= s), t
          );
        }
        var f = 96 / 72,
          p = 'auto',
          g = 1,
          m = 0.25,
          v = 10,
          b = 0,
          w = 1.25,
          y = 40,
          A = 5,
          S = { CANVAS: 'canvas', SVG: 'svg' },
          P = document.mozL10n || document.webL10n,
          x = t.PDFJS;
        (x.disableFullscreen =
          void 0 !== x.disableFullscreen && x.disableFullscreen),
          (x.useOnlyCssZoom = void 0 !== x.useOnlyCssZoom && x.useOnlyCssZoom),
          (x.maxCanvasPixels =
            void 0 === x.maxCanvasPixels ? 16777216 : x.maxCanvasPixels),
          (x.disableHistory = void 0 !== x.disableHistory && x.disableHistory),
          (x.disableTextLayer =
            void 0 !== x.disableTextLayer && x.disableTextLayer),
          (x.ignoreCurrentPositionOnZoom =
            void 0 !== x.ignoreCurrentPositionOnZoom &&
            x.ignoreCurrentPositionOnZoom),
          (x.locale = void 0 === x.locale ? navigator.language : x.locale);
        var C = new Promise(function (e) {
            window.requestAnimationFrame(e);
          }),
          _ = new Promise(function (e, t) {
            return P
              ? 'loading' !== P.getReadyState()
                ? void e()
                : void window.addEventListener('localized', function (t) {
                    e();
                  })
              : void e();
          }),
          L = (function () {
            function e() {
              this._listeners = Object.create(null);
            }
            return (
              (e.prototype = {
                on: function (e, t) {
                  var n = this._listeners[e];
                  n || ((n = []), (this._listeners[e] = n)), n.push(t);
                },
                off: function (e, t) {
                  var n,
                    i = this._listeners[e];
                  !i || (n = i.indexOf(t)) < 0 || i.splice(n, 1);
                },
                dispatch: function (e) {
                  var t = this._listeners[e];
                  if (t && 0 !== t.length) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    t.slice(0).forEach(function (e) {
                      e.apply(null, n);
                    });
                  }
                },
              }),
              e
            );
          })(),
          T = (function () {
            function e(e, t, n) {
              return Math.min(Math.max(e, t), n);
            }
            function t(e, t) {
              (this.visible = !0),
                (this.div = document.querySelector(e + ' .progress')),
                (this.bar = this.div.parentNode),
                (this.height = t.height || 100),
                (this.width = t.width || 100),
                (this.units = t.units || '%'),
                (this.div.style.height = this.height + this.units),
                (this.percent = 0);
            }
            return (
              (t.prototype = {
                updateBar: function () {
                  if (this._indeterminate)
                    return (
                      this.div.classList.add('indeterminate'),
                      void (this.div.style.width = this.width + this.units)
                    );
                  this.div.classList.remove('indeterminate');
                  var e = (this.width * this._percent) / 100;
                  this.div.style.width = e + this.units;
                },
                get percent() {
                  return this._percent;
                },
                set percent(t) {
                  (this._indeterminate = isNaN(t)),
                    (this._percent = e(t, 0, 100)),
                    this.updateBar();
                },
                setWidth: function (e) {
                  if (e) {
                    var t = e.parentNode,
                      n = t.offsetWidth - e.offsetWidth;
                    n > 0 &&
                      this.bar.setAttribute(
                        'style',
                        'width: calc(100% - ' + n + 'px);',
                      );
                  }
                },
                hide: function () {
                  this.visible &&
                    ((this.visible = !1),
                    this.bar.classList.add('hidden'),
                    document.body.classList.remove('loadingInProgress'));
                },
                show: function () {
                  this.visible ||
                    ((this.visible = !0),
                    document.body.classList.add('loadingInProgress'),
                    this.bar.classList.remove('hidden'));
                },
              }),
              t
            );
          })();
        (e.CSS_UNITS = f),
          (e.DEFAULT_SCALE_VALUE = p),
          (e.DEFAULT_SCALE = g),
          (e.MIN_SCALE = m),
          (e.MAX_SCALE = v),
          (e.UNKNOWN_SCALE = b),
          (e.MAX_AUTO_SCALE = w),
          (e.SCROLLBAR_PADDING = y),
          (e.VERTICAL_PADDING = A),
          (e.RendererType = S),
          (e.mozL10n = P),
          (e.EventBus = L),
          (e.ProgressBar = T),
          (e.getPDFFileNameFromURL = u),
          (e.noContextMenuHandler = h),
          (e.parseQueryString = a),
          (e.getVisibleElements = l),
          (e.roundToDivide = c),
          (e.approximateFraction = o),
          (e.getOutputScale = n),
          (e.scrollIntoView = i),
          (e.watchScroll = r),
          (e.binarySearchFirstItem = s),
          (e.normalizeWheelEventDelta = d),
          (e.animationStarted = C),
          (e.localized = _);
      }),
      (function (e, t) {
        t((e.pdfjsWebDOMEvents = {}), e.pdfjsWebUIUtils);
      })(this, function (e, t) {
        function n(e) {
          e.on('documentload', function () {
            var e = document.createEvent('CustomEvent');
            e.initCustomEvent('documentload', !0, !0, {}),
              window.dispatchEvent(e);
          }),
            e.on('pagerendered', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('pagerendered', !0, !0, {
                pageNumber: e.pageNumber,
                cssTransform: e.cssTransform,
              }),
                e.source.div.dispatchEvent(t);
            }),
            e.on('textlayerrendered', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('textlayerrendered', !0, !0, {
                pageNumber: e.pageNumber,
              }),
                e.source.textLayerDiv.dispatchEvent(t);
            }),
            e.on('pagechange', function (e) {
              var t = document.createEvent('UIEvents');
              t.initUIEvent('pagechange', !0, !0, window, 0),
                (t.pageNumber = e.pageNumber),
                e.source.container.dispatchEvent(t);
            }),
            e.on('pagesinit', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('pagesinit', !0, !0, null),
                e.source.container.dispatchEvent(t);
            }),
            e.on('pagesloaded', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('pagesloaded', !0, !0, {
                pagesCount: e.pagesCount,
              }),
                e.source.container.dispatchEvent(t);
            }),
            e.on('scalechange', function (e) {
              var t = document.createEvent('UIEvents');
              t.initUIEvent('scalechange', !0, !0, window, 0),
                (t.scale = e.scale),
                (t.presetValue = e.presetValue),
                e.source.container.dispatchEvent(t);
            }),
            e.on('updateviewarea', function (e) {
              var t = document.createEvent('UIEvents');
              t.initUIEvent('updateviewarea', !0, !0, window, 0),
                (t.location = e.location),
                e.source.container.dispatchEvent(t);
            }),
            e.on('find', function (e) {
              if (e.source !== window) {
                var t = document.createEvent('CustomEvent');
                t.initCustomEvent('find' + e.type, !0, !0, {
                  query: e.query,
                  phraseSearch: e.phraseSearch,
                  caseSensitive: e.caseSensitive,
                  highlightAll: e.highlightAll,
                  findPrevious: e.findPrevious,
                }),
                  window.dispatchEvent(t);
              }
            }),
            e.on('attachmentsloaded', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('attachmentsloaded', !0, !0, {
                attachmentsCount: e.attachmentsCount,
              }),
                e.source.container.dispatchEvent(t);
            }),
            e.on('sidebarviewchanged', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('sidebarviewchanged', !0, !0, { view: e.view }),
                e.source.outerContainer.dispatchEvent(t);
            }),
            e.on('pagemode', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('pagemode', !0, !0, { mode: e.mode }),
                e.source.pdfViewer.container.dispatchEvent(t);
            }),
            e.on('namedaction', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('namedaction', !0, !0, { action: e.action }),
                e.source.pdfViewer.container.dispatchEvent(t);
            }),
            e.on('presentationmodechanged', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('presentationmodechanged', !0, !0, {
                active: e.active,
                switchInProgress: e.switchInProgress,
              }),
                window.dispatchEvent(t);
            }),
            e.on('outlineloaded', function (e) {
              var t = document.createEvent('CustomEvent');
              t.initCustomEvent('outlineloaded', !0, !0, {
                outlineCount: e.outlineCount,
              }),
                e.source.container.dispatchEvent(t);
            });
        }
        function i() {
          return a ? a : ((a = new r()), n(a), a);
        }
        var r = t.EventBus,
          a = null;
        (e.attachDOMEventsToEventBus = n), (e.getGlobalEventBus = i);
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebHandTool = {}),
          e.pdfjsWebGrabToPan,
          e.pdfjsWebPreferences,
          e.pdfjsWebUIUtils,
        );
      })(this, function (e, t, n, i) {
        var r = t.GrabToPan,
          a = n.Preferences,
          s = i.localized,
          o = (function () {
            function e(e) {
              (this.container = e.container),
                (this.eventBus = e.eventBus),
                (this.wasActive = !1),
                (this.handTool = new r({
                  element: this.container,
                  onActiveChanged: function (e) {
                    this.eventBus.dispatch('handtoolchanged', { isActive: e });
                  }.bind(this),
                })),
                this.eventBus.on('togglehandtool', this.toggle.bind(this)),
                Promise.all([s, a.get('enableHandToolOnLoad')])
                  .then(
                    function (e) {
                      e[1] === !0 && this.handTool.activate();
                    }.bind(this),
                  )
                  .catch(function (e) {}),
                this.eventBus.on(
                  'presentationmodechanged',
                  function (e) {
                    e.switchInProgress ||
                      (e.active
                        ? this.enterPresentationMode()
                        : this.exitPresentationMode());
                  }.bind(this),
                );
            }
            return (
              (e.prototype = {
                get isActive() {
                  return !!this.handTool.active;
                },
                toggle: function () {
                  this.handTool.toggle();
                },
                enterPresentationMode: function () {
                  this.isActive &&
                    ((this.wasActive = !0), this.handTool.deactivate());
                },
                exitPresentationMode: function () {
                  this.wasActive &&
                    ((this.wasActive = !1), this.handTool.activate());
                },
              }),
              e
            );
          })();
        e.HandTool = o;
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPasswordPrompt = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebOverlayManager,
          e.pdfjsWebPDFJS,
        );
      })(this, function (e, t, n, i) {
        var r = t.mozL10n,
          a = n.OverlayManager,
          s = (function () {
            function e(e) {
              (this.overlayName = e.overlayName),
                (this.container = e.container),
                (this.label = e.label),
                (this.input = e.input),
                (this.submitButton = e.submitButton),
                (this.cancelButton = e.cancelButton),
                (this.updateCallback = null),
                (this.reason = null),
                this.submitButton.addEventListener(
                  'click',
                  this.verify.bind(this),
                ),
                this.cancelButton.addEventListener(
                  'click',
                  this.close.bind(this),
                ),
                this.input.addEventListener(
                  'keydown',
                  function (e) {
                    13 === e.keyCode && this.verify();
                  }.bind(this),
                ),
                a.register(
                  this.overlayName,
                  this.container,
                  this.close.bind(this),
                  !0,
                );
            }
            return (
              (e.prototype = {
                open: function () {
                  a.open(this.overlayName).then(
                    function () {
                      (this.input.type = 'password'), this.input.focus();
                      var e = r.get(
                        'password_label',
                        null,
                        'Enter the password to open this PDF file.',
                      );
                      this.reason === i.PasswordResponses.INCORRECT_PASSWORD &&
                        (e = r.get(
                          'password_invalid',
                          null,
                          'Invalid password. Please try again.',
                        )),
                        (this.label.textContent = e);
                    }.bind(this),
                  );
                },
                close: function () {
                  a.close(this.overlayName).then(
                    function () {
                      (this.input.value = ''), (this.input.type = '');
                    }.bind(this),
                  );
                },
                verify: function () {
                  var e = this.input.value;
                  if (e && e.length > 0)
                    return this.close(), this.updateCallback(e);
                },
                setUpdateCallback: function (e, t) {
                  (this.updateCallback = e), (this.reason = t);
                },
              }),
              e
            );
          })();
        e.PasswordPrompt = s;
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFDocumentProperties = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebOverlayManager,
        );
      })(this, function (e, t, n) {
        var i = t.getPDFFileNameFromURL,
          r = t.mozL10n,
          a = n.OverlayManager,
          s = (function () {
            function e(e) {
              (this.fields = e.fields),
                (this.overlayName = e.overlayName),
                (this.container = e.container),
                (this.rawFileSize = 0),
                (this.url = null),
                (this.pdfDocument = null),
                e.closeButton &&
                  e.closeButton.addEventListener(
                    'click',
                    this.close.bind(this),
                  ),
                (this.dataAvailablePromise = new Promise(
                  function (e) {
                    this.resolveDataAvailable = e;
                  }.bind(this),
                )),
                a.register(
                  this.overlayName,
                  this.container,
                  this.close.bind(this),
                );
            }
            return (
              (e.prototype = {
                open: function () {
                  Promise.all([
                    a.open(this.overlayName),
                    this.dataAvailablePromise,
                  ]).then(
                    function () {
                      this._getProperties();
                    }.bind(this),
                  );
                },
                close: function () {
                  a.close(this.overlayName);
                },
                setFileSize: function (e) {
                  e > 0 && (this.rawFileSize = e);
                },
                setDocumentAndUrl: function (e, t) {
                  (this.pdfDocument = e),
                    (this.url = t),
                    this.resolveDataAvailable();
                },
                _getProperties: function () {
                  a.active &&
                    (this.pdfDocument.getDownloadInfo().then(
                      function (e) {
                        e.length !== this.rawFileSize &&
                          (this.setFileSize(e.length),
                          this._updateUI(
                            this.fields.fileSize,
                            this._parseFileSize(),
                          ));
                      }.bind(this),
                    ),
                    this.pdfDocument.getMetadata().then(
                      function (e) {
                        var t = {
                          fileName: i(this.url),
                          fileSize: this._parseFileSize(),
                          title: e.info.Title,
                          author: e.info.Author,
                          subject: e.info.Subject,
                          keywords: e.info.Keywords,
                          creationDate: this._parseDate(e.info.CreationDate),
                          modificationDate: this._parseDate(e.info.ModDate),
                          creator: e.info.Creator,
                          producer: e.info.Producer,
                          version: e.info.PDFFormatVersion,
                          pageCount: this.pdfDocument.numPages,
                        };
                        for (var n in t) this._updateUI(this.fields[n], t[n]);
                      }.bind(this),
                    ));
                },
                _updateUI: function (e, t) {
                  e && void 0 !== t && '' !== t && (e.textContent = t);
                },
                _parseFileSize: function () {
                  var e = this.rawFileSize,
                    t = e / 1024;
                  if (t)
                    return t < 1024
                      ? r.get(
                          'document_properties_kb',
                          {
                            size_kb: (+t.toPrecision(3)).toLocaleString(),
                            size_b: e.toLocaleString(),
                          },
                          '{{size_kb}} KB ({{size_b}} bytes)',
                        )
                      : r.get(
                          'document_properties_mb',
                          {
                            size_mb: (+(t / 1024).toPrecision(
                              3,
                            )).toLocaleString(),
                            size_b: e.toLocaleString(),
                          },
                          '{{size_mb}} MB ({{size_b}} bytes)',
                        );
                },
                _parseDate: function (e) {
                  var t = e;
                  if (void 0 === t) return '';
                  'D:' === t.substring(0, 2) && (t = t.substring(2));
                  var n = parseInt(t.substring(0, 4), 10),
                    i = parseInt(t.substring(4, 6), 10) - 1,
                    a = parseInt(t.substring(6, 8), 10),
                    s = parseInt(t.substring(8, 10), 10),
                    o = parseInt(t.substring(10, 12), 10),
                    c = parseInt(t.substring(12, 14), 10),
                    l = t.substring(14, 15),
                    h = parseInt(t.substring(15, 17), 10),
                    u = parseInt(t.substring(18, 20), 10);
                  '-' === l
                    ? ((s += h), (o += u))
                    : '+' === l && ((s -= h), (o -= u));
                  var d = new Date(Date.UTC(n, i, a, s, o, c)),
                    f = d.toLocaleDateString(),
                    p = d.toLocaleTimeString();
                  return r.get(
                    'document_properties_date_string',
                    { date: f, time: p },
                    '{{date}}, {{time}}',
                  );
                },
              }),
              e
            );
          })();
        e.PDFDocumentProperties = s;
      }),
      (function (e, t) {
        t((e.pdfjsWebPDFFindController = {}), e.pdfjsWebUIUtils);
      })(this, function (e, t) {
        var n = t.scrollIntoView,
          i = {
            FIND_FOUND: 0,
            FIND_NOTFOUND: 1,
            FIND_WRAPPED: 2,
            FIND_PENDING: 3,
          },
          r = -50,
          a = -400,
          s = {
            '‘': "'",
            '’': "'",
            '‚': "'",
            '‛': "'",
            '“': '"',
            '”': '"',
            '„': '"',
            '‟': '"',
            '¼': '1/4',
            '½': '1/2',
            '¾': '3/4',
          },
          o = (function () {
            function e(e) {
              (this.pdfViewer = e.pdfViewer || null),
                (this.onUpdateResultsCount = null),
                (this.onUpdateState = null),
                this.reset();
              var t = Object.keys(s).join('');
              this.normalizationRegex = new RegExp('[' + t + ']', 'g');
            }
            return (
              (e.prototype = {
                reset: function () {
                  (this.startedTextExtraction = !1),
                    (this.extractTextPromises = []),
                    (this.pendingFindMatches = Object.create(null)),
                    (this.active = !1),
                    (this.pageContents = []),
                    (this.pageMatches = []),
                    (this.pageMatchesLength = null),
                    (this.matchCount = 0),
                    (this.selected = { pageIdx: -1, matchIdx: -1 }),
                    (this.offset = { pageIdx: null, matchIdx: null }),
                    (this.pagesToSearch = null),
                    (this.resumePageIdx = null),
                    (this.state = null),
                    (this.dirtyMatch = !1),
                    (this.findTimeout = null),
                    (this.firstPagePromise = new Promise(
                      function (e) {
                        this.resolveFirstPage = e;
                      }.bind(this),
                    ));
                },
                normalize: function (e) {
                  return e.replace(this.normalizationRegex, function (e) {
                    return s[e];
                  });
                },
                _prepareMatches: function (e, t, n) {
                  function i(e, t) {
                    var n, i, r;
                    if (
                      ((n = e[t]),
                      (r = e[t + 1]),
                      t < e.length - 1 && n.match === r.match)
                    )
                      return (n.skipped = !0), !0;
                    for (var a = t - 1; a >= 0; a--)
                      if (((i = e[a]), !i.skipped)) {
                        if (i.match + i.matchLength < n.match) break;
                        if (i.match + i.matchLength >= n.match + n.matchLength)
                          return (n.skipped = !0), !0;
                      }
                    return !1;
                  }
                  var r, a;
                  for (
                    e.sort(function (e, t) {
                      return e.match === t.match
                        ? e.matchLength - t.matchLength
                        : e.match - t.match;
                    }),
                      r = 0,
                      a = e.length;
                    r < a;
                    r++
                  )
                    i(e, r) || (t.push(e[r].match), n.push(e[r].matchLength));
                },
                calcFindPhraseMatch: function (e, t, n) {
                  for (var i = [], r = e.length, a = -r; ; ) {
                    if (((a = n.indexOf(e, a + r)), a === -1)) break;
                    i.push(a);
                  }
                  this.pageMatches[t] = i;
                },
                calcFindWordMatch: function (e, t, n) {
                  for (
                    var i,
                      r,
                      a,
                      s = [],
                      o = e.match(/\S+/g),
                      c = 0,
                      l = o.length;
                    c < l;
                    c++
                  )
                    for (i = o[c], r = i.length, a = -r; ; ) {
                      if (((a = n.indexOf(i, a + r)), a === -1)) break;
                      s.push({ match: a, matchLength: r, skipped: !1 });
                    }
                  this.pageMatchesLength || (this.pageMatchesLength = []),
                    (this.pageMatchesLength[t] = []),
                    (this.pageMatches[t] = []),
                    this._prepareMatches(
                      s,
                      this.pageMatches[t],
                      this.pageMatchesLength[t],
                    );
                },
                calcFindMatch: function (e) {
                  var t = this.normalize(this.pageContents[e]),
                    n = this.normalize(this.state.query),
                    i = this.state.caseSensitive,
                    r = this.state.phraseSearch,
                    a = n.length;
                  0 !== a &&
                    (i || ((t = t.toLowerCase()), (n = n.toLowerCase())),
                    r
                      ? this.calcFindPhraseMatch(n, e, t)
                      : this.calcFindWordMatch(n, e, t),
                    this.updatePage(e),
                    this.resumePageIdx === e &&
                      ((this.resumePageIdx = null), this.nextPageMatch()),
                    this.pageMatches[e].length > 0 &&
                      ((this.matchCount += this.pageMatches[e].length),
                      this.updateUIResultsCount()));
                },
                extractText: function () {
                  function e(n) {
                    r.pdfViewer.getPageTextContent(n).then(function (i) {
                      for (
                        var a = i.items, s = [], o = 0, c = a.length;
                        o < c;
                        o++
                      )
                        s.push(a[o].str);
                      r.pageContents.push(s.join('')),
                        t[n](n),
                        n + 1 < r.pdfViewer.pagesCount && e(n + 1);
                    });
                  }
                  if (!this.startedTextExtraction) {
                    (this.startedTextExtraction = !0), (this.pageContents = []);
                    for (
                      var t = [], n = this.pdfViewer.pagesCount, i = 0;
                      i < n;
                      i++
                    )
                      this.extractTextPromises.push(
                        new Promise(function (e) {
                          t.push(e);
                        }),
                      );
                    var r = this;
                    e(0);
                  }
                },
                executeCommand: function (e, t) {
                  (null !== this.state && 'findagain' === e) ||
                    (this.dirtyMatch = !0),
                    (this.state = t),
                    this.updateUIState(i.FIND_PENDING),
                    this.firstPagePromise.then(
                      function () {
                        this.extractText(),
                          clearTimeout(this.findTimeout),
                          'find' === e
                            ? (this.findTimeout = setTimeout(
                                this.nextMatch.bind(this),
                                250,
                              ))
                            : this.nextMatch();
                      }.bind(this),
                    );
                },
                updatePage: function (e) {
                  this.selected.pageIdx === e &&
                    (this.pdfViewer.currentPageNumber = e + 1);
                  var t = this.pdfViewer.getPageView(e);
                  t.textLayer && t.textLayer.updateMatches();
                },
                nextMatch: function () {
                  var e = this.state.findPrevious,
                    t = this.pdfViewer.currentPageNumber - 1,
                    n = this.pdfViewer.pagesCount;
                  if (((this.active = !0), this.dirtyMatch)) {
                    (this.dirtyMatch = !1),
                      (this.selected.pageIdx = this.selected.matchIdx = -1),
                      (this.offset.pageIdx = t),
                      (this.offset.matchIdx = null),
                      (this.hadMatch = !1),
                      (this.resumePageIdx = null),
                      (this.pageMatches = []),
                      (this.matchCount = 0),
                      (this.pageMatchesLength = null);
                    for (var r = this, a = 0; a < n; a++)
                      this.updatePage(a),
                        a in this.pendingFindMatches ||
                          ((this.pendingFindMatches[a] = !0),
                          this.extractTextPromises[a].then(function (e) {
                            delete r.pendingFindMatches[e], r.calcFindMatch(e);
                          }));
                  }
                  if ('' === this.state.query)
                    return void this.updateUIState(i.FIND_FOUND);
                  if (!this.resumePageIdx) {
                    var s = this.offset;
                    if (((this.pagesToSearch = n), null !== s.matchIdx)) {
                      var o = this.pageMatches[s.pageIdx].length;
                      if ((!e && s.matchIdx + 1 < o) || (e && s.matchIdx > 0))
                        return (
                          (this.hadMatch = !0),
                          (s.matchIdx = e ? s.matchIdx - 1 : s.matchIdx + 1),
                          void this.updateMatch(!0)
                        );
                      this.advanceOffsetPage(e);
                    }
                    this.nextPageMatch();
                  }
                },
                matchesReady: function (e) {
                  var t = this.offset,
                    n = e.length,
                    i = this.state.findPrevious;
                  return n
                    ? ((this.hadMatch = !0),
                      (t.matchIdx = i ? n - 1 : 0),
                      this.updateMatch(!0),
                      !0)
                    : (this.advanceOffsetPage(i),
                      !!(
                        t.wrapped &&
                        ((t.matchIdx = null), this.pagesToSearch < 0)
                      ) && (this.updateMatch(!1), !0));
                },
                updateMatchPosition: function (e, t, i, s) {
                  if (
                    this.selected.matchIdx === t &&
                    this.selected.pageIdx === e
                  ) {
                    var o = { top: r, left: a };
                    n(i[s], o, !0);
                  }
                },
                nextPageMatch: function () {
                  null !== this.resumePageIdx &&
                    console.error('There can only be one pending page.');
                  do {
                    var e = this.offset.pageIdx,
                      t = this.pageMatches[e];
                    if (!t) {
                      this.resumePageIdx = e;
                      break;
                    }
                  } while (!this.matchesReady(t));
                },
                advanceOffsetPage: function (e) {
                  var t = this.offset,
                    n = this.extractTextPromises.length;
                  (t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1),
                    (t.matchIdx = null),
                    this.pagesToSearch--,
                    (t.pageIdx >= n || t.pageIdx < 0) &&
                      ((t.pageIdx = e ? n - 1 : 0), (t.wrapped = !0));
                },
                updateMatch: function (e) {
                  var t = i.FIND_NOTFOUND,
                    n = this.offset.wrapped;
                  if (((this.offset.wrapped = !1), e)) {
                    var r = this.selected.pageIdx;
                    (this.selected.pageIdx = this.offset.pageIdx),
                      (this.selected.matchIdx = this.offset.matchIdx),
                      (t = n ? i.FIND_WRAPPED : i.FIND_FOUND),
                      r !== -1 &&
                        r !== this.selected.pageIdx &&
                        this.updatePage(r);
                  }
                  this.updateUIState(t, this.state.findPrevious),
                    this.selected.pageIdx !== -1 &&
                      this.updatePage(this.selected.pageIdx);
                },
                updateUIResultsCount: function () {
                  this.onUpdateResultsCount &&
                    this.onUpdateResultsCount(this.matchCount);
                },
                updateUIState: function (e, t) {
                  this.onUpdateState &&
                    this.onUpdateState(e, t, this.matchCount);
                },
              }),
              e
            );
          })();
        (e.FindStates = i), (e.PDFFindController = o);
      }),
      (function (e, t) {
        t((e.pdfjsWebPDFPresentationMode = {}), e.pdfjsWebUIUtils);
      })(this, function (e, t) {
        var n = t.normalizeWheelEventDelta,
          i = 1500,
          r = 3e3,
          a = 'pdfPresentationMode',
          s = 'pdfPresentationModeControls',
          o = (function () {
            function e(e) {
              (this.container = e.container),
                (this.viewer = e.viewer || e.container.firstElementChild),
                (this.pdfViewer = e.pdfViewer),
                (this.eventBus = e.eventBus);
              var t = e.contextMenuItems || null;
              (this.active = !1),
                (this.args = null),
                (this.contextMenuOpen = !1),
                (this.mouseScrollTimeStamp = 0),
                (this.mouseScrollDelta = 0),
                (this.touchSwipeState = null),
                t &&
                  (t.contextFirstPage.addEventListener(
                    'click',
                    function (e) {
                      (this.contextMenuOpen = !1),
                        this.eventBus.dispatch('firstpage');
                    }.bind(this),
                  ),
                  t.contextLastPage.addEventListener(
                    'click',
                    function (e) {
                      (this.contextMenuOpen = !1),
                        this.eventBus.dispatch('lastpage');
                    }.bind(this),
                  ),
                  t.contextPageRotateCw.addEventListener(
                    'click',
                    function (e) {
                      (this.contextMenuOpen = !1),
                        this.eventBus.dispatch('rotatecw');
                    }.bind(this),
                  ),
                  t.contextPageRotateCcw.addEventListener(
                    'click',
                    function (e) {
                      (this.contextMenuOpen = !1),
                        this.eventBus.dispatch('rotateccw');
                    }.bind(this),
                  ));
            }
            return (
              (e.prototype = {
                request: function () {
                  if (
                    this.switchInProgress ||
                    this.active ||
                    !this.viewer.hasChildNodes()
                  )
                    return !1;
                  if (
                    (this._addFullscreenChangeListeners(),
                    this._setSwitchInProgress(),
                    this._notifyStateChange(),
                    this.container.requestFullscreen)
                  )
                    this.container.requestFullscreen();
                  else if (this.container.mozRequestFullScreen)
                    this.container.mozRequestFullScreen();
                  else if (this.container.webkitRequestFullscreen)
                    this.container.webkitRequestFullscreen(
                      Element.ALLOW_KEYBOARD_INPUT,
                    );
                  else {
                    if (!this.container.msRequestFullscreen) return !1;
                    this.container.msRequestFullscreen();
                  }
                  return (
                    (this.args = {
                      page: this.pdfViewer.currentPageNumber,
                      previousScale: this.pdfViewer.currentScaleValue,
                    }),
                    !0
                  );
                },
                _mouseWheel: function (e) {
                  if (this.active) {
                    e.preventDefault();
                    var t = n(e),
                      i = 50,
                      r = 0.1,
                      a = new Date().getTime(),
                      s = this.mouseScrollTimeStamp;
                    if (
                      !(a > s && a - s < i) &&
                      (((this.mouseScrollDelta > 0 && t < 0) ||
                        (this.mouseScrollDelta < 0 && t > 0)) &&
                        this._resetMouseScrollState(),
                      (this.mouseScrollDelta += t),
                      Math.abs(this.mouseScrollDelta) >= r)
                    ) {
                      var o = this.mouseScrollDelta;
                      this._resetMouseScrollState();
                      var c =
                        o > 0 ? this._goToPreviousPage() : this._goToNextPage();
                      c && (this.mouseScrollTimeStamp = a);
                    }
                  }
                },
                get isFullscreen() {
                  return !!(
                    document.fullscreenElement ||
                    document.mozFullScreen ||
                    document.webkitIsFullScreen ||
                    document.msFullscreenElement
                  );
                },
                _goToPreviousPage: function () {
                  var e = this.pdfViewer.currentPageNumber;
                  return (
                    !(e <= 1) &&
                    ((this.pdfViewer.currentPageNumber = e - 1), !0)
                  );
                },
                _goToNextPage: function () {
                  var e = this.pdfViewer.currentPageNumber;
                  return (
                    !(e >= this.pdfViewer.pagesCount) &&
                    ((this.pdfViewer.currentPageNumber = e + 1), !0)
                  );
                },
                _notifyStateChange: function () {
                  this.eventBus.dispatch('presentationmodechanged', {
                    source: this,
                    active: this.active,
                    switchInProgress: !!this.switchInProgress,
                  });
                },
                _setSwitchInProgress: function () {
                  this.switchInProgress && clearTimeout(this.switchInProgress),
                    (this.switchInProgress = setTimeout(
                      function () {
                        this._removeFullscreenChangeListeners(),
                          delete this.switchInProgress,
                          this._notifyStateChange();
                      }.bind(this),
                      i,
                    ));
                },
                _resetSwitchInProgress: function () {
                  this.switchInProgress &&
                    (clearTimeout(this.switchInProgress),
                    delete this.switchInProgress);
                },
                _enter: function () {
                  (this.active = !0),
                    this._resetSwitchInProgress(),
                    this._notifyStateChange(),
                    this.container.classList.add(a),
                    setTimeout(
                      function () {
                        (this.pdfViewer.currentPageNumber = this.args.page),
                          (this.pdfViewer.currentScaleValue = 'page-fit');
                      }.bind(this),
                      0,
                    ),
                    this._addWindowListeners(),
                    this._showControls(),
                    (this.contextMenuOpen = !1),
                    this.container.setAttribute(
                      'contextmenu',
                      'viewerContextMenu',
                    ),
                    window.getSelection().removeAllRanges();
                },
                _exit: function () {
                  var e = this.pdfViewer.currentPageNumber;
                  this.container.classList.remove(a),
                    setTimeout(
                      function () {
                        (this.active = !1),
                          this._removeFullscreenChangeListeners(),
                          this._notifyStateChange(),
                          (this.pdfViewer.currentScaleValue =
                            this.args.previousScale),
                          (this.pdfViewer.currentPageNumber = e),
                          (this.args = null);
                      }.bind(this),
                      0,
                    ),
                    this._removeWindowListeners(),
                    this._hideControls(),
                    this._resetMouseScrollState(),
                    this.container.removeAttribute('contextmenu'),
                    (this.contextMenuOpen = !1);
                },
                _mouseDown: function (e) {
                  if (this.contextMenuOpen)
                    return (this.contextMenuOpen = !1), void e.preventDefault();
                  if (0 === e.button) {
                    var t =
                      e.target.href &&
                      e.target.classList.contains('internalLink');
                    t ||
                      (e.preventDefault(),
                      (this.pdfViewer.currentPageNumber += e.shiftKey
                        ? -1
                        : 1));
                  }
                },
                _contextMenu: function () {
                  this.contextMenuOpen = !0;
                },
                _showControls: function () {
                  this.controlsTimeout
                    ? clearTimeout(this.controlsTimeout)
                    : this.container.classList.add(s),
                    (this.controlsTimeout = setTimeout(
                      function () {
                        this.container.classList.remove(s),
                          delete this.controlsTimeout;
                      }.bind(this),
                      r,
                    ));
                },
                _hideControls: function () {
                  this.controlsTimeout &&
                    (clearTimeout(this.controlsTimeout),
                    this.container.classList.remove(s),
                    delete this.controlsTimeout);
                },
                _resetMouseScrollState: function () {
                  (this.mouseScrollTimeStamp = 0), (this.mouseScrollDelta = 0);
                },
                _touchSwipe: function (e) {
                  if (this.active) {
                    var t = 50,
                      n = Math.PI / 6;
                    if (e.touches.length > 1)
                      return void (this.touchSwipeState = null);
                    switch (e.type) {
                      case 'touchstart':
                        this.touchSwipeState = {
                          startX: e.touches[0].pageX,
                          startY: e.touches[0].pageY,
                          endX: e.touches[0].pageX,
                          endY: e.touches[0].pageY,
                        };
                        break;
                      case 'touchmove':
                        if (null === this.touchSwipeState) return;
                        (this.touchSwipeState.endX = e.touches[0].pageX),
                          (this.touchSwipeState.endY = e.touches[0].pageY),
                          e.preventDefault();
                        break;
                      case 'touchend':
                        if (null === this.touchSwipeState) return;
                        var i = 0,
                          r =
                            this.touchSwipeState.endX -
                            this.touchSwipeState.startX,
                          a =
                            this.touchSwipeState.endY -
                            this.touchSwipeState.startY,
                          s = Math.abs(Math.atan2(a, r));
                        Math.abs(r) > t && (s <= n || s >= Math.PI - n)
                          ? (i = r)
                          : Math.abs(a) > t &&
                            Math.abs(s - Math.PI / 2) <= n &&
                            (i = a),
                          i > 0
                            ? this._goToPreviousPage()
                            : i < 0 && this._goToNextPage();
                    }
                  }
                },
                _addWindowListeners: function () {
                  (this.showControlsBind = this._showControls.bind(this)),
                    (this.mouseDownBind = this._mouseDown.bind(this)),
                    (this.mouseWheelBind = this._mouseWheel.bind(this)),
                    (this.resetMouseScrollStateBind =
                      this._resetMouseScrollState.bind(this)),
                    (this.contextMenuBind = this._contextMenu.bind(this)),
                    (this.touchSwipeBind = this._touchSwipe.bind(this)),
                    window.addEventListener('mousemove', this.showControlsBind),
                    window.addEventListener('mousedown', this.mouseDownBind),
                    window.addEventListener('wheel', this.mouseWheelBind),
                    window.addEventListener(
                      'keydown',
                      this.resetMouseScrollStateBind,
                    ),
                    window.addEventListener(
                      'contextmenu',
                      this.contextMenuBind,
                    ),
                    window.addEventListener('touchstart', this.touchSwipeBind),
                    window.addEventListener('touchmove', this.touchSwipeBind),
                    window.addEventListener('touchend', this.touchSwipeBind);
                },
                _removeWindowListeners: function () {
                  window.removeEventListener(
                    'mousemove',
                    this.showControlsBind,
                  ),
                    window.removeEventListener('mousedown', this.mouseDownBind),
                    window.removeEventListener('wheel', this.mouseWheelBind),
                    window.removeEventListener(
                      'keydown',
                      this.resetMouseScrollStateBind,
                    ),
                    window.removeEventListener(
                      'contextmenu',
                      this.contextMenuBind,
                    ),
                    window.removeEventListener(
                      'touchstart',
                      this.touchSwipeBind,
                    ),
                    window.removeEventListener(
                      'touchmove',
                      this.touchSwipeBind,
                    ),
                    window.removeEventListener('touchend', this.touchSwipeBind),
                    delete this.showControlsBind,
                    delete this.mouseDownBind,
                    delete this.mouseWheelBind,
                    delete this.resetMouseScrollStateBind,
                    delete this.contextMenuBind,
                    delete this.touchSwipeBind;
                },
                _fullscreenChange: function () {
                  this.isFullscreen ? this._enter() : this._exit();
                },
                _addFullscreenChangeListeners: function () {
                  (this.fullscreenChangeBind =
                    this._fullscreenChange.bind(this)),
                    window.addEventListener(
                      'fullscreenchange',
                      this.fullscreenChangeBind,
                    ),
                    window.addEventListener(
                      'mozfullscreenchange',
                      this.fullscreenChangeBind,
                    ),
                    window.addEventListener(
                      'webkitfullscreenchange',
                      this.fullscreenChangeBind,
                    ),
                    window.addEventListener(
                      'MSFullscreenChange',
                      this.fullscreenChangeBind,
                    );
                },
                _removeFullscreenChangeListeners: function () {
                  window.removeEventListener(
                    'fullscreenchange',
                    this.fullscreenChangeBind,
                  ),
                    window.removeEventListener(
                      'mozfullscreenchange',
                      this.fullscreenChangeBind,
                    ),
                    window.removeEventListener(
                      'webkitfullscreenchange',
                      this.fullscreenChangeBind,
                    ),
                    window.removeEventListener(
                      'MSFullscreenChange',
                      this.fullscreenChangeBind,
                    ),
                    delete this.fullscreenChangeBind;
                },
              }),
              e
            );
          })();
        e.PDFPresentationMode = o;
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFSidebar = {}),
          e.pdfjsWebPDFRenderingQueue,
          e.pdfjsWebUIUtils,
        );
      })(this, function (e, t, n) {
        var i = t.RenderingStates,
          r = n.mozL10n,
          a = 'pdfSidebarNotification',
          s = { NONE: 0, THUMBS: 1, OUTLINE: 2, ATTACHMENTS: 3 },
          o = (function () {
            function e(e) {
              (this.isOpen = !1),
                (this.active = s.THUMBS),
                (this.isInitialViewSet = !1),
                (this.onToggled = null),
                (this.pdfViewer = e.pdfViewer),
                (this.pdfThumbnailViewer = e.pdfThumbnailViewer),
                (this.pdfOutlineViewer = e.pdfOutlineViewer),
                (this.mainContainer = e.mainContainer),
                (this.outerContainer = e.outerContainer),
                (this.eventBus = e.eventBus),
                (this.toggleButton = e.toggleButton),
                (this.thumbnailButton = e.thumbnailButton),
                (this.outlineButton = e.outlineButton),
                (this.attachmentsButton = e.attachmentsButton),
                (this.thumbnailView = e.thumbnailView),
                (this.outlineView = e.outlineView),
                (this.attachmentsView = e.attachmentsView),
                (this.disableNotification = e.disableNotification || !1),
                this._addEventListeners();
            }
            return (
              (e.prototype = {
                reset: function () {
                  (this.isInitialViewSet = !1),
                    this._hideUINotification(null),
                    this.switchView(s.THUMBS),
                    (this.outlineButton.disabled = !1),
                    (this.attachmentsButton.disabled = !1);
                },
                get visibleView() {
                  return this.isOpen ? this.active : s.NONE;
                },
                get isThumbnailViewVisible() {
                  return this.isOpen && this.active === s.THUMBS;
                },
                get isOutlineViewVisible() {
                  return this.isOpen && this.active === s.OUTLINE;
                },
                get isAttachmentsViewVisible() {
                  return this.isOpen && this.active === s.ATTACHMENTS;
                },
                setInitialView: function (e) {
                  if (!this.isInitialViewSet) {
                    if (
                      ((this.isInitialViewSet = !0),
                      this.isOpen && e === s.NONE)
                    )
                      return void this._dispatchEvent();
                    var t = e === this.visibleView;
                    this.switchView(e, !0), t && this._dispatchEvent();
                  }
                },
                switchView: function (e, t) {
                  if (e === s.NONE) return void this.close();
                  var n = e !== this.active,
                    i = !1;
                  switch (e) {
                    case s.THUMBS:
                      this.thumbnailButton.classList.add('toggled'),
                        this.outlineButton.classList.remove('toggled'),
                        this.attachmentsButton.classList.remove('toggled'),
                        this.thumbnailView.classList.remove('hidden'),
                        this.outlineView.classList.add('hidden'),
                        this.attachmentsView.classList.add('hidden'),
                        this.isOpen &&
                          n &&
                          (this._updateThumbnailViewer(), (i = !0));
                      break;
                    case s.OUTLINE:
                      if (this.outlineButton.disabled) return;
                      this.thumbnailButton.classList.remove('toggled'),
                        this.outlineButton.classList.add('toggled'),
                        this.attachmentsButton.classList.remove('toggled'),
                        this.thumbnailView.classList.add('hidden'),
                        this.outlineView.classList.remove('hidden'),
                        this.attachmentsView.classList.add('hidden');
                      break;
                    case s.ATTACHMENTS:
                      if (this.attachmentsButton.disabled) return;
                      this.thumbnailButton.classList.remove('toggled'),
                        this.outlineButton.classList.remove('toggled'),
                        this.attachmentsButton.classList.add('toggled'),
                        this.thumbnailView.classList.add('hidden'),
                        this.outlineView.classList.add('hidden'),
                        this.attachmentsView.classList.remove('hidden');
                      break;
                    default:
                      return void console.error(
                        'PDFSidebar_switchView: "' +
                          e +
                          '" is an unsupported value.',
                      );
                  }
                  return (
                    (this.active = 0 | e),
                    t && !this.isOpen
                      ? void this.open()
                      : (i && this._forceRendering(),
                        n && this._dispatchEvent(),
                        void this._hideUINotification(this.active))
                  );
                },
                open: function () {
                  this.isOpen ||
                    ((this.isOpen = !0),
                    this.toggleButton.classList.add('toggled'),
                    this.outerContainer.classList.add('sidebarMoving'),
                    this.outerContainer.classList.add('sidebarOpen'),
                    this.active === s.THUMBS && this._updateThumbnailViewer(),
                    this._forceRendering(),
                    this._dispatchEvent(),
                    this._hideUINotification(this.active));
                },
                close: function () {
                  this.isOpen &&
                    ((this.isOpen = !1),
                    this.toggleButton.classList.remove('toggled'),
                    this.outerContainer.classList.add('sidebarMoving'),
                    this.outerContainer.classList.remove('sidebarOpen'),
                    this._forceRendering(),
                    this._dispatchEvent());
                },
                toggle: function () {
                  this.isOpen ? this.close() : this.open();
                },
                _dispatchEvent: function () {
                  this.eventBus.dispatch('sidebarviewchanged', {
                    source: this,
                    view: this.visibleView,
                  });
                },
                _forceRendering: function () {
                  this.onToggled
                    ? this.onToggled()
                    : (this.pdfViewer.forceRendering(),
                      this.pdfThumbnailViewer.forceRendering());
                },
                _updateThumbnailViewer: function () {
                  for (
                    var e = this.pdfViewer,
                      t = this.pdfThumbnailViewer,
                      n = e.pagesCount,
                      r = 0;
                    r < n;
                    r++
                  ) {
                    var a = e.getPageView(r);
                    if (a && a.renderingState === i.FINISHED) {
                      var s = t.getThumbnail(r);
                      s.setImage(a);
                    }
                  }
                  t.scrollThumbnailIntoView(e.currentPageNumber);
                },
                _showUINotification: function (e) {
                  if (!this.disableNotification) {
                    if (
                      ((this.toggleButton.title = r.get(
                        'toggle_sidebar_notification.title',
                        null,
                        'Toggle Sidebar (document contains outline/attachments)',
                      )),
                      this.isOpen)
                    ) {
                      if (e === this.active) return;
                    } else this.toggleButton.classList.add(a);
                    switch (e) {
                      case s.OUTLINE:
                        this.outlineButton.classList.add(a);
                        break;
                      case s.ATTACHMENTS:
                        this.attachmentsButton.classList.add(a);
                    }
                  }
                },
                _hideUINotification: function (e) {
                  if (!this.disableNotification) {
                    var t = function (e) {
                      switch (e) {
                        case s.OUTLINE:
                          this.outlineButton.classList.remove(a);
                          break;
                        case s.ATTACHMENTS:
                          this.attachmentsButton.classList.remove(a);
                      }
                    }.bind(this);
                    if (this.isOpen || null === e) {
                      if ((this.toggleButton.classList.remove(a), null !== e))
                        return void t(e);
                      for (e in s) t(s[e]);
                      this.toggleButton.title = r.get(
                        'toggle_sidebar.title',
                        null,
                        'Toggle Sidebar',
                      );
                    }
                  }
                },
                _addEventListeners: function () {
                  var e = this;
                  e.mainContainer.addEventListener(
                    'transitionend',
                    function (t) {
                      t.target === this &&
                        e.outerContainer.classList.remove('sidebarMoving');
                    },
                  ),
                    e.thumbnailButton.addEventListener('click', function () {
                      e.switchView(s.THUMBS);
                    }),
                    e.outlineButton.addEventListener('click', function () {
                      e.switchView(s.OUTLINE);
                    }),
                    e.outlineButton.addEventListener('dblclick', function () {
                      e.pdfOutlineViewer.toggleOutlineTree();
                    }),
                    e.attachmentsButton.addEventListener('click', function () {
                      e.switchView(s.ATTACHMENTS);
                    }),
                    e.eventBus.on('outlineloaded', function (t) {
                      var n = t.outlineCount;
                      (e.outlineButton.disabled = !n),
                        n
                          ? e._showUINotification(s.OUTLINE)
                          : e.active === s.OUTLINE && e.switchView(s.THUMBS);
                    }),
                    e.eventBus.on('attachmentsloaded', function (t) {
                      var n = t.attachmentsCount;
                      (e.attachmentsButton.disabled = !n),
                        n
                          ? e._showUINotification(s.ATTACHMENTS)
                          : e.active === s.ATTACHMENTS &&
                            e.switchView(s.THUMBS);
                    }),
                    e.eventBus.on('presentationmodechanged', function (t) {
                      t.active ||
                        t.switchInProgress ||
                        !e.isThumbnailViewVisible ||
                        e._updateThumbnailViewer();
                    });
                },
              }),
              e
            );
          })();
        (e.SidebarView = s), (e.PDFSidebar = o);
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFThumbnailView = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebPDFRenderingQueue,
        );
      })(this, function (e, t, n) {
        var i = t.mozL10n,
          r = t.getOutputScale,
          a = n.RenderingStates,
          s = 98,
          o = 1,
          c = (function () {
            function e(e, n) {
              var i = t.tempImageCache;
              i ||
                ((i = document.createElement('canvas')),
                (t.tempImageCache = i)),
                (i.width = e),
                (i.height = n),
                (i.mozOpaque = !0);
              var r = i.getContext('2d', { alpha: !1 });
              return (
                r.save(),
                (r.fillStyle = 'rgb(255, 255, 255)'),
                r.fillRect(0, 0, e, n),
                r.restore(),
                i
              );
            }
            function t(e) {
              var t = e.container,
                n = e.id,
                r = e.defaultViewport,
                c = e.linkService,
                l = e.renderingQueue,
                h = e.disableCanvasToImageConversion || !1;
              (this.id = n),
                (this.renderingId = 'thumbnail' + n),
                (this.pageLabel = null),
                (this.pdfPage = null),
                (this.rotation = 0),
                (this.viewport = r),
                (this.pdfPageRotate = r.rotation),
                (this.linkService = c),
                (this.renderingQueue = l),
                (this.renderTask = null),
                (this.renderingState = a.INITIAL),
                (this.resume = null),
                (this.disableCanvasToImageConversion = h),
                (this.pageWidth = this.viewport.width),
                (this.pageHeight = this.viewport.height),
                (this.pageRatio = this.pageWidth / this.pageHeight),
                (this.canvasWidth = s),
                (this.canvasHeight = (this.canvasWidth / this.pageRatio) | 0),
                (this.scale = this.canvasWidth / this.pageWidth);
              var u = document.createElement('a');
              (u.href = c.getAnchorUrl('#page=' + n)),
                (u.title = i.get(
                  'thumb_page_title',
                  { page: n },
                  'Page {{page}}',
                )),
                (u.onclick = function () {
                  return (c.page = n), !1;
                }),
                (this.anchor = u);
              var d = document.createElement('div');
              (d.className = 'thumbnail'),
                d.setAttribute('data-page-number', this.id),
                (this.div = d),
                1 === n && d.classList.add('selected');
              var f = document.createElement('div');
              f.className = 'thumbnailSelectionRing';
              var p = 2 * o;
              (f.style.width = this.canvasWidth + p + 'px'),
                (f.style.height = this.canvasHeight + p + 'px'),
                (this.ring = f),
                d.appendChild(f),
                u.appendChild(d),
                t.appendChild(u);
            }
            return (
              (t.prototype = {
                setPdfPage: function (e) {
                  (this.pdfPage = e), (this.pdfPageRotate = e.rotate);
                  var t = (this.rotation + this.pdfPageRotate) % 360;
                  (this.viewport = e.getViewport(1, t)), this.reset();
                },
                reset: function () {
                  this.cancelRendering(),
                    (this.pageWidth = this.viewport.width),
                    (this.pageHeight = this.viewport.height),
                    (this.pageRatio = this.pageWidth / this.pageHeight),
                    (this.canvasHeight =
                      (this.canvasWidth / this.pageRatio) | 0),
                    (this.scale = this.canvasWidth / this.pageWidth),
                    this.div.removeAttribute('data-loaded');
                  for (
                    var e = this.ring, t = e.childNodes, n = t.length - 1;
                    n >= 0;
                    n--
                  )
                    e.removeChild(t[n]);
                  var i = 2 * o;
                  (e.style.width = this.canvasWidth + i + 'px'),
                    (e.style.height = this.canvasHeight + i + 'px'),
                    this.canvas &&
                      ((this.canvas.width = 0),
                      (this.canvas.height = 0),
                      delete this.canvas),
                    this.image &&
                      (this.image.removeAttribute('src'), delete this.image);
                },
                update: function (e) {
                  'undefined' != typeof e && (this.rotation = e);
                  var t = (this.rotation + this.pdfPageRotate) % 360;
                  (this.viewport = this.viewport.clone({
                    scale: 1,
                    rotation: t,
                  })),
                    this.reset();
                },
                cancelRendering: function () {
                  this.renderTask &&
                    (this.renderTask.cancel(), (this.renderTask = null)),
                    (this.renderingState = a.INITIAL),
                    (this.resume = null);
                },
                _getPageDrawContext: function (e) {
                  var t = document.createElement('canvas');
                  (this.canvas = t), (t.mozOpaque = !0);
                  var n = t.getContext('2d', { alpha: !1 }),
                    i = r(n);
                  return (
                    (t.width = (this.canvasWidth * i.sx) | 0),
                    (t.height = (this.canvasHeight * i.sy) | 0),
                    (t.style.width = this.canvasWidth + 'px'),
                    (t.style.height = this.canvasHeight + 'px'),
                    !e && i.scaled && n.scale(i.sx, i.sy),
                    n
                  );
                },
                _convertCanvasToImage: function () {
                  if (this.canvas && this.renderingState === a.FINISHED) {
                    var e = this.renderingId,
                      t = 'thumbnailImage',
                      n = i.get(
                        'thumb_page_canvas',
                        { page: this.pageId },
                        'Thumbnail of Page {{page}}',
                      );
                    if (this.disableCanvasToImageConversion)
                      return (
                        (this.canvas.id = e),
                        (this.canvas.className = t),
                        this.canvas.setAttribute('aria-label', n),
                        this.div.setAttribute('data-loaded', !0),
                        void this.ring.appendChild(this.canvas)
                      );
                    var r = document.createElement('img');
                    (r.id = e),
                      (r.className = t),
                      r.setAttribute('aria-label', n),
                      (r.style.width = this.canvasWidth + 'px'),
                      (r.style.height = this.canvasHeight + 'px'),
                      (r.src = this.canvas.toDataURL()),
                      (this.image = r),
                      this.div.setAttribute('data-loaded', !0),
                      this.ring.appendChild(r),
                      (this.canvas.width = 0),
                      (this.canvas.height = 0),
                      delete this.canvas;
                  }
                },
                draw: function () {
                  function e(e) {
                    return (
                      h === r.renderTask && (r.renderTask = null),
                      'cancelled' === e
                        ? void n(e)
                        : ((r.renderingState = a.FINISHED),
                          r._convertCanvasToImage(),
                          void (e ? n(e) : t(void 0)))
                    );
                  }
                  if (this.renderingState !== a.INITIAL)
                    return (
                      console.error('Must be in new state before drawing'),
                      Promise.resolve(void 0)
                    );
                  this.renderingState = a.RUNNING;
                  var t,
                    n,
                    i = new Promise(function (e, i) {
                      (t = e), (n = i);
                    }),
                    r = this,
                    s = this._getPageDrawContext(),
                    o = this.viewport.clone({ scale: this.scale }),
                    c = function (e) {
                      return r.renderingQueue.isHighestPriority(r)
                        ? void e()
                        : ((r.renderingState = a.PAUSED),
                          void (r.resume = function () {
                            (r.renderingState = a.RUNNING), e();
                          }));
                    },
                    l = { canvasContext: s, viewport: o },
                    h = (this.renderTask = this.pdfPage.render(l));
                  return (
                    (h.onContinue = c),
                    h.promise.then(
                      function () {
                        e(null);
                      },
                      function (t) {
                        e(t);
                      },
                    ),
                    i
                  );
                },
                setImage: function (t) {
                  if (this.renderingState === a.INITIAL) {
                    var n = t.canvas;
                    if (n) {
                      this.pdfPage || this.setPdfPage(t.pdfPage),
                        (this.renderingState = a.FINISHED);
                      var i = this._getPageDrawContext(!0),
                        r = i.canvas;
                      if (n.width <= 2 * r.width)
                        return (
                          i.drawImage(
                            n,
                            0,
                            0,
                            n.width,
                            n.height,
                            0,
                            0,
                            r.width,
                            r.height,
                          ),
                          void this._convertCanvasToImage()
                        );
                      for (
                        var s = 3,
                          o = r.width << s,
                          c = r.height << s,
                          l = e(o, c),
                          h = l.getContext('2d');
                        o > n.width || c > n.height;

                      )
                        (o >>= 1), (c >>= 1);
                      for (
                        h.drawImage(n, 0, 0, n.width, n.height, 0, 0, o, c);
                        o > 2 * r.width;

                      )
                        h.drawImage(l, 0, 0, o, c, 0, 0, o >> 1, c >> 1),
                          (o >>= 1),
                          (c >>= 1);
                      i.drawImage(l, 0, 0, o, c, 0, 0, r.width, r.height),
                        this._convertCanvasToImage();
                    }
                  }
                },
                get pageId() {
                  return null !== this.pageLabel ? this.pageLabel : this.id;
                },
                setPageLabel: function (e) {
                  if (
                    ((this.pageLabel = 'string' == typeof e ? e : null),
                    (this.anchor.title = i.get(
                      'thumb_page_title',
                      { page: this.pageId },
                      'Page {{page}}',
                    )),
                    this.renderingState === a.FINISHED)
                  ) {
                    var t = i.get(
                      'thumb_page_canvas',
                      { page: this.pageId },
                      'Thumbnail of Page {{page}}',
                    );
                    this.image
                      ? this.image.setAttribute('aria-label', t)
                      : this.disableCanvasToImageConversion &&
                        this.canvas &&
                        this.canvas.setAttribute('aria-label', t);
                  }
                },
              }),
              t
            );
          })();
        (c.tempImageCache = null), (e.PDFThumbnailView = c);
      }),
      (function (e, t) {
        t((e.pdfjsWebSecondaryToolbar = {}), e.pdfjsWebUIUtils);
      })(this, function (e, t) {
        var n = t.SCROLLBAR_PADDING,
          i = t.mozL10n,
          r = (function () {
            function e(e, t, n) {
              (this.toolbar = e.toolbar),
                (this.toggleButton = e.toggleButton),
                (this.toolbarButtonContainer = e.toolbarButtonContainer),
                (this.buttons = [
                  {
                    element: e.presentationModeButton,
                    eventName: 'presentationmode',
                    close: !0,
                  },
                  {
                    element: e.openFileButton,
                    eventName: 'openfile',
                    close: !0,
                  },
                  { element: e.printButton, eventName: 'print', close: !0 },
                  {
                    element: e.downloadButton,
                    eventName: 'download',
                    close: !0,
                  },
                  { element: e.viewBookmarkButton, eventName: null, close: !0 },
                  {
                    element: e.firstPageButton,
                    eventName: 'firstpage',
                    close: !0,
                  },
                  {
                    element: e.lastPageButton,
                    eventName: 'lastpage',
                    close: !0,
                  },
                  {
                    element: e.pageRotateCwButton,
                    eventName: 'rotatecw',
                    close: !1,
                  },
                  {
                    element: e.pageRotateCcwButton,
                    eventName: 'rotateccw',
                    close: !1,
                  },
                  {
                    element: e.toggleHandToolButton,
                    eventName: 'togglehandtool',
                    close: !0,
                  },
                  {
                    element: e.documentPropertiesButton,
                    eventName: 'documentproperties',
                    close: !0,
                  },
                ]),
                (this.items = {
                  firstPage: e.firstPageButton,
                  lastPage: e.lastPageButton,
                  pageRotateCw: e.pageRotateCwButton,
                  pageRotateCcw: e.pageRotateCcwButton,
                }),
                (this.mainContainer = t),
                (this.eventBus = n),
                (this.opened = !1),
                (this.containerHeight = null),
                (this.previousContainerHeight = null),
                this.reset(),
                this._bindClickListeners(),
                this._bindHandToolListener(e.toggleHandToolButton),
                this.eventBus.on('resize', this._setMaxHeight.bind(this));
            }
            return (
              (e.prototype = {
                get isOpen() {
                  return this.opened;
                },
                setPageNumber: function (e) {
                  (this.pageNumber = e), this._updateUIState();
                },
                setPagesCount: function (e) {
                  (this.pagesCount = e), this._updateUIState();
                },
                reset: function () {
                  (this.pageNumber = 0),
                    (this.pagesCount = 0),
                    this._updateUIState();
                },
                _updateUIState: function () {
                  var e = this.items;
                  (e.firstPage.disabled = this.pageNumber <= 1),
                    (e.lastPage.disabled = this.pageNumber >= this.pagesCount),
                    (e.pageRotateCw.disabled = 0 === this.pagesCount),
                    (e.pageRotateCcw.disabled = 0 === this.pagesCount);
                },
                _bindClickListeners: function () {
                  this.toggleButton.addEventListener(
                    'click',
                    this.toggle.bind(this),
                  );
                  for (var e in this.buttons) {
                    var t = this.buttons[e].element,
                      n = this.buttons[e].eventName,
                      i = this.buttons[e].close;
                    t.addEventListener(
                      'click',
                      function (e, t) {
                        null !== e &&
                          this.eventBus.dispatch(e, { source: this }),
                          t && this.close();
                      }.bind(this, n, i),
                    );
                  }
                },
                _bindHandToolListener: function (e) {
                  var t = !1;
                  this.eventBus.on('handtoolchanged', function (n) {
                    t !== n.isActive &&
                      ((t = n.isActive),
                      t
                        ? ((e.title = i.get(
                            'hand_tool_disable.title',
                            null,
                            'Disable hand tool',
                          )),
                          (e.firstElementChild.textContent = i.get(
                            'hand_tool_disable_label',
                            null,
                            'Disable hand tool',
                          )))
                        : ((e.title = i.get(
                            'hand_tool_enable.title',
                            null,
                            'Enable hand tool',
                          )),
                          (e.firstElementChild.textContent = i.get(
                            'hand_tool_enable_label',
                            null,
                            'Enable hand tool',
                          ))));
                  });
                },
                open: function () {
                  this.opened ||
                    ((this.opened = !0),
                    this._setMaxHeight(),
                    this.toggleButton.classList.add('toggled'),
                    this.toolbar.classList.remove('hidden'));
                },
                close: function () {
                  this.opened &&
                    ((this.opened = !1),
                    this.toolbar.classList.add('hidden'),
                    this.toggleButton.classList.remove('toggled'));
                },
                toggle: function () {
                  this.opened ? this.close() : this.open();
                },
                _setMaxHeight: function () {
                  this.opened &&
                    ((this.containerHeight = this.mainContainer.clientHeight),
                    this.containerHeight !== this.previousContainerHeight &&
                      (this.toolbarButtonContainer.setAttribute(
                        'style',
                        'max-height: ' + (this.containerHeight - n) + 'px;',
                      ),
                      (this.previousContainerHeight = this.containerHeight)));
                },
              }),
              e
            );
          })();
        e.SecondaryToolbar = r;
      }),
      (function (e, t) {
        t((e.pdfjsWebToolbar = {}), e.pdfjsWebUIUtils);
      })(this, function (e, t) {
        var n = t.mozL10n,
          i = t.noContextMenuHandler,
          r = t.animationStarted,
          a = t.localized,
          s = t.DEFAULT_SCALE_VALUE,
          o = t.DEFAULT_SCALE,
          c = t.MIN_SCALE,
          l = t.MAX_SCALE,
          h = 'visiblePageIsLoading',
          u = 8,
          d = 22,
          f = (function () {
            function e(e, t, n) {
              (this.toolbar = e.container),
                (this.mainContainer = t),
                (this.eventBus = n),
                (this.items = e),
                (this._wasLocalized = !1),
                this.reset(),
                this._bindListeners();
            }
            return (
              (e.prototype = {
                setPageNumber: function (e, t) {
                  (this.pageNumber = e),
                    (this.pageLabel = t),
                    this._updateUIState(!1);
                },
                setPagesCount: function (e, t) {
                  (this.pagesCount = e),
                    (this.hasPageLabels = t),
                    this._updateUIState(!0);
                },
                setPageScale: function (e, t) {
                  (this.pageScaleValue = e),
                    (this.pageScale = t),
                    this._updateUIState(!1);
                },
                reset: function () {
                  (this.pageNumber = 0),
                    (this.pageLabel = null),
                    (this.hasPageLabels = !1),
                    (this.pagesCount = 0),
                    (this.pageScaleValue = s),
                    (this.pageScale = o),
                    this._updateUIState(!0);
                },
                _bindListeners: function () {
                  var e = this.eventBus,
                    t = this,
                    n = this.items;
                  n.previous.addEventListener('click', function () {
                    e.dispatch('previouspage');
                  }),
                    n.next.addEventListener('click', function () {
                      e.dispatch('nextpage');
                    }),
                    n.zoomIn.addEventListener('click', function () {
                      e.dispatch('zoomin');
                    }),
                    n.zoomOut.addEventListener('click', function () {
                      e.dispatch('zoomout');
                    }),
                    n.pageNumber.addEventListener('click', function () {
                      this.select();
                    }),
                    n.pageNumber.addEventListener('change', function () {
                      e.dispatch('pagenumberchanged', {
                        source: t,
                        value: this.value,
                      });
                    }),
                    n.scaleSelect.addEventListener('change', function () {
                      'custom' !== this.value &&
                        e.dispatch('scalechanged', {
                          source: t,
                          value: this.value,
                        });
                    }),
                    n.presentationModeButton.addEventListener(
                      'click',
                      function (t) {
                        e.dispatch('presentationmode');
                      },
                    ),
                    n.openFile.addEventListener('click', function (t) {
                      e.dispatch('openfile');
                    }),
                    n.print.addEventListener('click', function (t) {
                      e.dispatch('print');
                    }),
                    n.download.addEventListener('click', function (t) {
                      e.dispatch('download');
                    }),
                    (n.scaleSelect.oncontextmenu = i),
                    a.then(this._localized.bind(this));
                },
                _localized: function () {
                  (this._wasLocalized = !0),
                    this._adjustScaleWidth(),
                    this._updateUIState(!0);
                },
                _updateUIState: function (e) {
                  function t(e, t) {
                    for (
                      var i = s.scaleSelect.options,
                        r = !1,
                        a = 0,
                        o = i.length;
                      a < o;
                      a++
                    ) {
                      var c = i[a];
                      c.value === e
                        ? ((c.selected = !0), (r = !0))
                        : (c.selected = !1);
                    }
                    if (!r) {
                      var l = Math.round(1e4 * t) / 100;
                      (s.customScaleOption.textContent = n.get(
                        'page_scale_percent',
                        { scale: l },
                        '{{scale}}%',
                      )),
                        (s.customScaleOption.selected = !0);
                    }
                  }
                  if (this._wasLocalized) {
                    var i = this.pageNumber,
                      r = (this.pageScaleValue || this.pageScale).toString(),
                      a = this.pageScale,
                      s = this.items,
                      o = this.pagesCount;
                    e &&
                      (this.hasPageLabels
                        ? (s.pageNumber.type = 'text')
                        : ((s.pageNumber.type = 'number'),
                          (s.numPages.textContent = n.get(
                            'of_pages',
                            { pagesCount: o },
                            'of {{pagesCount}}',
                          ))),
                      (s.pageNumber.max = o)),
                      this.hasPageLabels
                        ? ((s.pageNumber.value = this.pageLabel),
                          (s.numPages.textContent = n.get(
                            'page_of_pages',
                            { pageNumber: i, pagesCount: o },
                            '({{pageNumber}} of {{pagesCount}})',
                          )))
                        : (s.pageNumber.value = i),
                      (s.previous.disabled = i <= 1),
                      (s.next.disabled = i >= o),
                      (s.zoomOut.disabled = a <= c),
                      (s.zoomIn.disabled = a >= l),
                      t(r, a);
                  }
                },
                updateLoadingIndicatorState: function (e) {
                  var t = this.items.pageNumber;
                  e ? t.classList.add(h) : t.classList.remove(h);
                },
                _adjustScaleWidth: function () {
                  var e = this.items.scaleSelectContainer,
                    t = this.items.scaleSelect;
                  r.then(function () {
                    if (
                      (0 === e.clientWidth &&
                        e.setAttribute('style', 'display: inherit;'),
                      e.clientWidth > 0)
                    ) {
                      t.setAttribute('style', 'min-width: inherit;');
                      var n = t.clientWidth + u;
                      t.setAttribute('style', 'min-width: ' + (n + d) + 'px;'),
                        e.setAttribute(
                          'style',
                          'min-width: ' + n + 'px; max-width: ' + n + 'px;',
                        );
                    }
                  });
                },
              }),
              e
            );
          })();
        e.Toolbar = f;
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFFindBar = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebPDFFindController,
        );
      })(this, function (e, t, n) {
        var i = t.mozL10n,
          r = n.FindStates,
          a = (function () {
            function e(e) {
              if (
                ((this.opened = !1),
                (this.bar = e.bar || null),
                (this.toggleButton = e.toggleButton || null),
                (this.findField = e.findField || null),
                (this.highlightAll = e.highlightAllCheckbox || null),
                (this.caseSensitive = e.caseSensitiveCheckbox || null),
                (this.findMsg = e.findMsg || null),
                (this.findResultsCount = e.findResultsCount || null),
                (this.findStatusIcon = e.findStatusIcon || null),
                (this.findPreviousButton = e.findPreviousButton || null),
                (this.findNextButton = e.findNextButton || null),
                (this.findController = e.findController || null),
                (this.eventBus = e.eventBus),
                null === this.findController)
              )
                throw new Error(
                  'PDFFindBar cannot be used without a PDFFindController instance.',
                );
              var t = this;
              this.toggleButton.addEventListener('click', function () {
                t.toggle();
              }),
                this.findField.addEventListener('input', function () {
                  t.dispatchEvent('');
                }),
                this.bar.addEventListener('keydown', function (e) {
                  switch (e.keyCode) {
                    case 13:
                      e.target === t.findField &&
                        t.dispatchEvent('again', e.shiftKey);
                      break;
                    case 27:
                      t.close();
                  }
                }),
                this.findPreviousButton.addEventListener('click', function () {
                  t.dispatchEvent('again', !0);
                }),
                this.findNextButton.addEventListener('click', function () {
                  t.dispatchEvent('again', !1);
                }),
                this.highlightAll.addEventListener('click', function () {
                  t.dispatchEvent('highlightallchange');
                }),
                this.caseSensitive.addEventListener('click', function () {
                  t.dispatchEvent('casesensitivitychange');
                });
            }
            return (
              (e.prototype = {
                reset: function () {
                  this.updateUIState();
                },
                dispatchEvent: function (e, t) {
                  this.eventBus.dispatch('find', {
                    source: this,
                    type: e,
                    query: this.findField.value,
                    caseSensitive: this.caseSensitive.checked,
                    phraseSearch: !0,
                    highlightAll: this.highlightAll.checked,
                    findPrevious: t,
                  });
                },
                updateUIState: function (e, t, n) {
                  var a = !1,
                    s = '',
                    o = '';
                  switch (e) {
                    case r.FIND_FOUND:
                      break;
                    case r.FIND_PENDING:
                      o = 'pending';
                      break;
                    case r.FIND_NOTFOUND:
                      (s = i.get('find_not_found', null, 'Phrase not found')),
                        (a = !0);
                      break;
                    case r.FIND_WRAPPED:
                      s = t
                        ? i.get(
                            'find_reached_top',
                            null,
                            'Reached top of document, continued from bottom',
                          )
                        : i.get(
                            'find_reached_bottom',
                            null,
                            'Reached end of document, continued from top',
                          );
                  }
                  a
                    ? this.findField.classList.add('notFound')
                    : this.findField.classList.remove('notFound'),
                    this.findField.setAttribute('data-status', o),
                    (this.findMsg.textContent = s),
                    this.updateResultsCount(n);
                },
                updateResultsCount: function (e) {
                  if (this.findResultsCount) {
                    if (!e)
                      return void this.findResultsCount.classList.add('hidden');
                    (this.findResultsCount.textContent = e.toLocaleString()),
                      this.findResultsCount.classList.remove('hidden');
                  }
                },
                open: function () {
                  this.opened ||
                    ((this.opened = !0),
                    this.toggleButton.classList.add('toggled'),
                    this.bar.classList.remove('hidden')),
                    this.findField.select(),
                    this.findField.focus();
                },
                close: function () {
                  this.opened &&
                    ((this.opened = !1),
                    this.toggleButton.classList.remove('toggled'),
                    this.bar.classList.add('hidden'),
                    (this.findController.active = !1));
                },
                toggle: function () {
                  this.opened ? this.close() : this.open();
                },
              }),
              e
            );
          })();
        e.PDFFindBar = a;
      }),
      (function (e, t) {
        t((e.pdfjsWebPDFHistory = {}), e.pdfjsWebDOMEvents);
      })(this, function (e, t) {
        function n(e) {
          (this.linkService = e.linkService),
            (this.eventBus = e.eventBus || t.getGlobalEventBus()),
            (this.initialized = !1),
            (this.initialDestination = null),
            (this.initialBookmark = null);
        }
        (n.prototype = {
          initialize: function (e) {
            function t() {
              (a.previousHash = window.location.hash.slice(1)),
                a._pushToHistory({ hash: a.previousHash }, !1, !0),
                a._updatePreviousBookmark();
            }
            function n(e, t) {
              function n() {
                window.removeEventListener('popstate', n),
                  window.addEventListener('popstate', i),
                  a._pushToHistory(e, !1, !0),
                  history.forward();
              }
              function i() {
                window.removeEventListener('popstate', i),
                  (a.allowHashChange = !0),
                  (a.historyUnlocked = !0),
                  t();
              }
              (a.historyUnlocked = !1),
                (a.allowHashChange = !1),
                window.addEventListener('popstate', n),
                history.back();
            }
            function i() {
              var e = a._getPreviousParams(null, !0);
              if (e) {
                var t = !a.current.dest && a.current.hash !== a.previousHash;
                a._pushToHistory(e, !1, t), a._updatePreviousBookmark();
              }
              window.removeEventListener('beforeunload', i);
            }
            (this.initialized = !0),
              (this.reInitialized = !1),
              (this.allowHashChange = !0),
              (this.historyUnlocked = !0),
              (this.isViewerInPresentationMode = !1),
              (this.previousHash = window.location.hash.substring(1)),
              (this.currentBookmark = ''),
              (this.currentPage = 0),
              (this.updatePreviousBookmark = !1),
              (this.previousBookmark = ''),
              (this.previousPage = 0),
              (this.nextHashParam = ''),
              (this.fingerprint = e),
              (this.currentUid = this.uid = 0),
              (this.current = {});
            var r = window.history.state;
            this._isStateObjectDefined(r)
              ? (r.target.dest
                  ? (this.initialDestination = r.target.dest)
                  : (this.initialBookmark = r.target.hash),
                (this.currentUid = r.uid),
                (this.uid = r.uid + 1),
                (this.current = r.target))
              : (r &&
                  r.fingerprint &&
                  this.fingerprint !== r.fingerprint &&
                  (this.reInitialized = !0),
                this._pushOrReplaceState(
                  { fingerprint: this.fingerprint },
                  !0,
                ));
            var a = this;
            window.addEventListener('popstate', function (e) {
              if (a.historyUnlocked) {
                if (e.state) return void a._goTo(e.state);
                if (0 === a.uid) {
                  var i =
                    a.previousHash &&
                    a.currentBookmark &&
                    a.previousHash !== a.currentBookmark
                      ? { hash: a.currentBookmark, page: a.currentPage }
                      : { page: 1 };
                  n(i, function () {
                    t();
                  });
                } else t();
              }
            }),
              window.addEventListener('beforeunload', i),
              window.addEventListener('pageshow', function (e) {
                window.addEventListener('beforeunload', i);
              }),
              a.eventBus.on('presentationmodechanged', function (e) {
                a.isViewerInPresentationMode = e.active;
              });
          },
          clearHistoryState: function () {
            this._pushOrReplaceState(null, !0);
          },
          _isStateObjectDefined: function (e) {
            return !!(
              e &&
              e.uid >= 0 &&
              e.fingerprint &&
              this.fingerprint === e.fingerprint &&
              e.target &&
              e.target.hash
            );
          },
          _pushOrReplaceState: function (e, t) {
            t
              ? window.history.replaceState(e, '', document.URL)
              : window.history.pushState(e, '', document.URL);
          },
          get isHashChangeUnlocked() {
            return !this.initialized || this.allowHashChange;
          },
          _updatePreviousBookmark: function () {
            this.updatePreviousBookmark &&
              this.currentBookmark &&
              this.currentPage &&
              ((this.previousBookmark = this.currentBookmark),
              (this.previousPage = this.currentPage),
              (this.updatePreviousBookmark = !1));
          },
          updateCurrentBookmark: function (e, t) {
            this.initialized &&
              ((this.currentBookmark = e.substring(1)),
              (this.currentPage = 0 | t),
              this._updatePreviousBookmark());
          },
          updateNextHashParam: function (e) {
            this.initialized && (this.nextHashParam = e);
          },
          push: function (e, t) {
            if (this.initialized && this.historyUnlocked) {
              if (
                (e.dest &&
                  !e.hash &&
                  (e.hash =
                    this.current.hash &&
                    this.current.dest &&
                    this.current.dest === e.dest
                      ? this.current.hash
                      : this.linkService
                          .getDestinationHash(e.dest)
                          .split('#')[1]),
                e.page && (e.page |= 0),
                t)
              ) {
                var n = window.history.state.target;
                return (
                  n ||
                    (this._pushToHistory(e, !1),
                    (this.previousHash = window.location.hash.substring(1))),
                  (this.updatePreviousBookmark = !this.nextHashParam),
                  void (n && this._updatePreviousBookmark())
                );
              }
              if (this.nextHashParam) {
                if (this.nextHashParam === e.hash)
                  return (
                    (this.nextHashParam = null),
                    void (this.updatePreviousBookmark = !0)
                  );
                this.nextHashParam = null;
              }
              e.hash
                ? this.current.hash
                  ? this.current.hash !== e.hash
                    ? this._pushToHistory(e, !0)
                    : (!this.current.page &&
                        e.page &&
                        this._pushToHistory(e, !1, !0),
                      (this.updatePreviousBookmark = !0))
                  : this._pushToHistory(e, !0)
                : this.current.page &&
                  e.page &&
                  this.current.page !== e.page &&
                  this._pushToHistory(e, !0);
            }
          },
          _getPreviousParams: function (e, t) {
            if (!this.currentBookmark || !this.currentPage) return null;
            if (
              (this.updatePreviousBookmark &&
                (this.updatePreviousBookmark = !1),
              this.uid > 0 && (!this.previousBookmark || !this.previousPage))
            )
              return null;
            if ((!this.current.dest && !e) || t) {
              if (this.previousBookmark === this.currentBookmark) return null;
            } else {
              if (!this.current.page && !e) return null;
              if (this.previousPage === this.currentPage) return null;
            }
            var n = { hash: this.currentBookmark, page: this.currentPage };
            return this.isViewerInPresentationMode && (n.hash = null), n;
          },
          _stateObj: function (e) {
            return { fingerprint: this.fingerprint, uid: this.uid, target: e };
          },
          _pushToHistory: function (e, t, n) {
            if (this.initialized) {
              if ((!e.hash && e.page && (e.hash = 'page=' + e.page), t && !n)) {
                var i = this._getPreviousParams();
                if (i) {
                  var r =
                    !this.current.dest &&
                    this.current.hash !== this.previousHash;
                  this._pushToHistory(i, !1, r);
                }
              }
              this._pushOrReplaceState(this._stateObj(e), n || 0 === this.uid),
                (this.currentUid = this.uid++),
                (this.current = e),
                (this.updatePreviousBookmark = !0);
            }
          },
          _goTo: function (e) {
            if (
              this.initialized &&
              this.historyUnlocked &&
              this._isStateObjectDefined(e)
            ) {
              if (!this.reInitialized && e.uid < this.currentUid) {
                var t = this._getPreviousParams(!0);
                if (t)
                  return (
                    this._pushToHistory(this.current, !1),
                    this._pushToHistory(t, !1),
                    (this.currentUid = e.uid),
                    void window.history.back()
                  );
              }
              (this.historyUnlocked = !1),
                e.target.dest
                  ? this.linkService.navigateTo(e.target.dest)
                  : this.linkService.setHash(e.target.hash),
                (this.currentUid = e.uid),
                e.uid > this.uid && (this.uid = e.uid),
                (this.current = e.target),
                (this.updatePreviousBookmark = !0);
              var n = window.location.hash.substring(1);
              this.previousHash !== n && (this.allowHashChange = !1),
                (this.previousHash = n),
                (this.historyUnlocked = !0);
            }
          },
          back: function () {
            this.go(-1);
          },
          forward: function () {
            this.go(1);
          },
          go: function (e) {
            if (this.initialized && this.historyUnlocked) {
              var t = window.history.state;
              e === -1 && t && t.uid > 0
                ? window.history.back()
                : 1 === e &&
                  t &&
                  t.uid < this.uid - 1 &&
                  window.history.forward();
            }
          },
        }),
          (e.PDFHistory = n);
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFLinkService = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebDOMEvents,
        );
      })(this, function (e, t, n) {
        function i(e) {
          return a.test(e);
        }
        var r = t.parseQueryString,
          a = /^\d+$/,
          s = (function () {
            function e(e) {
              (e = e || {}),
                (this.eventBus = e.eventBus || n.getGlobalEventBus()),
                (this.baseUrl = null),
                (this.pdfDocument = null),
                (this.pdfViewer = null),
                (this.pdfHistory = null),
                (this._pagesRefCache = null);
            }
            function t(e) {
              if (!(e instanceof Array)) return !1;
              var t = e.length,
                n = !0;
              if (t < 2) return !1;
              var i = e[0];
              if (
                !(
                  ('object' == typeof i &&
                    'number' == typeof i.num &&
                    (0 | i.num) === i.num &&
                    'number' == typeof i.gen &&
                    (0 | i.gen) === i.gen) ||
                  ('number' == typeof i && (0 | i) === i && i >= 0)
                )
              )
                return !1;
              var r = e[1];
              if ('object' != typeof r || 'string' != typeof r.name) return !1;
              switch (r.name) {
                case 'XYZ':
                  if (5 !== t) return !1;
                  break;
                case 'Fit':
                case 'FitB':
                  return 2 === t;
                case 'FitH':
                case 'FitBH':
                case 'FitV':
                case 'FitBV':
                  if (3 !== t) return !1;
                  break;
                case 'FitR':
                  if (6 !== t) return !1;
                  n = !1;
                  break;
                default:
                  return !1;
              }
              for (var a = 2; a < t; a++) {
                var s = e[a];
                if (!('number' == typeof s || (n && null === s))) return !1;
              }
              return !0;
            }
            return (
              (e.prototype = {
                setDocument: function (e, t) {
                  (this.baseUrl = t),
                    (this.pdfDocument = e),
                    (this._pagesRefCache = Object.create(null));
                },
                setViewer: function (e) {
                  this.pdfViewer = e;
                },
                setHistory: function (e) {
                  this.pdfHistory = e;
                },
                get pagesCount() {
                  return this.pdfDocument ? this.pdfDocument.numPages : 0;
                },
                get page() {
                  return this.pdfViewer.currentPageNumber;
                },
                set page(e) {
                  this.pdfViewer.currentPageNumber = e;
                },
                navigateTo: function (e) {
                  var t,
                    n = '',
                    i = this,
                    r = function (t) {
                      var a;
                      if (t instanceof Object) a = i._cachedPageNumber(t);
                      else {
                        if ((0 | t) !== t)
                          return void console.error(
                            'PDFLinkService_navigateTo: "' +
                              t +
                              '" is not a valid destination reference.',
                          );
                        a = t + 1;
                      }
                      if (a) {
                        if (a < 1 || a > i.pagesCount)
                          return void console.error(
                            'PDFLinkService_navigateTo: "' +
                              a +
                              '" is a non-existent page number.',
                          );
                        i.pdfViewer.scrollPageIntoView({
                          pageNumber: a,
                          destArray: e,
                        }),
                          i.pdfHistory &&
                            i.pdfHistory.push({ dest: e, hash: n, page: a });
                      } else
                        i.pdfDocument
                          .getPageIndex(t)
                          .then(function (e) {
                            i.cachePageRef(e + 1, t), r(t);
                          })
                          .catch(function () {
                            console.error(
                              'PDFLinkService_navigateTo: "' +
                                t +
                                '" is not a valid page reference.',
                            );
                          });
                    };
                  'string' == typeof e
                    ? ((n = e), (t = this.pdfDocument.getDestination(e)))
                    : (t = Promise.resolve(e)),
                    t.then(function (t) {
                      return (
                        (e = t),
                        t instanceof Array
                          ? void r(t[0])
                          : void console.error(
                              'PDFLinkService_navigateTo: "' +
                                t +
                                '" is not a valid destination array.',
                            )
                      );
                    });
                },
                getDestinationHash: function (e) {
                  if ('string' == typeof e)
                    return this.getAnchorUrl(
                      '#' + (i(e) ? 'nameddest=' : '') + escape(e),
                    );
                  if (e instanceof Array) {
                    var t = JSON.stringify(e);
                    return this.getAnchorUrl('#' + escape(t));
                  }
                  return this.getAnchorUrl('');
                },
                getAnchorUrl: function (e) {
                  return (this.baseUrl || '') + e;
                },
                setHash: function (e) {
                  var n, a;
                  if (e.indexOf('=') >= 0) {
                    var s = r(e);
                    if (
                      ('search' in s &&
                        this.eventBus.dispatch('findfromurlhash', {
                          source: this,
                          query: s.search.replace(/"/g, ''),
                          phraseSearch: 'true' === s.phrase,
                        }),
                      'nameddest' in s)
                    )
                      return (
                        this.pdfHistory &&
                          this.pdfHistory.updateNextHashParam(s.nameddest),
                        void this.navigateTo(s.nameddest)
                      );
                    if (('page' in s && (n = 0 | s.page || 1), 'zoom' in s)) {
                      var o = s.zoom.split(','),
                        c = o[0],
                        l = parseFloat(c);
                      c.indexOf('Fit') === -1
                        ? (a = [
                            null,
                            { name: 'XYZ' },
                            o.length > 1 ? 0 | o[1] : null,
                            o.length > 2 ? 0 | o[2] : null,
                            l ? l / 100 : c,
                          ])
                        : 'Fit' === c || 'FitB' === c
                        ? (a = [null, { name: c }])
                        : 'FitH' === c ||
                          'FitBH' === c ||
                          'FitV' === c ||
                          'FitBV' === c
                        ? (a = [
                            null,
                            { name: c },
                            o.length > 1 ? 0 | o[1] : null,
                          ])
                        : 'FitR' === c
                        ? 5 !== o.length
                          ? console.error(
                              "PDFLinkService_setHash: Not enough parameters for 'FitR'.",
                            )
                          : (a = [
                              null,
                              { name: c },
                              0 | o[1],
                              0 | o[2],
                              0 | o[3],
                              0 | o[4],
                            ])
                        : console.error(
                            "PDFLinkService_setHash: '" +
                              c +
                              "' is not a valid zoom value.",
                          );
                    }
                    a
                      ? this.pdfViewer.scrollPageIntoView({
                          pageNumber: n || this.page,
                          destArray: a,
                          allowNegativeOffset: !0,
                        })
                      : n && (this.page = n),
                      'pagemode' in s &&
                        this.eventBus.dispatch('pagemode', {
                          source: this,
                          mode: s.pagemode,
                        });
                  } else {
                    i(e) &&
                      e <= this.pagesCount &&
                      (console.warn(
                        'PDFLinkService_setHash: specifying a page number directly after the hash symbol (#) is deprecated, please use the "#page=' +
                          e +
                          '" form instead.',
                      ),
                      (this.page = 0 | e)),
                      (a = unescape(e));
                    try {
                      (a = JSON.parse(a)),
                        a instanceof Array || (a = a.toString());
                    } catch (e) {}
                    if ('string' == typeof a || t(a))
                      return (
                        this.pdfHistory &&
                          this.pdfHistory.updateNextHashParam(a),
                        void this.navigateTo(a)
                      );
                    console.error(
                      "PDFLinkService_setHash: '" +
                        unescape(e) +
                        "' is not a valid destination.",
                    );
                  }
                },
                executeNamedAction: function (e) {
                  switch (e) {
                    case 'GoBack':
                      this.pdfHistory && this.pdfHistory.back();
                      break;
                    case 'GoForward':
                      this.pdfHistory && this.pdfHistory.forward();
                      break;
                    case 'NextPage':
                      this.page < this.pagesCount && this.page++;
                      break;
                    case 'PrevPage':
                      this.page > 1 && this.page--;
                      break;
                    case 'LastPage':
                      this.page = this.pagesCount;
                      break;
                    case 'FirstPage':
                      this.page = 1;
                  }
                  this.eventBus.dispatch('namedaction', {
                    source: this,
                    action: e,
                  });
                },
                onFileAttachmentAnnotation: function (e) {
                  this.eventBus.dispatch('fileattachmentannotation', {
                    source: this,
                    id: e.id,
                    filename: e.filename,
                    content: e.content,
                  });
                },
                cachePageRef: function (e, t) {
                  var n = t.num + ' ' + t.gen + ' R';
                  this._pagesRefCache[n] = e;
                },
                _cachedPageNumber: function (e) {
                  var t = e.num + ' ' + e.gen + ' R';
                  return (
                    (this._pagesRefCache && this._pagesRefCache[t]) || null
                  );
                },
              }),
              e
            );
          })(),
          o = (function () {
            function e() {}
            return (
              (e.prototype = {
                get page() {
                  return 0;
                },
                set page(e) {},
                navigateTo: function (e) {},
                getDestinationHash: function (e) {
                  return '#';
                },
                getAnchorUrl: function (e) {
                  return '#';
                },
                setHash: function (e) {},
                executeNamedAction: function (e) {},
                onFileAttachmentAnnotation: function (e) {},
                cachePageRef: function (e, t) {},
              }),
              e
            );
          })();
        (e.PDFLinkService = s), (e.SimpleLinkService = o);
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFPageView = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebPDFRenderingQueue,
          e.pdfjsWebDOMEvents,
          e.pdfjsWebPDFJS,
        );
      })(this, function (e, t, n, i, r) {
        var a = t.CSS_UNITS,
          s = t.DEFAULT_SCALE,
          o = t.getOutputScale,
          c = t.approximateFraction,
          l = t.roundToDivide,
          h = t.RendererType,
          u = n.RenderingStates,
          d = 200,
          f = (function () {
            function e(e) {
              var t = e.container,
                n = e.id,
                r = e.scale,
                a = e.defaultViewport,
                o = e.renderingQueue,
                c = e.textLayerFactory,
                l = e.annotationLayerFactory,
                d = e.enhanceTextSelection || !1,
                f = e.renderInteractiveForms || !1;
              (this.id = n),
                (this.renderingId = 'page' + n),
                (this.pageLabel = null),
                (this.rotation = 0),
                (this.scale = r || s),
                (this.viewport = a),
                (this.pdfPageRotate = a.rotation),
                (this.hasRestrictedScaling = !1),
                (this.enhanceTextSelection = d),
                (this.renderInteractiveForms = f),
                (this.eventBus = e.eventBus || i.getGlobalEventBus()),
                (this.renderingQueue = o),
                (this.textLayerFactory = c),
                (this.annotationLayerFactory = l),
                (this.renderer = e.renderer || h.CANVAS),
                (this.paintTask = null),
                (this.paintedViewportMap = new WeakMap()),
                (this.renderingState = u.INITIAL),
                (this.resume = null),
                (this.error = null),
                (this.onBeforeDraw = null),
                (this.onAfterDraw = null),
                (this.textLayer = null),
                (this.zoomLayer = null),
                (this.annotationLayer = null);
              var p = document.createElement('div');
              (p.className = 'page'),
                (p.style.width = Math.floor(this.viewport.width) + 'px'),
                (p.style.height = Math.floor(this.viewport.height) + 'px'),
                p.setAttribute('data-page-number', this.id),
                (this.div = p),
                t.appendChild(p);
            }
            return (
              (e.prototype = {
                setPdfPage: function (e) {
                  (this.pdfPage = e), (this.pdfPageRotate = e.rotate);
                  var t = (this.rotation + this.pdfPageRotate) % 360;
                  (this.viewport = e.getViewport(this.scale * a, t)),
                    (this.stats = e.stats),
                    this.reset();
                },
                destroy: function () {
                  (this.zoomLayer = null),
                    this.reset(),
                    this.pdfPage && this.pdfPage.cleanup();
                },
                reset: function (e, t) {
                  this.cancelRendering();
                  var n = this.div;
                  (n.style.width = Math.floor(this.viewport.width) + 'px'),
                    (n.style.height = Math.floor(this.viewport.height) + 'px');
                  for (
                    var i = n.childNodes,
                      r = (e && this.zoomLayer) || null,
                      a =
                        (t &&
                          this.annotationLayer &&
                          this.annotationLayer.div) ||
                        null,
                      s = i.length - 1;
                    s >= 0;
                    s--
                  ) {
                    var o = i[s];
                    r !== o && a !== o && n.removeChild(o);
                  }
                  n.removeAttribute('data-loaded'),
                    a
                      ? this.annotationLayer.hide()
                      : (this.annotationLayer = null),
                    this.canvas &&
                      !r &&
                      (this.paintedViewportMap.delete(this.canvas),
                      (this.canvas.width = 0),
                      (this.canvas.height = 0),
                      delete this.canvas),
                    this.svg &&
                      (this.paintedViewportMap.delete(this.svg),
                      delete this.svg),
                    (this.loadingIconDiv = document.createElement('div')),
                    (this.loadingIconDiv.className = 'loadingIcon'),
                    n.appendChild(this.loadingIconDiv);
                },
                update: function (e, t) {
                  (this.scale = e || this.scale),
                    'undefined' != typeof t && (this.rotation = t);
                  var n = (this.rotation + this.pdfPageRotate) % 360;
                  if (
                    ((this.viewport = this.viewport.clone({
                      scale: this.scale * a,
                      rotation: n,
                    })),
                    this.svg)
                  )
                    return (
                      this.cssTransform(this.svg, !0),
                      void this.eventBus.dispatch('pagerendered', {
                        source: this,
                        pageNumber: this.id,
                        cssTransform: !0,
                      })
                    );
                  var i = !1;
                  if (this.canvas && r.PDFJS.maxCanvasPixels > 0) {
                    var s = this.outputScale;
                    ((Math.floor(this.viewport.width) * s.sx) | 0) *
                      ((Math.floor(this.viewport.height) * s.sy) | 0) >
                      r.PDFJS.maxCanvasPixels && (i = !0);
                  }
                  if (this.canvas) {
                    if (
                      r.PDFJS.useOnlyCssZoom ||
                      (this.hasRestrictedScaling && i)
                    )
                      return (
                        this.cssTransform(this.canvas, !0),
                        void this.eventBus.dispatch('pagerendered', {
                          source: this,
                          pageNumber: this.id,
                          cssTransform: !0,
                        })
                      );
                    this.zoomLayer ||
                      ((this.zoomLayer = this.canvas.parentNode),
                      (this.zoomLayer.style.position = 'absolute'));
                  }
                  this.zoomLayer &&
                    this.cssTransform(this.zoomLayer.firstChild),
                    this.reset(!0, !0);
                },
                cancelRendering: function () {
                  this.paintTask &&
                    (this.paintTask.cancel(), (this.paintTask = null)),
                    (this.renderingState = u.INITIAL),
                    (this.resume = null),
                    this.textLayer &&
                      (this.textLayer.cancel(), (this.textLayer = null));
                },
                updatePosition: function () {
                  this.textLayer && this.textLayer.render(d);
                },
                cssTransform: function (e, t) {
                  var n = r.CustomStyle,
                    i = this.viewport.width,
                    a = this.viewport.height,
                    s = this.div;
                  (e.style.width =
                    e.parentNode.style.width =
                    s.style.width =
                      Math.floor(i) + 'px'),
                    (e.style.height =
                      e.parentNode.style.height =
                      s.style.height =
                        Math.floor(a) + 'px');
                  var o =
                      this.viewport.rotation -
                      this.paintedViewportMap.get(e).rotation,
                    c = Math.abs(o),
                    l = 1,
                    h = 1;
                  (90 !== c && 270 !== c) || ((l = a / i), (h = i / a));
                  var u = 'rotate(' + o + 'deg) scale(' + l + ',' + h + ')';
                  if ((n.setProp('transform', e, u), this.textLayer)) {
                    var d = this.textLayer.viewport,
                      f = this.viewport.rotation - d.rotation,
                      p = Math.abs(f),
                      g = i / d.width;
                    (90 !== p && 270 !== p) || (g = i / d.height);
                    var m,
                      v,
                      b = this.textLayer.textLayerDiv;
                    switch (p) {
                      case 0:
                        m = v = 0;
                        break;
                      case 90:
                        (m = 0), (v = '-' + b.style.height);
                        break;
                      case 180:
                        (m = '-' + b.style.width), (v = '-' + b.style.height);
                        break;
                      case 270:
                        (m = '-' + b.style.width), (v = 0);
                        break;
                      default:
                        console.error('Bad rotation value.');
                    }
                    n.setProp(
                      'transform',
                      b,
                      'rotate(' +
                        p +
                        'deg) scale(' +
                        g +
                        ', ' +
                        g +
                        ') translate(' +
                        m +
                        ', ' +
                        v +
                        ')',
                    ),
                      n.setProp('transformOrigin', b, '0% 0%');
                  }
                  t &&
                    this.annotationLayer &&
                    this.annotationLayer.render(this.viewport, 'display');
                },
                get width() {
                  return this.viewport.width;
                },
                get height() {
                  return this.viewport.height;
                },
                getPagePoint: function (e, t) {
                  return this.viewport.convertToPdfPoint(e, t);
                },
                draw: function () {
                  this.renderingState !== u.INITIAL &&
                    (console.error('Must be in new state before drawing'),
                    this.reset()),
                    (this.renderingState = u.RUNNING);
                  var e = this,
                    t = this.pdfPage,
                    n = this.div,
                    i = document.createElement('div');
                  (i.style.width = n.style.width),
                    (i.style.height = n.style.height),
                    i.classList.add('canvasWrapper'),
                    this.annotationLayer && this.annotationLayer.div
                      ? n.insertBefore(i, this.annotationLayer.div)
                      : n.appendChild(i);
                  var r = null,
                    a = null;
                  this.textLayerFactory &&
                    ((r = document.createElement('div')),
                    (r.className = 'textLayer'),
                    (r.style.width = i.style.width),
                    (r.style.height = i.style.height),
                    this.annotationLayer && this.annotationLayer.div
                      ? n.insertBefore(r, this.annotationLayer.div)
                      : n.appendChild(r),
                    (a = this.textLayerFactory.createTextLayerBuilder(
                      r,
                      this.id - 1,
                      this.viewport,
                      this.enhanceTextSelection,
                    ))),
                    (this.textLayer = a);
                  var s = null;
                  this.renderingQueue &&
                    (s = function (t) {
                      return e.renderingQueue.isHighestPriority(e)
                        ? void t()
                        : ((e.renderingState = u.PAUSED),
                          void (e.resume = function () {
                            (e.renderingState = u.RUNNING), t();
                          }));
                    });
                  var o = function (i) {
                      if (
                        (c === e.paintTask && (e.paintTask = null),
                        'cancelled' === i)
                      )
                        return (e.error = null), Promise.resolve(void 0);
                      if (
                        ((e.renderingState = u.FINISHED),
                        e.loadingIconDiv &&
                          (n.removeChild(e.loadingIconDiv),
                          delete e.loadingIconDiv),
                        e.zoomLayer)
                      ) {
                        var r = e.zoomLayer.firstChild;
                        e.paintedViewportMap.delete(r),
                          (r.width = 0),
                          (r.height = 0),
                          n.contains(e.zoomLayer) && n.removeChild(e.zoomLayer),
                          (e.zoomLayer = null);
                      }
                      return (
                        (e.error = i),
                        (e.stats = t.stats),
                        e.onAfterDraw && e.onAfterDraw(),
                        e.eventBus.dispatch('pagerendered', {
                          source: e,
                          pageNumber: e.id,
                          cssTransform: !1,
                        }),
                        i ? Promise.reject(i) : Promise.resolve(void 0)
                      );
                    },
                    c =
                      this.renderer === h.SVG
                        ? this.paintOnSvg(i)
                        : this.paintOnCanvas(i);
                  (c.onRenderContinue = s), (this.paintTask = c);
                  var l = c.promise.then(
                    function () {
                      return o(null).then(function () {
                        a &&
                          t
                            .getTextContent({ normalizeWhitespace: !0 })
                            .then(function (e) {
                              a.setTextContent(e), a.render(d);
                            });
                      });
                    },
                    function (e) {
                      return o(e);
                    },
                  );
                  return (
                    this.annotationLayerFactory &&
                      (this.annotationLayer ||
                        (this.annotationLayer =
                          this.annotationLayerFactory.createAnnotationLayerBuilder(
                            n,
                            t,
                            this.renderInteractiveForms,
                          )),
                      this.annotationLayer.render(this.viewport, 'display')),
                    n.setAttribute('data-loaded', !0),
                    this.onBeforeDraw && this.onBeforeDraw(),
                    l
                  );
                },
                paintOnCanvas: function (e) {
                  var t,
                    n,
                    i = new Promise(function (e, i) {
                      (t = e), (n = i);
                    }),
                    s = {
                      promise: i,
                      onRenderContinue: function (e) {
                        e();
                      },
                      cancel: function () {
                        P.cancel();
                      },
                    },
                    h = this.viewport,
                    u = document.createElement('canvas');
                  (u.id = 'page' + this.id), u.setAttribute('hidden', 'hidden');
                  var d = !0,
                    f = function () {
                      d && (u.removeAttribute('hidden'), (d = !1));
                    };
                  e.appendChild(u), (this.canvas = u), (u.mozOpaque = !0);
                  var p = u.getContext('2d', { alpha: !1 }),
                    g = o(p);
                  if (((this.outputScale = g), r.PDFJS.useOnlyCssZoom)) {
                    var m = h.clone({ scale: a });
                    (g.sx *= m.width / h.width),
                      (g.sy *= m.height / h.height),
                      (g.scaled = !0);
                  }
                  if (r.PDFJS.maxCanvasPixels > 0) {
                    var v = h.width * h.height,
                      b = Math.sqrt(r.PDFJS.maxCanvasPixels / v);
                    g.sx > b || g.sy > b
                      ? ((g.sx = b),
                        (g.sy = b),
                        (g.scaled = !0),
                        (this.hasRestrictedScaling = !0))
                      : (this.hasRestrictedScaling = !1);
                  }
                  var w = c(g.sx),
                    y = c(g.sy);
                  (u.width = l(h.width * g.sx, w[0])),
                    (u.height = l(h.height * g.sy, y[0])),
                    (u.style.width = l(h.width, w[1]) + 'px'),
                    (u.style.height = l(h.height, y[1]) + 'px'),
                    this.paintedViewportMap.set(u, h);
                  var A = g.scaled ? [g.sx, 0, 0, g.sy, 0, 0] : null,
                    S = {
                      canvasContext: p,
                      transform: A,
                      viewport: this.viewport,
                      renderInteractiveForms: this.renderInteractiveForms,
                    },
                    P = this.pdfPage.render(S);
                  return (
                    (P.onContinue = function (e) {
                      f(), s.onRenderContinue ? s.onRenderContinue(e) : e();
                    }),
                    P.promise.then(
                      function () {
                        f(), t(void 0);
                      },
                      function (e) {
                        f(), n(e);
                      },
                    ),
                    s
                  );
                },
                paintOnSvg: function (e) {
                  var t = !1,
                    n = function () {
                      if (t) throw 'cancelled';
                    },
                    i = this,
                    s = this.pdfPage,
                    o = r.SVGGraphics,
                    c = this.viewport.clone({ scale: a }),
                    l = s.getOperatorList().then(function (t) {
                      n();
                      var r = new o(s.commonObjs, s.objs);
                      return r.getSVG(t, c).then(function (t) {
                        n(),
                          (i.svg = t),
                          i.paintedViewportMap.set(t, c),
                          (t.style.width = e.style.width),
                          (t.style.height = e.style.height),
                          (i.renderingState = u.FINISHED),
                          e.appendChild(t);
                      });
                    });
                  return {
                    promise: l,
                    onRenderContinue: function (e) {
                      e();
                    },
                    cancel: function () {
                      t = !0;
                    },
                  };
                },
                setPageLabel: function (e) {
                  (this.pageLabel = 'string' == typeof e ? e : null),
                    null !== this.pageLabel
                      ? this.div.setAttribute('data-page-label', this.pageLabel)
                      : this.div.removeAttribute('data-page-label');
                },
              }),
              e
            );
          })();
        e.PDFPageView = f;
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFThumbnailViewer = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebPDFThumbnailView,
        );
      })(this, function (e, t, n) {
        var i = t.watchScroll,
          r = t.getVisibleElements,
          a = t.scrollIntoView,
          s = n.PDFThumbnailView,
          o = -19,
          c = (function () {
            function e(e) {
              (this.container = e.container),
                (this.renderingQueue = e.renderingQueue),
                (this.linkService = e.linkService),
                (this.scroll = i(
                  this.container,
                  this._scrollUpdated.bind(this),
                )),
                this._resetView();
            }
            return (
              (e.prototype = {
                _scrollUpdated: function () {
                  this.renderingQueue.renderHighestPriority();
                },
                getThumbnail: function (e) {
                  return this.thumbnails[e];
                },
                _getVisibleThumbs: function () {
                  return r(this.container, this.thumbnails);
                },
                scrollThumbnailIntoView: function (e) {
                  var t = document.querySelector('.thumbnail.selected');
                  t && t.classList.remove('selected');
                  var n = document.querySelector(
                    'div.thumbnail[data-page-number="' + e + '"]',
                  );
                  n && n.classList.add('selected');
                  var i = this._getVisibleThumbs(),
                    r = i.views.length;
                  if (r > 0) {
                    var s = i.first.id,
                      c = r > 1 ? i.last.id : s;
                    (e <= s || e >= c) && a(n, { top: o });
                  }
                },
                get pagesRotation() {
                  return this._pagesRotation;
                },
                set pagesRotation(e) {
                  this._pagesRotation = e;
                  for (var t = 0, n = this.thumbnails.length; t < n; t++) {
                    var i = this.thumbnails[t];
                    i.update(e);
                  }
                },
                cleanup: function () {
                  var e = s.tempImageCache;
                  e && ((e.width = 0), (e.height = 0)),
                    (s.tempImageCache = null);
                },
                _resetView: function () {
                  (this.thumbnails = []),
                    (this._pageLabels = null),
                    (this._pagesRotation = 0),
                    (this._pagesRequests = []),
                    (this.container.textContent = '');
                },
                setDocument: function (e) {
                  return (
                    this.pdfDocument &&
                      (this._cancelRendering(), this._resetView()),
                    (this.pdfDocument = e),
                    e
                      ? e.getPage(1).then(
                          function (t) {
                            for (
                              var n = e.numPages, i = t.getViewport(1), r = 1;
                              r <= n;
                              ++r
                            ) {
                              var a = new s({
                                container: this.container,
                                id: r,
                                defaultViewport: i.clone(),
                                linkService: this.linkService,
                                renderingQueue: this.renderingQueue,
                                disableCanvasToImageConversion: !1,
                              });
                              this.thumbnails.push(a);
                            }
                          }.bind(this),
                        )
                      : Promise.resolve()
                  );
                },
                _cancelRendering: function () {
                  for (var e = 0, t = this.thumbnails.length; e < t; e++)
                    this.thumbnails[e] && this.thumbnails[e].cancelRendering();
                },
                setPageLabels: function (e) {
                  if (this.pdfDocument) {
                    e
                      ? e instanceof Array &&
                        this.pdfDocument.numPages === e.length
                        ? (this._pageLabels = e)
                        : ((this._pageLabels = null),
                          console.error(
                            'PDFThumbnailViewer_setPageLabels: Invalid page labels.',
                          ))
                      : (this._pageLabels = null);
                    for (var t = 0, n = this.thumbnails.length; t < n; t++) {
                      var i = this.thumbnails[t],
                        r = this._pageLabels && this._pageLabels[t];
                      i.setPageLabel(r);
                    }
                  }
                },
                _ensurePdfPageLoaded: function (e) {
                  if (e.pdfPage) return Promise.resolve(e.pdfPage);
                  var t = e.id;
                  if (this._pagesRequests[t]) return this._pagesRequests[t];
                  var n = this.pdfDocument.getPage(t).then(
                    function (n) {
                      return (
                        e.setPdfPage(n), (this._pagesRequests[t] = null), n
                      );
                    }.bind(this),
                  );
                  return (this._pagesRequests[t] = n), n;
                },
                forceRendering: function () {
                  var e = this._getVisibleThumbs(),
                    t = this.renderingQueue.getHighestPriority(
                      e,
                      this.thumbnails,
                      this.scroll.down,
                    );
                  return (
                    !!t &&
                    (this._ensurePdfPageLoaded(t).then(
                      function () {
                        this.renderingQueue.renderView(t);
                      }.bind(this),
                    ),
                    !0)
                  );
                },
              }),
              e
            );
          })();
        e.PDFThumbnailViewer = c;
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebTextLayerBuilder = {}),
          e.pdfjsWebDOMEvents,
          e.pdfjsWebPDFJS,
        );
      })(this, function (e, t, n) {
        function i() {}
        var r = 300,
          a = (function () {
            function e(e) {
              (this.textLayerDiv = e.textLayerDiv),
                (this.eventBus = e.eventBus || t.getGlobalEventBus()),
                (this.textContent = null),
                (this.renderingDone = !1),
                (this.pageIdx = e.pageIndex),
                (this.pageNumber = this.pageIdx + 1),
                (this.matches = []),
                (this.viewport = e.viewport),
                (this.textDivs = []),
                (this.findController = e.findController || null),
                (this.textLayerRenderTask = null),
                (this.enhanceTextSelection = e.enhanceTextSelection),
                this._bindMouse();
            }
            return (
              (e.prototype = {
                _finishRendering: function () {
                  if (((this.renderingDone = !0), !this.enhanceTextSelection)) {
                    var e = document.createElement('div');
                    (e.className = 'endOfContent'),
                      this.textLayerDiv.appendChild(e);
                  }
                  this.eventBus.dispatch('textlayerrendered', {
                    source: this,
                    pageNumber: this.pageNumber,
                    numTextDivs: this.textDivs.length,
                  });
                },
                render: function (e) {
                  if (this.textContent && !this.renderingDone) {
                    this.cancel(), (this.textDivs = []);
                    var t = document.createDocumentFragment();
                    (this.textLayerRenderTask = n.renderTextLayer({
                      textContent: this.textContent,
                      container: t,
                      viewport: this.viewport,
                      textDivs: this.textDivs,
                      timeout: e,
                      enhanceTextSelection: this.enhanceTextSelection,
                    })),
                      this.textLayerRenderTask.promise.then(
                        function () {
                          this.textLayerDiv.appendChild(t),
                            this._finishRendering(),
                            this.updateMatches();
                        }.bind(this),
                        function (e) {},
                      );
                  }
                },
                cancel: function () {
                  this.textLayerRenderTask &&
                    (this.textLayerRenderTask.cancel(),
                    (this.textLayerRenderTask = null));
                },
                setTextContent: function (e) {
                  this.cancel(), (this.textContent = e);
                },
                convertMatches: function (e, t) {
                  var n = 0,
                    i = 0,
                    r = this.textContent.items,
                    a = r.length - 1,
                    s =
                      null === this.findController
                        ? 0
                        : this.findController.state.query.length,
                    o = [];
                  if (!e) return o;
                  for (var c = 0, l = e.length; c < l; c++) {
                    for (var h = e[c]; n !== a && h >= i + r[n].str.length; )
                      (i += r[n].str.length), n++;
                    n === r.length &&
                      console.error('Could not find a matching mapping');
                    var u = { begin: { divIdx: n, offset: h - i } };
                    for (
                      h += t ? t[c] : s;
                      n !== a && h > i + r[n].str.length;

                    )
                      (i += r[n].str.length), n++;
                    (u.end = { divIdx: n, offset: h - i }), o.push(u);
                  }
                  return o;
                },
                renderMatches: function (e) {
                  function t(e, t) {
                    var i = e.divIdx;
                    (r[i].textContent = ''), n(i, 0, e.offset, t);
                  }
                  function n(e, t, n, a) {
                    var s = r[e],
                      o = i[e].str.substring(t, n),
                      c = document.createTextNode(o);
                    if (a) {
                      var l = document.createElement('span');
                      return (
                        (l.className = a),
                        l.appendChild(c),
                        void s.appendChild(l)
                      );
                    }
                    s.appendChild(c);
                  }
                  if (0 !== e.length) {
                    var i = this.textContent.items,
                      r = this.textDivs,
                      a = null,
                      s = this.pageIdx,
                      o =
                        null !== this.findController &&
                        s === this.findController.selected.pageIdx,
                      c =
                        null === this.findController
                          ? -1
                          : this.findController.selected.matchIdx,
                      l =
                        null !== this.findController &&
                        this.findController.state.highlightAll,
                      h = { divIdx: -1, offset: void 0 },
                      u = c,
                      d = u + 1;
                    if (l) (u = 0), (d = e.length);
                    else if (!o) return;
                    for (var f = u; f < d; f++) {
                      var p = e[f],
                        g = p.begin,
                        m = p.end,
                        v = o && f === c,
                        b = v ? ' selected' : '';
                      if (
                        (this.findController &&
                          this.findController.updateMatchPosition(
                            s,
                            f,
                            r,
                            g.divIdx,
                          ),
                        a && g.divIdx === a.divIdx
                          ? n(a.divIdx, a.offset, g.offset)
                          : (null !== a && n(a.divIdx, a.offset, h.offset),
                            t(g)),
                        g.divIdx === m.divIdx)
                      )
                        n(g.divIdx, g.offset, m.offset, 'highlight' + b);
                      else {
                        n(g.divIdx, g.offset, h.offset, 'highlight begin' + b);
                        for (var w = g.divIdx + 1, y = m.divIdx; w < y; w++)
                          r[w].className = 'highlight middle' + b;
                        t(m, 'highlight end' + b);
                      }
                      a = m;
                    }
                    a && n(a.divIdx, a.offset, h.offset);
                  }
                },
                updateMatches: function () {
                  if (this.renderingDone) {
                    for (
                      var e = this.matches,
                        t = this.textDivs,
                        n = this.textContent.items,
                        i = -1,
                        r = 0,
                        a = e.length;
                      r < a;
                      r++
                    ) {
                      for (
                        var s = e[r],
                          o = Math.max(i, s.begin.divIdx),
                          c = o,
                          l = s.end.divIdx;
                        c <= l;
                        c++
                      ) {
                        var h = t[c];
                        (h.textContent = n[c].str), (h.className = '');
                      }
                      i = s.end.divIdx + 1;
                    }
                    if (
                      null !== this.findController &&
                      this.findController.active
                    ) {
                      var u, d;
                      null !== this.findController &&
                        ((u =
                          this.findController.pageMatches[this.pageIdx] ||
                          null),
                        (d = this.findController.pageMatchesLength
                          ? this.findController.pageMatchesLength[
                              this.pageIdx
                            ] || null
                          : null)),
                        (this.matches = this.convertMatches(u, d)),
                        this.renderMatches(this.matches);
                    }
                  }
                },
                _bindMouse: function () {
                  var e = this.textLayerDiv,
                    t = this,
                    n = null;
                  e.addEventListener('mousedown', function (i) {
                    if (t.enhanceTextSelection && t.textLayerRenderTask)
                      return (
                        t.textLayerRenderTask.expandTextDivs(!0),
                        void (n && (clearTimeout(n), (n = null)))
                      );
                    var r = e.querySelector('.endOfContent');
                    if (r) {
                      var a = i.target !== e;
                      if (
                        (a =
                          a &&
                          'none' !==
                            window
                              .getComputedStyle(r)
                              .getPropertyValue('-moz-user-select'))
                      ) {
                        var s = e.getBoundingClientRect(),
                          o = Math.max(0, (i.pageY - s.top) / s.height);
                        r.style.top = (100 * o).toFixed(2) + '%';
                      }
                      r.classList.add('active');
                    }
                  }),
                    e.addEventListener('mouseup', function (i) {
                      if (t.enhanceTextSelection && t.textLayerRenderTask)
                        return void (n = setTimeout(function () {
                          t.textLayerRenderTask &&
                            t.textLayerRenderTask.expandTextDivs(!1),
                            (n = null);
                        }, r));
                      var a = e.querySelector('.endOfContent');
                      a && ((a.style.top = ''), a.classList.remove('active'));
                    });
                },
              }),
              e
            );
          })();
        (i.prototype = {
          createTextLayerBuilder: function (e, t, n, i) {
            return new a({
              textLayerDiv: e,
              pageIndex: t,
              viewport: n,
              enhanceTextSelection: i,
            });
          },
        }),
          (e.TextLayerBuilder = a),
          (e.DefaultTextLayerFactory = i);
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebAnnotationLayerBuilder = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebPDFLinkService,
          e.pdfjsWebPDFJS,
        );
      })(this, function (e, t, n, i) {
        function r() {}
        var a = t.mozL10n,
          s = n.SimpleLinkService,
          o = (function () {
            function e(e) {
              (this.pageDiv = e.pageDiv),
                (this.pdfPage = e.pdfPage),
                (this.renderInteractiveForms = e.renderInteractiveForms),
                (this.linkService = e.linkService),
                (this.downloadManager = e.downloadManager),
                (this.div = null);
            }
            return (
              (e.prototype = {
                render: function (e, t) {
                  var n = this,
                    r = { intent: void 0 === t ? 'display' : t };
                  this.pdfPage.getAnnotations(r).then(function (t) {
                    if (
                      ((e = e.clone({ dontFlip: !0 })),
                      (r = {
                        viewport: e,
                        div: n.div,
                        annotations: t,
                        page: n.pdfPage,
                        renderInteractiveForms: n.renderInteractiveForms,
                        linkService: n.linkService,
                        downloadManager: n.downloadManager,
                      }),
                      n.div)
                    )
                      i.AnnotationLayer.update(r);
                    else {
                      if (0 === t.length) return;
                      (n.div = document.createElement('div')),
                        (n.div.className = 'annotationLayer'),
                        n.pageDiv.appendChild(n.div),
                        (r.div = n.div),
                        i.AnnotationLayer.render(r),
                        'undefined' != typeof a && a.translate(n.div);
                    }
                  });
                },
                hide: function () {
                  this.div && this.div.setAttribute('hidden', 'true');
                },
              }),
              e
            );
          })();
        (r.prototype = {
          createAnnotationLayerBuilder: function (e, t, n) {
            return new o({
              pageDiv: e,
              pdfPage: t,
              renderInteractiveForms: n,
              linkService: new s(),
            });
          },
        }),
          (e.AnnotationLayerBuilder = o),
          (e.DefaultAnnotationLayerFactory = r);
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFViewer = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebPDFPageView,
          e.pdfjsWebPDFRenderingQueue,
          e.pdfjsWebTextLayerBuilder,
          e.pdfjsWebAnnotationLayerBuilder,
          e.pdfjsWebPDFLinkService,
          e.pdfjsWebDOMEvents,
          e.pdfjsWebPDFJS,
        );
      })(this, function (e, t, n, i, r, a, s, o, c) {
        var l = t.UNKNOWN_SCALE,
          h = t.SCROLLBAR_PADDING,
          u = t.VERTICAL_PADDING,
          d = t.MAX_AUTO_SCALE,
          f = t.CSS_UNITS,
          p = t.DEFAULT_SCALE,
          g = t.DEFAULT_SCALE_VALUE,
          m = t.RendererType,
          v = t.scrollIntoView,
          b = t.watchScroll,
          w = t.getVisibleElements,
          y = n.PDFPageView,
          A = i.RenderingStates,
          S = i.PDFRenderingQueue,
          P = r.TextLayerBuilder,
          x = a.AnnotationLayerBuilder,
          C = s.SimpleLinkService,
          _ = { UNKNOWN: 0, NORMAL: 1, CHANGING: 2, FULLSCREEN: 3 },
          L = 10,
          T = (function () {
            function e(e) {
              var t = [];
              (this.push = function (n) {
                var i = t.indexOf(n);
                i >= 0 && t.splice(i, 1),
                  t.push(n),
                  t.length > e && t.shift().destroy();
              }),
                (this.resize = function (n) {
                  for (e = n; t.length > e; ) t.shift().destroy();
                });
            }
            function t(e, t) {
              return t === e || Math.abs(t - e) < 1e-15;
            }
            function n(e) {
              (this.container = e.container),
                (this.viewer = e.viewer || e.container.firstElementChild),
                (this.eventBus = e.eventBus || o.getGlobalEventBus()),
                (this.linkService = e.linkService || new C()),
                (this.downloadManager = e.downloadManager || null),
                (this.removePageBorders = e.removePageBorders || !1),
                (this.enhanceTextSelection = e.enhanceTextSelection || !1),
                (this.renderInteractiveForms = e.renderInteractiveForms || !1),
                (this.renderer = e.renderer || m.CANVAS),
                (this.defaultRenderingQueue = !e.renderingQueue),
                this.defaultRenderingQueue
                  ? ((this.renderingQueue = new S()),
                    this.renderingQueue.setViewer(this))
                  : (this.renderingQueue = e.renderingQueue),
                (this.scroll = b(
                  this.container,
                  this._scrollUpdate.bind(this),
                )),
                (this.presentationModeState = _.UNKNOWN),
                this._resetView(),
                this.removePageBorders &&
                  this.viewer.classList.add('removePageBorders');
            }
            return (
              (n.prototype = {
                get pagesCount() {
                  return this._pages.length;
                },
                getPageView: function (e) {
                  return this._pages[e];
                },
                get pageViewsReady() {
                  return this._pageViewsReady;
                },
                get currentPageNumber() {
                  return this._currentPageNumber;
                },
                set currentPageNumber(e) {
                  if ((0 | e) !== e) throw new Error('Invalid page number.');
                  return this.pdfDocument
                    ? void this._setCurrentPageNumber(e, !0)
                    : void (this._currentPageNumber = e);
                },
                _setCurrentPageNumber: function (e, t) {
                  if (this._currentPageNumber === e)
                    return void (t && this._resetCurrentPageView());
                  if (!(0 < e && e <= this.pagesCount))
                    return void console.error(
                      'PDFViewer_setCurrentPageNumber: "' +
                        e +
                        '" is out of bounds.',
                    );
                  var n = {
                    source: this,
                    pageNumber: e,
                    pageLabel: this._pageLabels && this._pageLabels[e - 1],
                  };
                  (this._currentPageNumber = e),
                    this.eventBus.dispatch('pagechanging', n),
                    this.eventBus.dispatch('pagechange', n),
                    t && this._resetCurrentPageView();
                },
                get currentPageLabel() {
                  return (
                    this._pageLabels &&
                    this._pageLabels[this._currentPageNumber - 1]
                  );
                },
                set currentPageLabel(e) {
                  var t = 0 | e;
                  if (this._pageLabels) {
                    var n = this._pageLabels.indexOf(e);
                    n >= 0 && (t = n + 1);
                  }
                  this.currentPageNumber = t;
                },
                get currentScale() {
                  return this._currentScale !== l ? this._currentScale : p;
                },
                set currentScale(e) {
                  if (isNaN(e)) throw new Error('Invalid numeric scale');
                  return this.pdfDocument
                    ? void this._setScale(e, !1)
                    : ((this._currentScale = e),
                      void (this._currentScaleValue =
                        e !== l ? e.toString() : null));
                },
                get currentScaleValue() {
                  return this._currentScaleValue;
                },
                set currentScaleValue(e) {
                  return this.pdfDocument
                    ? void this._setScale(e, !1)
                    : ((this._currentScale = isNaN(e) ? l : e),
                      void (this._currentScaleValue = e.toString()));
                },
                get pagesRotation() {
                  return this._pagesRotation;
                },
                set pagesRotation(e) {
                  if ('number' != typeof e || e % 90 !== 0)
                    throw new Error('Invalid pages rotation angle.');
                  if (((this._pagesRotation = e), this.pdfDocument)) {
                    for (var t = 0, n = this._pages.length; t < n; t++) {
                      var i = this._pages[t];
                      i.update(i.scale, e);
                    }
                    this._setScale(this._currentScaleValue, !0),
                      this.defaultRenderingQueue && this.update();
                  }
                },
                setDocument: function (e) {
                  if (
                    (this.pdfDocument &&
                      (this._cancelRendering(), this._resetView()),
                    (this.pdfDocument = e),
                    e)
                  ) {
                    var t,
                      n = e.numPages,
                      i = this,
                      r = new Promise(function (e) {
                        t = e;
                      });
                    (this.pagesPromise = r),
                      r.then(function () {
                        (i._pageViewsReady = !0),
                          i.eventBus.dispatch('pagesloaded', {
                            source: i,
                            pagesCount: n,
                          });
                      });
                    var a = !1,
                      s = null,
                      o = new Promise(function (e) {
                        s = e;
                      });
                    this.onePageRendered = o;
                    var l = function (e) {
                        (e.onBeforeDraw = function () {
                          i._buffer.push(this);
                        }),
                          (e.onAfterDraw = function () {
                            a || ((a = !0), s());
                          });
                      },
                      h = e.getPage(1);
                    return (
                      (this.firstPagePromise = h),
                      h.then(
                        function (r) {
                          for (
                            var a = this.currentScale,
                              s = r.getViewport(a * f),
                              h = 1;
                            h <= n;
                            ++h
                          ) {
                            var u = null;
                            c.PDFJS.disableTextLayer || (u = this);
                            var d = new y({
                              container: this.viewer,
                              eventBus: this.eventBus,
                              id: h,
                              scale: a,
                              defaultViewport: s.clone(),
                              renderingQueue: this.renderingQueue,
                              textLayerFactory: u,
                              annotationLayerFactory: this,
                              enhanceTextSelection: this.enhanceTextSelection,
                              renderInteractiveForms:
                                this.renderInteractiveForms,
                              renderer: this.renderer,
                            });
                            l(d), this._pages.push(d);
                          }
                          var p = this.linkService;
                          o.then(function () {
                            if (c.PDFJS.disableAutoFetch) t();
                            else
                              for (var r = n, a = 1; a <= n; ++a)
                                e.getPage(a).then(
                                  function (e, n) {
                                    var a = i._pages[e - 1];
                                    a.pdfPage || a.setPdfPage(n),
                                      p.cachePageRef(e, n.ref),
                                      r--,
                                      r || t();
                                  }.bind(null, a),
                                );
                          }),
                            i.eventBus.dispatch('pagesinit', { source: i }),
                            this.defaultRenderingQueue && this.update(),
                            this.findController &&
                              this.findController.resolveFirstPage();
                        }.bind(this),
                      )
                    );
                  }
                },
                setPageLabels: function (e) {
                  if (this.pdfDocument) {
                    e
                      ? e instanceof Array &&
                        this.pdfDocument.numPages === e.length
                        ? (this._pageLabels = e)
                        : ((this._pageLabels = null),
                          console.error(
                            'PDFViewer_setPageLabels: Invalid page labels.',
                          ))
                      : (this._pageLabels = null);
                    for (var t = 0, n = this._pages.length; t < n; t++) {
                      var i = this._pages[t],
                        r = this._pageLabels && this._pageLabels[t];
                      i.setPageLabel(r);
                    }
                  }
                },
                _resetView: function () {
                  (this._pages = []),
                    (this._currentPageNumber = 1),
                    (this._currentScale = l),
                    (this._currentScaleValue = null),
                    (this._pageLabels = null),
                    (this._buffer = new e(L)),
                    (this._location = null),
                    (this._pagesRotation = 0),
                    (this._pagesRequests = []),
                    (this._pageViewsReady = !1),
                    (this.viewer.textContent = '');
                },
                _scrollUpdate: function () {
                  if (0 !== this.pagesCount) {
                    this.update();
                    for (var e = 0, t = this._pages.length; e < t; e++)
                      this._pages[e].updatePosition();
                  }
                },
                _setScaleDispatchEvent: function (e, t, n) {
                  var i = {
                    source: this,
                    scale: e,
                    presetValue: n ? t : void 0,
                  };
                  this.eventBus.dispatch('scalechanging', i),
                    this.eventBus.dispatch('scalechange', i);
                },
                _setScaleUpdatePages: function (e, n, i, r) {
                  if (
                    ((this._currentScaleValue = n.toString()),
                    t(this._currentScale, e))
                  )
                    return void (r && this._setScaleDispatchEvent(e, n, !0));
                  for (var a = 0, s = this._pages.length; a < s; a++)
                    this._pages[a].update(e);
                  if (((this._currentScale = e), !i)) {
                    var o,
                      l = this._currentPageNumber;
                    !this._location ||
                      c.PDFJS.ignoreCurrentPositionOnZoom ||
                      this.isInPresentationMode ||
                      this.isChangingPresentationMode ||
                      ((l = this._location.pageNumber),
                      (o = [
                        null,
                        { name: 'XYZ' },
                        this._location.left,
                        this._location.top,
                        null,
                      ])),
                      this.scrollPageIntoView({
                        pageNumber: l,
                        destArray: o,
                        allowNegativeOffset: !0,
                      });
                  }
                  this._setScaleDispatchEvent(e, n, r),
                    this.defaultRenderingQueue && this.update();
                },
                _setScale: function (e, t) {
                  var n = parseFloat(e);
                  if (n > 0) this._setScaleUpdatePages(n, e, t, !1);
                  else {
                    var i = this._pages[this._currentPageNumber - 1];
                    if (!i) return;
                    var r =
                        this.isInPresentationMode || this.removePageBorders
                          ? 0
                          : h,
                      a =
                        this.isInPresentationMode || this.removePageBorders
                          ? 0
                          : u,
                      s =
                        ((this.container.clientWidth - r) / i.width) * i.scale,
                      o =
                        ((this.container.clientHeight - a) / i.height) *
                        i.scale;
                    switch (e) {
                      case 'page-actual':
                        n = 1;
                        break;
                      case 'page-width':
                        n = s;
                        break;
                      case 'page-height':
                        n = o;
                        break;
                      case 'page-fit':
                        n = Math.min(s, o);
                        break;
                      case 'auto':
                        var c = i.width > i.height,
                          l = c ? Math.min(o, s) : s;
                        n = Math.min(d, l);
                        break;
                      default:
                        return void console.error(
                          'PDFViewer_setScale: "' +
                            e +
                            '" is an unknown zoom value.',
                        );
                    }
                    this._setScaleUpdatePages(n, e, t, !0);
                  }
                },
                _resetCurrentPageView: function () {
                  this.isInPresentationMode &&
                    this._setScale(this._currentScaleValue, !0);
                  var e = this._pages[this._currentPageNumber - 1];
                  v(e.div);
                },
                scrollPageIntoView: function (e) {
                  if (this.pdfDocument) {
                    if (arguments.length > 1 || 'number' == typeof e) {
                      console.warn(
                        'Call of scrollPageIntoView() with obsolete signature.',
                      );
                      var t = {};
                      'number' == typeof e && (t.pageNumber = e),
                        arguments[1] instanceof Array &&
                          (t.destArray = arguments[1]),
                        (e = t);
                    }
                    var n = e.pageNumber || 0,
                      i = e.destArray || null,
                      r = e.allowNegativeOffset || !1;
                    if (this.isInPresentationMode || !i)
                      return void this._setCurrentPageNumber(n, !0);
                    var a = this._pages[n - 1];
                    if (!a)
                      return void console.error(
                        'PDFViewer_scrollPageIntoView: Invalid "pageNumber" parameter.',
                      );
                    var s,
                      o,
                      c = 0,
                      d = 0,
                      p = 0,
                      m = 0,
                      b = a.rotation % 180 !== 0,
                      w = (b ? a.height : a.width) / a.scale / f,
                      y = (b ? a.width : a.height) / a.scale / f,
                      A = 0;
                    switch (i[1].name) {
                      case 'XYZ':
                        (c = i[2]),
                          (d = i[3]),
                          (A = i[4]),
                          (c = null !== c ? c : 0),
                          (d = null !== d ? d : y);
                        break;
                      case 'Fit':
                      case 'FitB':
                        A = 'page-fit';
                        break;
                      case 'FitH':
                      case 'FitBH':
                        (d = i[2]),
                          (A = 'page-width'),
                          null === d &&
                            this._location &&
                            ((c = this._location.left),
                            (d = this._location.top));
                        break;
                      case 'FitV':
                      case 'FitBV':
                        (c = i[2]), (p = w), (m = y), (A = 'page-height');
                        break;
                      case 'FitR':
                        (c = i[2]), (d = i[3]), (p = i[4] - c), (m = i[5] - d);
                        var S = this.removePageBorders ? 0 : h,
                          P = this.removePageBorders ? 0 : u;
                        (s = (this.container.clientWidth - S) / p / f),
                          (o = (this.container.clientHeight - P) / m / f),
                          (A = Math.min(Math.abs(s), Math.abs(o)));
                        break;
                      default:
                        return void console.error(
                          "PDFViewer_scrollPageIntoView: '" +
                            i[1].name +
                            "' is not a valid destination type.",
                        );
                    }
                    if (
                      (A && A !== this._currentScale
                        ? (this.currentScaleValue = A)
                        : this._currentScale === l &&
                          (this.currentScaleValue = g),
                      'page-fit' === A && !i[4])
                    )
                      return void v(a.div);
                    var x = [
                        a.viewport.convertToViewportPoint(c, d),
                        a.viewport.convertToViewportPoint(c + p, d + m),
                      ],
                      C = Math.min(x[0][0], x[1][0]),
                      _ = Math.min(x[0][1], x[1][1]);
                    r || ((C = Math.max(C, 0)), (_ = Math.max(_, 0))),
                      v(a.div, { left: C, top: _ });
                  }
                },
                _updateLocation: function (e) {
                  var t = this._currentScale,
                    n = this._currentScaleValue,
                    i = parseFloat(n) === t ? Math.round(1e4 * t) / 100 : n,
                    r = e.id,
                    a = '#page=' + r;
                  a += '&zoom=' + i;
                  var s = this._pages[r - 1],
                    o = this.container,
                    c = s.getPagePoint(o.scrollLeft - e.x, o.scrollTop - e.y),
                    l = Math.round(c[0]),
                    h = Math.round(c[1]);
                  (a += ',' + l + ',' + h),
                    (this._location = {
                      pageNumber: r,
                      scale: i,
                      top: h,
                      left: l,
                      pdfOpenParams: a,
                    });
                },
                update: function () {
                  var e = this._getVisiblePages(),
                    t = e.views;
                  if (0 !== t.length) {
                    var n = Math.max(L, 2 * t.length + 1);
                    this._buffer.resize(n),
                      this.renderingQueue.renderHighestPriority(e);
                    for (
                      var i = this._currentPageNumber,
                        r = e.first,
                        a = 0,
                        s = t.length,
                        o = !1;
                      a < s;
                      ++a
                    ) {
                      var c = t[a];
                      if (c.percent < 100) break;
                      if (c.id === i) {
                        o = !0;
                        break;
                      }
                    }
                    o || (i = t[0].id),
                      this.isInPresentationMode ||
                        this._setCurrentPageNumber(i),
                      this._updateLocation(r),
                      this.eventBus.dispatch('updateviewarea', {
                        source: this,
                        location: this._location,
                      });
                  }
                },
                containsElement: function (e) {
                  return this.container.contains(e);
                },
                focus: function () {
                  this.container.focus();
                },
                get isInPresentationMode() {
                  return this.presentationModeState === _.FULLSCREEN;
                },
                get isChangingPresentationMode() {
                  return this.presentationModeState === _.CHANGING;
                },
                get isHorizontalScrollbarEnabled() {
                  return (
                    !this.isInPresentationMode &&
                    this.container.scrollWidth > this.container.clientWidth
                  );
                },
                _getVisiblePages: function () {
                  if (!this.isInPresentationMode)
                    return w(this.container, this._pages, !0);
                  var e = [],
                    t = this._pages[this._currentPageNumber - 1];
                  return (
                    e.push({ id: t.id, view: t }),
                    { first: t, last: t, views: e }
                  );
                },
                cleanup: function () {
                  for (var e = 0, t = this._pages.length; e < t; e++)
                    this._pages[e] &&
                      this._pages[e].renderingState !== A.FINISHED &&
                      this._pages[e].reset();
                },
                _cancelRendering: function () {
                  for (var e = 0, t = this._pages.length; e < t; e++)
                    this._pages[e] && this._pages[e].cancelRendering();
                },
                _ensurePdfPageLoaded: function (e) {
                  if (e.pdfPage) return Promise.resolve(e.pdfPage);
                  var t = e.id;
                  if (this._pagesRequests[t]) return this._pagesRequests[t];
                  var n = this.pdfDocument.getPage(t).then(
                    function (n) {
                      return (
                        e.setPdfPage(n), (this._pagesRequests[t] = null), n
                      );
                    }.bind(this),
                  );
                  return (this._pagesRequests[t] = n), n;
                },
                forceRendering: function (e) {
                  var t = e || this._getVisiblePages(),
                    n = this.renderingQueue.getHighestPriority(
                      t,
                      this._pages,
                      this.scroll.down,
                    );
                  return (
                    !!n &&
                    (this._ensurePdfPageLoaded(n).then(
                      function () {
                        this.renderingQueue.renderView(n);
                      }.bind(this),
                    ),
                    !0)
                  );
                },
                getPageTextContent: function (e) {
                  return this.pdfDocument.getPage(e + 1).then(function (e) {
                    return e.getTextContent({ normalizeWhitespace: !0 });
                  });
                },
                createTextLayerBuilder: function (e, t, n, i) {
                  return new P({
                    textLayerDiv: e,
                    eventBus: this.eventBus,
                    pageIndex: t,
                    viewport: n,
                    findController: this.isInPresentationMode
                      ? null
                      : this.findController,
                    enhanceTextSelection: !this.isInPresentationMode && i,
                  });
                },
                createAnnotationLayerBuilder: function (e, t, n) {
                  return new x({
                    pageDiv: e,
                    pdfPage: t,
                    renderInteractiveForms: n,
                    linkService: this.linkService,
                    downloadManager: this.downloadManager,
                  });
                },
                setFindController: function (e) {
                  this.findController = e;
                },
                getPagesOverview: function () {
                  return this._pages.map(function (e) {
                    var t = e.pdfPage.getViewport(1);
                    return { width: t.width, height: t.height };
                  });
                },
              }),
              n
            );
          })();
        (e.PresentationModeState = _), (e.PDFViewer = T);
      }),
      (function (e, t) {
        t(
          (e.pdfjsWebApp = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebDownloadManager,
          e.pdfjsWebPDFHistory,
          e.pdfjsWebPreferences,
          e.pdfjsWebPDFSidebar,
          e.pdfjsWebViewHistory,
          e.pdfjsWebPDFThumbnailViewer,
          e.pdfjsWebToolbar,
          e.pdfjsWebSecondaryToolbar,
          e.pdfjsWebPasswordPrompt,
          e.pdfjsWebPDFPresentationMode,
          e.pdfjsWebPDFDocumentProperties,
          e.pdfjsWebHandTool,
          e.pdfjsWebPDFViewer,
          e.pdfjsWebPDFRenderingQueue,
          e.pdfjsWebPDFLinkService,
          e.pdfjsWebPDFOutlineViewer,
          e.pdfjsWebOverlayManager,
          e.pdfjsWebPDFAttachmentViewer,
          e.pdfjsWebPDFFindController,
          e.pdfjsWebPDFFindBar,
          e.pdfjsWebDOMEvents,
          e.pdfjsWebPDFJS,
        );
      })(
        this,
        function (
          e,
          t,
          n,
          i,
          r,
          a,
          s,
          o,
          c,
          l,
          h,
          u,
          d,
          f,
          p,
          g,
          m,
          v,
          b,
          w,
          y,
          A,
          S,
          P,
        ) {
          function x(e) {
            (e.imageResourcesPath = './images/'),
              (e.workerSrc = '../build/pdf.worker.js'),
              (e.cMapUrl = '../web/cmaps/'),
              (e.cMapPacked = !0);
          }
          function C(e) {
            return new Promise(function (t, n) {
              var i = ze.appConfig,
                r = document.createElement('script');
              (r.src = i.debuggerScriptPath),
                (r.onload = function () {
                  PDFBug.enable(e), PDFBug.init(P, i.mainContainer), t();
                }),
                (r.onerror = function () {
                  n(new Error('Cannot load debugger at ' + r.src));
                }),
                (
                  document.getElementsByTagName('head')[0] || document.body
                ).appendChild(r);
            });
          }
          function _() {
            var e,
              t = document.location.search.substring(1),
              n = fe(t);
            (e = 'file' in n ? n.file : DEFAULT_URL), re(e);
            var i = [],
              r = ze.appConfig,
              a = document.createElement('input');
            (a.id = r.openFileInputName),
              (a.className = 'fileInput'),
              a.setAttribute('type', 'file'),
              (a.oncontextmenu = ue),
              document.body.appendChild(a),
              window.File && window.FileReader && window.FileList && window.Blob
                ? (a.value = null)
                : (r.toolbar.openFile.setAttribute('hidden', 'true'),
                  r.secondaryToolbar.openFileButton.setAttribute(
                    'hidden',
                    'true',
                  ));
            var s = P.PDFJS;
            if (ze.viewerPrefs.pdfBugEnabled) {
              var o = document.location.hash.substring(1),
                c = fe(o);
              if (
                ('disableworker' in c &&
                  (s.disableWorker = 'true' === c.disableworker),
                'disablerange' in c &&
                  (s.disableRange = 'true' === c.disablerange),
                'disablestream' in c &&
                  (s.disableStream = 'true' === c.disablestream),
                'disableautofetch' in c &&
                  (s.disableAutoFetch = 'true' === c.disableautofetch),
                'disablefontface' in c &&
                  (s.disableFontFace = 'true' === c.disablefontface),
                'disablehistory' in c &&
                  (s.disableHistory = 'true' === c.disablehistory),
                'webgl' in c && (s.disableWebGL = 'true' !== c.webgl),
                'useonlycsszoom' in c &&
                  (s.useOnlyCssZoom = 'true' === c.useonlycsszoom),
                'verbosity' in c && (s.verbosity = 0 | c.verbosity),
                'ignorecurrentpositiononzoom' in c &&
                  (s.ignoreCurrentPositionOnZoom =
                    'true' === c.ignorecurrentpositiononzoom),
                'locale' in c && (s.locale = c.locale),
                'textlayer' in c)
              )
                switch (c.textlayer) {
                  case 'off':
                    s.disableTextLayer = !0;
                    break;
                  case 'visible':
                  case 'shadow':
                  case 'hover':
                    var l = r.viewerContainer;
                    l.classList.add('textLayer-' + c.textlayer);
                }
              if ('pdfbug' in c) {
                s.pdfBug = !0;
                var h = c.pdfbug,
                  u = h.split(',');
                i.push(C(u));
              }
            }
            de.setLanguage(s.locale),
              ze.supportsPrinting ||
                (r.toolbar.print.classList.add('hidden'),
                r.secondaryToolbar.printButton.classList.add('hidden')),
              ze.supportsFullscreen ||
                (r.toolbar.presentationModeButton.classList.add('hidden'),
                r.secondaryToolbar.presentationModeButton.classList.add(
                  'hidden',
                )),
              ze.supportsIntegratedFind &&
                r.toolbar.viewFind.classList.add('hidden'),
              r.sidebar.mainContainer.addEventListener(
                'transitionend',
                function (e) {
                  e.target === this && ze.eventBus.dispatch('resize');
                },
                !0,
              ),
              r.sidebar.toggleButton.addEventListener('click', function () {
                ze.pdfSidebar.toggle();
              }),
              Promise.all(i)
                .then(function () {
                  Xe(e);
                })
                .catch(function (e) {
                  ze.error(
                    de.get(
                      'loading_error',
                      null,
                      'An error occurred while opening.',
                    ),
                    e,
                  );
                });
          }
          function L(e) {
            var t = e.pageNumber,
              n = t - 1,
              i = ze.pdfViewer.getPageView(n);
            if (
              (t === ze.page && ze.toolbar.updateLoadingIndicatorState(!1), i)
            ) {
              if (ze.pdfSidebar.isThumbnailViewVisible) {
                var r = ze.pdfThumbnailViewer.getThumbnail(n);
                r.setImage(i);
              }
              P.PDFJS.pdfBug &&
                Stats.enabled &&
                i.stats &&
                Stats.add(t, i.stats),
                i.error &&
                  ze.error(
                    de.get(
                      'rendering_error',
                      null,
                      'An error occurred while rendering the page.',
                    ),
                    i.error,
                  );
            }
          }
          function T(e) {}
          function k(e) {
            var t,
              n = e.mode;
            switch (n) {
              case 'thumbs':
                t = me.THUMBS;
                break;
              case 'bookmarks':
              case 'outline':
                t = me.OUTLINE;
                break;
              case 'attachments':
                t = me.ATTACHMENTS;
                break;
              case 'none':
                t = me.NONE;
                break;
              default:
                return void console.error(
                  'Invalid "pagemode" hash parameter: ' + n,
                );
            }
            ze.pdfSidebar.switchView(t, !0);
          }
          function E(e) {
            var t = e.action;
            switch (t) {
              case 'GoToPage':
                ze.appConfig.toolbar.pageNumber.select();
                break;
              case 'Find':
                ze.supportsIntegratedFind || ze.findBar.toggle();
            }
          }
          function I(e) {
            var t = e.active,
              n = e.switchInProgress;
            ze.pdfViewer.presentationModeState = n
              ? _e.CHANGING
              : t
              ? _e.FULLSCREEN
              : _e.NORMAL;
          }
          function D(e) {
            ze.pdfRenderingQueue.isThumbnailViewEnabled =
              ze.pdfSidebar.isThumbnailViewVisible;
            var t = ze.store;
            t &&
              ze.isInitialViewSet &&
              t.initializedPromise.then(function () {
                t.set('sidebarView', e.view).catch(function () {});
              });
          }
          function F(e) {
            var t = e.location,
              n = ze.store;
            n &&
              n.initializedPromise.then(function () {
                n.setMultiple({
                  exists: !0,
                  page: t.pageNumber,
                  zoom: t.scale,
                  scrollLeft: t.left,
                  scrollTop: t.top,
                }).catch(function () {});
              });
            var i = ze.pdfLinkService.getAnchorUrl(t.pdfOpenParams);
            (ze.appConfig.toolbar.viewBookmark.href = i),
              (ze.appConfig.secondaryToolbar.viewBookmarkButton.href = i),
              ze.pdfHistory.updateCurrentBookmark(
                t.pdfOpenParams,
                t.pageNumber,
              );
            var r = ze.pdfViewer.getPageView(ze.page - 1),
              a = r.renderingState !== Te.FINISHED;
            ze.toolbar.updateLoadingIndicatorState(a);
          }
          function R() {
            var e = ze.pdfViewer.currentScaleValue;
            'auto' === e || 'page-fit' === e || 'page-width' === e
              ? (ze.pdfViewer.currentScaleValue = e)
              : e || (ze.pdfViewer.currentScaleValue = se),
              ze.pdfViewer.update();
          }
          function N(e) {
            if (ze.pdfHistory.isHashChangeUnlocked) {
              var t = e.hash;
              if (!t) return;
              ze.isInitialViewSet
                ? ze.pdfLinkService.setHash(t)
                : (ze.initialBookmark = t);
            }
          }
          function O() {
            ze.requestPresentationMode();
          }
          function M() {
            var e = ze.appConfig.openFileInputName;
            document.getElementById(e).click();
          }
          function B() {
            window.print();
          }
          function j() {
            ze.download();
          }
          function U() {
            ze.pdfDocument && (ze.page = 1);
          }
          function V() {
            ze.pdfDocument && (ze.page = ze.pagesCount);
          }
          function W() {
            ze.page++;
          }
          function H() {
            ze.page--;
          }
          function z() {
            ze.zoomIn();
          }
          function G() {
            ze.zoomOut();
          }
          function X(e) {
            var t = ze.pdfViewer;
            (t.currentPageLabel = e.value),
              e.value !== t.currentPageNumber.toString() &&
                e.value !== t.currentPageLabel &&
                ze.toolbar.setPageNumber(
                  t.currentPageNumber,
                  t.currentPageLabel,
                );
          }
          function q(e) {
            ze.pdfViewer.currentScaleValue = e.value;
          }
          function Y() {
            ze.rotatePages(90);
          }
          function J() {
            ze.rotatePages(-90);
          }
          function Q() {
            ze.pdfDocumentProperties.open();
          }
          function K(e) {
            ze.findController.executeCommand('find' + e.type, {
              query: e.query,
              phraseSearch: e.phraseSearch,
              caseSensitive: e.caseSensitive,
              highlightAll: e.highlightAll,
              findPrevious: e.findPrevious,
            });
          }
          function Z(e) {
            ze.findController.executeCommand('find', {
              query: e.query,
              phraseSearch: e.phraseSearch,
              caseSensitive: !1,
              highlightAll: !0,
              findPrevious: !1,
            });
          }
          function $(e) {
            ze.toolbar.setPageScale(e.presetValue, e.scale),
              ze.pdfViewer.update();
          }
          function ee(e) {
            var t = e.pageNumber;
            if (
              (ze.toolbar.setPageNumber(t, e.pageLabel || null),
              ze.secondaryToolbar.setPageNumber(t),
              ze.pdfSidebar.isThumbnailViewVisible &&
                ze.pdfThumbnailViewer.scrollThumbnailIntoView(t),
              P.PDFJS.pdfBug && Stats.enabled)
            ) {
              var n = ze.pdfViewer.getPageView(t - 1);
              n.stats && Stats.add(t, n.stats);
            }
          }
          function te(e) {
            var t = ze.pdfViewer;
            if (!t.isInPresentationMode)
              if (e.ctrlKey || e.metaKey) {
                var n = ze.supportedMouseWheelZoomModifierKeys;
                if ((e.ctrlKey && !n.ctrlKey) || (e.metaKey && !n.metaKey))
                  return;
                if ((e.preventDefault(), Je)) return;
                var i = t.currentScale,
                  r = Me(e),
                  a = 3,
                  s = r * a;
                s < 0 ? ze.zoomOut(-s) : ze.zoomIn(s);
                var o = t.currentScale;
                if (i !== o) {
                  var c = o / i - 1,
                    l = t.container.getBoundingClientRect(),
                    h = e.clientX - l.left,
                    u = e.clientY - l.top;
                  (t.container.scrollLeft += h * c),
                    (t.container.scrollTop += u * c);
                }
              } else
                (Je = !0),
                  clearTimeout(Ye),
                  (Ye = setTimeout(function () {
                    Je = !1;
                  }, 1e3));
          }
          function ne(e) {
            if (ze.secondaryToolbar.isOpen) {
              var t = ze.appConfig;
              (ze.pdfViewer.containsElement(e.target) ||
                (t.toolbar.container.contains(e.target) &&
                  e.target !== t.secondaryToolbar.toggleButton)) &&
                ze.secondaryToolbar.close();
            }
          }
          function ie(e) {
            if (!De.active) {
              var t = !1,
                n = !1,
                i =
                  (e.ctrlKey ? 1 : 0) |
                  (e.altKey ? 2 : 0) |
                  (e.shiftKey ? 4 : 0) |
                  (e.metaKey ? 8 : 0),
                r = ze.pdfViewer,
                a = r && r.isInPresentationMode;
              if (1 === i || 8 === i || 5 === i || 12 === i)
                switch (e.keyCode) {
                  case 70:
                    ze.supportsIntegratedFind || (ze.findBar.open(), (t = !0));
                    break;
                  case 71:
                    if (!ze.supportsIntegratedFind) {
                      var s = ze.findController.state;
                      s &&
                        ze.findController.executeCommand('findagain', {
                          query: s.query,
                          phraseSearch: s.phraseSearch,
                          caseSensitive: s.caseSensitive,
                          highlightAll: s.highlightAll,
                          findPrevious: 5 === i || 12 === i,
                        }),
                        (t = !0);
                    }
                    break;
                  case 61:
                  case 107:
                  case 187:
                  case 171:
                    a || ze.zoomIn(), (t = !0);
                    break;
                  case 173:
                  case 109:
                  case 189:
                    a || ze.zoomOut(), (t = !0);
                    break;
                  case 48:
                  case 96:
                    a ||
                      (setTimeout(function () {
                        r.currentScaleValue = se;
                      }),
                      (t = !1));
                    break;
                  case 38:
                    (a || ze.page > 1) && ((ze.page = 1), (t = !0), (n = !0));
                    break;
                  case 40:
                    (a || ze.page < ze.pagesCount) &&
                      ((ze.page = ze.pagesCount), (t = !0), (n = !0));
                }
              if (1 === i || 8 === i)
                switch (e.keyCode) {
                  case 83:
                    ze.download(), (t = !0);
                }
              if (3 === i || 10 === i)
                switch (e.keyCode) {
                  case 80:
                    ze.requestPresentationMode(), (t = !0);
                    break;
                  case 71:
                    ze.appConfig.toolbar.pageNumber.select(), (t = !0);
                }
              if (t) return n && !a && r.focus(), void e.preventDefault();
              var o =
                  document.activeElement || document.querySelector(':focus'),
                c = o && o.tagName.toUpperCase();
              if (
                ('INPUT' !== c && 'TEXTAREA' !== c && 'SELECT' !== c) ||
                27 === e.keyCode
              ) {
                if (0 === i)
                  switch (e.keyCode) {
                    case 38:
                    case 33:
                    case 8:
                      if (!a && 'page-fit' !== r.currentScaleValue) break;
                    case 37:
                      if (r.isHorizontalScrollbarEnabled) break;
                    case 75:
                    case 80:
                      ze.page > 1 && ze.page--, (t = !0);
                      break;
                    case 27:
                      ze.secondaryToolbar.isOpen &&
                        (ze.secondaryToolbar.close(), (t = !0)),
                        !ze.supportsIntegratedFind &&
                          ze.findBar.opened &&
                          (ze.findBar.close(), (t = !0));
                      break;
                    case 40:
                    case 34:
                    case 32:
                      if (!a && 'page-fit' !== r.currentScaleValue) break;
                    case 39:
                      if (r.isHorizontalScrollbarEnabled) break;
                    case 74:
                    case 78:
                      ze.page < ze.pagesCount && ze.page++, (t = !0);
                      break;
                    case 36:
                      (a || ze.page > 1) && ((ze.page = 1), (t = !0), (n = !0));
                      break;
                    case 35:
                      (a || ze.page < ze.pagesCount) &&
                        ((ze.page = ze.pagesCount), (t = !0), (n = !0));
                      break;
                    case 72:
                      a || ze.handTool.toggle();
                      break;
                    case 82:
                      ze.rotatePages(90);
                  }
                if (4 === i)
                  switch (e.keyCode) {
                    case 32:
                      if (!a && 'page-fit' !== r.currentScaleValue) break;
                      ze.page > 1 && ze.page--, (t = !0);
                      break;
                    case 82:
                      ze.rotatePages(-90);
                  }
                if (
                  (t ||
                    a ||
                    (((e.keyCode >= 33 && e.keyCode <= 40) ||
                      (32 === e.keyCode && 'BUTTON' !== c)) &&
                      (n = !0)),
                  2 === i)
                )
                  switch (e.keyCode) {
                    case 37:
                      a && (ze.pdfHistory.back(), (t = !0));
                      break;
                    case 39:
                      a && (ze.pdfHistory.forward(), (t = !0));
                  }
                n && !r.containsElement(o) && r.focus(),
                  t && e.preventDefault();
              }
            }
          }
          var re,
            ae = t.UNKNOWN_SCALE,
            se = t.DEFAULT_SCALE_VALUE,
            oe = t.MIN_SCALE,
            ce = t.MAX_SCALE,
            le = t.ProgressBar,
            he = t.getPDFFileNameFromURL,
            ue = t.noContextMenuHandler,
            de = t.mozL10n,
            fe = t.parseQueryString,
            pe = i.PDFHistory,
            ge = r.Preferences,
            me = a.SidebarView,
            ve = a.PDFSidebar,
            be = s.ViewHistory,
            we = o.PDFThumbnailViewer,
            ye = c.Toolbar,
            Ae = l.SecondaryToolbar,
            Se = h.PasswordPrompt,
            Pe = u.PDFPresentationMode,
            xe = d.PDFDocumentProperties,
            Ce = f.HandTool,
            _e = p.PresentationModeState,
            Le = p.PDFViewer,
            Te = g.RenderingStates,
            ke = g.PDFRenderingQueue,
            Ee = m.PDFLinkService,
            Ie = v.PDFOutlineViewer,
            De = b.OverlayManager,
            Fe = w.PDFAttachmentViewer,
            Re = y.PDFFindController,
            Ne = A.PDFFindBar,
            Oe = S.getGlobalEventBus,
            Me = t.normalizeWheelEventDelta,
            Be = t.animationStarted,
            je = t.localized,
            Ue = t.RendererType,
            Ve = 1.1,
            We = 5e3,
            He = {
              updateFindControlState: function (e) {},
              initPassiveLoading: function (e) {},
              fallback: function (e, t) {},
              reportTelemetry: function (e) {},
              createDownloadManager: function () {
                return new n.DownloadManager();
              },
              supportsIntegratedFind: !1,
              supportsDocumentFonts: !0,
              supportsDocumentColors: !0,
              supportedMouseWheelZoomModifierKeys: { ctrlKey: !0, metaKey: !0 },
            },
            ze = {
              initialBookmark: document.location.hash.substring(1),
              initialDestination: null,
              initialized: !1,
              fellback: !1,
              appConfig: null,
              pdfDocument: null,
              pdfLoadingTask: null,
              printService: null,
              pdfViewer: null,
              pdfThumbnailViewer: null,
              pdfRenderingQueue: null,
              pdfPresentationMode: null,
              pdfDocumentProperties: null,
              pdfLinkService: null,
              pdfHistory: null,
              pdfSidebar: null,
              pdfOutlineViewer: null,
              pdfAttachmentViewer: null,
              store: null,
              downloadManager: null,
              toolbar: null,
              secondaryToolbar: null,
              eventBus: null,
              pageRotation: 0,
              isInitialViewSet: !1,
              viewerPrefs: {
                sidebarViewOnLoad: me.NONE,
                pdfBugEnabled: !1,
                showPreviousViewOnLoad: !0,
                defaultZoomValue: '',
                disablePageLabels: !1,
                renderer: 'canvas',
                enhanceTextSelection: !1,
                renderInteractiveForms: !1,
              },
              isViewerEmbedded: window.parent !== window,
              url: '',
              baseUrl: '',
              externalServices: He,
              initialize: function (e) {
                var t = this,
                  n = P.PDFJS;
                return (
                  ge.initialize(),
                  (this.preferences = ge),
                  x(n),
                  (this.appConfig = e),
                  this._readPreferences()
                    .then(function () {
                      return t._initializeViewerComponents();
                    })
                    .then(function () {
                      t.bindEvents(),
                        t.bindWindowEvents(),
                        je.then(function () {
                          t.eventBus.dispatch('localized');
                        }),
                        t.isViewerEmbedded &&
                          !n.isExternalLinkTargetSet() &&
                          (n.externalLinkTarget = n.LinkTarget.TOP),
                        (t.initialized = !0);
                    })
                );
              },
              _readPreferences: function () {
                var e = this,
                  t = P.PDFJS;
                return Promise.all([
                  ge.get('enableWebGL').then(function (e) {
                    t.disableWebGL = !e;
                  }),
                  ge.get('sidebarViewOnLoad').then(function (t) {
                    e.viewerPrefs.sidebarViewOnLoad = t;
                  }),
                  ge.get('pdfBugEnabled').then(function (t) {
                    e.viewerPrefs.pdfBugEnabled = t;
                  }),
                  ge.get('showPreviousViewOnLoad').then(function (t) {
                    e.viewerPrefs.showPreviousViewOnLoad = t;
                  }),
                  ge.get('defaultZoomValue').then(function (t) {
                    e.viewerPrefs.defaultZoomValue = t;
                  }),
                  ge.get('enhanceTextSelection').then(function (t) {
                    e.viewerPrefs.enhanceTextSelection = t;
                  }),
                  ge.get('disableTextLayer').then(function (e) {
                    t.disableTextLayer !== !0 && (t.disableTextLayer = e);
                  }),
                  ge.get('disableRange').then(function (e) {
                    t.disableRange !== !0 && (t.disableRange = e);
                  }),
                  ge.get('disableStream').then(function (e) {
                    t.disableStream !== !0 && (t.disableStream = e);
                  }),
                  ge.get('disableAutoFetch').then(function (e) {
                    t.disableAutoFetch = e;
                  }),
                  ge.get('disableFontFace').then(function (e) {
                    t.disableFontFace !== !0 && (t.disableFontFace = e);
                  }),
                  ge.get('useOnlyCssZoom').then(function (e) {
                    t.useOnlyCssZoom = e;
                  }),
                  ge.get('externalLinkTarget').then(function (e) {
                    t.isExternalLinkTargetSet() || (t.externalLinkTarget = e);
                  }),
                  ge.get('renderer').then(function (t) {
                    e.viewerPrefs.renderer = t;
                  }),
                  ge.get('renderInteractiveForms').then(function (t) {
                    e.viewerPrefs.renderInteractiveForms = t;
                  }),
                  ge.get('disablePageLabels').then(function (t) {
                    e.viewerPrefs.disablePageLabels = t;
                  }),
                ]).catch(function (e) {});
              },
              _initializeViewerComponents: function () {
                var e = this,
                  t = this.appConfig;
                return new Promise(function (n, i) {
                  var r = t.eventBus || Oe();
                  e.eventBus = r;
                  var a = new ke();
                  (a.onIdle = e.cleanup.bind(e)), (e.pdfRenderingQueue = a);
                  var s = new Ee({ eventBus: r });
                  e.pdfLinkService = s;
                  var o = e.externalServices.createDownloadManager();
                  e.downloadManager = o;
                  var c = t.mainContainer,
                    l = t.viewerContainer;
                  (e.pdfViewer = new Le({
                    container: c,
                    viewer: l,
                    eventBus: r,
                    renderingQueue: a,
                    linkService: s,
                    downloadManager: o,
                    renderer: e.viewerPrefs.renderer,
                    enhanceTextSelection: e.viewerPrefs.enhanceTextSelection,
                    renderInteractiveForms:
                      e.viewerPrefs.renderInteractiveForms,
                  })),
                    a.setViewer(e.pdfViewer),
                    s.setViewer(e.pdfViewer);
                  var h = t.sidebar.thumbnailView;
                  (e.pdfThumbnailViewer = new we({
                    container: h,
                    renderingQueue: a,
                    linkService: s,
                  })),
                    a.setThumbnailViewer(e.pdfThumbnailViewer),
                    (e.pdfHistory = new pe({ linkService: s, eventBus: r })),
                    s.setHistory(e.pdfHistory),
                    (e.findController = new Re({ pdfViewer: e.pdfViewer })),
                    (e.findController.onUpdateResultsCount = function (t) {
                      e.supportsIntegratedFind ||
                        e.findBar.updateResultsCount(t);
                    }),
                    (e.findController.onUpdateState = function (t, n, i) {
                      e.supportsIntegratedFind
                        ? e.externalServices.updateFindControlState({
                            result: t,
                            findPrevious: n,
                          })
                        : e.findBar.updateUIState(t, n, i);
                    }),
                    e.pdfViewer.setFindController(e.findController);
                  var u = Object.create(t.findBar);
                  (u.findController = e.findController),
                    (u.eventBus = r),
                    (e.findBar = new Ne(u)),
                    (e.overlayManager = De),
                    (e.handTool = new Ce({ container: c, eventBus: r })),
                    (e.pdfDocumentProperties = new xe(t.documentProperties)),
                    (e.toolbar = new ye(t.toolbar, c, r)),
                    (e.secondaryToolbar = new Ae(t.secondaryToolbar, c, r)),
                    e.supportsFullscreen &&
                      (e.pdfPresentationMode = new Pe({
                        container: c,
                        viewer: l,
                        pdfViewer: e.pdfViewer,
                        eventBus: r,
                        contextMenuItems: t.fullscreen,
                      })),
                    (e.passwordPrompt = new Se(t.passwordOverlay)),
                    (e.pdfOutlineViewer = new Ie({
                      container: t.sidebar.outlineView,
                      eventBus: r,
                      linkService: s,
                    })),
                    (e.pdfAttachmentViewer = new Fe({
                      container: t.sidebar.attachmentsView,
                      eventBus: r,
                      downloadManager: o,
                    }));
                  var d = Object.create(t.sidebar);
                  (d.pdfViewer = e.pdfViewer),
                    (d.pdfThumbnailViewer = e.pdfThumbnailViewer),
                    (d.pdfOutlineViewer = e.pdfOutlineViewer),
                    (d.eventBus = r),
                    (e.pdfSidebar = new ve(d)),
                    (e.pdfSidebar.onToggled = e.forceRendering.bind(e)),
                    n(void 0);
                });
              },
              run: function (e) {
                this.initialize(e).then(_);
              },
              zoomIn: function (e) {
                var t = this.pdfViewer.currentScale;
                do
                  (t = (t * Ve).toFixed(2)),
                    (t = Math.ceil(10 * t) / 10),
                    (t = Math.min(ce, t));
                while (--e > 0 && t < ce);
                this.pdfViewer.currentScaleValue = t;
              },
              zoomOut: function (e) {
                var t = this.pdfViewer.currentScale;
                do
                  (t = (t / Ve).toFixed(2)),
                    (t = Math.floor(10 * t) / 10),
                    (t = Math.max(oe, t));
                while (--e > 0 && t > oe);
                this.pdfViewer.currentScaleValue = t;
              },
              get pagesCount() {
                return this.pdfDocument ? this.pdfDocument.numPages : 0;
              },
              set page(e) {
                this.pdfViewer.currentPageNumber = e;
              },
              get page() {
                return this.pdfViewer.currentPageNumber;
              },
              get printing() {
                return !!this.printService;
              },
              get supportsPrinting() {
                return Qe.instance.supportsPrinting;
              },
              get supportsFullscreen() {
                var e,
                  t = document.documentElement;
                return (
                  (e = !!(
                    t.requestFullscreen ||
                    t.mozRequestFullScreen ||
                    t.webkitRequestFullScreen ||
                    t.msRequestFullscreen
                  )),
                  (document.fullscreenEnabled !== !1 &&
                    document.mozFullScreenEnabled !== !1 &&
                    document.webkitFullscreenEnabled !== !1 &&
                    document.msFullscreenEnabled !== !1) ||
                    (e = !1),
                  e && P.PDFJS.disableFullscreen === !0 && (e = !1),
                  P.shadow(this, 'supportsFullscreen', e)
                );
              },
              get supportsIntegratedFind() {
                return this.externalServices.supportsIntegratedFind;
              },
              get supportsDocumentFonts() {
                return this.externalServices.supportsDocumentFonts;
              },
              get supportsDocumentColors() {
                return this.externalServices.supportsDocumentColors;
              },
              get loadingBar() {
                var e = new le('#loadingBar', {});
                return P.shadow(this, 'loadingBar', e);
              },
              get supportedMouseWheelZoomModifierKeys() {
                return this.externalServices
                  .supportedMouseWheelZoomModifierKeys;
              },
              initPassiveLoading: function () {
                throw new Error('Not implemented: initPassiveLoading');
              },
              setTitleUsingUrl: function (e) {
                (this.url = e), (this.baseUrl = e.split('#')[0]);
                try {
                  this.setTitle(
                    decodeURIComponent(P.getFilenameFromUrl(e)) || e,
                  );
                } catch (t) {
                  this.setTitle(e);
                }
              },
              setTitle: function (e) {
                this.isViewerEmbedded || (document.title = e);
              },
              close: function () {
                var e = this.appConfig.errorWrapper.container;
                if ((e.setAttribute('hidden', 'true'), !this.pdfLoadingTask))
                  return Promise.resolve();
                var t = this.pdfLoadingTask.destroy();
                return (
                  (this.pdfLoadingTask = null),
                  this.pdfDocument &&
                    ((this.pdfDocument = null),
                    this.pdfThumbnailViewer.setDocument(null),
                    this.pdfViewer.setDocument(null),
                    this.pdfLinkService.setDocument(null, null)),
                  (this.store = null),
                  (this.isInitialViewSet = !1),
                  this.pdfSidebar.reset(),
                  this.pdfOutlineViewer.reset(),
                  this.pdfAttachmentViewer.reset(),
                  this.findController.reset(),
                  this.findBar.reset(),
                  this.toolbar.reset(),
                  this.secondaryToolbar.reset(),
                  'undefined' != typeof PDFBug && PDFBug.cleanup(),
                  t
                );
              },
              open: function (e, t) {
                if (arguments.length > 2 || 'number' == typeof t)
                  return Promise.reject(
                    new Error('Call of open() with obsolete signature.'),
                  );
                if (this.pdfLoadingTask)
                  return this.close().then(
                    function () {
                      return ge.reload(), this.open(e, t);
                    }.bind(this),
                  );
                var n,
                  i = Object.create(null);
                if (
                  ('string' == typeof e
                    ? (this.setTitleUsingUrl(e), (i.url = e))
                    : e && 'byteLength' in e
                    ? (i.data = e)
                    : e.url &&
                      e.originalUrl &&
                      (this.setTitleUsingUrl(e.originalUrl), (i.url = e.url)),
                  t)
                ) {
                  for (var r in t) i[r] = t[r];
                  t.scale && (n = t.scale),
                    t.length &&
                      this.pdfDocumentProperties.setFileSize(t.length);
                }
                var a = this;
                a.downloadComplete = !1;
                var s = P.getDocument(i);
                return (
                  (this.pdfLoadingTask = s),
                  (s.onPassword = function (e, t) {
                    a.passwordPrompt.setUpdateCallback(e, t),
                      a.passwordPrompt.open();
                  }),
                  (s.onProgress = function (e) {
                    a.progress(e.loaded / e.total);
                  }),
                  (s.onUnsupportedFeature = this.fallback.bind(this)),
                  s.promise.then(
                    function (e) {
                      a.load(e, n);
                    },
                    function (e) {
                      var t = e && e.message,
                        n = de.get(
                          'loading_error',
                          null,
                          'An error occurred while loading the PDF.',
                        );
                      e instanceof P.InvalidPDFException
                        ? (n = de.get(
                            'invalid_file_error',
                            null,
                            'Invalid or corrupted PDF file.',
                          ))
                        : e instanceof P.MissingPDFException
                        ? (n = de.get(
                            'missing_file_error',
                            null,
                            'Missing PDF file.',
                          ))
                        : e instanceof P.UnexpectedResponseException &&
                          (n = de.get(
                            'unexpected_response_error',
                            null,
                            'Unexpected server response.',
                          ));
                      var i = { message: t };
                      throw (a.error(n, i), new Error(n));
                    },
                  )
                );
              },
              download: function () {
                function e() {
                  i.downloadUrl(t, n);
                }
                var t = this.baseUrl,
                  n = he(t),
                  i = this.downloadManager;
                return (
                  (i.onerror = function (e) {
                    ze.error('PDF failed to download.');
                  }),
                  this.pdfDocument && this.downloadComplete
                    ? void this.pdfDocument
                        .getData()
                        .then(function (e) {
                          var r = P.createBlob(e, 'application/pdf');
                          i.download(r, t, n);
                        }, e)
                        .then(null, e)
                    : void e()
                );
              },
              fallback: function (e) {},
              error: function (e, t) {
                var n =
                  de.get(
                    'error_version_info',
                    { version: P.version || '?', build: P.build || '?' },
                    'PDF.js v{{version}} (build: {{build}})',
                  ) + '\n';
                t &&
                  ((n += de.get(
                    'error_message',
                    { message: t.message },
                    'Message: {{message}}',
                  )),
                  t.stack
                    ? (n +=
                        '\n' +
                        de.get(
                          'error_stack',
                          { stack: t.stack },
                          'Stack: {{stack}}',
                        ))
                    : (t.filename &&
                        (n +=
                          '\n' +
                          de.get(
                            'error_file',
                            { file: t.filename },
                            'File: {{file}}',
                          )),
                      t.lineNumber &&
                        (n +=
                          '\n' +
                          de.get(
                            'error_line',
                            { line: t.lineNumber },
                            'Line: {{line}}',
                          ))));
                var i = this.appConfig.errorWrapper,
                  r = i.container;
                r.removeAttribute('hidden');
                var a = i.errorMessage;
                a.textContent = e;
                var s = i.closeButton;
                s.onclick = function () {
                  r.setAttribute('hidden', 'true');
                };
                var o = i.errorMoreInfo,
                  c = i.moreInfoButton,
                  l = i.lessInfoButton;
                (c.onclick = function () {
                  o.removeAttribute('hidden'),
                    c.setAttribute('hidden', 'true'),
                    l.removeAttribute('hidden'),
                    (o.style.height = o.scrollHeight + 'px');
                }),
                  (l.onclick = function () {
                    o.setAttribute('hidden', 'true'),
                      c.removeAttribute('hidden'),
                      l.setAttribute('hidden', 'true');
                  }),
                  (c.oncontextmenu = ue),
                  (l.oncontextmenu = ue),
                  (s.oncontextmenu = ue),
                  c.removeAttribute('hidden'),
                  l.setAttribute('hidden', 'true'),
                  (o.value = n);
              },
              progress: function (e) {
                var t = Math.round(100 * e);
                (t > this.loadingBar.percent || isNaN(t)) &&
                  ((this.loadingBar.percent = t),
                  P.PDFJS.disableAutoFetch &&
                    t &&
                    (this.disableAutoFetchLoadingBarTimeout &&
                      (clearTimeout(this.disableAutoFetchLoadingBarTimeout),
                      (this.disableAutoFetchLoadingBarTimeout = null)),
                    this.loadingBar.show(),
                    (this.disableAutoFetchLoadingBarTimeout = setTimeout(
                      function () {
                        this.loadingBar.hide(),
                          (this.disableAutoFetchLoadingBarTimeout = null);
                      }.bind(this),
                      We,
                    ))));
              },
              load: function (e, t) {
                var n = this;
                (t = t || ae),
                  (this.pdfDocument = e),
                  this.pdfDocumentProperties.setDocumentAndUrl(e, this.url);
                var i = e.getDownloadInfo().then(function () {
                  (n.downloadComplete = !0), n.loadingBar.hide();
                });
                this.toolbar.setPagesCount(e.numPages, !1),
                  this.secondaryToolbar.setPagesCount(e.numPages);
                var r,
                  a = (this.documentFingerprint = e.fingerprint),
                  s = (this.store = new be(a));
                (r = null), this.pdfLinkService.setDocument(e, r);
                var o = this.pdfViewer;
                (o.currentScale = t), o.setDocument(e);
                var c = o.firstPagePromise,
                  l = o.pagesPromise,
                  h = o.onePageRendered;
                this.pageRotation = 0;
                var u = this.pdfThumbnailViewer;
                u.setDocument(e),
                  c.then(function (e) {
                    i.then(function () {
                      n.eventBus.dispatch('documentload', { source: n });
                    }),
                      n.loadingBar.setWidth(n.appConfig.viewerContainer),
                      P.PDFJS.disableHistory ||
                        n.isViewerEmbedded ||
                        (n.viewerPrefs.showPreviousViewOnLoad ||
                          n.pdfHistory.clearHistoryState(),
                        n.pdfHistory.initialize(n.documentFingerprint),
                        n.pdfHistory.initialDestination
                          ? (n.initialDestination =
                              n.pdfHistory.initialDestination)
                          : n.pdfHistory.initialBookmark &&
                            (n.initialBookmark = n.pdfHistory.initialBookmark));
                    var r = {
                      destination: n.initialDestination,
                      bookmark: n.initialBookmark,
                      hash: null,
                    };
                    s.initializedPromise.then(
                      function () {
                        var e = null,
                          i = null;
                        if (
                          n.viewerPrefs.showPreviousViewOnLoad &&
                          s.get('exists', !1)
                        ) {
                          var a = s.get('page', '1'),
                            o =
                              n.viewerPrefs.defaultZoomValue ||
                              s.get('zoom', se),
                            c = s.get('scrollLeft', '0'),
                            l = s.get('scrollTop', '0');
                          (e = 'page=' + a + '&zoom=' + o + ',' + c + ',' + l),
                            (i = s.get('sidebarView', me.NONE));
                        } else
                          n.viewerPrefs.defaultZoomValue &&
                            (e =
                              'page=1&zoom=' + n.viewerPrefs.defaultZoomValue);
                        n.setInitialView(e, { scale: t, sidebarView: i }),
                          (r.hash = e),
                          n.isViewerEmbedded || n.pdfViewer.focus();
                      },
                      function (e) {
                        console.error(e), n.setInitialView(null, { scale: t });
                      },
                    ),
                      l.then(function () {
                        (r.destination || r.bookmark || r.hash) &&
                          (n.hasEqualPageSizes ||
                            ((n.initialDestination = r.destination),
                            (n.initialBookmark = r.bookmark),
                            (n.pdfViewer.currentScaleValue =
                              n.pdfViewer.currentScaleValue),
                            n.setInitialView(r.hash)));
                      });
                  }),
                  e.getPageLabels().then(function (t) {
                    if (t && !n.viewerPrefs.disablePageLabels) {
                      var i = 0,
                        r = t.length;
                      if (r !== n.pagesCount)
                        return void console.error(
                          'The number of Page Labels does not match the number of pages in the document.',
                        );
                      for (; i < r && t[i] === (i + 1).toString(); ) i++;
                      i !== r &&
                        (o.setPageLabels(t),
                        u.setPageLabels(t),
                        n.toolbar.setPagesCount(e.numPages, !0),
                        n.toolbar.setPageNumber(
                          o.currentPageNumber,
                          o.currentPageLabel,
                        ));
                    }
                  }),
                  l.then(function () {
                    n.supportsPrinting &&
                      e.getJavaScript().then(function (e) {
                        e.length &&
                          (console.warn('Warning: JavaScript is not supported'),
                          n.fallback(P.UNSUPPORTED_FEATURES.javaScript));
                        for (
                          var t = /\bprint\s*\(/, i = 0, r = e.length;
                          i < r;
                          i++
                        ) {
                          var a = e[i];
                          if (a && t.test(a))
                            return void setTimeout(function () {
                              window.print();
                            });
                        }
                      });
                  }),
                  Promise.all([h, Be]).then(function () {
                    e.getOutline().then(function (e) {
                      n.pdfOutlineViewer.render({ outline: e });
                    }),
                      e.getAttachments().then(function (e) {
                        n.pdfAttachmentViewer.render({ attachments: e });
                      });
                  }),
                  e.getMetadata().then(function (t) {
                    var i = t.info,
                      r = t.metadata;
                    (n.documentInfo = i),
                      (n.metadata = r),
                      console.log(
                        'PDF ' +
                          e.fingerprint +
                          ' [' +
                          i.PDFFormatVersion +
                          ' ' +
                          (i.Producer || '-').trim() +
                          ' / ' +
                          (i.Creator || '-').trim() +
                          '] (PDF.js: ' +
                          (P.version || '-') +
                          (P.PDFJS.disableWebGL ? '' : ' [WebGL]') +
                          ')',
                      );
                    var a;
                    if (r && r.has('dc:title')) {
                      var s = r.get('dc:title');
                      'Untitled' !== s && (a = s);
                    }
                    !a && i && i.Title && (a = i.Title),
                      a && n.setTitle(a + ' - ' + document.title),
                      i.IsAcroFormPresent &&
                        (console.warn('Warning: AcroForm/XFA is not supported'),
                        n.fallback(P.UNSUPPORTED_FEATURES.forms));
                  });
              },
              setInitialView: function (e, t) {
                var n = t && t.scale,
                  i = t && t.sidebarView;
                (this.isInitialViewSet = !0),
                  this.pdfSidebar.setInitialView(
                    this.viewerPrefs.sidebarViewOnLoad || 0 | i,
                  ),
                  this.initialDestination
                    ? (this.pdfLinkService.navigateTo(this.initialDestination),
                      (this.initialDestination = null))
                    : this.initialBookmark
                    ? (this.pdfLinkService.setHash(this.initialBookmark),
                      this.pdfHistory.push({ hash: this.initialBookmark }, !0),
                      (this.initialBookmark = null))
                    : e
                    ? this.pdfLinkService.setHash(e)
                    : n &&
                      ((this.pdfViewer.currentScaleValue = n), (this.page = 1)),
                  this.toolbar.setPageNumber(
                    this.pdfViewer.currentPageNumber,
                    this.pdfViewer.currentPageLabel,
                  ),
                  this.secondaryToolbar.setPageNumber(
                    this.pdfViewer.currentPageNumber,
                  ),
                  this.pdfViewer.currentScaleValue ||
                    (this.pdfViewer.currentScaleValue = se);
              },
              cleanup: function () {
                this.pdfDocument &&
                  (this.pdfViewer.cleanup(),
                  this.pdfThumbnailViewer.cleanup(),
                  this.pdfViewer.renderer !== Ue.SVG &&
                    this.pdfDocument.cleanup());
              },
              forceRendering: function () {
                (this.pdfRenderingQueue.printing = this.printing),
                  (this.pdfRenderingQueue.isThumbnailViewEnabled =
                    this.pdfSidebar.isThumbnailViewVisible),
                  this.pdfRenderingQueue.renderHighestPriority();
              },
              beforePrint: function () {
                if (!this.printService) {
                  if (!this.supportsPrinting) {
                    var e = de.get(
                      'printing_not_supported',
                      null,
                      'Warning: Printing is not fully supported by this browser.',
                    );
                    return void this.error(e);
                  }
                  if (!this.pdfViewer.pageViewsReady) {
                    var t = de.get(
                      'printing_not_ready',
                      null,
                      'Warning: The PDF is not fully loaded for printing.',
                    );
                    return void window.alert(t);
                  }
                  var n = this.pdfViewer.getPagesOverview(),
                    i = this.appConfig.printContainer,
                    r = Qe.instance.createPrintService(this.pdfDocument, n, i);
                  (this.printService = r), this.forceRendering(), r.layout();
                }
              },
              get hasEqualPageSizes() {
                for (
                  var e = this.pdfViewer.getPageView(0),
                    t = 1,
                    n = this.pagesCount;
                  t < n;
                  ++t
                ) {
                  var i = this.pdfViewer.getPageView(t);
                  if (i.width !== e.width || i.height !== e.height) return !1;
                }
                return !0;
              },
              afterPrint: function () {
                this.printService &&
                  (this.printService.destroy(), (this.printService = null)),
                  this.forceRendering();
              },
              rotatePages: function (e) {
                var t = this.page;
                (this.pageRotation = (this.pageRotation + 360 + e) % 360),
                  (this.pdfViewer.pagesRotation = this.pageRotation),
                  (this.pdfThumbnailViewer.pagesRotation = this.pageRotation),
                  this.forceRendering(),
                  (this.pdfViewer.currentPageNumber = t);
              },
              requestPresentationMode: function () {
                this.pdfPresentationMode && this.pdfPresentationMode.request();
              },
              bindEvents: function () {
                var e = this.eventBus;
                e.on('resize', R),
                  e.on('hashchange', N),
                  e.on('beforeprint', this.beforePrint.bind(this)),
                  e.on('afterprint', this.afterPrint.bind(this)),
                  e.on('pagerendered', L),
                  e.on('textlayerrendered', T),
                  e.on('updateviewarea', F),
                  e.on('pagechanging', ee),
                  e.on('scalechanging', $),
                  e.on('sidebarviewchanged', D),
                  e.on('pagemode', k),
                  e.on('namedaction', E),
                  e.on('presentationmodechanged', I),
                  e.on('presentationmode', O),
                  e.on('openfile', M),
                  e.on('print', B),
                  e.on('download', j),
                  e.on('firstpage', U),
                  e.on('lastpage', V),
                  e.on('nextpage', W),
                  e.on('previouspage', H),
                  e.on('zoomin', z),
                  e.on('zoomout', G),
                  e.on('pagenumberchanged', X),
                  e.on('scalechanged', q),
                  e.on('rotatecw', Y),
                  e.on('rotateccw', J),
                  e.on('documentproperties', Q),
                  e.on('find', K),
                  e.on('findfromurlhash', Z),
                  e.on('fileinputchange', qe);
              },
              bindWindowEvents: function () {
                var e = this.eventBus;
                window.addEventListener('wheel', te),
                  window.addEventListener('click', ne),
                  window.addEventListener('keydown', ie),
                  window.addEventListener('resize', function () {
                    e.dispatch('resize');
                  }),
                  window.addEventListener('hashchange', function () {
                    e.dispatch('hashchange', {
                      hash: document.location.hash.substring(1),
                    });
                  }),
                  window.addEventListener('beforeprint', function () {
                    e.dispatch('beforeprint');
                  }),
                  window.addEventListener('afterprint', function () {
                    e.dispatch('afterprint');
                  }),
                  window.addEventListener('change', function (t) {
                    var n = t.target.files;
                    n &&
                      0 !== n.length &&
                      e.dispatch('fileinputchange', { fileInput: t.target });
                  });
              },
            },
            Ge = [
              'null',
              'http://mozilla.github.io',
              'https://mozilla.github.io',
            ];
          re = function (e) {
            try {
              var t = new URL(window.location.href).origin || 'null';
              if (Ge.indexOf(t) >= 0) return;
              var n = new URL(e, window.location.href).origin;
              if (n !== t)
                throw new Error("file origin does not match viewer's");
            } catch (e) {
              var i = e && e.message,
                r = de.get(
                  'loading_error',
                  null,
                  'An error occurred while loading the PDF.',
                ),
                a = { message: i };
              throw (ze.error(r, a), e);
            }
          };
          var Xe;
          Xe = function (e) {
            if (e && 0 === e.lastIndexOf('file:', 0)) {
              ze.setTitleUsingUrl(e);
              var t = new XMLHttpRequest();
              t.onload = function () {
                ze.open(new Uint8Array(t.response));
              };
              try {
                t.open('GET', e), (t.responseType = 'arraybuffer'), t.send();
              } catch (e) {
                ze.error(
                  de.get(
                    'loading_error',
                    null,
                    'An error occurred while loading the PDF.',
                  ),
                  e,
                );
              }
            } else e && ze.open(e);
          };
          var qe;
          qe = function (e) {
            var t = e.fileInput.files[0];
            if (
              !P.PDFJS.disableCreateObjectURL &&
              'undefined' != typeof URL &&
              URL.createObjectURL
            )
              ze.open(URL.createObjectURL(t));
            else {
              var n = new FileReader();
              (n.onload = function (e) {
                var t = e.target.result,
                  n = new Uint8Array(t);
                ze.open(n);
              }),
                n.readAsArrayBuffer(t);
            }
            ze.setTitleUsingUrl(t.name);
            var i = ze.appConfig;
            i.toolbar.viewBookmark.setAttribute('hidden', 'true'),
              i.secondaryToolbar.viewBookmarkButton.setAttribute(
                'hidden',
                'true',
              ),
              i.toolbar.download.setAttribute('hidden', 'true'),
              i.secondaryToolbar.downloadButton.setAttribute('hidden', 'true');
          };
          var Ye,
            Je = !1;
          je.then(function () {
            document.getElementsByTagName('html')[0].dir = de.getDirection();
          });
          var Qe = {
            instance: {
              supportsPrinting: !1,
              createPrintService: function () {
                throw new Error('Not implemented: createPrintService');
              },
            },
          };
          (e.PDFViewerApplication = ze),
            (e.DefaultExernalServices = He),
            (e.PDFPrintServiceFactory = Qe);
        },
      ),
      (function (e, t) {
        t(
          (e.pdfjsWebPDFPrintService = {}),
          e.pdfjsWebUIUtils,
          e.pdfjsWebOverlayManager,
          e.pdfjsWebApp,
          e.pdfjsWebPDFJS,
        );
      })(this, function (e, t, n, i, r) {
        function a(e, t, n, i) {
          var r = g.scratchCanvas,
            a = 150,
            s = a / 72;
          (r.width = Math.floor(i.width * s)),
            (r.height = Math.floor(i.height * s));
          var o = Math.floor(i.width * d) + 'px',
            c = Math.floor(i.height * d) + 'px',
            l = r.getContext('2d');
          return (
            l.save(),
            (l.fillStyle = 'rgb(255, 255, 255)'),
            l.fillRect(0, 0, r.width, r.height),
            l.restore(),
            t
              .getPage(n)
              .then(function (e) {
                var t = {
                  canvasContext: l,
                  transform: [s, 0, 0, s, 0, 0],
                  viewport: e.getViewport(1),
                  intent: 'print',
                };
                return e.render(t).promise;
              })
              .then(function () {
                return { width: o, height: c };
              })
          );
        }
        function s(e, t, n) {
          (this.pdfDocument = e),
            (this.pagesOverview = t),
            (this.printContainer = n),
            (this.currentPage = -1),
            (this.scratchCanvas = document.createElement('canvas'));
        }
        function o(e) {
          var t = document.createEvent('CustomEvent');
          t.initCustomEvent(e, !1, !1, 'custom'), window.dispatchEvent(t);
        }
        function c() {
          g && (g.destroy(), o('afterprint'));
        }
        function l(e, t) {
          var n = document.getElementById('printServiceOverlay'),
            i = Math.round((100 * e) / t),
            r = n.querySelector('progress'),
            a = n.querySelector('.relative-progress');
          (r.value = i),
            (a.textContent = u.get(
              'print_progress_percent',
              { progress: i },
              i + '%',
            ));
        }
        function h() {
          return (
            w ||
              ((w = p.register(
                'printServiceOverlay',
                document.getElementById('printServiceOverlay'),
                c,
                !0,
              )),
              (document.getElementById('printCancel').onclick = c)),
            w
          );
        }
        var u = t.mozL10n,
          d = t.CSS_UNITS,
          f = i.PDFPrintServiceFactory,
          p = n.OverlayManager,
          g = null;
        s.prototype = {
          layout: function () {
            this.throwIfInactive();
            var e = document.querySelector('body');
            e.setAttribute('data-pdfjsprinting', !0);
            var t = this.pagesOverview.every(function (e) {
              return (
                e.width === this.pagesOverview[0].width &&
                e.height === this.pagesOverview[0].height
              );
            }, this);
            t ||
              console.warn(
                'Not all pages have the same size. The printed result may be incorrect!',
              ),
              (this.pageStyleSheet = document.createElement('style'));
            var n = this.pagesOverview[0];
            (this.pageStyleSheet.textContent =
              '@supports ((size:A4) and (size:1pt 1pt)) {@page { size: ' +
              n.width +
              'pt ' +
              n.height +
              'pt;}}'),
              e.appendChild(this.pageStyleSheet);
          },
          destroy: function () {
            g === this &&
              ((this.printContainer.textContent = ''),
              this.pageStyleSheet &&
                this.pageStyleSheet.parentNode &&
                (this.pageStyleSheet.parentNode.removeChild(
                  this.pageStyleSheet,
                ),
                (this.pageStyleSheet = null)),
              (this.scratchCanvas.width = this.scratchCanvas.height = 0),
              (this.scratchCanvas = null),
              (g = null),
              h().then(function () {
                'printServiceOverlay' === p.active &&
                  p.close('printServiceOverlay');
              }));
          },
          renderPages: function () {
            var e = this.pagesOverview.length,
              t = function (n, i) {
                if ((this.throwIfInactive(), ++this.currentPage >= e))
                  return l(e, e), void n();
                var r = this.currentPage;
                l(r, e),
                  a(this, this.pdfDocument, r + 1, this.pagesOverview[r])
                    .then(this.useRenderedPage.bind(this))
                    .then(function () {
                      t(n, i);
                    }, i);
              }.bind(this);
            return new Promise(t);
          },
          useRenderedPage: function (e) {
            this.throwIfInactive();
            var t = document.createElement('img');
            (t.style.width = e.width), (t.style.height = e.height);
            var n = this.scratchCanvas;
            'toBlob' in n && !r.PDFJS.disableCreateObjectURL
              ? n.toBlob(function (e) {
                  t.src = URL.createObjectURL(e);
                })
              : (t.src = n.toDataURL());
            var i = document.createElement('div');
            return (
              i.appendChild(t),
              this.printContainer.appendChild(i),
              new Promise(function (e, n) {
                (t.onload = e), (t.onerror = n);
              })
            );
          },
          performPrint: function () {
            return (
              this.throwIfInactive(),
              new Promise(
                function (e) {
                  setTimeout(
                    function () {
                      return this.active
                        ? (m.call(window), void setTimeout(e, 20))
                        : void e();
                    }.bind(this),
                    0,
                  );
                }.bind(this),
              )
            );
          },
          get active() {
            return this === g;
          },
          throwIfInactive: function () {
            if (!this.active)
              throw new Error('This print request was cancelled or completed.');
          },
        };
        var m = window.print;
        window.print = function () {
          if (g)
            return void console.warn(
              'Ignored window.print() because of a pending print job.',
            );
          h().then(function () {
            g && p.open('printServiceOverlay');
          });
          try {
            o('beforeprint');
          } finally {
            if (!g)
              return (
                console.error('Expected print service to be initialized.'),
                void (
                  'printServiceOverlay' === p.active &&
                  p.close('printServiceOverlay')
                )
              );
            var e = g;
            g.renderPages()
              .then(function () {
                return e.performPrint();
              })
              .catch(function () {})
              .then(function () {
                e.active && c();
              });
          }
        };
        var v = !!document.attachEvent;
        if (
          (window.addEventListener(
            'keydown',
            function (e) {
              if (
                80 === e.keyCode &&
                (e.ctrlKey || e.metaKey) &&
                !e.altKey &&
                (!e.shiftKey || window.chrome || window.opera)
              ) {
                if ((window.print(), v)) return;
                return (
                  e.preventDefault(),
                  void (e.stopImmediatePropagation
                    ? e.stopImmediatePropagation()
                    : e.stopPropagation())
                );
              }
            },
            !0,
          ),
          v &&
            document.attachEvent('onkeydown', function (e) {
              if (((e = e || window.event), 80 === e.keyCode && e.ctrlKey))
                return (e.keyCode = 0), !1;
            }),
          'onbeforeprint' in window)
        ) {
          var b = function (e) {
            'custom' !== e.detail &&
              e.stopImmediatePropagation &&
              e.stopImmediatePropagation();
          };
          window.addEventListener('beforeprint', b),
            window.addEventListener('afterprint', b);
        }
        var w;
        (f.instance = {
          supportsPrinting: !0,
          createPrintService: function (e, t, n) {
            if (g) throw new Error('The print service is created and active.');
            return (g = new s(e, t, n));
          },
        }),
          (e.PDFPrintService = s);
      });
  }.call(pdfjsWebLibs),
  'interactive' === document.readyState || 'complete' === document.readyState
    ? webViewerLoad()
    : document.addEventListener('DOMContentLoaded', webViewerLoad, !0);
