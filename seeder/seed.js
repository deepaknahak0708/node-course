const User = require('../model/user');

module.exports = async () => {
    try {
        const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
        if (!admin) {
            const user = {
                firstname: process.env.FIRST_NAME,
                lastname: process.env.LAST_NAME,
                phone:process.env.PHONE,
                email: process.env.ADMIN_EMAIL,
                password: process.env.PASSWORD,
                role: 'admin'

            }
            await User.create(user);
            console.log('admin seeded')

        }else{
            console.log('admin exit') 
        }
    }catch(error){
        console.log(error)
    }   
}
