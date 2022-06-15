// Object.defineProperty(obj = '目标对象', prop = '需定义或修改的属性', descriptor = '目标属性所拥有的新特性')

const obj = { name: 'marta' }

Object.defineProperty(obj,'mobile', {
    // value: '158597325**',
    // writable: false, => 是否允许被重写
    // 使用get set 不能使用以上两项

    enumerable: false, // 是否被遍历枚举
    configurable: false, // 目标属性是否可以被删除或重新设置
    get: function() {
        return '996初代受害者'
    },
    set: function(val) {
        console.log(`handle set ,val is :${val}`);
    }
})