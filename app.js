// Application State (In-Memory Storage)
const appState = {
  users: [],
  currentUser: null,
  applications: [],
  tickets: [],
  currentInternship: null,
  currentApplicationStatus: 'all',
  internships: [
    {
      id: 1,
      company: "Deloitte",
      title: "QA Engineer Intern",
      requiredSkills: ["Manual Testing", "JIRA", "SDLC", "Java"],
      duration: "6 months",
      paid: true,
      stipend: "₹30,000/month",
      availableSpots: 8,
      location: "Bengaluru, Gurugram, Mumbai, Hyderabad, Pune",
      description: "Work on live QA projects with cross-functional teams. Join Digital Excellence Centre and contribute to enterprise applications. Potential PPO offered to high performers."
    },
    {
      id: 2,
      company: "Google",
      title: "Software Engineering Intern",
      requiredSkills: ["Python", "JavaScript", "DSA", "System Design"],
      duration: "3 months",
      paid: true,
      stipend: "₹25,000/month",
      availableSpots: 12,
      location: "Bangalore, Mumbai",
      description: "Build systems and services that power Google's products. Work with world-class engineers on real-world problems."
    },
    {
      id: 3,
      company: "TCS",
      title: "Technology Analyst Intern",
      requiredSkills: ["Java", "C++", "SQL", "AWS"],
      duration: "4 months",
      paid: true,
      stipend: "₹18,000/month",
      availableSpots: 20,
      location: "Pune, Gurugram, Kolkata, Mumbai",
      description: "Get hands-on experience in software development and cloud technologies. Gain insights into enterprise solutions."
    },
    {
      id: 4,
      company: "Microsoft",
      title: "Software Engineer Intern",
      requiredSkills: ["C#", "JavaScript", "Azure", "REST APIs"],
      duration: "4 months",
      paid: true,
      stipend: "₹28,000/month",
      availableSpots: 10,
      location: "Bangalore, Hyderabad, Pune",
      description: "Develop software solutions that impact millions. Work on Azure cloud platform and enterprise applications."
    },
    {
      id: 5,
      company: "Amazon",
      title: "Data Science Intern",
      requiredSkills: ["Python", "Machine Learning", "SQL", "Data Analysis"],
      duration: "3 months",
      paid: true,
      stipend: "₹26,000/month",
      availableSpots: 6,
      location: "Bangalore",
      description: "Apply ML algorithms to solve real business problems. Work with massive datasets and contribute to Amazon's AI initiatives."
    },
    {
      id: 6,
      company: "Infosys",
      title: "Full Stack Developer Intern",
      requiredSkills: ["JavaScript", "React", "Node.js", "MongoDB"],
      duration: "6 months",
      paid: true,
      stipend: "₹16,000/month",
      availableSpots: 30,
      location: "Pune, Bangalore, Hyderabad, Gurugram",
      description: "Build end-to-end web applications. Learn modern development practices and work on client-facing projects."
    },
    {
      id: 7,
      company: "Accenture",
      title: "Technology Consulting Intern",
      requiredSkills: ["Python", "AWS", "Docker", "REST APIs"],
      duration: "4 months",
      paid: true,
      stipend: "₹22,000/month",
      availableSpots: 15,
      location: "Mumbai, Gurugram, Bangalore",
      description: "Solve complex business challenges using technology. Get exposure to consulting work and cloud technologies."
    },
    {
      id: 8,
      company: "Goldman Sachs",
      title: "Technology Analyst Intern",
      requiredSkills: ["Python", "Java", "JavaScript", "SQL"],
      duration: "4 months",
      paid: true,
      stipend: "₹35,000/month",
      availableSpots: 5,
      location: "Bangalore",
      description: "Work on financial systems and infrastructure. Collaborate with senior engineers in fintech domain."
    },
    {
      id: 9,
      company: "Atlassian",
      title: "Product Designer Intern",
      requiredSkills: ["Figma", "UI/UX", "Adobe XD", "User Research"],
      duration: "3 months",
      paid: false,
      stipend: "Unpaid (Learning focused)",
      availableSpots: 4,
      location: "Remote",
      description: "Design features for products used by 300,000+ customers. Gain experience in user-centered design."
    },
    {
      id: 10,
      company: "Stripe",
      title: "Developer Relations Intern",
      requiredSkills: ["JavaScript", "REST APIs", "React", "Git"],
      duration: "3 months",
      paid: false,
      stipend: "Unpaid",
      availableSpots: 3,
      location: "Remote",
      description: "Help developers build payment solutions. Create content, tutorials, and support the developer community."
    },
    {
      id: 11,
      company: "GitHub",
      title: "Community Manager Intern",
      requiredSkills: ["Git", "Python", "JavaScript", "Communication"],
      duration: "2 months",
      paid: false,
      stipend: "Unpaid",
      availableSpots: 2,
      location: "Remote",
      description: "Build and engage the developer community. Support open-source initiatives and developers worldwide."
    }
  ],
  availableSkills: {
    "Programming Languages": ["Python", "JavaScript", "Java", "C++", "C#"],
    "Web Development": ["HTML/CSS", "React", "Vue", "Angular", "Node.js", "REST APIs"],
    "Data Science": ["Machine Learning", "Data Analysis", "TensorFlow", "Tableau"],
    "Design": ["UI/UX", "Figma", "Adobe XD", "Graphic Design", "User Research"],
    "Databases": ["SQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker"],
    "Other": ["Spring Boot", "Git", "DSA", "System Design", "JIRA", "SDLC", "Manual Testing", "Communication"]
  },
  learningResources: {
    "Python": [
      { name: "GeeksforGeeks Python", url: "https://www.geeksforgeeks.org/python-programming-language/", time: "40 hours" },
      { name: "Codecademy Python", url: "https://www.codecademy.com/learn/learn-python-3", time: "25 hours" },
      { name: "Coursera Python Basics", url: "https://www.coursera.org/courses?query=python%20basics", time: "30 hours" }
    ],
    "JavaScript": [
      { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", time: "35 hours" },
      { name: "FreeCodeCamp JavaScript", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", time: "30 hours" },
      { name: "Codecademy JavaScript", url: "https://www.codecademy.com/learn/introduction-to-javascript", time: "20 hours" }
    ],
    "React": [
      { name: "Official React Docs", url: "https://react.dev/learn", time: "20 hours" },
      { name: "Scrimba React Course", url: "https://scrimba.com/learn/learnreact", time: "15 hours" },
      { name: "Coursera React Specialization", url: "https://www.coursera.org/specializations/full-stack-react", time: "30 hours" }
    ],
    "Machine Learning": [
      { name: "Andrew Ng ML Course", url: "https://www.coursera.org/learn/machine-learning", time: "56 hours" },
      { name: "Fast.ai Deep Learning", url: "https://www.fast.ai/", time: "50 hours" },
      { name: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course", time: "20 hours" }
    ],
    "SQL": [
      { name: "SQLZoo", url: "https://sqlzoo.net/", time: "15 hours" },
      { name: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/", time: "12 hours" },
      { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/", time: "20 hours" }
    ],
    "AWS": [
      { name: "AWS Free Tier Tutorials", url: "https://aws.amazon.com/getting-started/", time: "25 hours" },
      { name: "AWS Training", url: "https://www.aws.training/", time: "40 hours" },
      { name: "Coursera AWS Fundamentals", url: "https://www.coursera.org/learn/aws-fundamentals", time: "35 hours" }
    ],
    "Figma": [
      { name: "Figma Help Center", url: "https://help.figma.com/", time: "10 hours" },
      { name: "YouTube Figma Tutorials", url: "https://www.youtube.com/results?search_query=figma+tutorial", time: "12 hours" },
      { name: "Figma Community", url: "https://www.figma.com/community/", time: "8 hours" }
    ],
    "Git": [
      { name: "GitHub Learning Lab", url: "https://lab.github.com/", time: "8 hours" },
      { name: "Atlassian Git Tutorial", url: "https://www.atlassian.com/git/tutorials", time: "10 hours" },
      { name: "FreeCodeCamp Git", url: "https://www.freecodecamp.org/news/git-and-github-for-beginners/", time: "12 hours" }
    ],
    "Java": [
      { name: "Oracle Java Docs", url: "https://docs.oracle.com/javase/tutorial/", time: "45 hours" },
      { name: "HackerRank Java", url: "https://www.hackerrank.com/domains/java", time: "30 hours" },
      { name: "Codecademy Java", url: "https://www.codecademy.com/learn/learn-java", time: "40 hours" }
    ],
    "Data Analysis": [
      { name: "Kaggle Data Analysis", url: "https://www.kaggle.com/learn/data-analysis-with-python", time: "20 hours" },
      { name: "Coursera Data Analysis", url: "https://www.coursera.org/learn/data-analysis-with-python", time: "25 hours" },
      { name: "DataCamp", url: "https://www.datacamp.com/", time: "30 hours" }
    ],
    "UI/UX": [
      { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/", time: "22 hours" },
      { name: "Coursera UI/UX Design", url: "https://www.coursera.org/specializations/ui-ux-design", time: "40 hours" },
      { name: "Nielsen Norman Group", url: "https://www.nngroup.com/", time: "15 hours" }
    ],
    "Node.js": [
      { name: "Node.js Official Docs", url: "https://nodejs.org/en/docs/", time: "25 hours" },
      { name: "FreeCodeCamp Node.js", url: "https://www.freecodecamp.org/news/tag/node/", time: "30 hours" }
    ],
    "MongoDB": [
      { name: "MongoDB University", url: "https://university.mongodb.com/", time: "20 hours" },
      { name: "MongoDB Docs", url: "https://docs.mongodb.com/", time: "15 hours" }
    ],
    "Docker": [
      { name: "Docker Getting Started", url: "https://docs.docker.com/get-started/", time: "18 hours" },
      { name: "Docker Tutorial", url: "https://www.tutorialspoint.com/docker/", time: "15 hours" }
    ],
    "Azure": [
      { name: "Microsoft Learn Azure", url: "https://docs.microsoft.com/en-us/learn/azure/", time: "30 hours" },
      { name: "Azure Fundamentals", url: "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/", time: "25 hours" }
    ],
    "C#": [
      { name: "Microsoft C# Docs", url: "https://docs.microsoft.com/en-us/dotnet/csharp/", time: "35 hours" },
      { name: "Codecademy C#", url: "https://www.codecademy.com/learn/learn-c-sharp", time: "30 hours" }
    ],
    "C++": [
      { name: "GeeksforGeeks C++", url: "https://www.geeksforgeeks.org/c-plus-plus/", time: "40 hours" },
      { name: "Learn C++", url: "https://www.learncpp.com/", time: "50 hours" }
    ],
    "DSA": [
      { name: "GeeksforGeeks DSA", url: "https://www.geeksforgeeks.org/data-structures/", time: "60 hours" },
      { name: "LeetCode", url: "https://leetcode.com/", time: "100 hours" },
      { name: "HackerRank", url: "https://www.hackerrank.com/domains/data-structures", time: "50 hours" }
    ],
    "System Design": [
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", time: "40 hours" },
      { name: "Grokking System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview", time: "30 hours" }
    ],
    "JIRA": [
      { name: "Atlassian JIRA Tutorial", url: "https://www.atlassian.com/software/jira/guides", time: "10 hours" },
      { name: "JIRA Documentation", url: "https://confluence.atlassian.com/jira", time: "8 hours" }
    ],
    "SDLC": [
      { name: "Software Development Life Cycle", url: "https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/", time: "12 hours" },
      { name: "SDLC Tutorial", url: "https://www.tutorialspoint.com/sdlc/", time: "10 hours" }
    ],
    "Manual Testing": [
      { name: "Manual Testing Tutorial", url: "https://www.guru99.com/manual-testing.html", time: "15 hours" },
      { name: "Software Testing Help", url: "https://www.softwaretestinghelp.com/", time: "20 hours" }
    ],
    "REST APIs": [
      { name: "REST API Tutorial", url: "https://restfulapi.net/", time: "12 hours" },
      { name: "MDN HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP", time: "15 hours" }
    ],
    "Adobe XD": [
      { name: "Adobe XD Tutorials", url: "https://helpx.adobe.com/xd/tutorials.html", time: "12 hours" },
      { name: "YouTube Adobe XD", url: "https://www.youtube.com/results?search_query=adobe+xd+tutorial", time: "10 hours" }
    ],
    "User Research": [
      { name: "NN Group User Research", url: "https://www.nngroup.com/topic/user-research/", time: "18 hours" },
      { name: "User Research Methods", url: "https://www.usability.gov/how-to-and-tools/methods/", time: "15 hours" }
    ],
    "Communication": [
      { name: "Effective Communication", url: "https://www.coursera.org/learn/wharton-communication-skills", time: "20 hours" },
      { name: "Business Communication", url: "https://www.edx.org/learn/communication", time: "15 hours" }
    ]
  },
  helpdeskFAQs: [
    { question: "How do I apply for an internship?", answer: "Browse through the internship listings, click 'View Details' on an internship that interests you, and click 'Apply Now'. Your application will be saved and you'll be able to track it in 'My Applications'." },
    { question: "How are internships filtered based on my skills?", answer: "The system calculates a match percentage based on the overlap between your selected skills and the required skills for each internship. Higher match percentage means better fit for the role." },
    { question: "How can I track my skill gap?", answer: "After applying to an internship, you'll see a 'Skills Gap Analysis' page showing which skills you need and which you already have. You can access learning resources directly from there." },
    { question: "How long does it take to hear back after applying?", answer: "Typically, companies review applications within 3-7 days. You can track the status of your applications in the 'My Applications' section." },
    { question: "Can I apply for multiple internships?", answer: "Yes! You can apply for as many internships as you want. We recommend applying to multiple opportunities to increase your chances." },
    { question: "What if I want to learn a skill?", answer: "We provide curated learning resources for each skill. Click 'Learn Now' on any missing skill in your skills gap analysis to access tutorials, courses, and guides from platforms like GeeksforGeeks, Coursera, and more." },
    { question: "How do I edit my profile or change my skills?", answer: "Click on 'Dashboard' in the navigation menu and then click 'Edit Skills' to update your selected skills. You can add or remove skills anytime." },
    { question: "Are there any prerequisites to apply for paid internships?", answer: "Most paid internships require you to be currently pursuing or have recently completed your degree. Check individual internship descriptions for specific eligibility criteria." }
  ],
  currentPage: 'auth',
  filters: {
    paid: true,
    unpaid: true
  }
};

// DOM Elements
const elements = {
  // Pages
  authPage: document.getElementById('auth-page'),
  skillsPage: document.getElementById('skills-page'),
  dashboardPage: document.getElementById('dashboard-page'),
  internshipsPage: document.getElementById('internships-page'),
  skillsGapPage: document.getElementById('skills-gap-page'),
  learningPage: document.getElementById('learning-page'),
  applicationsPage: document.getElementById('applications-page'),
  helpdeskPage: document.getElementById('helpdesk-page'),
  
  // Header
  appHeader: document.getElementById('app-header'),
  userNameDisplay: document.getElementById('user-name-display'),
  logoutBtn: document.getElementById('logout-btn'),
  navDashboard: document.getElementById('nav-dashboard'),
  navInternships: document.getElementById('nav-internships'),
  navApplications: document.getElementById('nav-applications'),
  navLearning: document.getElementById('nav-learning'),
  navHelp: document.getElementById('nav-help'),
  
  // Auth
  loginTab: document.getElementById('login-tab'),
  registerTab: document.getElementById('register-tab'),
  loginForm: document.getElementById('login-form'),
  registerForm: document.getElementById('register-form'),
  loginError: document.getElementById('login-error'),
  registerError: document.getElementById('register-error'),
  
  // Skills
  skillsCategories: document.getElementById('skills-categories'),
  skillsCount: document.getElementById('skills-count'),
  continueSkillsBtn: document.getElementById('continue-skills-btn'),
  skillsError: document.getElementById('skills-error'),
  
  // Dashboard
  dashboardWelcome: document.getElementById('dashboard-welcome'),
  dashboardSubtitle: document.getElementById('dashboard-subtitle'),
  statSkills: document.getElementById('stat-skills'),
  statInternships: document.getElementById('stat-internships'),
  dashboardSkillsList: document.getElementById('dashboard-skills-list'),
  viewInternshipsBtn: document.getElementById('view-internships-btn'),
  manageSkillsBtn: document.getElementById('manage-skills-btn'),
  
  // Internships
  filterPaid: document.getElementById('filter-paid'),
  filterUnpaid: document.getElementById('filter-unpaid'),
  resetFiltersBtn: document.getElementById('reset-filters-btn'),
  internshipsGrid: document.getElementById('internships-grid'),
  internshipsCount: document.getElementById('internships-count'),
  noInternships: document.getElementById('no-internships'),
  
  // Modal
  internshipModal: document.getElementById('internship-modal'),
  modalCloseBtn: document.getElementById('modal-close-btn'),
  modalCompany: document.getElementById('modal-company'),
  modalTitle: document.getElementById('modal-title'),
  modalMatch: document.getElementById('modal-match'),
  modalDuration: document.getElementById('modal-duration'),
  modalStipend: document.getElementById('modal-stipend'),
  modalSpots: document.getElementById('modal-spots'),
  modalLocation: document.getElementById('modal-location'),
  modalSkills: document.getElementById('modal-skills'),
  modalDescription: document.getElementById('modal-description'),
  modalApplyBtn: document.getElementById('modal-apply-btn'),
  
  // Toast
  successToast: document.getElementById('success-toast'),
  toastMessage: document.getElementById('toast-message'),
  
  // Skills Gap
  gapInternshipTitle: document.getElementById('gap-internship-title'),
  hasSkillsList: document.getElementById('has-skills-list'),
  missingSkillsList: document.getElementById('missing-skills-list'),
  backToInternshipsBtn: document.getElementById('back-to-internships-btn'),
  
  // Learning
  learningSearch: document.getElementById('learning-search'),
  learningGrid: document.getElementById('learning-grid'),
  noLearning: document.getElementById('no-learning'),
  
  // Applications
  applicationsList: document.getElementById('applications-list'),
  noApplications: document.getElementById('no-applications'),
  
  // Helpdesk
  faqList: document.getElementById('faq-list'),
  contactForm: document.getElementById('contact-form'),
  helpdeskWidget: document.getElementById('helpdesk-widget'),
  helpdeskToggle: document.getElementById('helpdesk-toggle'),
  helpdeskChat: document.getElementById('helpdesk-chat'),
  helpdeskChatClose: document.getElementById('helpdesk-chat-close'),
  helpdeskInput: document.getElementById('helpdesk-input'),
  helpdeskSend: document.getElementById('helpdesk-send'),
  helpdeskChatMessages: document.getElementById('helpdesk-chat-messages')
};

// Utility Functions
function showPage(pageName) {
  const pages = ['auth', 'skills', 'dashboard', 'internships', 'skills-gap', 'learning', 'applications', 'helpdesk'];
  pages.forEach(page => {
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
      pageElement.classList.toggle('hidden', page !== pageName);
    }
  });
  
  // Show/hide header and helpdesk widget based on page
  if (pageName === 'auth') {
    elements.appHeader.classList.add('hidden');
    if (elements.helpdeskWidget) elements.helpdeskWidget.classList.add('hidden');
  } else {
    elements.appHeader.classList.remove('hidden');
    if (elements.helpdeskWidget) elements.helpdeskWidget.classList.remove('hidden');
  }
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  if (pageName === 'dashboard') elements.navDashboard?.classList.add('active');
  if (pageName === 'internships') elements.navInternships?.classList.add('active');
  if (pageName === 'applications') elements.navApplications?.classList.add('active');
  if (pageName === 'learning') elements.navLearning?.classList.add('active');
  if (pageName === 'helpdesk') elements.navHelp?.classList.add('active');
  
  appState.currentPage = pageName;
}

function showToast(message) {
  elements.toastMessage.textContent = message;
  elements.successToast.classList.remove('hidden');
  setTimeout(() => {
    elements.successToast.classList.add('hidden');
  }, 3000);
}

function showError(element, message) {
  element.textContent = message;
  element.classList.remove('hidden');
}

function hideError(element) {
  element.textContent = '';
  element.classList.add('hidden');
}

// Auth Functions
function switchAuthTab(tab) {
  if (tab === 'login') {
    elements.loginTab.classList.add('active');
    elements.registerTab.classList.remove('active');
    elements.loginForm.classList.remove('hidden');
    elements.registerForm.classList.add('hidden');
    hideError(elements.loginError);
  } else {
    elements.loginTab.classList.remove('active');
    elements.registerTab.classList.add('active');
    elements.loginForm.classList.add('hidden');
    elements.registerForm.classList.remove('hidden');
    hideError(elements.registerError);
  }
}

function handleLogin(e) {
  e.preventDefault();
  hideError(elements.loginError);
  
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  
  if (!email || !password) {
    showError(elements.loginError, 'Please fill in all fields');
    return;
  }
  
  const user = appState.users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    showError(elements.loginError, 'Invalid email or password');
    return;
  }
  
  appState.currentUser = user;
  elements.userNameDisplay.textContent = user.name;
  
  // If user has already selected skills, go to dashboard, otherwise go to skills page
  if (user.selectedSkills && user.selectedSkills.length > 0) {
    renderDashboard();
    showPage('dashboard');
  } else {
    renderSkillsPage();
    showPage('skills');
  }
  
  showToast('Login successful!');
  elements.loginForm.reset();
}

function handleRegister(e) {
  e.preventDefault();
  hideError(elements.registerError);
  
  const name = document.getElementById('register-name').value.trim();
  const email = document.getElementById('register-email').value.trim();
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;
  
  if (!name || !email || !password || !confirmPassword) {
    showError(elements.registerError, 'Please fill in all fields');
    return;
  }
  
  if (password !== confirmPassword) {
    showError(elements.registerError, 'Passwords do not match');
    return;
  }
  
  if (password.length < 6) {
    showError(elements.registerError, 'Password must be at least 6 characters');
    return;
  }
  
  if (appState.users.find(u => u.email === email)) {
    showError(elements.registerError, 'Email already registered');
    return;
  }
  
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    selectedSkills: []
  };
  
  appState.users.push(newUser);
  appState.currentUser = newUser;
  elements.userNameDisplay.textContent = name;
  
  showToast('Account created successfully!');
  elements.registerForm.reset();
  
  renderSkillsPage();
  showPage('skills');
}

function handleLogout() {
  appState.currentUser = null;
  showPage('auth');
  showToast('Logged out successfully!');
}

// Skills Functions
function renderSkillsPage() {
  elements.skillsCategories.innerHTML = '';
  
  Object.entries(appState.availableSkills).forEach(([category, skills]) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';
    
    const categoryTitle = document.createElement('h4');
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);
    
    const skillOptions = document.createElement('div');
    skillOptions.className = 'skill-options';
    
    skills.forEach(skill => {
      const label = document.createElement('label');
      label.className = 'skill-checkbox';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = skill;
      checkbox.checked = appState.currentUser.selectedSkills.includes(skill);
      checkbox.addEventListener('change', updateSkillSelection);
      
      const span = document.createElement('span');
      span.textContent = skill;
      
      label.appendChild(checkbox);
      label.appendChild(span);
      skillOptions.appendChild(label);
      
      if (checkbox.checked) {
        label.classList.add('selected');
      }
    });
    
    categoryDiv.appendChild(skillOptions);
    elements.skillsCategories.appendChild(categoryDiv);
  });
  
  updateSkillsCount();
}

function updateSkillSelection(e) {
  const checkbox = e.target;
  const skill = checkbox.value;
  const label = checkbox.closest('.skill-checkbox');
  
  if (checkbox.checked) {
    if (!appState.currentUser.selectedSkills.includes(skill)) {
      appState.currentUser.selectedSkills.push(skill);
    }
    label.classList.add('selected');
  } else {
    appState.currentUser.selectedSkills = appState.currentUser.selectedSkills.filter(s => s !== skill);
    label.classList.remove('selected');
  }
  
  updateSkillsCount();
}

function updateSkillsCount() {
  const count = appState.currentUser.selectedSkills.length;
  elements.skillsCount.textContent = `Selected: ${count} skill${count !== 1 ? 's' : ''}`;
}

function handleContinueSkills() {
  hideError(elements.skillsError);
  
  if (appState.currentUser.selectedSkills.length === 0) {
    showError(elements.skillsError, 'Please select at least one skill');
    return;
  }
  
  renderDashboard();
  showPage('dashboard');
  showToast('Skills saved successfully!');
}

// Dashboard Functions
function renderDashboard() {
  const user = appState.currentUser;
  
  elements.dashboardWelcome.textContent = `Welcome back, ${user.name}!`;
  elements.dashboardSubtitle.textContent = 'Your personalized internship dashboard';
  
  elements.statSkills.textContent = user.selectedSkills.length;
  elements.statInternships.textContent = getFilteredInternships().length;
  
  elements.dashboardSkillsList.innerHTML = '';
  user.selectedSkills.forEach(skill => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    elements.dashboardSkillsList.appendChild(tag);
  });
}

