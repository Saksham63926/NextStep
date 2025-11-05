// Application State (In-Memory Storage)
const appState = {
  users: [],
  currentUser: null,
  internships: [
    {
      id: 1,
      company: "TechCorp",
      title: "Full Stack Developer",
      requiredSkills: ["JavaScript", "React", "Node.js", "MongoDB"],
      duration: "3 months",
      paid: true,
      stipend: "₹15,000/month",
      description: "Join our team to build amazing web applications using modern tech stack. You'll work on real-world projects and gain hands-on experience with cutting-edge technologies."
    },
    {
      id: 2,
      company: "DataMinds",
      title: "Data Science Intern",
      requiredSkills: ["Python", "Machine Learning", "TensorFlow"],
      duration: "4 months",
      paid: true,
      stipend: "₹20,000/month",
      description: "Work on cutting-edge machine learning projects and data analysis. Gain experience in building predictive models and extracting insights from large datasets."
    },
    {
      id: 3,
      company: "DesignLabs",
      title: "UI/UX Designer",
      requiredSkills: ["Figma", "UI/UX", "Adobe XD"],
      duration: "2 months",
      paid: false,
      stipend: "Unpaid",
      description: "Gain practical experience in user interface and user experience design. Work on real client projects and build a portfolio of design work."
    },
    {
      id: 4,
      company: "CloudBase",
      title: "Cloud Developer",
      requiredSkills: ["AWS", "Python", "Docker"],
      duration: "3 months",
      paid: true,
      stipend: "₹18,000/month",
      description: "Build scalable cloud solutions on AWS infrastructure. Learn about containerization, serverless computing, and cloud architecture best practices."
    },
    {
      id: 5,
      company: "StartupXYZ",
      title: "Full Stack Dev",
      requiredSkills: ["JavaScript", "React", "SQL"],
      duration: "3 months",
      paid: false,
      stipend: "Unpaid",
      description: "Build features for our growing startup product. Work in a fast-paced environment and contribute to product development from ideation to deployment."
    },
    {
      id: 6,
      company: "FinTech Hub",
      title: "Backend Developer",
      requiredSkills: ["Java", "Spring Boot", "SQL", "AWS"],
      duration: "4 months",
      paid: true,
      stipend: "₹25,000/month",
      description: "Develop robust backend systems for financial applications. Learn about secure coding practices, API design, and working with financial data."
    },
    {
      id: 7,
      company: "WebWorks",
      title: "Frontend Developer",
      requiredSkills: ["HTML/CSS", "JavaScript", "React", "Vue"],
      duration: "2 months",
      paid: false,
      stipend: "Unpaid",
      description: "Create beautiful and responsive web interfaces. Master modern frontend frameworks and responsive design principles."
    },
    {
      id: 8,
      company: "Analytics Pro",
      title: "Data Analyst",
      requiredSkills: ["Python", "SQL", "Data Analysis", "Tableau"],
      duration: "3 months",
      paid: true,
      stipend: "₹16,000/month",
      description: "Analyze data and create insights for business intelligence. Work with visualization tools and help drive data-informed decision making."
    }
  ],
  availableSkills: {
    "Programming Languages": ["Python", "JavaScript", "Java", "C++", "C#"],
    "Web Development": ["HTML/CSS", "React", "Vue", "Angular", "Node.js"],
    "Data Science": ["Machine Learning", "Data Analysis", "TensorFlow", "Tableau"],
    "Design": ["UI/UX", "Figma", "Adobe XD", "Graphic Design"],
    "Databases": ["SQL", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker"],
    "Other": ["Spring Boot", "Git", "REST APIs"]
  },
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
  
  // Header
  appHeader: document.getElementById('app-header'),
  userNameDisplay: document.getElementById('user-name-display'),
  logoutBtn: document.getElementById('logout-btn'),
  editSkillsBtn: document.getElementById('edit-skills-btn'),
  
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
  modalSkills: document.getElementById('modal-skills'),
  modalDescription: document.getElementById('modal-description'),
  modalApplyBtn: document.getElementById('modal-apply-btn'),
  
  // Toast
  successToast: document.getElementById('success-toast'),
  toastMessage: document.getElementById('toast-message')
};

// Utility Functions
function showPage(pageName) {
  const pages = ['auth', 'skills', 'dashboard', 'internships'];
  pages.forEach(page => {
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
      pageElement.classList.toggle('hidden', page !== pageName);
    }
  });
  
  // Show/hide header based on page
  if (pageName === 'auth') {
    elements.appHeader.classList.add('hidden');
  } else {
    elements.appHeader.classList.remove('hidden');
  }
  
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
      <div class="match-percentage">${internship.matchPercentage}% Match</div>
    `;
    
    elements.internshipsGrid.appendChild(card);
  });
}

function showInternshipDetail(internship) {
  elements.modalCompany.textContent = internship.company;
  elements.modalTitle.textContent = internship.title;
  elements.modalMatch.textContent = `${internship.matchPercentage}% Match`;
  elements.modalDuration.textContent = internship.duration;
  elements.modalStipend.textContent = internship.stipend;
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
  
  elements.modalApplyBtn.onclick = () => {
    elements.internshipModal.classList.add('hidden');
    showToast(`Application submitted for ${internship.title} at ${internship.company}!`);
  };
  
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

// Event Listeners
// Auth
elements.loginTab.addEventListener('click', () => switchAuthTab('login'));
elements.registerTab.addEventListener('click', () => switchAuthTab('register'));
elements.loginForm.addEventListener('submit', handleLogin);
elements.registerForm.addEventListener('submit', handleRegister);

// Header
elements.logoutBtn.addEventListener('click', handleLogout);
elements.editSkillsBtn.addEventListener('click', () => {
  renderSkillsPage();
  showPage('skills');
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

// Initialize app
showPage('auth');