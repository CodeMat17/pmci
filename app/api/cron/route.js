import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET(req) {
  //   const supabase = await createClient();

  console.log("Starting GET request");
  try {
    // Ping the Supabase endpoint to keep it active
    await Promise.all([
      supabase.from("profiles").select("id"),
      supabase.from("absenteeism").select("id"),
      supabase.from("lateness").select("id"),
      supabase.from("monthlydues").select("id"),
      supabase.from("others").select("id"),
      supabase.from("weddinglevies").select("id"),
    ]);

       return NextResponse.json({ message: "Keeping backend awake..." });
  } catch (error) {
   return NextResponse.json({ error: error }, { status: 500 });
  }
}
