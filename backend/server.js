import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';

connectDB();

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
