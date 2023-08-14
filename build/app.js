"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_status_codes_1 = require("http-status-codes");
var notFound_1 = __importDefault(require("./middlewares/notFound"));
var errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
var dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
var jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var auth_1 = __importDefault(require("./middlewares/auth"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var xss_clean_1 = __importDefault(require("xss-clean"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.set("trust proxy", 1);
app.use((0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000,
    max: 7,
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    // store: ... , // Use an external store for more precise rate limiting
}));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, xss_clean_1.default)());
app.get("/api/v2", function (req, res) {
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Welcom to our Job API",
    });
});
app.use("/api/v2/auth", authRoutes_1.default);
app.use("/api/v2/jobs", auth_1.default, jobRoutes_1.default);
app.use(notFound_1.default);
app.use(errorHandler_1.default);
exports.default = app;
