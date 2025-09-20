# SkillConnect - Rural Skilled Worker Platform

## Problem Statement
Skilled workers in rural and semi-urban areas face high unemployment or underemployment because they lack a platform to connect directly with employers seeking their specific skills (e.g., carpentry, plumbing, tailoring). Traditional job portals do not cater to this blue-collar workforce effectively.

## Solution
SkillConnect is a web application that bridges the gap between skilled workers and employers in rural and semi-urban areas. The platform provides a simple, mobile-friendly interface for both workers to showcase their skills and employers to find qualified workers for their projects.

## Features Implemented

### For Workers:
- **Registration & Profile Creation**: Input skills, location, experience, hourly rates, and availability
- **Job Browser**: Search and filter available jobs by skill, location, and budget
- **Dashboard**: View profile, manage applications, and track job opportunities
- **Skills Supported**: Carpentry, Plumbing, Electrical, Masonry, Tailoring, Welding, and more

### For Employers:
- **Job Posting**: Create detailed job descriptions with requirements, location, and budget
- **Worker Search**: Browse and filter skilled workers by skill set, location, and experience
- **Dashboard**: Manage posted jobs and view applicant responses
- **Direct Communication**: Contact workers directly for job opportunities

### Core Platform Features:
- **Mobile-Responsive Design**: Optimized for rural area mobile access
- **Location-Based Matching**: Connect workers and employers in the same region
- **Skill Categorization**: Comprehensive list of blue-collar skills
- **Simple Authentication**: Easy sign-up process for both user types
- **Clean UI/UX**: Intuitive interface designed for users with varying tech literacy

## Technology Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Backend**: Supabase (PostgreSQL database, Authentication, Real-time features)
- **Deployment**: Lovable platform

## How It Solves the Problem

1. **Accessibility**: Mobile-first design ensures rural workers can access the platform on their phones
2. **Simplicity**: Straightforward registration and job posting process
3. **Local Focus**: Location-based matching keeps connections within manageable geographic areas
4. **Skill-Specific**: Tailored specifically for blue-collar trades and skills
5. **Direct Connection**: Eliminates intermediaries between workers and employers
6. **Cost-Effective**: Free platform reduces barriers to entry for rural workers

## Demo URLs
- **Landing Page**: `/` - Choose worker or employer path
- **Authentication**: `/auth` - Sign up or sign in
- **Worker Registration**: `/worker/register` - Create worker profile
- **Worker Dashboard**: `/worker/dashboard` - Browse jobs and manage profile
- **Employer Dashboard**: `/employer/dashboard` - Post jobs and find workers

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Supabase account (for backend integration)

### Installation
```sh
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd skillconnect

# Install dependencies
npm install

# Start development server
npm run dev
```

### Supabase Setup
1. Create a new Supabase project
2. Set up authentication with email/password
3. Create database tables for:
   - User profiles (workers and employers)
   - Job postings
   - Skill categories
   - Location data
   - Messages/connections

### Deployment
Deploy directly through Lovable platform or build for production:
```sh
npm run build
```

## Future Enhancements
- Real-time messaging system
- Rating and review system
- Payment integration
- Advanced search filters
- Mobile app (React Native/Capacitor)
- Offline functionality for areas with poor connectivity
- Multi-language support
- Skills verification system

## Impact Metrics
- **Target Users**: 10,000+ skilled workers in rural areas
- **Expected Job Matches**: 500+ per month
- **Success Rate Goal**: 80% connection-to-hire rate
- **Geographic Coverage**: Rural and semi-urban regions across multiple states

This prototype demonstrates a viable solution for connecting skilled rural workers with employment opportunities, addressing a significant market gap in blue-collar job platforms.
