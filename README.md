# SimpleAPI

The easiest way to connect APIs without pain.

Inspired by [NocodeAPI](https://nocodeapi.com/marketplace/)

> WIP

我承认在我第一次在 ProductHunt 上看到[NocodeAPI](https://nocodeapi.com/marketplace/)的时候，我心里在想，就这也能卖钱？想钱想疯了吧！好吧现在可以打脸了。NocodeAPI 实际上为常见的工作流 API 调用简直优化了不要太多。发现 Serverless 最大的痛点是调用一些服务的 API 很麻烦，比如你请求 AWS, 或者 twitter 的 API，总得引入一堆第三方库去实现一个很小的功能，比如发一条推文。 上面提到的 NocodeAPI 就是一个很棒的抽象，只挑选几个重要的 API，然后重新封装成为一个简单的 API，这件事似乎很适合在 serverless 服务中部署，然后一次部署终生受用，所以我开个坑，慢慢把自己最常用的一些 API 封装仿照 NocodeAPI 的接口设计放在里面，供自己在别的工作流中使用。如果你也有类似需求，也可以很方便的自部署你的版本，甚至贡献一些代码。

我喜欢用 Deno 写一些工作流相关的小代码，因为本地和服务器运行同样的代码，没有编译步骤，Typescript, 太多好处了，所以这又是一个 Deno 项目，并且部署在 Deno Deploy 上。

## 目前已支持以下 API

- Twitter
  - [Make tweet](./services/twitter/README.md)

## 如何部署？

Fork 后，在[Deno Deploy](https://deno.com/deploy) 选择你 Fork 的项目，入口文件选择`main.js`即可

## 本地调试

```bash
deno run -A main.ts
```

Or

```bash
make serve
```
