const User = require('../model/user');

exports.registerUse = async(req,res,next)=>{
    const {name,email,password} = req.body;
    try {
        
        const user = new User({
          name,
          email,
          password
          
        });      
        await user.save();      
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Registration failed' });
      }

   
}

exports.getAllUser = async(req,res,next)=>{

    try{
          const Alluser= await User.find();
          res.status(200).json(Alluser)
    }catch(error){
        res.status(500).json({ error: 'Failed to get user' });
    }

}

exports.getUserById = async(req,res,next)=>{
    
    try{ 
      const  UserById = await User.findById(req.params.userId);
     
    
      res.status(200).json({
         success:true,
         UserById
      }
         )
 }catch(error){
     console.log(error);
     
      res.status(500).json({error: "Failed to get product"});
 }
}



exports.UpdateUser = async(req,res,next)=>{
    try{
        const UserId = req.params.userId;
        const Data = req.body;
        console.log(updateData);
           const UpdatedUser = await User.findByIdAndUpdate(UserId,Data);

            
           if(UpdatedUser)
           {
            res.status(200).json(UpdatedUser);
           }else{
            res.status(404).json({error: "User not found"});
           }
    }catch(error)
    {
        res.status(500).json({error:"Failed to update the User"});
    }
}


exports.DeleteById = async(req,res,next)=>{
    try {
         
          const UserId = req.params.userId;
          console.log(UserId);
          const deleteUser = await User.findOneAndDelete(UserId);
          if(deleteUser){
            res.status(200).json(deleteUser);
          }else{
            res.status(404).json({error:'user not found'});
          }
    } catch (error) {
        console.error('Error deleting user:', error);
         res.status(500).json({error:"failed to update"});
    }
}