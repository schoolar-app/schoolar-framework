const Fab = window.fab
const Toast = window.toast
const ToolBar = window.toolbar

if(typeof Fab === undefined){
    throw new Error("Object Fab is undefined!")
}

if(typeof Toast === undefined){
    throw new Error("Object Fab is undefined!")
}

export { Fab, Toast, ToolBar }