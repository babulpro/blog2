import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{

        let {searchParams}=new URL(req.url);
        let postID=parseInt(searchParams.get('postID'))

        const prisma=new PrismaClient();
        const result=await prisma.comments.findMany({
            where:{postID:postID},
            include:{
                users:{select:{firstName:true,lastName:true}}
            }
        })

        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}