// Internships Functions
function calculateMatch(internship, userSkills) {
  if (userSkills.length === 0) return 0;
  
  const matchingSkills = internship.requiredSkills.filter(skill => 
    userSkills.includes(skill)
  );
  
  return Math.round((matchingSkills.length / internship.requiredSkills.length) * 100);
}

function getFilteredInternships() {
  let filtered = appState.internships;
  
  if (!appState.filters.paid && !appState.filters.unpaid) {
    return [];
  }
  
  if (!appState.filters.paid) {
    filtered = filtered.filter(i => !i.paid);
  }
  
  if (!appState.filters.unpaid) {
    filtered = filtered.filter(i => i.paid);
  }
  
  // Calculate match percentage for each internship
  const withMatch = filtered.map(internship => ({
    ...internship,
    matchPercentage: calculateMatch(internship, appState.currentUser.selectedSkills)
  }));
  
  // Sort by match percentage (highest first)
  return withMatch.sort((a, b) => b.matchPercentage - a.matchPercentage);
}

function renderInternships() {
  const internships = getFilteredInternships();
  
  elements.internshipsCount.textContent = `Showing ${internships.length} internship${internships.length !== 1 ? 's' : ''}`;
  
  if (internships.length === 0) {
    elements.internshipsGrid.classList.add('hidden');
    elements.noInternships.classList.remove('hidden');
    return;
  }
  
  elements.internshipsGrid.classList.remove('hidden');
  elements.noInternships.classList.add('hidden');
  elements.internshipsGrid.innerHTML = '';
  
  internships.forEach(internship => {
    const card = document.createElement('div');
    card.className = 'internship-card card';
    card.onclick = () => showInternshipDetail(internship);
    
    card.innerHTML = `
      <div class="internship-header">
        <div class="company-name">${internship.company}</div>
        <h3 class="internship-title">${internship.title}</h3>
      </div>
      <div class="internship-skills">
        ${internship.requiredSkills.map(skill => 
          `<span class="skill-tag-small">${skill}</span>`
        ).join('')}
      </div>
      <div class="internship-details">
        <div class="detail-item">
          <span class="stipend ${internship.paid ? 'paid' : 'unpaid'}">${internship.stipend}</span>
        </div>
        <div class="detail-item">${internship.duration}</div>
      </div>
      <div class="internship-details">
        <div class="detail-item"><strong>${internship.availableSpots}</strong> spots available</div>
        <div class="match-percentage">${internship.matchPercentage}% Match</div>
      </div>
    `;
    
    elements.internshipsGrid.appendChild(card);
  });
}

