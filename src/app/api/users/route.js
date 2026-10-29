// นำเข้า NextResponse จาก next/server เพื่อใช้จัดการและส่งค่า HTTP Response กลับไปยังไคลเอนต์
import { NextResponse } from "next/server";

//================================================================================
// GET Function (ดึงข้อมูล)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่รองรับ Request แบบ GET ที่เข้ามายัง Endpoint นี้
 */
export async function GET() {
  try {
    // พิมพ์ Log ข้อความลงในฝั่งเซิร์ฟเวอร์ (Server Console) เพื่อใช้ในการ Monitor หรือ Debug
    console.log({ success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200 });

    // ส่ง Response กลับไปยังฝั่ง Client ในรูปแบบ JSON (Status 200 OK)
    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    // ดักจับ Error และส่ง Response กลับไปด้วย Status 500
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

//================================================================================
// POST Function (เพิ่มข้อมูล)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: POST
 * ทำหน้าที่รองรับ Request แบบ POST สำหรับสร้าง/เพิ่มข้อมูลใหม่
 */
export async function POST(request) {
  try {
    // รับข้อมูล Body ที่ส่งมาจากฝั่ง Client
    // const body = await request.json();

    console.log({ success: true, message: "เพิ่มข้อมูลผู้ใช้สำเร็จ", status: 201 });

    // ส่ง Response กลับไปพร้อม Status 201 (Created)
    return NextResponse.json(
      {
        success: true,
        message: "เพิ่มข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}