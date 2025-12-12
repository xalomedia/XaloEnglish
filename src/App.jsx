import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import SchedulePage from './pages/SchedulePage';
import MethodPage from './pages/MethodPage';
import NewsPage from './pages/NewsPage';
import NewsDetailsPage from './pages/NewsDetailsPage';
import PaymentPolicyPage from './pages/PaymentPolicyPage';
import CommitmentPolicyPage from './pages/CommitmentPolicyPage';
import ContactPage from './pages/ContactPage';
import AdminLayout from './admin/components/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminMedia from './admin/pages/AdminMedia';
import AdminLogin from './admin/pages/AdminLogin';
import ProtectedRoute from './components/common/ProtectedRoute';
import CareersPage from './pages/CareersPage';
import AchievementsPage from './pages/AchievementsPage';
import AboutPage from './pages/AboutPage';
import FloatingActions from './components/common/FloatingActions';
import ScrollToTop from './components/common/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import AdminLeads from './admin/pages/AdminLeads';
import AdminSettings from './admin/pages/AdminSettings';
import AdminPrograms from './admin/pages/AdminPrograms';
import AdminMentors from './admin/pages/AdminMentors';
import AdminBlogPosts from './admin/pages/AdminBlogPosts';
import AdminStudentResults from './admin/pages/AdminStudentResults';
import AdminSchedules from './admin/pages/AdminSchedules';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app-container">
      {!isAdminRoute && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course-details/:courseId" element={<CourseDetailsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/payment-policy" element={<PaymentPolicyPage />} />
          <Route path="/commitment-policy" element={<CommitmentPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/method" element={<MethodPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:slug" element={<NewsDetailsPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="programs" element={<AdminPrograms />} />
              <Route path="mentors" element={<AdminMentors />} />
              <Route path="blog-posts" element={<AdminBlogPosts />} />
              <Route path="student-results" element={<AdminStudentResults />} />
              <Route path="media" element={<AdminMedia />} />
              <Route path="leads" element={<AdminLeads />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="schedules" element={<AdminSchedules />} />
            </Route>
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <FloatingActions />}
      {!isAdminRoute && <ScrollToTop />}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

import { HelmetProvider } from 'react-helmet-async';
import { SettingsProvider } from './context/SettingsContext';
import SEOHelper from './components/common/SEOHelper';

function App() {
  return (
    <HelmetProvider>
      <SettingsProvider>
        <AuthProvider>
          <Router>
            <SEOHelper />
            <AppContent />
          </Router>
        </AuthProvider>
      </SettingsProvider>
    </HelmetProvider>
  );
}

export default App;
