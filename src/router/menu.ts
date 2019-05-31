interface Menu{
    path:string,
    icon:string,
    view:string,
    title:string,
}

const menuInfo: Menu[]=[
    {
        icon:'compass',
        path:'/home',
        title:'发现',
        view:'Home',
    }
]
export default menuInfo