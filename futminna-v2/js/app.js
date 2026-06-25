// =============================================
// FUT MINNA STUDENT PORTAL - MAIN JAVASCRIPT
// =============================================

"use strict";

// ===== MOCK DATA =====
const MOCK_STUDENTS = {
  "2021/CS/80001PB": {
    password: "student123",
    name: "Adaeze Chisom Okonkwo",
    firstName: "Adaeze",
    matric: "2021/CS/001234",
    department: "Computer Science",
    faculty: "Computing",
    level: "400",
    session: "2024/2025",
    semester: "Second",
    cgpa: "4.52",
    email: "adaeze.okonkwo@student.futminna.edu.ng",
    phone: "+234 806 123 4567",
    dob: "15 March, 2002",
    state: "Anambra",
    lga: "Onitsha",
    address: "12 University Road, Minna, Niger State",
    guardian: "Mr. Charles Okonkwo",
    guardianPhone: "+234 803 456 7890",
    guardianRelation: "Father",
    blood: "O+",
    joined: "September, 2021",
    status: "Active",
    gender: "Female",
    nationality: "Nigerian",
    religion: "Christianity",
    hostel: "Queen Amina Hall",
    initials: "AO",
  },
  "2022/EE/711111": {
    password: "pass1234",
    name: "Chukwuemeka Biodun Adeleke",
    firstName: "Chukwuemeka",
    matric: "FUT/MN/2022/EE/002345",
    department: "Electrical Engineering",
    faculty: "Engineering",
    level: "300",
    session: "2024/2025",
    semester: "Second",
    cgpa: "3.87",
    email: "c.adeleke@student.futminna.edu.ng",
    phone: "+234 810 234 5678",
    dob: "22 July, 2003",
    state: "Osun",
    lga: "Ife Central",
    address: "7 Katcha Road, Minna, Niger State",
    guardian: "Mrs. Funmi Adeleke",
    guardianPhone: "+234 805 678 9012",
    guardianRelation: "Mother",
    blood: "A+",
    joined: "September, 2022",
    status: "Active",
    gender: "Male",
    nationality: "Nigerian",
    religion: "Islam",
    hostel: "Balewa Hall",
    initials: "CA",
  },
};

const COURSES_DATA = {
  400: {
    compulsory: [
      {
        code: "CSC 401",
        title: "Computer Networks and Security",
        units: 3,
        type: "C",
      },
      {
        code: "CSC 403",
        title: "Artificial Intelligence",
        units: 3,
        type: "C",
      },
      {
        code: "CSC 405",
        title: "Software Engineering II",
        units: 3,
        type: "C",
      },
      {
        code: "CSC 407",
        title: "Database Management Systems",
        units: 3,
        type: "C",
      },
      {
        code: "CSC 409",
        title: "Research Methods in Computing",
        units: 2,
        type: "C",
      },
      {
        code: "GNS 401",
        title: "Communication Skills IV",
        units: 2,
        type: "C",
      },
    ],
    elective: [
      {
        code: "CSC 411",
        title: "Machine Learning & Deep Learning",
        units: 3,
        type: "E",
      },
      { code: "CSC 413", title: "Blockchain Technology", units: 2, type: "E" },
      { code: "CSC 415", title: "Cloud Computing", units: 2, type: "E" },
      {
        code: "CSC 417",
        title: "Human Computer Interaction",
        units: 2,
        type: "E",
      },
      {
        code: "CSC 419",
        title: "Mobile Application Development",
        units: 3,
        type: "E",
      },
    ],
  },
};

