import Ticket from "../../(modals)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    console.log("POST RUN")
    try{
        const body = await req.json()
        const ticketData = body.formData
        await Ticket.create(ticketData)
        return NextResponse.json({messge : "Ticket Created successfully " , error},{status : 201})
    }catch(error)
    {
        return NextResponse.json({messge : "Error" , error},{status : 500})
    }
}