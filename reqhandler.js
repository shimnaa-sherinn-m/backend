import DataSchema from './model/model.js'


// export async function AddData(req,res) {

    
//     const Datas = {...req.body }
//     await DataSchema.create(Datas).then(()=>{
//         res.status(201).send({msg:"successfull"})
//     }).catch((error)=>{
//         res.status(404).send({msg:"error"})
//     })
// }

export async function AddData(req,res){
    const {title,price,image}= req.body
    if (!(title&&price&&image)) {
        res.status(500).send({msg:"invalid input"})
    }
    else{
        await DataSchema.create({title,price,image}).then(()=>{
            res.status(200).send({msg:"success"})
        }).catch((err)=>{
            res.status(500).send({msg:"error"})
        })
    }
}