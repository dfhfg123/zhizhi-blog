一. 编译器优化，不再需要使用 usecallback,usememo,memo 等 hooks 来优化性能。

二. 也不需要使用 forwardref。react18 中如果要讲一个 ref 引用传给子组件，需要 1.createRef，2.将 ref 作为一个 prop 传递给自组件 3.自组件要访问必须使用 forwardRef

三. 新增 use 钩子，可以加载许多不同的资源。可以代替 useeffect 获取数据，可以代替 uscontext 进行上下文读取

四, Directives
“use client”

五. Actions

六. useFormStatus()

七. useOptimsitic()