function showInternshipDetail(internship) {
  appState.currentInternship = internship;
  elements.modalCompany.textContent = internship.company;
  elements.modalTitle.textContent = internship.title;
  elements.modalMatch.textContent = `${internship.matchPercentage}% Match`;
  elements.modalDuration.textContent = internship.duration;
  elements.modalStipend.textContent = internship.stipend;
  elements.modalSpots.textContent = internship.availableSpots;
  elements.modalLocation.textContent = internship.location;
  elements.modalDescription.textContent = internship.description;
  
  elements.modalSkills.innerHTML = '';
  internship.requiredSkills.forEach(skill => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    
    // Highlight skills that user has
    if (appState.currentUser.selectedSkills.includes(skill)) {
      tag.style.borderColor = 'var(--color-success)';
      tag.style.backgroundColor = 'var(--color-bg-3)';
    }
    
    elements.modalSkills.appendChild(tag);
  });
  
  // Check if already applied
  const alreadyApplied = appState.applications.some(app => 
    app.internshipId === internship.id && app.userId === appState.currentUser.id
  );
  
  if (alreadyApplied) {
    elements.modalApplyBtn.textContent = 'Already Applied';
    elements.modalApplyBtn.disabled = true;
    elements.modalApplyBtn.onclick = null;
  } else {
    elements.modalApplyBtn.textContent = 'Apply Now';
    elements.modalApplyBtn.disabled = false;
    elements.modalApplyBtn.onclick = () => handleApply(internship);
  }
  
  elements.internshipModal.classList.remove('hidden');
}

