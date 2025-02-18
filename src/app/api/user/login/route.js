import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
import { CreateToken } from "@/utility/JWTTokenHelper";


export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        console.log(reqBody)
        const prisma=new PrismaClient();
        const result=await prisma.users.findUnique({where:{
            email:reqBody['email'],
            password:reqBody['password']
        }})
        
        if(!result.email){
            return  NextResponse.json({status:"fail",data:result})
        }
        
         else{
             let token= await CreateToken(result.email,result.id);
            //  return NextResponse.json({data:token})

            let expireDuration=new Date(Date.now() + 24*60*60*1000 );

            const cookieString=`token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;

            return  NextResponse.json({status:"success",data:token},{status:200,headers:{'set-cookie':cookieString}})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}



// export async function GET(req,res){
//     try{
//         let reqBody=await req.json();
//         console.log(reqBody);
//         const prisma=new PrismaClient();
//         const result=await prisma.users.findUnique({where:reqBody})

//         if(result.length===0){
//             return  NextResponse.json({status:"fail",data:result})
//         }
//         else{
//             return  NextResponse.json({status:"success",data:result})
//         }
//     }
//     catch (e) {
//         return  NextResponse.json({status:"fail",data:e})
//     }
// }