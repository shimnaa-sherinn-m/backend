import DataSchema from './model/model.js'
import userSchema from  './model/user.js'
import bcrypt from 'bcrypt'
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



export async function GetData(req,res){
    const data = await DataSchema.find()
    res.status(200).send(data)
}


export async function GetSingleData(req,res){
    const {id} = req.params

await DataSchema.findOne({_id:id}).then((data)=>{
    res.status(200).send(data)
}).catch((err)=>{
res.status(500).send({Error:err})
})    
}




export async function DeleteSingleData(req, res) {
    const { id } = req.params;

    await DataSchema.deleteOne({ _id: id }).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send({ Error: err })
    })
}


export async function updateData(req, res) {
    const { id } = req.params;

    const {title,price,image}= req.body


    DataSchema.updateOne({_id:id},{$set:{title,price,image}}).then(()=>{
        res.status(200).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({msg:error})
    })
}


//userr


export async function Adduser(req,res){
    const {name,email,password}= req.body
    if (!(name&&email&&password)) {
        res.status(500).send({msg:"invalid input"})
    }
    else{
        bcrypt.hash(password,10).then((hpwd)=>{
            console.log(hpwd);
            
            userSchema.create({name,email,password:hpwd}).then(()=>{
            res.status(200).send({msg:"success"})
        })
        
        }).catch((err)=>{
            res.status(500).send({msg:"error"})
        })
    }
}



export async function Getuser(req,res){
    const data = await userSchema.find()
    res.status(200).send(data)
}


export async function GetSingleuser(req,res){
    const {id} = req.params

await userSchema.findOne({_id:id}).then((data)=>{
    res.status(200).send(data)
}).catch((err)=>{
res.status(500).send({Error:err})
})    
}




export async function DeleteSingleUser(req, res) {
    const { id } = req.params;

    await userSchema.deleteOne({ _id: id }).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(500).send({ Error: err })
    })
}


export async function updateUser(req, res) {
    const { id } = req.params;

    const {name,email,password}= req.body


    userSchema.updateOne({_id:id},{$set:{name,email,password}}).then(()=>{
        res.status(200).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({msg:error})
    })
}





export async function Login(req,res){
    const {email,password} = req.body


    if(!(email&&password))
        return res.status(500).send({msg:"invalid input"})
    const user = await userSchema.findOne({email})

    if(!user)
        return res.status(500).send({msg:"user does not exist"})
    const success = await bcrypt.compare(password,user.password)

    if(success!==true)
        return res.status(500).send({msg:"incorrect password"})
    res.status(200).send({msg:"login success"})
}