function closeModal() {
  elements.internshipModal.classList.add('hidden');
}

function updateFilters() {
  appState.filters.paid = elements.filterPaid.checked;
  appState.filters.unpaid = elements.filterUnpaid.checked;
  renderInternships();
}

function resetFilters() {
  elements.filterPaid.checked = true;
  elements.filterUnpaid.checked = true;
  updateFilters();
}

// Application Functions
function handleApply(internship) {
  const application = {
    id: Date.now(),
    userId: appState.currentUser.id,
    internshipId: internship.id,
    internship: internship,
    status: 'Applied',
    date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
  };
  
  appState.applications.push(application);
  elements.internshipModal.classList.add('hidden');
  showToast(`Application submitted for ${internship.title} at ${internship.company}!`);
  
  // Show skills gap analysis
  setTimeout(() => {
    showSkillsGapAnalysis(internship);
  }, 1500);
}

function showSkillsGapAnalysis(internship) {
  const userSkills = appState.currentUser.selectedSkills;
  const requiredSkills = internship.requiredSkills;
  const hasSkills = requiredSkills.filter(skill => userSkills.includes(skill));
  const missingSkills = requiredSkills.filter(skill => !userSkills.includes(skill));
  
  elements.gapInternshipTitle.textContent = `${internship.title} at ${internship.company}`;
  
  // Render has skills
  elements.hasSkillsList.innerHTML = '';
  if (hasSkills.length > 0) {
    hasSkills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item has-skill';
      skillItem.innerHTML = `<span class="skill-item-name">${skill}</span>`;
      elements.hasSkillsList.appendChild(skillItem);
    });
  } else {
    elements.hasSkillsList.innerHTML = '<p style="color: var(--color-text-secondary);">No matching skills yet</p>';
  }
  
  // Render missing skills
  elements.missingSkillsList.innerHTML = '';
  if (missingSkills.length > 0) {
    missingSkills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item missing-skill';
      
      const resources = appState.learningResources[skill] || [];
      const estimatedTime = resources.length > 0 ? resources[0].time : '20 hours';
      
      skillItem.innerHTML = `
        <div>
          <span class="skill-item-name">${skill}</span>
          <span class="skill-item-time">~${estimatedTime}</span>
        </div>
        <button class="btn btn--primary btn--sm learn-btn" data-skill="${skill}">Learn Now</button>
      `;
      
      skillItem.querySelector('.learn-btn').onclick = (e) => {
        e.stopPropagation();
        showLearningForSkill(skill);
      };
      
      elements.missingSkillsList.appendChild(skillItem);
    });
  } else {
    elements.missingSkillsList.innerHTML = '<p style="color: var(--color-success);">You have all required skills!</p>';
  }
  
  showPage('skills-gap');
}

