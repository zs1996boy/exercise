
// 加载框和toast提示框
Myaddlabel();
// 生成标签
function Myaddlabel() {
    // 获取body标签
    let body = document.getElementsByTagName('body')[0];
    // 添加加载框
    Mycreatlabel({
        parent: body,
        id: 'my-loading',
        tag: 'div'
    })
    let loading = document.getElementById('my-loading');
    Mycreatlabel({
        parent: loading,
        id: 'my-loading_bx',
        tag: 'div'
    })
    let loadbx = document.getElementById('my-loading_bx');
    Mycreatlabel({
        parent: loadbx,
        id: 'my-loading-cercle',
        tag: 'div'
    })
    Mycreatlabel({
        parent: loadbx,
        id: 'my-loading_text',
        tag: 'div',
        innerHTML: '加载中...'
    })
    // 添提示框
    Mycreatlabel({
        parent: body,
        id: 'my-toast',
        tag: 'div',
    })
    let toast = document.getElementById('my-toast');
    Mycreatlabel({
        parent: toast,
        id: 'my-toast-bx',
        tag: 'div',
    })
    let toastbx = document.getElementById('my-toast-bx');
    Mycreatlabel({
        parent: toastbx,
        id: 'my-toast-bx-tx',
        tag: 'div',
    })
}
// 创建标签
function Mycreatlabel(obj) {
    // 创建标签
    var tag = document.createElement(obj.tag);
    //设置 div 属性，如 id
    tag.setAttribute("id", "newDiv");
    if (obj.id) {
        tag.setAttribute("id", obj.id);
    }
    if (obj.class) {
        tag.setAttribute("class", obj.class);
    }
    if (obj.innerHTML) {
        tag.innerHTML = obj.innerHTML;
    }
    obj.parent.appendChild(tag);
}
// 获取url上的键值对
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");

        if (pair[0] == variable) {
            return pair[1];
        }
    }

    return false;
}

//提示框的显示
function Mytoastsw(obj) {
    let time = 3000;
    let tx = '';
    // 判断是否为为对象
    if (typeof (obj) == 'object') {
        time = obj.time;
        tx = obj.text;
    } else if (typeof (obj) == 'string') {
        tx = obj;
    } else {
        tx = 'error';
    }
    // 获取原生js获取 toast
    let toast = document.getElementById('my-toast');
    // 获取内容框
    let toastTx = document.getElementById('my-toast-bx-tx');
    // 显示toast
    toast.style.display = 'block';
    toastTx.innerText = tx;

    setTimeout(function () {
        toast.style.display = 'none';
        toastTx.innerText = 'toast';
    }, time);
}

// 加载框显示
function Myloadshow() {
    // 获取原生js获取 loading
    let loading = document.getElementById('my-loading');
    // 显示loading
    loading.style.display = 'block'
}

// 加载框隐藏
function Myloadhide() {
    // 获取原生js获取 loading
    let loading = document.getElementById('my-loading');
    // 显示loading
    loading.style.display = 'none'
}

export default {
    Myaddlabel,
    Mycreatlabel,
    getQueryVariable,
    Mytoastsw,
    Myloadshow,
    Myloadhide
}