const RESULTS_DATA = [
  {
    session: "2021/2022",
    semester: "First",
    courses: [
      {
        code: "CSC 101",
        title: "Introduction to Computer Science",
        units: 3,
        score: 85,
        grade: "A",
        point: 5.0,
      },
      {
        code: "CSC 103",
        title: "Programming Fundamentals",
        units: 3,
        score: 78,
        grade: "B",
        point: 4.0,
      },
      {
        code: "MTH 101",
        title: "Calculus I",
        units: 3,
        score: 72,
        grade: "B",
        point: 4.0,
      },
      {
        code: "PHY 101",
        title: "Mechanics",
        units: 3,
        score: 68,
        grade: "C",
        point: 3.0,
      },
      {
        code: "GNS 101",
        title: "Communication Skills I",
        units: 2,
        score: 82,
        grade: "A",
        point: 5.0,
      },
      {
        code: "ENG 101",
        title: "Engineering Drawing",
        units: 2,
        score: 75,
        grade: "B",
        point: 4.0,
      },
    ],
    gpa: 4.12,
    cgpa: 4.12,
    totalUnits: 16,
  },
  {
    session: "2021/2022",
    semester: "Second",
    courses: [
      {
        code: "CSC 102",
        title: "Data Structures",
        units: 3,
        score: 90,
        grade: "A",
        point: 5.0,
      },
      {
        code: "CSC 104",
        title: "Algorithms",
        units: 3,
        score: 87,
        grade: "A",
        point: 5.0,
      },
      {
        code: "MTH 102",
        title: "Calculus II",
        units: 3,
        score: 74,
        grade: "B",
        point: 4.0,
      },
      {
        code: "STA 102",
        title: "Introduction to Statistics",
        units: 3,
        score: 80,
        grade: "A",
        point: 5.0,
      },
      {
        code: "GNS 102",
        title: "Communication Skills II",
        units: 2,
        score: 76,
        grade: "B",
        point: 4.0,
      },
      {
        code: "CSC 106",
        title: "Discrete Mathematics",
        units: 2,
        score: 83,
        grade: "A",
        point: 5.0,
      },
    ],
    gpa: 4.68,
    cgpa: 4.4,
    totalUnits: 16,
  },
  {
    session: "2022/2023",
    semester: "First",
    courses: [
      {
        code: "CSC 201",
        title: "Object-Oriented Programming",
        units: 3,
        score: 92,
        grade: "A",
        point: 5.0,
      },
      {
        code: "CSC 203",
        title: "Operating Systems",
        units: 3,
        score: 85,
        grade: "A",
        point: 5.0,
      },
      {
        code: "CSC 205",
        title: "Computer Architecture",
        units: 3,
        score: 78,
        grade: "B",
        point: 4.0,
      },
      {
        code: "MTH 201",
        title: "Linear Algebra",
        units: 3,
        score: 70,
        grade: "B",
        point: 4.0,
      },
      {
        code: "GNS 201",
        title: "Communication Skills III",
        units: 2,
        score: 88,
        grade: "A",
        point: 5.0,
      },
    ],
    gpa: 4.63,
    cgpa: 4.48,
    totalUnits: 14,
  },
  {
    session: "2022/2023",
    semester: "Second",
    courses: [
      {
        code: "CSC 202",
        title: "Web Development",
        units: 3,
        score: 95,
        grade: "A",
        point: 5.0,
      },
      {
        code: "CSC 204",
        title: "Computer Graphics",
        units: 2,
        score: 82,
        grade: "A",
        point: 5.0,
      },
      {
        code: "CSC 206",
        title: "Numerical Methods",
        units: 3,
        score: 75,
        grade: "B",
        point: 4.0,
      },
      {
        code: "CSC 208",
        title: "Theory of Computation",
        units: 3,
        score: 77,
        grade: "B",
        point: 4.0,
      },
      {
        code: "GNS 202",
        title: "Entrepreneurship",
        units: 2,
        score: 85,
        grade: "A",
        point: 5.0,
      },
    ],
    gpa: 4.62,
    cgpa: 4.52,
    totalUnits: 13,
  },
];

const FEES_DATA = {
  tuition: {
    name: "Tuition Fee",
    amount: 85000,
    status: "paid",
    dueDate: "Sept 15, 2024",
  },
  acceptance: {
    name: "Acceptance Fee",
    amount: 10000,
    status: "paid",
    dueDate: "Aug 30, 2024",
  },
  departmental: {
    name: "Departmental Fee",
    amount: 15000,
    status: "paid",
    dueDate: "Sept 30, 2024",
  },
  library: {
    name: "Library Fee",
    amount: 5000,
    status: "paid",
    dueDate: "Sept 15, 2024",
  },
  sports: {
    name: "Sports & Recreation Fee",
    amount: 3000,
    status: "unpaid",
    dueDate: "Oct 15, 2024",
  },
  medical: {
    name: "Medical / Health Fee",
    amount: 8000,
    status: "unpaid",
    dueDate: "Oct 15, 2024",
  },
  examination: {
    name: "Examination Fee",
    amount: 12000,
    status: "unpaid",
    dueDate: "Nov 1, 2024",
  },
  hostel: {
    name: "Hostel Accommodation",
    amount: 45000,
    status: "partial",
    dueDate: "Sept 30, 2024",
  },
};

const PAYMENT_HISTORY = [
  {
    ref: "TRX20240915001",
    desc: "Tuition Fee 2024/2025",
    amount: 85000,
    date: "15 Sep, 2024",
    channel: "Remita",
    status: "success",
  },
  {
    ref: "TRX20240830001",
    desc: "Acceptance Fee",
    amount: 10000,
    date: "30 Aug, 2024",
    channel: "Bank Transfer",
    status: "success",
  },
  {
    ref: "TRX20240928001",
    desc: "Departmental Fee",
    amount: 15000,
    date: "28 Sep, 2024",
    channel: "Remita",
    status: "success",
  },
  {
    ref: "TRX20240914001",
    desc: "Library Fee",
    amount: 5000,
    date: "14 Sep, 2024",
    channel: "Remita",
    status: "success",
  },
  {
    ref: "TRX20240928002",
    desc: "Hostel Fee (Partial)",
    amount: 25000,
    date: "28 Sep, 2024",
    channel: "Bank Transfer",
    status: "partial",
  },
];

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    type: "exam",
    title: "First Semester Examination Timetable Released",
    body: "The timetable for the 2024/2025 First Semester examinations has been published. Students are advised to check their schedules immediately. Examinations begin November 25th, 2024.",
    time: "2 hours ago",
    unread: true,
    icon: "📋",
  },
  {
    id: 2,
    type: "fees",
    title: "Outstanding Fee Reminder",
    body: "This is a reminder that your Sports & Recreation Fee, Medical Fee, and Examination Fee are still outstanding. Please clear all outstanding fees before the deadline to avoid restrictions.",
    time: "1 day ago",
    unread: true,
    icon: "💰",
  },
  {
    id: 3,
    type: "academic",
    title: "Course Registration Extended",
    body: "Course registration for the 2024/2025 Second Semester has been extended by two weeks. The new deadline is January 31st, 2025. Students who have not registered are urged to do so immediately.",
    time: "3 days ago",
    unread: true,
    icon: "📚",
  },
  {
    id: 4,
    type: "general",
    title: "University Convocation Ceremony - November 2024",
    body: "The 2024 Convocation Ceremony for graduating students (2019/2020 set) will hold on November 30, 2024. Family members are invited. Dress code is formal.",
    time: "5 days ago",
    unread: false,
    icon: "🎓",
  },
  {
    id: 5,
    type: "exam",
    title: "Examination Rules & Guidelines Updated",
    body: "The University Senate has updated examination rules. All students must come with their student IDs and examination cards. Mobile phones are strictly prohibited in examination halls.",
    time: "1 week ago",
    unread: false,
    icon: "⚠️",
  },
  {
    id: 6,
    type: "academic",
    title: "SIWES/IT Registration Open",
    body: "Final year students in eligible departments can now register for SIWES/Industrial Training for the 2024/2025 academic year. Visit the IT office or use the portal to submit your placement details.",
    time: "1 week ago",
    unread: false,
    icon: "🏢",
  },
  {
    id: 7,
    type: "general",
    title: "Campus WiFi Upgrade - Temporary Outage",
    body: "The ICT department will be upgrading campus internet infrastructure from November 10-12, 2024. Expect intermittent connectivity disruptions. The upgrade will provide 10x faster internet speeds.",
    time: "2 weeks ago",
    unread: false,
    icon: "📡",
  },
  {
    id: 8,
    type: "fees",
    title: "School Fees Payment Confirmation",
    body: "Your tuition fee payment of ₦85,000 for the 2024/2025 academic session has been confirmed. Your transaction reference is TRX20240915001. Keep this for your records.",
    time: "2 months ago",
    unread: false,
    icon: "✅",
  },
];

