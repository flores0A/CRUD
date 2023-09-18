import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
    try {
        const result = await conn.query('SELECT * FROM product WHERE id=?', [params.id,]);
        if (result.length === 0) {
            return NextResponse.json(
                {
                    messege: "prducto no encontrado",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(result[0]);
    } catch (error) {
        return NextResponse.json(
            {
                messege: error.messege,
            },
            {
                status: 500
            }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const result = await conn.query('DELETE  FROM product WHERE id=?', [params.id,]);

        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    messege: "prducto no encontrado",
                },
                {
                    status: 404,
                }
            );
        }
        return new Response(null, {
            status: 204,
        });

    } catch (error) {
        return NextResponse.json(
            {
                messege: error.messege,
            },
            {
                status: 500
            }
        );
    }
}
export async function PUT(request, { params }) {
    try {
       
    const data = await request.json()
    const result = await conn.query('UPDATE  product SET ? WHERE id=?', [data, params.id,]);
    if (result.affectedRows === 0) {
        return NextResponse.json(
            {
                messege: " producto encontrado",
            },
            {

                status: 404,

            }
        );
}

const updatedProduct = await conn.query('SELECT * FROM product WHERE id=?', [params.id,]);

    return NextResponse.json(updatedProduct[0]); 
    } catch (error) {
        return NextResponse.json(
            {
                messege: error.messege,
            },
            {
                status: 500
            }
        ); 
    }
}