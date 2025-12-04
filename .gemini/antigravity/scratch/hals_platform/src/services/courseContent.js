// Mock course curriculum data
export const courseContent = {
    'course-1': {
        modules: [
            {
                id: 'mod-1',
                title: 'Key Concepts',
                description: 'Master the fundamental principles',
                lessons: [
                    { id: 'lesson-1', title: 'Introduction to Python', content: 'Learn the basics of Python programming, syntax, and structure.', duration: '15 min', videoUrl: null },
                    { id: 'lesson-2', title: 'Variables and Data Types', content: 'Understand how to work with different data types in Python.', duration: '12 min', videoUrl: null },
                    { id: 'lesson-3', title: 'Control Flow', content: 'Learn about if-else statements, loops, and conditional logic.', duration: '18 min', videoUrl: null }
                ]
            },
            {
                id: 'mod-2',
                title: 'Advanced Application',
                description: 'Apply concepts to real problems',
                lessons: [
                    { id: 'lesson-4', title: 'Functions and Modules', content: 'Create reusable code with functions and import modules.', duration: '20 min', videoUrl: null },
                    { id: 'lesson-5', title: 'Object-Oriented Programming', content: 'Understand classes, objects, and OOP principles.', duration: '25 min', videoUrl: null },
                    { id: 'lesson-6', title: 'File Handling', content: 'Read from and write to files in Python.', duration: '15 min', videoUrl: null }
                ]
            },
            {
                id: 'mod-3',
                title: 'Real-world Scenarios',
                description: 'Build practical projects',
                lessons: [
                    { id: 'lesson-7', title: 'Web Scraping Project', content: 'Build a web scraper using BeautifulSoup and requests.', duration: '30 min', videoUrl: null },
                    { id: 'lesson-8', title: 'Data Analysis with Pandas', content: 'Analyze datasets using the Pandas library.', duration: '28 min', videoUrl: null },
                    { id: 'lesson-9', title: 'API Integration', content: 'Connect to external APIs and process JSON data.', duration: '22 min', videoUrl: null }
                ]
            },
            {
                id: 'mod-4',
                title: 'Complex Analysis',
                description: 'Master advanced techniques',
                lessons: [
                    { id: 'lesson-10', title: 'Algorithms and Optimization', content: 'Learn efficient algorithms and code optimization.', duration: '35 min', videoUrl: null },
                    { id: 'lesson-11', title: 'Testing and Debugging', content: 'Write unit tests and debug complex issues.', duration: '25 min', videoUrl: null },
                    { id: 'lesson-12', title: 'Final Capstone Project', content: 'Build a complete application using all concepts learned.', duration: '60 min', videoUrl: null }
                ]
            }
        ]
    },
    // Add more courses...
    'course-7': {
        modules: [
            {
                id: 'mod-1',
                title: 'Key Concepts',
                description: 'Financial foundations',
                lessons: [
                    { id: 'lesson-1', title: 'Money Mindset', content: 'Transform your relationship with money.', duration: '10 min', videoUrl: null },
                    { id: 'lesson-2', title: 'Budgeting Basics', content: 'Create a personal budget that works.', duration: '15 min', videoUrl: null },
                    { id: 'lesson-3', title: 'Tracking Expenses', content: 'Monitor where your money goes.', duration: '12 min', videoUrl: null }
                ]
            },
            {
                id: 'mod-2',
                title: 'Advanced Application',
                description: 'Building wealth strategies',
                lessons: [
                    { id: 'lesson-4', title: 'Debt Management', content: 'Strategies to eliminate debt efficiently.', duration: '18 min', videoUrl: null },
                    { id: 'lesson-5', title: 'Emergency Fund', content: 'Build a safety net for financial security.', duration: '14 min', videoUrl: null },
                    { id: 'lesson-6', title: 'Savings Goals', content: 'Set and achieve financial milestones.', duration: '16 min', videoUrl: null }
                ]
            },
            {
                id: 'mod-3',
                title: 'Real-world Scenarios',
                description: 'Practical money management',
                lessons: [
                    { id: 'lesson-7', title: 'Monthly Budget Review', content: 'Analyze and optimize your spending.', duration: '20 min', videoUrl: null },
                    { id: 'lesson-8', title: 'Financial Decision Making', content: 'Make smart choices with your money.', duration: '18 min', videoUrl: null },
                    { id: 'lesson-9', title: 'Investment Basics', content: 'Introduction to growing your wealth.', duration: '22 min', videoUrl: null }
                ]
            },
            {
                id: 'mod-4',
                title: 'Complex Analysis',
                description: 'Advanced financial planning',
                lessons: [
                    { id: 'lesson-10', title: 'Retirement Planning', content: 'Secure your financial future.', duration: '25 min', videoUrl: null },
                    { id: 'lesson-11', title: 'Tax Optimization', content: 'Minimize taxes legally and ethically.', duration: '20 min', videoUrl: null },
                    { id: 'lesson-12', title: 'Wealth Building Plan', content: 'Create your personalized financial roadmap.', duration: '30 min', videoUrl: null }
                ]
            }
        ]
    }
};

