# Vditor Plugin Next

- ~考虑需要为features引入script依赖~

> 考虑到现有 Vditor 的加载方式是异步的，引入 Vditor Plugin 之后如果采用之前的方式会严重导致依赖竞态的问题，所以不采用异步加载的方式。

- [ ] 支持 Vditor 通过 `Vditor.use` 方法注册 iife 组件, 支持 use 方法注册 esm 组件
