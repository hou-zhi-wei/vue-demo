const TabList=require("./src/mock/mock")
console.log(TabList)

module.exports={
    lintOnSave:false,
    devServer:{
        before:function(app,server){
            app.get("/api/TabList",(req,res)=>{
              res.json(
                TabList
              )
            })
        }
    }
}