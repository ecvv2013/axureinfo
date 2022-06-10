javascript:
(function(){ 
if (!window.Vue) {
  let files = [
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
    "https://unpkg.com/vue/dist/vue.js",
    "https://unpkg.com/element-ui@2.15.6/lib/index.js"
  ];
  $.getScript('https://ax.minicg.com/yepnope.min.js',()=>{ yepnope({ load: files, complete: init }); });
} else {
  init();
}
function init() {
  addNewElement('<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="position:absolute; top:[[LVAR1.y]]px; left:[[LVAR1.x]]px; width:[[This.width]]px;"
  node-key="id" :default-expanded-keys="[1, 2]" ></el-tree>', 'a[[LVAR1.x]][[LVAR1.y]][[LVAR1.width]]', [{
    id: 1,
    label: '怀化市',
    children: [{
      id: 2,
      label: '鹤城区',
      children: [{
        id: 3,
        label: '雀园路_旷视11',   
      },
      {
        id: 4,
        label: '雀园路_旷视12',   
      },
      {
        id: 5,
        label: '雀园路_旷视13',   
      },
      {
        id: 6,
        label: '雀园路_旷视14',   
      },
    ]
    }, {
      id: 7,
      label: '溆浦县',
      children: [{
        id: 8,
        label: '海康球机RTSP'
      }]
    }, {
      id: 9,
      label: '中方县',
      children: [{
        id: 10,
        label: '海康球机RTSP2'
      }]
    }]
  }] );
}
function addNewElement( html, id, data ) {
  $('body').append(`<div id="${id}">${html}</div>`);
  new Vue({ el: '#' + id, data(){ return { data,  defaultProps: {
    children: 'children',
    label: 'label'
  } } }, });
}
}());