function showLearningForSkill(skill) {
  showPage('learning');
  elements.learningSearch.value = skill;
  renderLearningResources(skill);
}

// Learning Resources Functions
function renderLearningResources(searchTerm = '') {
  const filteredResources = {};
  
  Object.entries(appState.learningResources).forEach(([skill, resources]) => {
    if (!searchTerm || skill.toLowerCase().includes(searchTerm.toLowerCase())) {
      filteredResources[skill] = resources;
    }
  });
  
  const skillCount = Object.keys(filteredResources).length;
  
  if (skillCount === 0) {
    elements.learningGrid.classList.add('hidden');
    elements.noLearning.classList.remove('hidden');
    return;
  }
  
  elements.learningGrid.classList.remove('hidden');
  elements.noLearning.classList.add('hidden');
  elements.learningGrid.innerHTML = '';
  
  Object.entries(filteredResources).forEach(([skill, resources]) => {
    const card = document.createElement('div');
    card.className = 'learning-card card';
    
    let resourcesHTML = resources.map(resource => `
      <div class="learning-resource">
        <div class="resource-info">
          <div class="resource-name">${resource.name}</div>
          <div class="resource-time">${resource.time}</div>
        </div>
        <a href="${resource.url}" target="_blank" class="btn btn--primary btn--sm">Start</a>
      </div>
    `).join('');
    
    card.innerHTML = `
      <h4>${skill}</h4>
      ${resourcesHTML}
    `;
    
    elements.learningGrid.appendChild(card);
  });
}

