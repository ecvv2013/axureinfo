/* yepnope v1.5.4 - SlexAxton */
(function(a, b, c)
{
    function d(a)
    {
        return "[object Function]" == o.call(a)
    }

    function e(a)
    {
        return "string" == typeof a
    }

    function f()
    {}

    function g(a)
    {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h()
    {
        var a = p.shift();
        q = 1, a ? a.t ? m(function()
        {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j)
    {
        function k(b)
        {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b))
            {
                "img" != a && m(function()
                {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout,
            l = b.createElement(a),
            o = 0,
            r = 0,
            u = {
                t: d,
                s: c,
                e: f,
                a: i,
                x: j
            };
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function()
        {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f)
    {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k()
    {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        }, a
    }
    var l = b.documentElement,
        m = a.setTimeout,
        n = b.getElementsByTagName("script")[0],
        o = {}.toString,
        p = [],
        q = 0,
        r = "MozAppearance" in l.style,
        s = r && !!b.createRange().compareNode,
        t = s ? l : n.parentNode,
        l = a.opera && "[object Opera]" == o.call(a.opera),
        l = !!b.attachEvent && !l,
        u = r ? "object" : l ? "script" : "img",
        v = l ? "script" : u,
        w = Array.isArray || function(a)
        {
            return "[object Array]" == o.call(a)
        },
        x = [],
        y = {},
        z = {
            timeout: function(a, b)
            {
                return b.length && (a.timeout = b[0]), a
            }
        },
        A, B;
    B = function(a)
    {
        function b(a)
        {
            var a = a.split("!"),
                b = x.length,
                c = a.pop(),
                d = a.length,
                c = {
                    url: c,
                    origUrl: c,
                    prefixes: a
                },
                e, f, g;
            for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++) c = x[f](c);
            return c
        }

        function g(a, e, f, g, h)
        {
            var i = b(a),
                j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function()
            {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b)
        {
            function c(a, c)
            {
                if (a)
                {
                    if (e(a)) c || (j = function()
                    {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function()
                            {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b
                            }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function()
                        {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        } : j[n] = function(a)
                        {
                            return function()
                            {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), l()
                            }
                        }(k[n])), g(a[n], j, b, n, h))
                }
                else !c && l()
            }
            var h = !!a.test,
                i = a.load || a.both,
                j = a.callback || f,
                k = j,
                l = a.complete || f,
                m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a)) g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b)
    {
        z[a] = b
    }, B.addFilter = function(a)
    {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function()
    {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j)
    {
        var k = b.createElement("script"),
            l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function()
        {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function()
        {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i)
    {
        var e = b.createElement("link"),
            j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
})(this, document);
/* axloader v1.3.2 - WaveF */
(function()
{
    main();

    function main()
    {
        if (window.AXLOADER) return;
        testRun(
        {
            exp: 'window.$ && window.$axure',
            callback: () =>
            {
                window.AXLOADER = window.axloader = yepnope;
                extendJQ();
                loadEntryJs();
            }
        });
        window.testRun = testRun;
        window.hideLoading = hideLoading;
    }

    function loadEntryJs()
    {
        $('script').each((i, k) =>
        {
            let src = $(k).attr('src') || '';
            if (src && src.indexOf('axloader') > -1)
            {
                let devJS = $(k).attr('dev') || '';
                let testJS = $(k).attr('test') || '';
                let prodJS = $(k).attr('prod') || '';
                let mode = $(k).attr('mode') || 'auto';
                let timeout = $(k).attr('timeout') || '1000';
                let vconsole = $(k).hasAttr('vconsole');
                let debug = $(k).hasAttr('debug');
                let timestamp = new Date().getTime();
                let loading = $(k).attr('loading');
                let fileList = [];
                if (loading != undefined)
                {
                    showLoading(loading);
                }
                if (mode.toLowerCase() === 'dev')
                {
                    fileList.push(devJS + `?${timestamp}`);
                }
                else if (mode.toLowerCase() === 'test')
                {
                    fileList.push(testJS + `?${timestamp}`);
                }
                else if (mode.toLowerCase() === 'prod')
                {
                    fileList.push(prodJS);
                }
                else if (mode.toLowerCase() === 'auto')
                {
                    if (location.href.indexOf('://127.0.0.1') > -1 || location.href.indexOf('://localhost') > -1)
                    {
                        if (devJS != '')
                        {
                            fileList.push(`timeout=${timeout}!` + devJS + `?${timestamp}`);
                        }
                    }
                    else
                    {
                        if (testJS !== '')
                        {
                            fileList.push(`timeout=${timeout}!` + testJS + `?${timestamp}`);
                        }
                        if (prodJS !== '')
                        {
                            fileList.push(prodJS);
                        }
                    }
                }
                yepnope(
                {
                    load: fileList,
                    callback: (url, result, key) =>
                    {
                        if (debug)
                        {
                            console.log(['axloader: callback', url, result, key]);
                        }
                    },
                    complete: () =>
                    {
                        if (debug)
                        {
                            console.log(['axloader: all completed']);
                        }
                    },
                });
                if (debug)
                {
                    console.log(
                    {
                        "dev": devJS,
                        "test": testJS,
                        "prod": prodJS,
                        "mode": mode,
                        "timeout": timeout,
                        "vconsole": vconsole,
                        "files": fileList
                    });
                }
                if (vconsole)
                {
                    yepnope(
                    {
                        load: 'https://cdn.jsdelivr.net/npm/vconsole@3.4.0/dist/vconsole.min.js',
                        complete: () =>
                        {
                            new VConsole();
                        }
                    })
                }
            }
        });
    }

    function extendJQ()
    {
        $.fn.extend(
        {
            'hasAttr': function(name)
            {
                var _attr = $(this).attr(name);
                if (typeof _attr !== typeof undefined && _attr !== false)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        });
    }

    function testRun(options)
    {
        let
        {
            exp = '', seq = 20, max = 400, debug = false, callback
        } = options;
        let testCount = 1;
        let testing = setInterval(() =>
        {
            if (eval(exp))
            {
                clearInterval(testing);
                if (typeof callback == 'function')
                {
                    callback();
                }
            }
            else
            {
                if (debug)
                {
                    console.log(`testing "${exp}" - ${testCount}/${max} per ${seq}ms.`);
                }
                if (testCount >= max)
                {
                    clearInterval(testing);
                    console.log(`"${exp}" test fail.`);
                }
                testCount++;
            }
        }, seq);
    }

    function svgLoad(opts)
    {
        let
        {
            color, opacity, scale
        } = opts;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="${color}" style="transform:scale(${scale});">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity="${opacity}" cx="18" cy="18" r="18"/>
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                        </path>
                    </g>
                </g>
            </svg>
        `;
    }

    function showLoading(opts)
    {
        let
        {
            color = '#0cf', opacity = 0.3, scale = 1.5, delay = 0, dur = 500
        } = strToObj(opts);
        let svgOpts = {
            color: color,
            opacity: opacity,
            scale: scale
        };
        let animOpts = {
            dur: dur,
            delay: delay
        };
        if (top != self)
        {
            let shell = window.parent.document;
            $('head', shell).append(`
                <style>
                    html, body { height: 100%; }
                    .ax-loading { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,1); z-index: 9999; }
                    .ax-loading svg { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
                </style>
            `);
            $('body', shell).append(`<div class="ax-loading" dur="${animOpts.dur}" delay="${animOpts.delay}">${svgLoad(svgOpts)}</div>`);
        }
        console.log('You have enable loading screen, please use window.hideLoading() to set loading screen invisible.');
    }

    function hideLoading()
    {
        if (top != self)
        {
            let shell = window.parent.document;
            let dur = Number($('.ax-loading', shell).attr('dur'));
            let delay = Number($('.ax-loading', shell).attr('delay'));
            setTimeout(() =>
            {
                $('.ax-loading', shell).fadeOut(dur);
            }, delay);
        }
    }

    function strToObj(str)
    {
        let arr = str.replace(/ /g, '').split(';').filter(Boolean);
        let obj = {};
        for (let i = 0; i < arr.length; i++)
        {
            let kv = arr[i].split(':');
            let key = kv[0];
            let val = kv[1];
            if (!isNaN(Number(val)))
            {
                val = Number(val);
            }
            obj[key] = val;
        }
        return obj;
    }
}());