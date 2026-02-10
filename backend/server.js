import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import cron from 'node-cron';
import { sendLeadSummaryReport } from './src/utils/leadReportService.js';

connectDB();

// Scheduled Reports (Vietnam Time: Asia/Ho_Chi_Minh)
// 9h00 sáng - Lấy lead từ 20h tối hôm trước (13 tiếng)
cron.schedule('0 9 * * *', () => {
    sendLeadSummaryReport('9h sáng', 13);
}, {
    timezone: "Asia/Ho_Chi_Minh"
});

// 15h00 chiều - Lấy lead từ 9h sáng (6 tiếng)
cron.schedule('0 15 * * *', () => {
    sendLeadSummaryReport('15h chiều', 6);
}, {
    timezone: "Asia/Ho_Chi_Minh"
});

// 20h00 tối - Lấy lead từ 15h chiều (5 tiếng)
cron.schedule('0 20 * * *', () => {
    sendLeadSummaryReport('20h tối', 5);
}, {
    timezone: "Asia/Ho_Chi_Minh"
});

const app = express();

app.use(cors());
app.use(express.json());

import authRoutes from './src/routes/authRoutes.js';
import blogPostRoutes from './src/routes/blogPostRoutes.js';
import scheduleRoutes from './src/routes/scheduleRoutes.js';
import mentorRoutes from './src/routes/mentorRoutes.js';
import studentResultRoutes from './src/routes/studentResultRoutes.js';
import uploadRoutes from './src/routes/uploadRoutes.js';
import settingRoutes from './src/routes/settingRoutes.js';
import leadRoutes from './src/routes/leadRoutes.js';
import programRoutes from './src/routes/programRoutes.js';
import dashboardRoutes from './src/routes/dashboardRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/blog-posts', blogPostRoutes);
app.use('/api/v1/schedules', scheduleRoutes);
app.use('/api/v1/mentors', mentorRoutes);
app.use('/api/v1/student-results', studentResultRoutes);
app.use('/api/v1/upload', uploadRoutes);
app.use('/api/v1/settings', settingRoutes);
app.use('/api/v1/leads', leadRoutes);
app.use('/api/v1/programs', programRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);

const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../dist')));

    // Use regex to match all routes (Express 5 compatible)
    app.get(/.*/, (req, res) =>
        res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