// My Applications Functions
function renderApplications(statusFilter = 'all') {
  const userApplications = appState.applications.filter(app => 
    app.userId === appState.currentUser.id
  );
  
  const filteredApplications = statusFilter === 'all' 
    ? userApplications 
    : userApplications.filter(app => app.status === statusFilter);
  
  if (filteredApplications.length === 0) {
    elements.applicationsList.classList.add('hidden');
    elements.noApplications.classList.remove('hidden');
    return;
  }
  
  elements.applicationsList.classList.remove('hidden');
  elements.noApplications.classList.add('hidden');
  elements.applicationsList.innerHTML = '';
  
  filteredApplications.forEach(app => {
    const card = document.createElement('div');
    card.className = 'application-card card';
    
    const statusClass = app.status.toLowerCase().replace(' ', '-');
    
    card.innerHTML = `
      <div class="application-info">
        <div class="application-company">${app.internship.company}</div>
        <h3 class="application-title">${app.internship.title}</h3>
        <div class="application-date">Applied on ${app.date}</div>
        <span class="application-status ${statusClass}">${app.status}</span>
      </div>
      <div class="application-actions">
        <button class="btn btn--secondary btn--sm" onclick="showInternshipDetail(${JSON.stringify(app.internship).replace(/"/g, '&quot;')})">View Details</button>
        <button class="btn btn--outline btn--sm" onclick="showSkillsGapAnalysis(${JSON.stringify(app.internship).replace(/"/g, '&quot;')})">Skills Gap</button>
      </div>
    `;
    
    elements.applicationsList.appendChild(card);
  });
}

