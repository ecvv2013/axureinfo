javascript:
(function() {
    function e() {
        window.ElementDatePickerInited || (window.ElementDatePickerInited = !0, i("https://unpkg.com/element-ui/lib/theme-chalk/index.css", () => {
            n("https://unpkg.com/vue/dist/vue.js", () => {
                n("https://unpkg.com/element-ui@2.15.6/lib/index.js", t)
            })
        }))
    }
    
    function t() {
        var e = $(".el-datepicker");
        $.each(e, (e, t) => {
            var n = $(t).parents(".panel_state").parent(),
                i = $(t).parent(".panel_state_content"),
                d = "com",
                o = i.attr("id");
            switch (d) {
                case "com":
                    i.append(`<div id="${o}"><element-datepicker-date /></div>`)
            }
            a(), new Vue({
                el: `#${o}`
            })
        })
    }
    function a() {
        Vue.component("element-datepicker-date", {
            data: function() {
                return {
                    pickerOptions: {
                      disabledDate(e) {
                        return e.getTime() > Date.now();
                      },
                      shortcuts: [{
                        text: '今天',
                        onClick(e) {
                          e.$emit('pick', new Date());
                        }
                      }, {
                        text: '昨天',
                        onClick(e) {
                          const t = new Date();
                          t.setTime(t.getTime() - 3600 * 1000 * 24);
                          e.$emit('pick', t);
                        }
                      }, {
                        text: '一周前',
                        onClick(e) {
                          const t = new Date();
                          t.setTime(t.getTime() - 3600 * 1000 * 24 * 7);
                          e.$emit('pick', t);
                            }
                        }]
                    },
                    defaultValue: [[date]]
                }
            },
            template: '<el-date-picker v-model="defaultValue" type="date" align="[[align]]" placeholder="[[placeholder]]" :picker-options="[[pickerOptions]]" :disabled="[[disabled]]" style="width:[[width1]]px" />'
        })
    }
    function n(e, t) {
        let a = document.createElement("script");
        a.onload = function() {
            t()
        }, a.src = e, document.getElementsByTagName("head")[0].appendChild(a)
    }
    function i(e, t) {
        let a = document.createElement("link");
        a.onload = function() {
            t()
        }, a.href = e, a.rel = "stylesheet", a.type = "text/css", document.getElementsByTagName("head")[0].appendChild(a)
    }
    e()
})();