const CALENDAR_EVENTS = [
  {
    date: "2024-11-01",
    title: "Second Semester Lectures Begin",
    type: "academic",
  },
  {
    date: "2024-11-15",
    title: "Course Registration Deadline",
    type: "deadline",
  },
  { date: "2024-11-25", title: "First Semester Exams Begin", type: "exam" },
  { date: "2024-12-05", title: "First Semester Exams End", type: "exam" },
  { date: "2024-12-20", title: "Christmas Break Begins", type: "holiday" },
  {
    date: "2025-01-06",
    title: "Resumption from Christmas Break",
    type: "academic",
  },
  {
    date: "2025-01-31",
    title: "Extended Registration Deadline",
    type: "deadline",
  },
  { date: "2025-03-15", title: "Mid-Semester Break", type: "holiday" },
  { date: "2025-04-20", title: "Second Semester Exams Begin", type: "exam" },
  { date: "2025-05-10", title: "Second Semester Exams End", type: "exam" },
  { date: "2025-05-30", title: "Convocation Ceremony", type: "event" },
  { date: "2025-06-15", title: "Long Vacation Begins", type: "holiday" },
];

// ===== APP STATE =====
let state = {
  currentUser: null,
  currentPage: "dashboard",
  sidebarCollapsed: false,
  darkMode: false,
  selectedSemester: 0,
  registeredCourses: new Set(),
  calendarDate: new Date(2024, 10, 1),
  chartInstances: {},
};

// ===== DOM UTILITIES =====
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);
const create = (tag, cls = "", text = "") => {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text) el.textContent = text;
  return el;
};

// ===== TOAST SYSTEM =====
function showToast(msg, type = "info", duration = 3500) {
  const container =
    $("#toast-container") ||
    (() => {
      const c = create("div", "toast-container");
      c.id = "toast-container";
      document.body.appendChild(c);
      return c;
    })();

  const icons = { success: "✅", error: "❌", warning: "⚠️", info: "🔔" };
  const toast = create("div", `toast ${type}`);
  toast.innerHTML = `<span style="font-size:1.1rem">${icons[type]}</span><span style="font-size:0.88rem;font-weight:500;flex:1">${msg}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast-exit");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ===== MODAL SYSTEM =====
function openModal(id) {
  const overlay = $(`#${id}`);
  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}
function closeModal(id) {
  const overlay = $(`#${id}`);
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ===== THEME =====
function initTheme() {
  const saved = localStorage.getItem("futminna-theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    state.darkMode = true;
  }
  updateThemeToggle();
}

function toggleTheme() {
  state.darkMode = !state.darkMode;
  document.documentElement.setAttribute(
    "data-theme",
    state.darkMode ? "dark" : "light",
  );
  localStorage.setItem("futminna-theme", state.darkMode ? "dark" : "light");
  updateThemeToggle();
}

function updateThemeToggle() {
  $$(".theme-toggle").forEach((t) => t.classList.toggle("on", state.darkMode));
  $$(".theme-icon").forEach(
    (i) => (i.textContent = state.darkMode ? "☀️" : "🌙"),
  );
}

// ===== NAVIGATION =====
function showPage(pageId) {
  $$(".page").forEach((p) => p.classList.remove("active"));
  const page = $(`#page-${pageId}`);
  if (page) {
    page.classList.add("active");
    state.currentPage = pageId;
  }

  $$(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.page === pageId);
  });

  const titles = {
    dashboard: "Dashboard",
    courses: "Course Registration",
    results: "Academic Results",
    fees: "School Fees & Payments",
    calendar: "Academic Calendar",
    notifications: "Notifications",
    profile: "My Profile",
  };
  const subtitles = {
    dashboard: "Welcome back to your portal",
    courses: "2024/2025 Second Semester",
    results: "View your academic performance",
    fees: "Manage your school fees",
    calendar: "2024/2025 Academic Year",
    notifications: "Stay informed",
    profile: "Manage your personal information",
  };

  const titleEl = $("#topbar-title");
  const subtitleEl = $("#topbar-subtitle");
  if (titleEl) titleEl.textContent = titles[pageId] || "Portal";
  if (subtitleEl) subtitleEl.textContent = subtitles[pageId] || "";

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Lazy init specific page content
  if (pageId === "dashboard") initCharts();
  if (pageId === "calendar") renderCalendar();
  if (pageId === "notifications") renderNotifications();
  if (pageId === "results") renderResults();
}

