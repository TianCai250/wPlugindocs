# imageshandler

一个前端图像处理工具类，支持原生js及vue、react等前端主流框架，功能支持将彩色图像黑白化，支持下载转换后的图像，还能用自定义的 dom 元素绘制图片。

## 效果
如下图

![imageshandler](/imageshandler1.png)

## 使用方式

```bash
npm install imageshandler
```

```js
import ImagesHandler from "imageshandler";

const el = document.createElement("div");
el.setAttribute("class", "circle");

// 创建图像处理类
const imagesHandler = new ImagesHandler("./image.jpg", {
  // target（可选）:转换后的图片显示容器，未传则不显示图片
  target: document.querySelector("#target"),
  width: document.querySelector("#target").clientWidth,
  height: document.querySelector("#target").clientHeight,
});

// 黑白转化
imagesHandler.blackWhite().then((img) => {
  // 下载黑白转换后的图片
  imagesHandler.downloadImg("黑白");
});

// 利用元素绘制图片
imagesHandler.paintByElement(document.querySelector("#container"), {
  // 必填，填充元素
  element: el,
  // 以下皆为可选
  // 绘制的宽高
  width: document.querySelector("#container").clientWidth,
  height: document.querySelector("#container").clientHeight,
  // 元素之间的间距
  gap: 6,
  // 元素放大倍数
  scale: 1,
  // 元素宽
  elSize: 5,
});
```



## 项目地址

[imageshandler](https://github.com/TianCai250/ImagesHandler)

