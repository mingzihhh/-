## 无限轮播
预览：
https://mingzihhh.github.io/Infinite-carousel/#

思路：

1. 图片水平排列在panel里

   - 图片float，在js中计算设置panel的宽度

2. 切换图片时，图片整体在窗口下左右偏移，窗口外图片overflow

3. 无限：
   - 改变图片排列顺序实现循环：需要操作dom，可能需要一次性操作多个，比较复杂
   - js拷贝图片，如412341：不需要操作dom，只需要改变图片位置，相同1和4的位置来回替换

4. 组件化

   适合c创建一个页面有多个的东西，利用原型链

   （模块化：一个页面只有一个，如header,footer)