// ===== SIDEBAR =====
function toggleSidebar() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  const sidebar = $("#app-sidebar");
  const main = $("#main-content");
  if (sidebar) sidebar.classList.toggle("collapsed", state.sidebarCollapsed);
  if (main) main.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
  localStorage.setItem("futminna-sidebar", state.sidebarCollapsed ? "1" : "0");
}

function toggleMobileSidebar() {
  const sidebar = $("#app-sidebar");
  const overlay = $("#mobile-overlay");
  if (sidebar) {
    const isOpen = sidebar.classList.contains("mobile-open");
    sidebar.classList.toggle("mobile-open", !isOpen);
    if (overlay) overlay.classList.toggle("active", !isOpen);
  }
}

// ===== AUTH =====
function handleLogin(e) {
  e.preventDefault();
  const matricEl = $("#login-matric");
  const passEl = $("#login-password");
  const errorEl = $("#login-error");
  const submitBtn = $("#login-submit");

  const matric = matricEl.value.trim().toUpperCase();
  const password = passEl.value;

  if (!matric || !password) {
    errorEl.textContent = "Please enter your Matric Number and Password.";
    errorEl.classList.add("show");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Signing in…";
  errorEl.classList.remove("show");

  // Simulate API delay
  setTimeout(() => {
    const student = MOCK_STUDENTS[matric];
    if (student && student.password === password) {
      state.currentUser = student;
      localStorage.setItem("futminna-user", matric);
      loadUserIntoApp(student);
      showApp();
      showToast(`Welcome back, ${student.firstName}! 🎉`, "success");
    } else {
      errorEl.textContent =
        "Invalid Matric Number or Password. Please try again.";
      errorEl.classList.add("show");
      matricEl.focus();
    }
    submitBtn.disabled = false;
    submitBtn.textContent = "Sign In to Portal";
  }, 1200);
}

function handleLogout() {
  closeModal("logout-modal");
  state.currentUser = null;
  localStorage.removeItem("futminna-user");
  $("#app").classList.remove("active");
  $("#login-page").classList.add("active");
  $("#landing").style.display = "none";
  showToast("You have been signed out successfully.", "info");
}

function showApp() {
  $("#login-page").classList.remove("active");
  $("#landing").style.display = "none";
  const app = $("#app");
  app.classList.add("active");
  showPage("dashboard");
  updateClock();
  setInterval(updateClock, 1000);
  animateCounters();
}

function showLoginPage() {
  $("#landing").style.display = "none";
  $("#login-page").classList.add("active");
}

function showLanding() {
  $("#login-page").classList.remove("active");
  $("#landing").style.display = "block";
}

function loadUserIntoApp(user) {
  // Sidebar user
  $$(".sb-user-name").forEach(
    (el) => (el.textContent = user.name.split(" ").slice(0, 2).join(" ")),
  );
  $$(".sb-user-dept").forEach((el) => (el.textContent = user.department));
  $$(".sb-user-initials").forEach((el) => (el.textContent = user.initials));
  $$(".topbar-initials").forEach((el) => (el.textContent = user.initials));

  // Welcome banner
  const welcomeEl = $("#welcome-name");
  if (welcomeEl) welcomeEl.textContent = user.firstName;
  const sessionEl = $("#current-session");
  if (sessionEl)
    sessionEl.textContent = `${user.session} | ${user.semester} Semester`;

  // Profile page
  populateProfile(user);
}

// ===== CLOCK =====
function updateClock() {
  const el = $("#live-clock");
  const dateEl = $("#live-date");
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString("en-NG", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }
}

// ===== ANIMATED COUNTERS =====
function animateCounters() {
  $$("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const isDecimal = el.dataset.count.includes(".");
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ===== CHARTS (Vanilla Canvas) =====
function initCharts() {
  if (typeof Chart === "undefined") return;

  // Destroy existing charts
  Object.values(state.chartInstances).forEach((c) => {
    try {
      c.destroy();
    } catch (e) {}
  });
  state.chartInstances = {};

  const purple = "#6A0DAD";
  const purpleLight = "#8B2FC9";
  const gold = "#D4AF37";
  const lavender = "rgba(106,13,173,0.12)";

  Chart.defaults.font.family = "'DM Sans', sans-serif";
  Chart.defaults.color = "#8E72A4";

  // GPA Trend Chart
  const gpaCtx = $("#gpa-chart");
  if (gpaCtx) {
    state.chartInstances.gpa = new Chart(gpaCtx, {
      type: "line",
      data: {
        labels: ["100L 1st", "100L 2nd", "200L 1st", "200L 2nd"],
        datasets: [
          {
            label: "GPA",
            data: [4.12, 4.68, 4.63, 4.62],
            borderColor: purple,
            backgroundColor: lavender,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: purple,
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#1A0A2E",
            titleColor: "#E8D8FF",
            bodyColor: "#C4A8E0",
            padding: 12,
            cornerRadius: 8,
            callbacks: { label: (ctx) => ` GPA: ${ctx.parsed.y.toFixed(2)}` },
          },
        },
        scales: {
          y: {
            min: 3.5,
            max: 5.0,
            grid: { color: "rgba(106,13,173,0.06)" },
            ticks: { stepSize: 0.5 },
          },
          x: { grid: { display: false } },
        },
      },
    });
  }

  // Credit Units Chart
  const unitsCtx = $("#units-chart");
  if (unitsCtx) {
    state.chartInstances.units = new Chart(unitsCtx, {
      type: "doughnut",
      data: {
        labels: ["Registered", "Remaining"],
        datasets: [
          {
            data: [16, 6],
            backgroundColor: [purple, "rgba(106,13,173,0.1)"],
            borderWidth: 0,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "72%",
        plugins: {
          legend: {
            position: "bottom",
            labels: { padding: 16, font: { size: 12 } },
          },
          tooltip: {
            backgroundColor: "#1A0A2E",
            padding: 12,
            cornerRadius: 8,
          },
        },
      },
    });
  }

  // Performance bar chart
  const perfCtx = $("#perf-chart");
  if (perfCtx) {
    state.chartInstances.perf = new Chart(perfCtx, {
      type: "bar",
      data: {
        labels: [
          "CSC 202",
          "CSC 201",
          "CSC 203",
          "MTH 102",
          "CSC 104",
          "CSC 206",
        ],
        datasets: [
          {
            label: "Score (%)",
            data: [95, 92, 85, 74, 87, 75],
            backgroundColor: [
              purple,
              purpleLight,
              purple,
              "rgba(106,13,173,0.5)",
              purpleLight,
              "rgba(106,13,173,0.5)",
            ],
            borderRadius: 6,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#1A0A2E",
            padding: 12,
            cornerRadius: 8,
          },
        },
        scales: {
          y: { min: 60, max: 100, grid: { color: "rgba(106,13,173,0.06)" } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } },
        },
      },
    });
  }
}

// ===== COURSE REGISTRATION =====
function initCourseRegistration() {
  const level = state.currentUser?.level || "400";
  const courses = COURSES_DATA[level] || COURSES_DATA[400];
  renderCourseTable(courses);

  // Pre-select compulsory courses
  courses.compulsory.forEach((c) => state.registeredCourses.add(c.code));
  updateRegistrationSummary();
}

function renderCourseTable(courses) {
  const tbody = $("#courses-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const allCourses = [
    ...courses.compulsory.map((c) => ({ ...c, compulsory: true })),
    ...courses.elective.map((c) => ({ ...c, compulsory: false })),
  ];

  allCourses.forEach((course) => {
    const isChecked =
      course.compulsory || state.registeredCourses.has(course.code);
    const tr = create("tr");
    tr.innerHTML = `
      <td><input type="checkbox" class="course-checkbox" data-code="${course.code}" data-units="${course.units}" ${isChecked ? "checked" : ""} ${course.compulsory ? "disabled" : ""}></td>
      <td><span style="font-weight:700;color:var(--purple)">${course.code}</span></td>
      <td>${course.title}</td>
      <td style="text-align:center;font-weight:700">${course.units}</td>
      <td><span class="badge ${course.compulsory ? "badge-purple" : "badge-info"}">${course.compulsory ? "Compulsory" : "Elective"}</span></td>
    `;
    tbody.appendChild(tr);

    const chk = tr.querySelector(".course-checkbox");
    if (!course.compulsory) {
      chk.addEventListener("change", (e) => {
        if (e.target.checked) state.registeredCourses.add(course.code);
        else state.registeredCourses.delete(course.code);
        updateRegistrationSummary();
      });
    }
  });
}

function updateRegistrationSummary() {
  const level = state.currentUser?.level || "400";
  const courses = COURSES_DATA[level] || COURSES_DATA[400];
  const allCourses = [...courses.compulsory, ...courses.elective];

  let totalUnits = 0;
  let courseCount = 0;
  const summaryList = [];

  allCourses.forEach((c) => {
    if (state.registeredCourses.has(c.code)) {
      totalUnits += c.units;
      courseCount++;
      summaryList.push(c);
    }
  });

  // Compulsory always included
  courses.compulsory.forEach((c) => {
    if (!state.registeredCourses.has(c.code)) {
      state.registeredCourses.add(c.code);
      totalUnits += c.units;
      courseCount++;
    }
  });

  const maxUnits = 24;
  const pct = Math.min((totalUnits / maxUnits) * 100, 100);

  const fill = $("#units-fill");
  const countEl = $("#unit-count");
  const courseCountEl = $("#course-count");
  const remainEl = $("#remain-units");

  if (fill) fill.style.width = `${pct}%`;
  if (countEl) countEl.textContent = totalUnits;
  if (courseCountEl) courseCountEl.textContent = courseCount;
  if (remainEl) remainEl.textContent = maxUnits - totalUnits;

  // Color the meter
  if (fill) {
    if (totalUnits > maxUnits) fill.style.background = "var(--red)";
    else if (totalUnits >= 18)
      fill.style.background = "linear-gradient(90deg, var(--green), #66BB6A)";
    else
      fill.style.background =
        "linear-gradient(90deg, var(--purple), var(--purple-light))";
  }
}

function handleCourseRegistration() {
  const level = state.currentUser?.level || "400";
  const courses = COURSES_DATA[level] || COURSES_DATA[400];
  let units = 0;
  state.registeredCourses.forEach((code) => {
    const found = [...courses.compulsory, ...courses.elective].find(
      (c) => c.code === code,
    );
    if (found) units += found.units;
  });

  if (units < 12) {
    showToast("Minimum 12 credit units required for registration.", "warning");
    return;
  }
  showToast(
    `✅ Successfully registered ${state.registeredCourses.size} courses (${units} units) for 2024/2025 Second Semester!`,
    "success",
    5000,
  );
}

// ===== RESULTS =====
function renderResults() {
  const container = $("#results-semesters");
  if (!container) return;

  container.innerHTML = "";
  RESULTS_DATA.forEach((sem, idx) => {
    const btn = create(
      "button",
      `sem-tab${idx === state.selectedSemester ? " active" : ""}`,
    );
    btn.textContent = `${sem.session} ${sem.semester}`;
    btn.onclick = () => {
      state.selectedSemester = idx;
      renderResults();
    };
    container.appendChild(btn);
  });

  const sem = RESULTS_DATA[state.selectedSemester];
  renderResultTable(sem);
  renderGPADisplay(sem);
}

function renderGPADisplay(sem) {
  const gpaNum = $("#result-gpa-num");
  const cgpaNum = $("#result-cgpa-num");
  const semInfo = $("#result-sem-info");
  const totalUnits = $("#result-total-units");

  if (gpaNum) gpaNum.textContent = sem.gpa.toFixed(2);
  if (cgpaNum) cgpaNum.textContent = sem.cgpa.toFixed(2);
  if (semInfo)
    semInfo.textContent = `${sem.session} • ${sem.semester} Semester`;
  if (totalUnits) totalUnits.textContent = sem.totalUnits;
}

function renderResultTable(sem) {
  const tbody = $("#results-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  sem.courses.forEach((course) => {
    const tr = create("tr");
    const gradeClass = `grade-${course.grade.charAt(0)}`;
    tr.innerHTML = `
      <td><span style="font-weight:700;color:var(--purple)">${course.code}</span></td>
      <td>${course.title}</td>
      <td style="text-align:center">${course.units}</td>
      <td style="text-align:center;font-weight:700">${course.score}%</td>
      <td style="text-align:center"><span class="grade-badge ${gradeClass}">${course.grade}</span></td>
      <td style="text-align:center;font-weight:700">${course.point.toFixed(1)}</td>
      <td style="text-align:center">${(course.units * course.point).toFixed(1)}</td>
    `;
    tbody.appendChild(tr);
  });

  // Totals row
  const totalWP = sem.courses.reduce((sum, c) => sum + c.units * c.point, 0);
  const trTotal = create("tr");
  trTotal.style.fontWeight = "700";
  trTotal.style.background = "var(--lavender-soft)";
  trTotal.innerHTML = `
    <td colspan="2" style="font-weight:700;color:var(--purple)">TOTAL</td>
    <td style="text-align:center;font-weight:800;color:var(--purple)">${sem.totalUnits}</td>
    <td></td><td></td><td></td>
    <td style="text-align:center;font-weight:800;color:var(--purple)">${totalWP.toFixed(1)}</td>
  `;
  tbody.appendChild(trTotal);
}

// ===== FEES =====
function initFees() {
  const feesGrid = $("#fees-grid");
  if (!feesGrid) return;

  const icons = {
    tuition: "🏫",
    acceptance: "📝",
    departmental: "🔬",
    library: "📚",
    sports: "⚽",
    medical: "🏥",
    examination: "📋",
    hostel: "🏠",
  };
  const colors = {
    paid: "badge-success",
    unpaid: "badge-danger",
    partial: "badge-warning",
  };

  feesGrid.innerHTML = "";
  Object.entries(FEES_DATA).forEach(([key, fee]) => {
    const div = create("div", "fee-card");
    div.innerHTML = `
      <div class="fee-info">
        <div class="fee-icon" style="background:var(--lavender-light)">${icons[key]}</div>
        <div>
          <div class="fee-name">${fee.name}</div>
          <div class="fee-amount">₦${fee.amount.toLocaleString()}</div>
          <div style="font-size:0.75rem;color:var(--text-light);margin-top:0.2rem">Due: ${fee.dueDate}</div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.75rem">
        <span class="badge ${colors[fee.status]}">${fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}</span>
        ${fee.status !== "paid" ? `<button class="btn btn-primary btn-sm" onclick="openPaymentModal('${fee.name}', ${fee.amount})">Pay Now</button>` : `<button class="btn btn-ghost btn-sm" onclick="downloadReceipt('${fee.name}')">Receipt</button>`}
      </div>
    `;
    feesGrid.appendChild(div);
  });

  renderPaymentHistory();
}

function renderPaymentHistory() {
  const tbody = $("#payment-history-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  PAYMENT_HISTORY.forEach((p) => {
    const tr = create("tr");
    tr.innerHTML = `
      <td style="font-size:0.8rem;font-family:monospace;color:var(--text-light)">${p.ref}</td>
      <td style="font-weight:500">${p.desc}</td>
      <td style="font-weight:700;color:var(--text-dark)">₦${p.amount.toLocaleString()}</td>
      <td>${p.date}</td>
      <td>${p.channel}</td>
      <td><span class="badge ${p.status === "success" ? "badge-success" : p.status === "partial" ? "badge-warning" : "badge-danger"}">${p.status}</span></td>
      <td><button class="btn btn-ghost btn-sm" onclick="downloadReceipt('${p.desc}')">📄 Download</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function openPaymentModal(name, amount) {
  const titleEl = $("#payment-modal-title");
  const amountEl = $("#payment-modal-amount");
  if (titleEl) titleEl.textContent = name;
  if (amountEl) amountEl.textContent = `₦${amount.toLocaleString()}`;
  openModal("payment-modal");
}

function processPayment() {
  const channel = $("#payment-channel")?.value;
  if (!channel) {
    showToast("Please select a payment channel.", "warning");
    return;
  }

  const btn = $("#pay-now-btn");
  if (btn) {
    btn.textContent = "Processing…";
    btn.disabled = true;
  }

  setTimeout(() => {
    closeModal("payment-modal");
    if (btn) {
      btn.textContent = "Pay Now";
      btn.disabled = false;
    }
    const ref = "TRX" + Date.now();
    showToast(`Payment successful! Reference: ${ref}`, "success", 6000);
  }, 2000);
}

function downloadReceipt(name) {
  showToast(`Downloading receipt for ${name}…`, "info");
  setTimeout(
    () => showToast("Receipt downloaded successfully! (Demo mode)", "success"),
    1500,
  );
}

// ===== CALENDAR =====
function renderCalendar() {
  const date = state.calendarDate;
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const titleEl = $("#cal-month-title");
  if (titleEl) titleEl.textContent = `${monthNames[month]} ${year}`;

  const daysEl = $("#cal-days");
  if (!daysEl) return;
  daysEl.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const today = new Date();

  // Event dates for this month
  const eventDates = new Set(
    CALENDAR_EVENTS.filter((e) => {
      const d = new Date(e.date);
      return d.getMonth() === month && d.getFullYear() === year;
    }).map((e) => new Date(e.date).getDate()),
  );

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const div = create("div", "cal-day other-month");
    div.textContent = daysInPrev - i;
    daysEl.appendChild(div);
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const div = create("div", "cal-day");
    div.textContent = d;

    if (
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      div.classList.add("today");
    }
    if (eventDates.has(d)) div.classList.add("has-event");

    div.onclick = () => showDayEvents(year, month, d);
    daysEl.appendChild(div);
  }

  renderUpcomingEvents();
}

function showDayEvents(year, month, day) {
  const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const events = CALENDAR_EVENTS.filter((e) => e.date === dateStr);
  if (events.length === 0) return;
  showToast(`📅 ${events.map((e) => e.title).join(" | ")}`, "info", 5000);
}

function renderUpcomingEvents() {
  const container = $("#upcoming-events");
  if (!container) return;

  const now = new Date();
  const upcoming = CALENDAR_EVENTS.filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 6);

  const typeColors = {
    academic: "var(--purple)",
    exam: "var(--red)",
    deadline: "var(--orange)",
    holiday: "var(--green)",
    event: "var(--gold)",
  };

  container.innerHTML = upcoming
    .map((e) => {
      const d = new Date(e.date);
      const day = d.getDate();
      const monthAbbr = d
        .toLocaleString("default", { month: "short" })
        .toUpperCase();
      return `
      <div class="timeline-item">
        <div class="timeline-dot" style="background:${typeColors[e.type] || "var(--purple)"}"></div>
        <div class="timeline-content">
          <div class="timeline-event">${e.title}</div>
          <div class="timeline-date">${day} ${monthAbbr} ${d.getFullYear()} • <span class="badge badge-purple" style="font-size:0.65rem;padding:0.1rem 0.5rem">${e.type}</span></div>
        </div>
      </div>
    `;
    })
    .join("");
}

function calNav(dir) {
  state.calendarDate = new Date(
    state.calendarDate.getFullYear(),
    state.calendarDate.getMonth() + dir,
    1,
  );
  renderCalendar();
}

// ===== NOTIFICATIONS =====
function renderNotifications(filter = "all") {
  const container = $("#notif-list");
  if (!container) return;

  const typeIcons = {
    exam: "var(--red-light)",
    fees: "var(--orange-light)",
    academic: "var(--lavender-light)",
    general: "var(--blue-light)",
  };
  const iconColors = {
    exam: "var(--red)",
    fees: "var(--orange)",
    academic: "var(--purple)",
    general: "var(--blue)",
  };

  let notifs = NOTIFICATIONS_DATA;
  if (filter !== "all") notifs = notifs.filter((n) => n.type === filter);

  container.innerHTML = notifs
    .map(
      (n) => `
    <div class="notif-item ${n.unread ? "unread" : ""}">
      <div class="notif-icon" style="background:${typeIcons[n.type] || "var(--lavender-light)"}; color:${iconColors[n.type] || "var(--purple)"}">
        ${n.icon}
      </div>
      <div class="notif-content">
        <div class="notif-title">${n.title}</div>
        <div class="notif-body">${n.body}</div>
        <div class="notif-time">🕐 ${n.time}</div>
      </div>
      ${n.unread ? '<div style="width:8px;height:8px;border-radius:50%;background:var(--purple);flex-shrink:0;margin-top:4px"></div>' : ""}
    </div>
  `,
    )
    .join("");

  // Update count badge
  const unreadCount = NOTIFICATIONS_DATA.filter((n) => n.unread).length;
  $$(".notif-count").forEach((el) => (el.textContent = unreadCount));
}

function filterNotifications(type, btn) {
  $$(".notif-filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderNotifications(type);
}

function markAllRead() {
  NOTIFICATIONS_DATA.forEach((n) => (n.unread = false));
  renderNotifications();
  showToast("All notifications marked as read.", "success");
}

// ===== PROFILE =====
function populateProfile(user) {
  const fields = {
    "prof-name": user.name,
    "prof-dept": user.department,
    "prof-mat": user.matric,
    "prof-level": `${user.level} Level`,
    "prof-faculty": user.faculty,
    "prof-session": user.session,
    "prof-email": user.email,
    "prof-phone": user.phone,
    "prof-dob": user.dob,
    "prof-gender": user.gender,
    "prof-state": user.state,
    "prof-lga": user.lga,
    "prof-nationality": user.nationality,
    "prof-blood": user.blood,
    "prof-address": user.address,
    "prof-hostel": user.hostel,
    "prof-guardian": user.guardian,
    "prof-guardian-phone": user.guardianPhone,
    "prof-guardian-rel": user.guardianRelation,
    "prof-status": user.status,
    "prof-joined": user.joined,
    "prof-initials": user.initials,
    "prof-cgpa": user.cgpa,
  };

  Object.entries(fields).forEach(([id, val]) => {
    const el = $(`#${id}`);
    if (el) el.textContent = val;
  });
}

function openEditProfileModal() {
  const user = state.currentUser;
  if (!user) return;
  const emailEl = $("#edit-email");
  const phoneEl = $("#edit-phone");
  const addressEl = $("#edit-address");
  if (emailEl) emailEl.value = user.email;
  if (phoneEl) phoneEl.value = user.phone;
  if (addressEl) addressEl.value = user.address;
  openModal("edit-profile-modal");
}

function saveProfile() {
  const email = $("#edit-email")?.value;
  const phone = $("#edit-phone")?.value;
  const address = $("#edit-address")?.value;

  if (state.currentUser) {
    state.currentUser.email = email;
    state.currentUser.phone = phone;
    state.currentUser.address = address;
    populateProfile(state.currentUser);
  }

  closeModal("edit-profile-modal");
  showToast("Profile updated successfully!", "success");
}

function handlePhotoUpload() {
  const input = create("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const photo = $("#profile-photo");
      if (photo) {
        photo.style.backgroundImage = `url(${evt.target.result})`;
        photo.style.backgroundSize = "cover";
        photo.style.backgroundPosition = "center";
        const initials = photo.querySelector(".initials");
        if (initials) initials.style.display = "none";
      }
      showToast(
        "Profile photo updated! (Preview only — not saved in demo)",
        "success",
      );
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// ===== SEARCH =====
function handleSearch(query) {
  if (!query.trim()) return;
  showToast(`Searching for "${query}"…`, "info");
}

// ===== PRINT =====
function printResult() {
  showToast("Opening print preview…", "info");
  setTimeout(() => window.print(), 500);
}

function downloadResult() {
  showToast("Generating PDF… (Demo mode)", "info");
  setTimeout(
    () => showToast("Result PDF downloaded successfully!", "success"),
    2000,
  );
}

function printRegistration() {
  showToast("Generating registration slip…", "info");
  setTimeout(
    () => showToast("Registration slip printed! (Demo mode)", "success"),
    1500,
  );
}

// ===== INIT =====
function init() {
  initTheme();

  // Check saved session
  const savedUser = localStorage.getItem("futminna-user");
  if (savedUser && MOCK_STUDENTS[savedUser]) {
    state.currentUser = MOCK_STUDENTS[savedUser];
    loadUserIntoApp(state.currentUser);
    showApp();
  }

  // Sidebar collapse preference
  const savedSidebar = localStorage.getItem("futminna-sidebar");
  if (savedSidebar === "1") {
    state.sidebarCollapsed = true;
    const sidebar = $("#app-sidebar");
    const main = $("#main-content");
    if (sidebar) sidebar.classList.add("collapsed");
    if (main) main.classList.add("sidebar-collapsed");
  }

  // Login form
  const loginForm = $("#login-form");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  // Sidebar navigation
  $$(".nav-item[data-page]").forEach((item) => {
    item.addEventListener("click", () => {
      showPage(item.dataset.page);
      // Close mobile sidebar on nav
      if (window.innerWidth < 900) {
        const sidebar = $("#app-sidebar");
        const overlay = $("#mobile-overlay");
        if (sidebar) sidebar.classList.remove("mobile-open");
        if (overlay) overlay.classList.remove("active");
      }
    });
  });

  // Search
  const searchInput = $("#top-search");
  if (searchInput) {
    let searchTimer;
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSearch(searchInput.value);
    });
  }

  // Password toggle
  $$(".toggle-password").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      if (!input) return;
      const isText = input.type === "text";
      input.type = isText ? "password" : "text";
      btn.textContent = isText ? "👁️" : "🙈";
    });
  });

  // Animate landing stats on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll("[data-count]");
          counters.forEach((el) => {
            const target = parseFloat(el.dataset.count);
            const isDecimal = el.dataset.count.includes(".");
            const duration = 2000;
            const start = performance.now();
            function tick(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = isDecimal
                ? (eased * target).toFixed(1)
                : Math.floor(eased * target).toLocaleString();
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  const statsSection = $(".stats-section");
  if (statsSection) observer.observe(statsSection);

  // Landing nav scroll effect
  const landingNav = $(".landing-nav");
  if (landingNav) {
    window.addEventListener(
      "scroll",
      () => {
        landingNav.classList.toggle("scrolled", window.scrollY > 50);
      },
      { passive: true },
    );
  }

  // Initialize page-specific content
  setTimeout(() => {
    if ($("#page-courses")) initCourseRegistration();
    if ($("#page-fees")) initFees();
  }, 0);

  // Mobile overlay
  const mobileOverlay = $("#mobile-overlay");
  if (mobileOverlay)
    mobileOverlay.addEventListener("click", toggleMobileSidebar);

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      $$(".modal-overlay.active").forEach((m) => m.classList.remove("active"));
      document.body.style.overflow = "";
    }
  });

  console.log("🎓 FUT Minna Student Portal v1.0 initialized");
  console.log(
    "📝 Demo credentials:\n  Matric: FUT/MN/2021/CS/001234\n  Password: student123",
  );
}

document.addEventListener("DOMContentLoaded", init);
