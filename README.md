# SimpleAPI

The easiest way to connect APIs without pain.

Inspired by [NocodeAPI](https://nocodeapi.com/marketplace/)

> WIP

我承认第一次在 ProductHunt 上看到[NocodeAPI](https://nocodeapi.com/marketplace/)的时候心里在想，就这？也要卖钱？想钱想疯了吧！

好吧，现在可以打脸了。在自己做了那么多工作流的工具（Actionsflow, Denoflow, YAMLScript) 之后，我发现我的这些工作流最复杂的地方就是支持这些千奇百怪的 API。

NocodeAPI 好就好在它的 API 真的非常简单，并且只支持最常用的 API，这对于个人工作流来说，基本可以覆盖 90%的用例了。想想我们每次要接入一个新的 API 的时候那种想逃避的心情吧，AWS，Twitter，Instatgram, 各种翻译接口？

思来想去，发现这件事似乎很适合在 serverless 服务中自部署，一次部署终生受用，所以我准备开个坑，慢慢把自己最常用的一些 API 仿照 NocodeAPI 的接口设计放在里面，供自己在别的工作流中使用。

如果你也有类似需求，这个项目应该很方便的自部署，也许你还想贡献一些代码是吧？

> 我喜欢用 Deno 写一些工作流相关的小代码，因为本地和 serverless 服务端运行同样的代码，又没有编译步骤，还是静态类型 Typescript, 太多好处了，所以这又是一个 Deno 项目，并且部署在 Deno Deploy 上。

第一个要支持的应该是推特的发布 API：

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
