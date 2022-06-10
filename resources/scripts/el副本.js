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
                l = n.find(".el-datepicker-align").find("select").val(),
                p = n.find(".el-datepicker-editable").find("select").val(),
                d = n.find(".el-datepicker-type").find("select").val(),
                o = i.attr("id");
            o = o.split("_")[0] + "_vue", l = "左" == l ? "left" : "中" == l ? "center" : "右" == l ? "right" : "left", p = "是" == p ? "editable" : "", $.isArray(d) && (console.warn("DatePicker不支持在单个组件上设置多个类型，将采用第一个设置值！"), d = d[0]), console.log(d, l, p, o, `#${o}`);
            var c = `align='${l}' ${p}`;
            switch (d) {
                case "单日选择":
                    i.append(`<div id="${o}"><element-datepicker-date ${c} /></div>`)
            }
            a(), new Vue({
                el: `#${o}`
            })
        })
    }

    function a() {
        Vue.component("element-datepicker-date", {
            props: {
                align: {
                    type: String
                },
                editable: {
                    type: Boolean
                }
            },
            data: function() {
                return {
                    pickerOptions: {
                        disabledDate: e => e.getTime() > Date.now(),
                        shortcuts: [{
                            text: "今天",
                            onClick(e) {
                                e.$emit("pick", new Date)
                            }
                        }, {
                            text: "昨天",
                            onClick(e) {
                                const t = new Date;
                                t.setTime(t.getTime() - 864e5), e.$emit("pick", t)
                            }
                        }, {
                            text: "一周前",
                            onClick(e) {
                                const t = new Date;
                                t.setTime(t.getTime() - 6048e5), e.$emit("pick", t)
                            }
                        }]
                    },
                    defaultValue: new Date
                }
            },
            template: '<el-date-picker v-model="defaultValue" type="date" :align="align" :editable="editable" placeholder="选择日期" :picker-options="pickerOptions" />'
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