const PROGRESS_KEY = 'hals_course_progress';

export const courseContentService = {
    getCourseContent: (courseId) => {
        if (courseContent[courseId]) {
            return courseContent[courseId];
        }

        // Generate generic content for courses without specific data
        return {
            modules: [
                {
                    id: 'mod-1',
                    title: 'Fundamentals',
                    description: 'Core concepts and theory',
                    lessons: [
                        { id: 'lesson-1', title: 'Getting Started', content: 'Introduction to the course topic.', duration: '15 min', videoUrl: null },
                        { id: 'lesson-2', title: 'Basic Principles', content: 'Understanding the key principles.', duration: '20 min', videoUrl: null },
                        { id: 'lesson-3', title: 'Tools and Setup', content: 'Setting up your environment.', duration: '15 min', videoUrl: null }
                    ]
                },
                {
                    id: 'mod-2',
                    title: 'Practical Application',
                    description: 'Applying what you learned',
                    lessons: [
                        { id: 'lesson-4', title: 'First Project', content: 'Building your first project.', duration: '30 min', videoUrl: null },
                        { id: 'lesson-5', title: 'Common Patterns', content: 'Recognizing common patterns.', duration: '25 min', videoUrl: null }
                    ]
                },
                {
                    id: 'mod-3',
                    title: 'Advanced Topics',
                    description: 'Taking it to the next level',
                    lessons: [
                        { id: 'lesson-6', title: 'Optimization', content: 'Making things faster and better.', duration: '35 min', videoUrl: null },
                        { id: 'lesson-7', title: 'Best Practices', content: 'Industry standard practices.', duration: '20 min', videoUrl: null }
                    ]
                },
                {
                    id: 'mod-4',
                    title: 'Mastery',
                    description: 'Final assessment',
                    lessons: [
                        { id: 'lesson-8', title: 'Capstone Project', content: 'Final comprehensive project.', duration: '60 min', videoUrl: null }
                    ]
                }
            ]
        };
    },

    getProgress: (userId, courseId) => {
        const saved = localStorage.getItem(PROGRESS_KEY);
        const allProgress = saved ? JSON.parse(saved) : {};
        return allProgress[`${userId}-${courseId}`] || { completedLessons: [] };
    },

    markLessonComplete: (userId, courseId, lessonId) => {
        const saved = localStorage.getItem(PROGRESS_KEY);
        const allProgress = saved ? JSON.parse(saved) : {};
        const key = `${userId}-${courseId}`;

        if (!allProgress[key]) {
            allProgress[key] = { completedLessons: [] };
        }

        if (allProgress[key].completedLessons.includes(lessonId)) {
            allProgress[key].completedLessons = allProgress[key].completedLessons.filter(id => id !== lessonId);
        } else {
            allProgress[key].completedLessons.push(lessonId);
        }

        localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
        return allProgress[key];
    },

    getProgressPercentage: (userId, courseId) => {
        const content = courseContent[courseId];
        if (!content) return 0;

        const totalLessons = content.modules.reduce((sum, mod) => sum + mod.lessons.length, 0);
        const progress = courseContentService.getProgress(userId, courseId);
        const completed = progress.completedLessons.length;

        return Math.round((completed / totalLessons) * 100);
    }
};
