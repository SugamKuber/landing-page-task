import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function forms(req, res) {
    if (req.method === "POST") {
        return await uploadForm(req, res);
    }
    else {
        return res
            .status(405)
            .json({ message: "Method not allowed", success: false });
    }
}

async function uploadForm(req, res) {
    const body = req.body;
    try {
        const form = await prisma.form.create({
            data: body
        });
        console.log("submitted");
        res.json(form)
        return res.status(200).json(form, { success: true });
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({ error: "Error", success: false });
    }
}

export { };