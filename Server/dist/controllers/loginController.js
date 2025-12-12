import jwt from "jsonwebtoken";
import { adminModel } from "../models/adminModel.js";
const JWT_SECRET = process.env.JWT_SECRET ?? "this_secret";
export async function adminLogin(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                ok: false,
                message: "email and password required",
            });
        }
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(401).json({ ok: false, message: "invalid credentials" });
        }
        if (admin.Password !== password) {
            return res.status(401).json({ ok: false, message: "invalid credentials" });
        }
        const payload = { email: admin.email };
        const token = jwt.sign(payload, JWT_SECRET);
        return res.json({ ok: true, token });
    }
    catch (err) {
        console.error("adminLogin error:", err);
        return res.status(500).json({
            ok: false,
            message: "internal server error",
        });
    }
}
//# sourceMappingURL=loginController.js.map