// Helpdesk Functions
function renderHelpdesk() {
  // Render FAQs
  elements.faqList.innerHTML = '';
  appState.helpdeskFAQs.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
      <button class="faq-question">
        <span>${faq.question}</span>
        <span class="faq-icon">▼</span>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    `;
    
    faqItem.querySelector('.faq-question').onclick = () => {
      faqItem.classList.toggle('active');
    };
    
    elements.faqList.appendChild(faqItem);
  });
}

function handleHelpdeskMessage(message) {
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user-message';
  userMsg.innerHTML = `<p>${message}</p>`;
  elements.helpdeskChatMessages.appendChild(userMsg);
  
  // Scroll to bottom
  elements.helpdeskChatMessages.scrollTop = elements.helpdeskChatMessages.scrollHeight;
  
  // Generate bot response
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message bot-message';
    
    let response = "Thank you for your message. ";
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('apply') || lowerMessage.includes('application')) {
      response += "To apply for an internship, browse the listings and click 'Apply Now' on any internship that interests you. You can track your applications in the 'My Applications' page.";
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('learn')) {
      response += "You can view your skills gap after applying to an internship. We'll show you curated learning resources from platforms like GeeksforGeeks, Coursera, and more.";
    } else if (lowerMessage.includes('status') || lowerMessage.includes('track')) {
      response += "You can track all your application statuses in the 'My Applications' page. Typically, companies review applications within 3-7 days.";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      response += "Visit our Help & Support page for FAQs or submit a ticket. Our team will get back to you within 24 hours.";
    } else {
      response += "I'm here to help! For detailed assistance, please visit our Help & Support page or check the FAQ section.";
    }
    
    botMsg.innerHTML = `<p>${response}</p>`;
    elements.helpdeskChatMessages.appendChild(botMsg);
    elements.helpdeskChatMessages.scrollTop = elements.helpdeskChatMessages.scrollHeight;
  }, 1000);
}

// Event Listeners
// Auth
elements.loginTab.addEventListener('click', () => switchAuthTab('login'));
elements.registerTab.addEventListener('click', () => switchAuthTab('register'));
elements.loginForm.addEventListener('submit', handleLogin);
elements.registerForm.addEventListener('submit', handleRegister);

// Header
elements.logoutBtn.addEventListener('click', handleLogout);
elements.navDashboard.addEventListener('click', () => {
  renderDashboard();
  showPage('dashboard');
});
elements.navInternships.addEventListener('click', () => {
  renderInternships();
  showPage('internships');
});
elements.navApplications.addEventListener('click', () => {
  renderApplications();
  showPage('applications');
});
elements.navLearning.addEventListener('click', () => {
  renderLearningResources();
  showPage('learning');
});
elements.navHelp.addEventListener('click', () => {
  renderHelpdesk();
  showPage('helpdesk');
});

// Skills
elements.continueSkillsBtn.addEventListener('click', handleContinueSkills);

// Dashboard
elements.viewInternshipsBtn.addEventListener('click', () => {
  renderInternships();
  showPage('internships');
});
elements.manageSkillsBtn.addEventListener('click', () => {
  renderSkillsPage();
  showPage('skills');
});

// Internships
elements.filterPaid.addEventListener('change', updateFilters);
elements.filterUnpaid.addEventListener('change', updateFilters);
elements.resetFiltersBtn.addEventListener('click', resetFilters);

// Modal
elements.modalCloseBtn.addEventListener('click', closeModal);
elements.internshipModal.querySelector('.modal-overlay').addEventListener('click', closeModal);

// Skills Gap
elements.backToInternshipsBtn.addEventListener('click', () => {
  renderInternships();
  showPage('internships');
});

// Learning
elements.learningSearch.addEventListener('input', (e) => {
  renderLearningResources(e.target.value);
});

// Applications
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    const status = e.target.dataset.status;
    appState.currentApplicationStatus = status;
    renderApplications(status);
  }
});

// Helpdesk
elements.contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;
  
  const ticket = {
    id: Date.now(),
    userId: appState.currentUser.id,
    subject,
    message,
    status: 'Open',
    date: new Date().toLocaleDateString()
  };
  
  appState.tickets.push(ticket);
  showToast('Support ticket submitted successfully! We\'ll get back to you soon.');
  elements.contactForm.reset();
});

elements.helpdeskToggle.addEventListener('click', () => {
  elements.helpdeskChat.classList.toggle('hidden');
});

elements.helpdeskChatClose.addEventListener('click', () => {
  elements.helpdeskChat.classList.add('hidden');
});

elements.helpdeskSend.addEventListener('click', () => {
  const message = elements.helpdeskInput.value.trim();
  if (message) {
    handleHelpdeskMessage(message);
    elements.helpdeskInput.value = '';
  }
});

elements.helpdeskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const message = elements.helpdeskInput.value.trim();
    if (message) {
      handleHelpdeskMessage(message);
      elements.helpdeskInput.value = '';
    }
  }
});

// Initialize app
showPage('auth');

// Simulate some application statuses changing over time
setInterval(() => {
  if (appState.applications.length > 0) {
    appState.applications.forEach(app => {
      if (app.status === 'Applied' && Math.random() < 0.1) {
        app.status = 'Under Review';
      } else if (app.status === 'Under Review' && Math.random() < 0.05) {
        app.status = Math.random() < 0.7 ? 'Accepted' : 'Rejected';
      }
    });
    
    if (appState.currentPage === 'applications') {
      renderApplications(appState.currentApplicationStatus);
    }
  }
}, 10000);