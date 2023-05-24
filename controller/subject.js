import subjectModel from "../database/subjectModel.js";
import departmentModel from "../database/departmentModel.js";

  export const index = async(req,res) =>{
    const subjects = await subjectModel.find({},{name:1}).lean();
    
    res.render("subjects/index",{subjects});
    };

    export const create = async(req,res)=>{
   const departments =  await departmentModel.find().lean();

        res.render("subjects/create",{departments});
        
    };

    export const store =async (req,res)=>{
const {name,code,departments} = req.body;
 await subjectModel.create({
    name,
    code,
    departments
});
        res.redirect("/subjects");
    };

    export const show =async (req,res)=>{
const {_id} = req.params;
const singleSubject=  await subjectModel.findById(_id).populate('department').lean();
res.render("subjects/show",{subject : singleSubject });
    };