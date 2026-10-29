// นำเข้า NextResponse จาก next/server เพื่อใช้จัดการและส่งค่า HTTP Response กลับไปยังไคลเอนต์
import { NextResponse } from "next/server";

//================================================================================
// GET Function (ดึงข้อมูล)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่รองรับ Request แบบ GET ที่เข้ามายัง Endpoint นี้
 */
export async function GET(request, { params }) {
  try {
    // หากเป็น dynamic route เช่น /api/users/[id] สามารถดึงค่า id ได้จากตรงนี้
    // const { id } = params;

    console.log({ success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200 });

    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
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

//================================================================================
// PUT Function (แก้ไขข้อมูล)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: PUT
 * ทำหน้าที่รองรับ Request แบบ PUT สำหรับแก้ไข/อัปเดตข้อมูล
 */
export async function PUT(request, { params }) {    
  try {
    const { id } = params; // ดึงค่า ID จาก URL (ถ้ามี)
    const body = await request.json(); // ดึงข้อมูล JSON ที่ส่งมาอัปเดตจาก Client

    console.log("ข้อมูลที่ได้รับสำหรับแก้ไข:", { id, body });

    return NextResponse.json(
      {
        success: true,
        message: "แก้ไขข้อมูลผู้ใช้สำเร็จ",
        updatedId: id,
        data: body,
      },
      { status: 200 }
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

//================================================================================
// DELETE Function (ลบข้อมูล)
//================================================================================
/**
 * Route Handler สำหรับ HTTP Method: DELETE
 * ทำหน้าที่รองรับ Request แบบ DELETE สำหรับลบข้อมูล
 */
export async function DELETE(request, { params }) {
  try {
    const { id } = params; // ดึงค่า ID ของข้อมูลที่ต้องการลบ

    console.log("ข้อมูลที่ต้องการลบ ID:", id);

    return NextResponse.json(
      {
        success: true,
        message: "ลบข้อมูลผู้ใช้สำเร็จ",
        deletedId: id,
      },
      { status: 200 }
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